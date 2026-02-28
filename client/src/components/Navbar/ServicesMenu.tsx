import React, { useEffect, useRef, useState } from 'react'
import { FaGears, FaChevronDown } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import useService from '../../Hooks/useAllService';

const ServicesMenu = () => {
    const [dropdownOpenServices, setDropdownOpenServices] = useState(false);
    const dropdownRefServices = useRef<HTMLDivElement>(null);
    const { service: services, isLoading } = useService();

    const toggleDropdownServices = () => {
        setDropdownOpenServices(!dropdownOpenServices);
    };

    const handleClickOutsideServices = (event: MouseEvent) => {
        if (dropdownRefServices.current && !dropdownRefServices.current.contains(event.target as Node)) {
            setDropdownOpenServices(false);
        }
    };

    useEffect(() => {
        if (dropdownOpenServices) {
            document.addEventListener("mousedown", handleClickOutsideServices);
        } else {
            document.removeEventListener("mousedown", handleClickOutsideServices);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutsideServices);
        };
    }, [dropdownOpenServices]);

    return (
        <div className="relative" ref={dropdownRefServices}>
            <button 
                onClick={toggleDropdownServices} 
                className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all font-medium ${
                    dropdownOpenServices 
                    ? 'bg-white text-[#8a173f] shadow-sm' 
                    : 'text-white/80 hover:bg-white/10 hover:text-white'
                }`}
            >
                <FaGears className="text-lg" />
                <span>Services</span>
                <FaChevronDown className={`text-xs transition-transform duration-300 ${dropdownOpenServices ? 'rotate-180' : ''}`} />
            </button>
            
            {dropdownOpenServices && (
                <div className="absolute right-0 mt-3 w-64 bg-white rounded-2xl shadow-2xl py-3 z-[100] border border-gray-100 animate-in fade-in zoom-in duration-200">
                    <div className="px-4 py-2 mb-2 border-b border-gray-50">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Available Categories</p>
                    </div>
                    {isLoading ? (
                        <div className="px-4 py-2 text-sm text-gray-500 italic">Loading services...</div>
                    ) : (
                        <div className="max-h-[60vh] overflow-y-auto">
                            {services.map((s) => (
                                <Link 
                                    key={s._id}
                                    to={`/service/${s.slug}`} 
                                    onClick={() => setDropdownOpenServices(false)}
                                    className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-[#03ab9c]/5 hover:text-[#03ab9c] transition-colors group"
                                >
                                    <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center group-hover:bg-white transition-colors">
                                        <img src={s.image} alt="" className="w-5 h-5 object-contain" />
                                    </div>
                                    <span className="font-medium">{s.name}</span>
                                </Link>
                            ))}
                        </div>
                    )}
                    
                    <div className="mt-2 pt-2 border-t border-gray-50 px-2">
                        <Link 
                            to="/services" 
                            onClick={() => setDropdownOpenServices(false)}
                            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gray-50 text-[#8a173f] font-bold text-sm hover:bg-[#8a173f] hover:text-white transition-all group"
                        >
                            View All Services <FaChevronDown className="-rotate-90 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ServicesMenu;
