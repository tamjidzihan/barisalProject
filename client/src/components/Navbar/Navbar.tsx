import { useEffect, useRef, useState } from "react";
import { FaUser, FaXmark, FaGears, FaBookmark } from "react-icons/fa6";
import { FaBars, FaHome, FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/image.png";

interface User {
    name: string;
}

const Navbar = () => {
    const user = false;
    const [click, setClick] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleNav = () => {
        setClick(!click);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setDropdownOpen(false);
        }
    };

    useEffect(() => {
        if (dropdownOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownOpen]);

    return (
        <nav className="bg-[#8a173f] ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Link to='/' className="flex justify-center items-center gap-2">
                                <img className="w-20" src={logo} alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center space-x-4 font-semibold">
                            <Link to="/" className="text-white  hover:bg-white/70 hover:text-black rounded-lg p-2 flex justify-center items-center gap-1"><FaHome />Home</Link>
                            <Link to="#" className="text-white hover:bg-white/70 hover:text-black rounded-lg p-2 flex justify-center items-center gap-1"><FaBookmark />Favorites</Link>

                            <div className="relative" ref={dropdownRef}>
                                <button onClick={toggleDropdown} className="text-white hover:bg-white/70 hover:text-black rounded-lg p-2 flex justify-center items-center gap-1">
                                    <FaGears />Services
                                </button>
                                {dropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                                        <Link to="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-300">Education</Link>
                                        <Link to="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-300">Jobs</Link>
                                        <Link to="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-300">Travel and Tourism</Link>
                                        <Link to="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-300">Entertainment</Link>
                                        <Link to="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-300">Health</Link>
                                    </div>
                                )}
                            </div>


                            {user ? <p className="text-white p-2 flex justify-center items-center gap-1"><FaUser />{user}</p>
                                :
                                <Link to="/login" className="text-white hover:bg-white hover:text-black rounded-lg p-2 flex justify-center items-center gap-1"><FaSignInAlt />Login</Link>
                            }
                        </div>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button className="text-white inline-flex justify-center items-center p-2 rounded-md  hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white text-xl" onClick={toggleNav}>
                            {click ? <FaXmark />
                                :
                                <FaBars />}
                        </button>
                    </div>
                </div>
            </div>
            {click && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 font-semibold">
                        <Link to="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2 flex justify-start items-center gap-1"><FaHome />Home</Link>
                        <Link to="#" className="text-white hover:bg-white hover:text-black rounded-lg p-2 flex justify-start items-center gap-1"><FaBookmark />Favorites</Link>

                        <div className="relative" ref={dropdownRef}>
                            <button onClick={toggleDropdown} className="text-white hover:bg-white hover:text-black rounded-lg p-2 flex justify-start items-center gap-1">
                                <FaGears />Services
                            </button>
                            {dropdownOpen && (
                                <div className="mt-2 bg-white rounded-md shadow-lg py-1">
                                    <Link to="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Education</Link>
                                    <Link to="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Jobs</Link>
                                    <Link to="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-300">Travel and Tourism</Link>
                                    <Link to="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Entertainment</Link>
                                    <Link to="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Health</Link>
                                </div>
                            )}
                        </div>

                        {user ? <p className="text-white flex p-2 justify-start items-center gap-1"><FaUser />{user}</p>
                            :
                            <Link to="/login" className="text-white hover:bg-white hover:text-black rounded-lg p-2 flex justify-start items-center gap-1"><FaSignInAlt />Login</Link>
                        }
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
