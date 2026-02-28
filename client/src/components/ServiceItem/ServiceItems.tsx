import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useServiceItems from '../../Hooks/useServiceItems';
import {
    FaGlobe, FaPhone, FaEnvelope, FaMapMarkerAlt,
    FaUsers, FaCalendarAlt, FaEdit, FaArrowLeft,
    FaRegClock, FaLayerGroup, FaBuilding, FaMap
} from "react-icons/fa";
import { MdDelete, MdInfoOutline } from "react-icons/md";
import { useAuth } from '../../context/AuthContext';
import UpdateServiceItem from './UpdateServiceItem';
import { Service } from '../../Hooks/useService';
import { motion } from 'framer-motion';
import LoadingSpinner from '../Home/LoadingSpinner';

const ServiceItems = () => {
    const { mainServiceSlug, mainServiceID, id } = useParams();
    const navigate = useNavigate();
    const { serviceItem, loading, error, updateServiceItem, deleteServiceItem } = useServiceItems(mainServiceSlug!, mainServiceID!, id!);
    const { account } = useAuth();
    const [isEditing, setIsEditing] = useState(false);

    if (loading) return <LoadingSpinner />;
    if (error) return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="text-center p-12 bg-white rounded-3xl shadow-xl border border-red-100">
                <MdInfoOutline className="text-6xl text-red-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Service Not Found</h2>
                <p className="text-gray-500 mb-6">{error}</p>
                <button onClick={() => navigate(-1)} className="px-8 py-3 bg-[#8a173f] text-white rounded-xl font-bold">Go Back</button>
            </div>
        </div>
    );

    const handleUpdate = (updatedItem: Service) => {
        updateServiceItem(updatedItem);
        setIsEditing(false);
    };

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this service?')) {
            deleteServiceItem();
            setTimeout(() => navigate(-1), 500);
        }
    };

    if (isEditing) {
        return (
            <UpdateServiceItem
                serviceItem={serviceItem!}
                onUpdate={handleUpdate}
                onCancel={() => setIsEditing(false)}
            />
        );
    }

    const detailItems = [
        { icon: <FaBuilding className="text-blue-500" />, label: "Branch", value: serviceItem?.branch },
        { icon: <FaMapMarkerAlt className="text-red-500" />, label: "Address", value: serviceItem?.address },
        { icon: <FaLayerGroup className="text-orange-500" />, label: "Campus", value: serviceItem?.campus },
        { icon: <FaUsers className="text-green-500" />, label: "Contact Person", value: serviceItem?.contact },
        { icon: <FaMap className="text-purple-500" />, label: "Destinations", value: serviceItem?.destinations },
        { icon: <FaCalendarAlt className="text-indigo-500" />, label: "Founded", value: serviceItem?.founded },
        { icon: <FaMapMarkerAlt className="text-pink-500" />, label: "Location", value: serviceItem?.location },
        { icon: <FaUsers className="text-teal-500" />, label: "Students Count", value: serviceItem?.students },
    ].filter(item => item.value);

    return (
        <main className="bg-gray-50 min-h-screen pb-24">
            {/* Header Section */}
            <header className="bg-white border-b border-gray-100 sticky top-20 z-30 py-4 shadow-sm">
                <div className="container mx-auto px-6 flex items-center justify-between">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 text-gray-600 font-bold hover:text-[#8a173f] transition-colors"
                    >
                        <FaArrowLeft /> Back to List
                    </button>
                    <div className="hidden md:flex items-center gap-4">
                        <span className="text-xs font-bold px-3 py-1 bg-gray-100 text-gray-500 rounded-full uppercase tracking-widest">{serviceItem?.type}</span>
                        {account?.role === 'admin' && (
                            <div className="flex gap-2">
                                <button onClick={() => setIsEditing(true)} className="p-2.5 bg-yellow-50 text-yellow-600 rounded-xl hover:bg-yellow-100 transition-colors"><FaEdit /></button>
                                <button onClick={handleDelete} className="p-2.5 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-colors"><MdDelete /></button>
                            </div>
                        )}
                    </div>
                </div>
            </header>

            <div className="container mx-auto px-6 mt-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Left: Content and Details */}
                    <div className="flex-grow space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100"
                        >
                            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                                {serviceItem?.name}
                            </h1>
                            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                                {serviceItem?.description || "Comprehensive service provider information available in Barishal region."}
                            </div>
                        </motion.div>

                        {/* Detailed Specs Grid */}
                        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {detailItems.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-xl">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{item.label}</p>
                                        <p className="text-lg font-bold text-gray-800">{item.value}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </section>
                    </div>

                    {/* Right: Media and Contact Card */}
                    <aside className="w-full lg:w-[400px] space-y-8 flex-shrink-0">
                        {serviceItem?.image && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white"
                            >
                                <img src={serviceItem.image} alt={serviceItem.name} className="w-full h-full object-cover aspect-square" />
                            </motion.div>
                        )}

                        {/* Contact Sticky Card */}
                        <div className="bg-[#8a173f] rounded-3xl p-8 text-white shadow-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                            <h3 className="text-2xl font-bold mb-8 relative z-10">Get in Touch</h3>

                            <div className="space-y-6 relative z-10">
                                {serviceItem?.phone && (
                                    <a href={`tel:${serviceItem.phone}`} className="flex items-center gap-4 group/item">
                                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover/item:bg-white group-hover/item:text-[#8a173f] transition-all">
                                            <FaPhone />
                                        </div>
                                        <div>
                                            <p className="text-xs text-white/50 font-bold uppercase tracking-tighter">Phone</p>
                                            <p className="font-bold">{serviceItem.phone}</p>
                                        </div>
                                    </a>
                                )}

                                {serviceItem?.email && (
                                    <a href={`mailto:${serviceItem.email}`} className="flex items-center gap-4 group/item">
                                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover/item:bg-white group-hover/item:text-[#8a173f] transition-all">
                                            <FaEnvelope />
                                        </div>
                                        <div>
                                            <p className="text-xs text-white/50 font-bold uppercase tracking-tighter">Email</p>
                                            <p className="font-bold truncate max-w-[200px]">{serviceItem.email}</p>
                                        </div>
                                    </a>
                                )}

                                {serviceItem?.website && (
                                    <a href={serviceItem.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group/item">
                                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover/item:bg-white group-hover/item:text-[#8a173f] transition-all">
                                            <FaGlobe />
                                        </div>
                                        <div>
                                            <p className="text-xs text-white/50 font-bold uppercase tracking-tighter">Website</p>
                                            <p className="font-bold">Visit Official Site</p>
                                        </div>
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Mobile Admin Actions */}
                        <div className="md:hidden flex gap-4">
                            {account?.role === 'admin' && (
                                <>
                                    <button onClick={() => setIsEditing(true)} className="flex-1 py-4 bg-yellow-500 text-white rounded-2xl font-bold">Edit</button>
                                    <button onClick={handleDelete} className="flex-1 py-4 bg-red-500 text-white rounded-2xl font-bold">Delete</button>
                                </>
                            )}
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    );
};

export default ServiceItems;
