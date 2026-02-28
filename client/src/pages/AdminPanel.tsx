import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUserShield, FaUsers, FaArrowRight, FaFilter } from 'react-icons/fa';
import LoadingSpinner from '../components/Home/LoadingSpinner';

const AdminPanel: React.FC = () => {
    const { getAllUsers, updateRole, account } = useAuth();
    const [users, setUsers] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const data = await getAllUsers();
                setUsers(data);
            } catch (err) {
                setError(err as string);
            } finally {
                setLoading(false);
            }
        };
        fetchUsers();
    }, [getAllUsers]);

    const handleRoleChange = async (userId: string, newRole: string) => {
        try {
            await updateRole(userId, newRole);
            setUsers(users.map(u => u._id === userId ? { ...u, role: newRole } : u));
        } catch (err) {
            alert(err as string);
        }
    };

    const filteredUsers = users.filter(u => 
        u.username.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) return <LoadingSpinner />;
    if (account?.role !== 'admin') return <div className="py-20 text-center text-red-500 font-bold">Unauthorized access</div>;

    return (
        <main className="min-h-screen bg-gray-50 py-20">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
                    <div className="flex items-center gap-4">
                        <div className="p-4 bg-[#8a173f] text-white rounded-2xl shadow-lg">
                            <FaUserShield className="text-3xl" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-extrabold text-gray-900 leading-tight">Admin Dashboard</h1>
                            <p className="text-gray-500 font-medium">Manage user accounts and permissions</p>
                        </div>
                    </div>
                    
                    <div className="relative w-full md:w-80">
                        <FaUsers className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search users..."
                            className="w-full pl-11 pr-4 py-3 bg-white border border-gray-100 rounded-2xl shadow-sm focus:ring-2 focus:ring-[#03ab9c] outline-none transition-all"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                {error && <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-xl border border-red-100 font-bold text-center">{error}</div>}

                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-gray-50 text-left">
                                    <th className="px-8 py-5 text-sm font-bold text-gray-400 uppercase tracking-wider">Username</th>
                                    <th className="px-8 py-5 text-sm font-bold text-gray-400 uppercase tracking-wider">Current Role</th>
                                    <th className="px-8 py-5 text-sm font-bold text-gray-400 uppercase tracking-wider text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                <AnimatePresence mode='popLayout'>
                                    {filteredUsers.map((user) => (
                                        <motion.tr 
                                            key={user._id}
                                            layout
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="hover:bg-gray-50 transition-colors"
                                        >
                                            <td className="px-8 py-6">
                                                <div className="flex items-center gap-3 font-bold text-gray-800">
                                                    <div className="w-10 h-10 bg-[#03ab9c]/10 text-[#03ab9c] rounded-full flex items-center justify-center">
                                                        {user.username.charAt(0).toUpperCase()}
                                                    </div>
                                                    {user.username}
                                                </div>
                                            </td>
                                            <td className="px-8 py-6">
                                                <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest ${
                                                    user.role === 'admin' ? 'bg-[#8a173f]/10 text-[#8a173f]' : 'bg-[#03ab9c]/10 text-[#03ab9c]'
                                                }`}>
                                                    {user.role}
                                                </span>
                                            </td>
                                            <td className="px-8 py-6 text-right">
                                                <div className="flex justify-end gap-3">
                                                    <button
                                                        onClick={() => handleRoleChange(user._id, user.role === 'admin' ? 'user' : 'admin')}
                                                        className={`px-6 py-2 rounded-xl text-sm font-bold transition-all transform active:scale-95 ${
                                                            user.role === 'admin' 
                                                            ? 'bg-gray-100 text-gray-600 hover:bg-gray-200' 
                                                            : 'bg-[#8a173f] text-white hover:bg-[#a01c4a] shadow-md'
                                                        }`}
                                                    >
                                                        {user.role === 'admin' ? 'Demote to User' : 'Promote to Admin'}
                                                    </button>
                                                </div>
                                            </td>
                                        </motion.tr>
                                    ))}
                                </AnimatePresence>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AdminPanel;
