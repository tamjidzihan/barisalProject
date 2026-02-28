import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaUser, FaLock, FaArrowRight } from 'react-icons/fa';

const Login: React.FC = () => {
    const { login } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);
        setError(null);

        try {
            await login({ username, password });
            navigate('/');
        } catch (err) {
            setError(err as string);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center px-6 py-12">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-8 md:p-12 rounded-3xl shadow-xl w-full max-w-md border border-gray-100"
            >
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Welcome Back</h2>
                    <p className="text-gray-500">Login to access your personalized E-Service dashboard</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label htmlFor="username" className="text-sm font-bold text-gray-700 ml-1">Username</label>
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#03ab9c] transition-colors">
                                <FaUser />
                            </div>
                            <input
                                id="username"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Enter your username"
                                className="block w-full pl-11 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#03ab9c] focus:border-transparent focus:bg-white outline-none transition-all"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="password" className="text-sm font-bold text-gray-700 ml-1">Password</label>
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#03ab9c] transition-colors">
                                <FaLock />
                            </div>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                className="block w-full pl-11 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#03ab9c] focus:border-transparent focus:bg-white outline-none transition-all"
                                required
                            />
                        </div>
                    </div>

                    {error && (
                        <motion.p 
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-red-500 text-sm font-medium bg-red-50 p-3 rounded-lg border border-red-100"
                        >
                            {error}
                        </motion.p>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#8a173f] text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:bg-[#a01c4a] transition-all transform active:scale-[0.98] disabled:opacity-70 flex items-center justify-center gap-2"
                    >
                        {loading ? 'Logging in...' : (
                            <>Login <FaArrowRight className="text-sm" /></>
                        )}
                    </button>
                    
                    <div className="text-center pt-4">
                        <p className="text-gray-600">
                            Don't have an account? {' '}
                            <Link to="/registration" className="text-[#03ab9c] font-bold hover:underline">
                                Register Now
                            </Link>
                        </p>
                    </div>
                </form>
            </motion.div>
        </div>
    );
};

export default Login;
