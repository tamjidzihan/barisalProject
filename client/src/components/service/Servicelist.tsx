import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Service } from '../../Hooks/useService';
import { FaFileCircleCheck, FaList } from "react-icons/fa6";
import { FaTh } from 'react-icons/fa';

interface ServiceUse extends Service {
    mainServiceID: string;
    mainServiceSlug: string | undefined;
}

interface ServiceListProps {
    services: ServiceUse[];
    viewMode: 'list' | 'grid';
    onViewModeChange: (mode: 'list' | 'grid') => void;
}

const Servicelist = ({ services, viewMode, onViewModeChange }: ServiceListProps) => {
    return (
        <div className="flex flex-col gap-6">
            {/* View Mode Toggle */}
            <div className="flex justify-end items-center gap-2 mb-4">
                <span className="text-sm text-gray-600 mr-2">View:</span>
                <button
                    onClick={() => onViewModeChange('list')}
                    className={`p-2 rounded-lg transition-colors ${viewMode === 'list'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                        }`}
                    aria-label="List view"
                >
                    <FaList className="w-5 h-5" />
                </button>
                <button
                    onClick={() => onViewModeChange('grid')}
                    className={`p-2 rounded-lg transition-colors ${viewMode === 'grid'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                        }`}
                    aria-label="Grid view"
                >
                    <FaTh className="w-5 h-5" />
                </button>
            </div>

            {/* Services Container */}
            <div className={
                viewMode === 'grid'
                    ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    : "flex flex-col gap-4"
            }>
                {services.map((service) => (
                    <ServiceItem
                        key={service._id}
                        service={service}
                        viewMode={viewMode}
                    />
                ))}
            </div>
        </div>
    );
};

// Separate component for individual service items
interface ServiceItemProps {
    service: ServiceUse;
    viewMode: 'list' | 'grid';
}

const ServiceItem = ({ service, viewMode }: ServiceItemProps) => {
    const { _id, mainServiceID, mainServiceSlug, name, type, image } = service;

    if (viewMode === 'grid') {
        return (
            <motion.div
                whileHover={{ scale: 1.05, boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)' }}
                transition={{ duration: 0.3 }}
                className="flex flex-col"
            >
                <Link
                    to={`/service/${mainServiceSlug}/${mainServiceID}/${_id}`}
                    className="bg-gradient-to-r from-[#9be2dc] to-[#f1d7e0] rounded-lg h-full flex flex-col shadow p-6 gap-4 transform border-s-[1rem] border-[#0b635b] hover:no-underline"
                >
                    {/* Icon or Image */}
                    <div className="flex justify-center mb-2">
                        {image ? (
                            <img src={image} alt={name} className="w-20 h-20 object-cover rounded-full" />
                        ) : (
                            <FaFileCircleCheck className="w-20 h-20 text-indigo-500" />
                        )}
                    </div>

                    {/* Content */}
                    <div className="flex flex-col items-center text-center flex-grow">
                        <p className="text-red-800 text-xl font-semibold mb-2">{name}</p>
                        <p className="text-sm text-blue-600 font-light">{type}</p>
                    </div>
                </Link>
            </motion.div>
        );
    }

    // List View (original layout)
    return (
        <motion.div
            whileHover={{ scale: 1.02, boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)' }}
            transition={{ duration: 0.3 }}
            className="flex"
        >
            <Link
                to={`/service/${mainServiceSlug}/${mainServiceID}/${_id}`}
                className="bg-gradient-to-r from-[#9be2dc] to-[#f1d7e0] rounded-lg w-full grid grid-cols-12 shadow p-4 gap-3 items-center transform border-s-[1rem] border-[#0b635b] hover:no-underline"
            >
                {/* Icon or Image */}
                <div className="col-span-12 md:col-span-1 flex justify-start">
                    {image ? (
                        <img src={image} alt={name} className="w-16 h-16 object-cover rounded-full" />
                    ) : (
                        <FaFileCircleCheck className="w-16 h-16 text-indigo-500" />
                    )}
                </div>

                {/* Title */}
                <div className="col-span-12 md:col-span-10 xl:ml-5 flex flex-col">
                    <p className="text-red-800 text-xl font-semibold">{name}</p>
                    <p className="text-sm text-blue-600 font-light">{type}</p>
                </div>
            </Link>
        </motion.div>
    );
};

export default Servicelist;