import React, { useState } from 'react';
import { FaBars, FaHome, FaInfoCircle, FaGripHorizontal } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/image.png';
import ServicesMenu from './ServicesMenu';
import UserStatus from './UserStatusMenu';
import { useAuth } from '../../context/AuthContext';

const Navbar: React.FC = () => {
    const [click, setClick] = useState(false);
    const { logout, isLoggedIn, account } = useAuth();
    const location = useLocation();

    const toggleNav = () => setClick(!click);

    const isActive = (path: string) => location.pathname === path;

    const linkClass = (path: string) =>
        `flex items-center gap-2 px-4 py-2 rounded-xl transition-all font-medium ${isActive(path)
            ? 'bg-white/20 text-white shadow-sm'
            : 'text-white/80 hover:bg-white/10 hover:text-white'
        }`;

    return (
        <nav className="bg-[#8a173f] sticky top-0 z-50 shadow-lg backdrop-blur-md bg-opacity-95">
            <div className=" container mx-auto px-6  sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center gap-3 group">
                            <div className="bg-white/10 p-1 rounded-lg group-hover:bg-white/20 transition-colors">
                                <img className="w-12 md:w-20 h-auto" src={logo} alt="Logo" />
                            </div>
                            <span className="text-white font-bold text-xl hidden sm:block tracking-tight">
                                E-Service <span className="text-[#03ab9c]">Barishal</span>
                            </span>
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-2">
                        <Link to="/" className={linkClass('/')}>
                            <FaHome className="text-lg" /> Home
                        </Link>
                        <Link to="/about" className={linkClass('/about')}>
                            <FaInfoCircle className="text-lg" /> About
                        </Link>
                        <div className="h-6 w-px bg-white/20 mx-2" />
                        <ServicesMenu />
                        <UserStatus logout={logout} account={account} isLoggedIn={isLoggedIn} />
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            className="p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-all text-2xl"
                            onClick={toggleNav}
                        >
                            {click ? <FaXmark /> : <FaBars />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {click && (
                <div className="md:hidden bg-[#8a173f] border-t border-white/10 animate-in slide-in-from-top duration-300">
                    <div className="px-4 pt-4 pb-6 space-y-2">
                        <Link to="/" onClick={toggleNav} className={linkClass('/')}>
                            <FaHome /> Home
                        </Link>
                        <Link to="/about" onClick={toggleNav} className={linkClass('/about')}>
                            <FaInfoCircle /> About
                        </Link>
                        <div className="my-4 h-px bg-white/10" />
                        <ServicesMenu />
                        <UserStatus logout={logout} account={account} isLoggedIn={isLoggedIn} />
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
