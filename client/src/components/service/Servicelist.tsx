import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Service } from '../../Hooks/useService';
import { FaBuilding, FaThLarge, FaListUl, FaArrowRight, FaSearch, FaTimes } from "react-icons/fa";

interface ServiceUse extends Service {
    mainServiceID: string;
    mainServiceSlug: string | undefined;
}

interface ServiceListProps {
    services: ServiceUse[];
    viewMode: 'list' | 'grid';
    onViewModeChange: (mode: 'list' | 'grid') => void;
    searchTerm: string;
    onSearchChange: (value: string) => void;
}

const Servicelist = ({ services, viewMode, onViewModeChange, searchTerm, onSearchChange }: ServiceListProps) => {
    const [visibleCount, setVisibleCount] = useState(6);
    const visibleServices = services.slice(0, visibleCount);

    return (
        <div className="space-y-8">
            {/* Control Bar */}
            <div className="flex flex-col lg:flex-row justify-between items-center bg-white p-4 rounded-3xl shadow-sm border border-gray-100 gap-6">
                <div className="flex items-center gap-4">
                    <p className="text-gray-500 font-medium whitespace-nowrap">
                        Results: <span className="text-[#8a173f] font-bold">{services.length}</span>
                    </p>
                </div>

                {/* Search Input in Control Bar */}
                <div className="relative flex-grow max-w-xl w-full group">
                    <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#03ab9c] transition-colors" />
                    <input
                        type="text"
                        placeholder="Search services by name or location..."
                        value={searchTerm}
                        onChange={(e) => onSearchChange(e.target.value)}
                        className="w-full pl-11 pr-10 py-3 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:ring-2 focus:ring-[#03ab9c]/20 focus:border-[#03ab9c] outline-none transition-all text-sm font-medium"
                    />
                    {searchTerm && (
                        <button
                            onClick={() => onSearchChange('')}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500 transition-colors"
                        >
                            <FaTimes />
                        </button>
                    )}
                </div>

                <div className="flex items-center gap-2 bg-gray-50 p-1.5 rounded-2xl shrink-0">
                    <button
                        onClick={() => onViewModeChange('grid')}
                        className={`px-5 py-2.5 rounded-xl flex items-center gap-2 transition-all text-sm ${
                            viewMode === 'grid'
                            ? 'bg-white text-[#8a173f] shadow-md font-bold'
                            : 'text-gray-500 hover:text-gray-700'
                        }`}
                    >
                        <FaThLarge /> Grid
                    </button>
                    <button
                        onClick={() => onViewModeChange('list')}
                        className={`px-5 py-2.5 rounded-xl flex items-center gap-2 transition-all text-sm ${
                            viewMode === 'list'
                            ? 'bg-white text-[#8a173f] shadow-md font-bold'
                            : 'text-gray-500 hover:text-gray-700'
                        }`}
                    >
                        <FaListUl /> List
                    </button>
                </div>
            </div>

            {/* Services Display */}
            <div className={
                viewMode === 'grid'
                    ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    : "flex flex-col gap-4"
            }>
                <AnimatePresence mode='popLayout'>
                    {visibleServices.length > 0 ? (
                        visibleServices.map((service) => (
                            <ServiceItem
                                key={service._id}
                                service={service}
                                viewMode={viewMode}
                            />
                        ))
                    ) : (
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="col-span-full py-20 text-center bg-white rounded-3xl border border-dashed border-gray-200"
                        >
                            <div className="text-5xl text-gray-200 mb-4 flex justify-center">
                                <FaSearch />
                            </div>
                            <h3 className="text-xl font-bold text-gray-400">No services found matching your search</h3>
                            <button 
                                onClick={() => onSearchChange('')}
                                className="mt-4 text-[#03ab9c] font-bold hover:underline"
                            >
                                Clear search and see all
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* View More Button */}
            {visibleCount < services.length && (
                <div className="flex justify-center pt-8">
                    <button
                        onClick={() => setVisibleCount(prev => prev + 6)}
                        className="px-10 py-4 bg-white border-2 border-[#8a173f] text-[#8a173f] font-bold rounded-2xl hover:bg-[#8a173f] hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-md flex items-center gap-2"
                    >
                        View More Services <FaArrowRight />
                    </button>
                </div>
            )}
        </div>
    );
};

interface ServiceItemProps {
    service: ServiceUse;
    viewMode: 'list' | 'grid';
}

const ServiceItem = ({ service, viewMode }: ServiceItemProps) => {
    const { _id, mainServiceID, mainServiceSlug, name, type, image, address } = service;

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, scale: 0.95 }
    };

    if (viewMode === 'grid') {
        return (
            <motion.div
                layout
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover={{ y: -10 }}
                className="group h-full"
            >
                <Link
                    to={`/service/${mainServiceSlug}/${mainServiceID}/${_id}`}
                    className="flex flex-col h-full bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group-hover:border-[#03ab9c]/20"
                >
                    <div className="relative h-48 bg-gray-100 overflow-hidden">
                        {image ? (
                            <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-[#03ab9c]/5 text-[#03ab9c]">
                                <FaBuilding className="text-5xl" />
                            </div>
                        )}
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#8a173f] shadow-sm uppercase tracking-wider">
                            {type}
                        </div>
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#03ab9c] transition-colors line-clamp-1">{name}</h3>
                        <p className="text-gray-500 text-sm line-clamp-2 mb-4 flex-grow">{address || 'Location information available.'}</p>
                        <div className="flex items-center text-[#8a173f] font-bold text-sm">
                            Learn More <FaArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                        </div>
                    </div>
                </Link>
            </motion.div>
        );
    }

    return (
        <motion.div
            layout
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            whileHover={{ x: 10 }}
        >
            <Link
                to={`/service/${mainServiceSlug}/${mainServiceID}/${_id}`}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100 p-4 flex flex-col md:flex-row items-center gap-6 group"
            >
                <div className="w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden bg-gray-50">
                    {image ? (
                        <img src={image} alt={name} className="w-full h-full object-cover" />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-[#03ab9c]">
                            <FaBuilding className="text-3xl" />
                        </div>
                    )}
                </div>

                <div className="flex-grow text-center md:text-left">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 mb-1">
                        <h3 className="text-lg font-bold text-gray-800 group-hover:text-[#03ab9c] transition-colors">{name}</h3>
                        <span className="text-[10px] font-bold text-[#8a173f] bg-[#8a173f]/5 px-2 py-0.5 rounded-full uppercase tracking-tighter self-center">
                            {type}
                        </span>
                    </div>
                    <p className="text-gray-500 text-sm">{address || 'No address provided.'}</p>
                </div>

                <div className="flex-shrink-0 text-[#03ab9c] opacity-0 group-hover:opacity-100 transition-opacity pr-4">
                    <FaArrowRight className="text-xl" />
                </div>
            </Link>
        </motion.div>
    );
};

export default Servicelist;