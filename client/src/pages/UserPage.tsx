import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaUser, FaLock, FaSave, FaHome, FaChevronRight } from 'react-icons/fa';

const UserPage: React.FC = () => {
    const { account, updateUser } = useAuth();
    const [username, setUsername] = useState(account?.username || '');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);

        try {
            await updateUser({ username, password });
            setMessage({ type: 'success', text: 'Profile updated successfully!' });
            setPassword('');
        } catch (err) {
            setMessage({ type: 'error', text: err as string });
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-gray-50 py-20">
            <div className="container mx-auto px-6 max-w-2xl">
                {/* Breadcrumb */}
                <nav className="flex items-center space-x-2 text-gray-400 text-sm mb-8">
                    <Link to="/" className="flex items-center hover:text-[#8a173f] transition-colors">
                        <FaHome className="mr-1" />
                        Home
                    </Link>
                    <FaChevronRight className="text-[10px]" />
                    <span className="text-gray-600 font-medium">Profile</span>
                </nav>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-3xl shadow-xl overflow-hidden"
                >
                    <div className="bg-[#8a173f] p-8 text-white">
                        <h1 className="text-3xl font-bold mb-2">My Profile</h1>
                        <p className="opacity-80 text-lg">Manage your account information</p>
                    </div>

                    <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-8">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 ml-1">Username</label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#03ab9c]">
                                    <FaUser />
                                </div>
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="block w-full pl-11 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#03ab9c] focus:border-transparent focus:bg-white outline-none transition-all"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-700 ml-1">New Password (leave blank to keep current)</label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#03ab9c]">
                                    <FaLock />
                                </div>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="block w-full pl-11 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#03ab9c] focus:border-transparent focus:bg-white outline-none transition-all"
                                />
                            </div>
                        </div>

                        {message && (
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className={`p-4 rounded-xl text-sm font-bold ${
                                    message.type === 'success' ? 'bg-green-50 text-green-600 border border-green-100' : 'bg-red-50 text-red-600 border border-red-100'
                                }`}
                            >
                                {message.text}
                            </motion.div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-[#03ab9c] text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:bg-[#028e82] transition-all transform active:scale-95 disabled:opacity-70 flex items-center justify-center gap-2"
                        >
                            {loading ? 'Saving...' : <><FaSave /> Update Profile</>}
                        </button>
                    </form>
                </motion.div>
            </div>
        </main>
    );
};

export default UserPage;
