import { useEffect, useRef, useState } from 'react';
import { FaSignInAlt, FaUser, FaUserShield, FaSignOutAlt, FaChevronDown } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { Account } from '../../context/AuthContext';


interface UserStatusProps {
    logout: () => void
    isLoggedIn: boolean
    account: Account | null
}


const UserStatus = ({ logout, isLoggedIn, account }: UserStatusProps) => {
    const [dropdownOpenUser, setDropdownOpenUser] = useState(false);
    const dropdownRefUser = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    const handleClickOutsideUser = (event: MouseEvent) => {
        if (dropdownRefUser.current && !dropdownRefUser.current.contains(event.target as Node)) {
            setDropdownOpenUser(false);
        }
    };

    const toggleDropdownUser = () => {
        setDropdownOpenUser(!dropdownOpenUser);
    };

    const handleLogout = () => {
        logout();
        setDropdownOpenUser(false);
        navigate('/login');
    };

    useEffect(() => {
        if (dropdownOpenUser) {
            document.addEventListener("mousedown", handleClickOutsideUser);
        } else {
            document.removeEventListener("mousedown", handleClickOutsideUser);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutsideUser);
        };
    }, [dropdownOpenUser]);

    return (
        <>
            {isLoggedIn ? (
                <div className="relative" ref={dropdownRefUser}>
                    <button 
                        onClick={toggleDropdownUser} 
                        className={`flex items-center gap-3 px-4 py-2 rounded-xl transition-all font-medium ${
                            dropdownOpenUser 
                            ? 'bg-white text-[#8a173f] shadow-sm' 
                            : 'text-white/80 hover:bg-white/10 hover:text-white'
                        }`}
                    >
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center border border-white/10">
                            <FaUser className="text-sm" />
                        </div>
                        <span className="max-w-[100px] truncate">{account?.username}</span>
                        <FaChevronDown className={`text-xs transition-transform duration-300 ${dropdownOpenUser ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {dropdownOpenUser && (
                        <div className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-2xl py-3 z-[100] border border-gray-100 animate-in fade-in zoom-in duration-200">
                            <div className="px-6 py-3 border-b border-gray-50 mb-2">
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Account</p>
                                <p className="text-sm font-bold text-gray-800 truncate">{account?.username}</p>
                            </div>
                            
                            <Link 
                                to="/profile" 
                                onClick={() => setDropdownOpenUser(false)}
                                className="flex items-center gap-3 px-6 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
                            >
                                <FaUser className="text-[#03ab9c]" /> My Profile
                            </Link>
                            
                            {account?.role === "admin" && (
                                <Link 
                                    to="/admin" 
                                    onClick={() => setDropdownOpenUser(false)}
                                    className="flex items-center gap-3 px-6 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
                                >
                                    <FaUserShield className="text-[#8a173f]" /> Admin Panel
                                </Link>
                            )}
                            
                            <div className="border-t border-gray-50 mt-2 pt-2">
                                <button 
                                    onClick={handleLogout} 
                                    className="w-full flex items-center gap-3 px-6 py-3 text-red-500 hover:bg-red-50 transition-colors font-bold text-sm"
                                >
                                    <FaSignOutAlt /> Logout
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <Link to="/login" className="flex items-center gap-2 px-6 py-2.5 bg-[#03ab9c] text-white rounded-xl font-bold hover:bg-[#028e82] transition-all shadow-md transform active:scale-95">
                    <FaSignInAlt /> Login
                </Link>
            )}
        </>
    );
};

export default UserStatus;
