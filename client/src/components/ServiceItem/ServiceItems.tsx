import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useServiceItems from '../../Hooks/useServiceItems';
import { FaChevronRight, FaGlobe, FaPhone, FaEnvelope, FaMapMarkerAlt, FaUsers, FaCalendarAlt, FaEdit, FaArrowLeft } from "react-icons/fa";
import { MdDelete, MdBusiness, MdSchool, MdLocationOn, MdDescription } from "react-icons/md";
import { useAuth } from '../../context/AuthContext';
import UpdateServiceItem from './UpdateServiceItem';
import { Service } from '../../Hooks/useService';

const ServiceItems = () => {
    const { mainServiceSlug, mainServiceID, id } = useParams();
    const navigate = useNavigate();
    const { serviceItem, createServiceItem, updateServiceItem, deleteServiceItem } = useServiceItems(mainServiceSlug!, mainServiceID!, id!);
    const { account } = useAuth();
    const [isEditing, setIsEditing] = useState(false);

    // Icon mapping for different detail types
    const getDetailIcon = (label: string) => {
        const icons: { [key: string]: JSX.Element } = {
            'Branch': <MdBusiness className="w-5 h-5" />,
            'Address': <FaMapMarkerAlt className="w-5 h-5" />,
            'Campus': <MdSchool className="w-5 h-5" />,
            'Contact': <FaUsers className="w-5 h-5" />,
            'Description': <MdDescription className="w-5 h-5" />,
            'Destinations': <MdLocationOn className="w-5 h-5" />,
            'Founded': <FaCalendarAlt className="w-5 h-5" />,
            'Location': <MdLocationOn className="w-5 h-5" />,
            'Students': <FaUsers className="w-5 h-5" />,
            'Email': <FaEnvelope className="w-5 h-5" />,
            'Website': <FaGlobe className="w-5 h-5" />,
            'Phone': <FaPhone className="w-5 h-5" />,
        };
        return icons[label] || <FaChevronRight className="w-5 h-5" />;
    };

    const serviceDetails = [
        { label: 'Branch', value: serviceItem?.branch, icon: 'Branch' },
        { label: 'Address', value: serviceItem?.address, icon: 'Address' },
        { label: 'Campus', value: serviceItem?.campus, icon: 'Campus' },
        { label: 'Contact', value: serviceItem?.contact, icon: 'Contact' },
        { label: 'Description', value: serviceItem?.description, icon: 'Description' },
        { label: 'Destinations', value: serviceItem?.destinations, icon: 'Destinations' },
        { label: 'Founded', value: serviceItem?.founded, icon: 'Founded' },
        { label: 'Location', value: serviceItem?.location, icon: 'Location' },
        { label: 'Students', value: serviceItem?.students, icon: 'Students' },
        { label: 'Email', value: serviceItem?.email, icon: 'Email' },
        { label: 'Website', value: serviceItem?.website, icon: 'Website' },
        { label: 'Phone', value: serviceItem?.phone, icon: 'Phone' },
    ];

    const handleBack = () => {
        navigate(-1); // Go back to previous page
    };

    const handleUpdate = (updatedItem: Service) => {
        updateServiceItem(updatedItem);
        setIsEditing(false);
    };

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this service item? This action cannot be undone.')) {
            deleteServiceItem();
            // Optionally navigate back after deletion
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

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {/* Hero Header */}
            <div className="relative bg-gradient-to-b from-[#8a173f]  to-[#03ab9c] h-80 rounded-b-3xl shadow-xl">
                <div className="absolute inset-0 bg-black/10 rounded-b-3xl"></div>

                {/* Back Button */}
                <div className="absolute top-6 left-6 z-20">
                    <button
                        onClick={handleBack}
                        className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 px-4 py-2 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 border border-white/30 hover:border-white/50"
                    >
                        <FaArrowLeft className="w-4 h-4" />
                        <span>Back</span>
                    </button>
                </div>

                <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                        {serviceItem?.name}
                    </h1>
                    {serviceItem?.type && (
                        <span className="inline-block bg-white/20 backdrop-blur-sm text-white/90 px-6 py-2 rounded-full text-lg font-semibold border border-white/30">
                            {serviceItem.type}
                        </span>
                    )}
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto -mt-16 px-4 lg:px-6">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                    {/* Image Section */}
                    {serviceItem?.image && (
                        <div className="relative h-80 md:h-96 bg-gray-200">
                            <img
                                src={serviceItem.image}
                                alt={`${serviceItem.name} image`}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                        </div>
                    )}

                    {/* Details Section */}
                    <div className="p-8 md:p-10">
                        {/* Back Button for Mobile */}
                        <div className="lg:hidden mb-6">
                            <button
                                onClick={handleBack}
                                className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200"
                            >
                                <FaArrowLeft className="w-4 h-4" />
                                <span>Back to Services</span>
                            </button>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Left Column - Key Information */}
                            <div className="space-y-6">
                                <h2 className="text-2xl font-bold text-gray-800 border-b border-gray-200 pb-3">
                                    Service Information
                                </h2>

                                {serviceDetails
                                    .filter(detail => detail.value && !['Description', 'Website', 'Email', 'Phone'].includes(detail.label))
                                    .map((detail, index) => (
                                        <div key={index} className="flex items-start space-x-4 group">
                                            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-200">
                                                {getDetailIcon(detail.icon)}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                                                    {detail.label}
                                                </p>
                                                <p className="text-lg font-semibold text-gray-800 mt-1">
                                                    {detail.value}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                            </div>

                            {/* Right Column - Contact & Description */}
                            <div className="space-y-6">
                                {/* Contact Information */}
                                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                                    <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Information</h3>
                                    <div className="space-y-4">
                                        {serviceDetails
                                            .filter(detail => detail.value && ['Website', 'Email', 'Phone'].includes(detail.label))
                                            .map((detail, index) => (
                                                <div key={index} className="flex items-center space-x-3">
                                                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                                                        {getDetailIcon(detail.icon)}
                                                    </div>
                                                    {detail.label === 'Website' ? (
                                                        <a
                                                            href={detail.value ?? undefined}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-blue-600 hover:text-blue-800 font-medium hover:underline transition-colors duration-200"
                                                        >
                                                            Visit Website
                                                        </a>
                                                    ) : detail.label === 'Email' ? (
                                                        <a
                                                            href={`mailto:${detail.value}`}
                                                            className="text-blue-600 hover:text-blue-800 font-medium hover:underline transition-colors duration-200"
                                                        >
                                                            {detail.value}
                                                        </a>
                                                    ) : (
                                                        <p className="text-gray-800 font-medium">{detail.value}</p>
                                                    )}
                                                </div>
                                            ))}
                                    </div>
                                </div>

                                {/* Description */}
                                {serviceItem?.description && (
                                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                                        <h3 className="text-xl font-bold text-gray-800 mb-4">Description</h3>
                                        <p className="text-gray-700 leading-relaxed text-lg">
                                            {serviceItem.description}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Admin Actions */}
                        {account?.role === 'admin' && (
                            <div className="mt-8 pt-8 border-t border-gray-200">
                                <div className="flex flex-col sm:flex-row justify-end items-center space-y-4 sm:space-y-0 sm:space-x-4">
                                    <button
                                        onClick={() => setIsEditing(true)}
                                        className="flex items-center space-x-2 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                                    >
                                        <FaEdit className="w-5 h-5" />
                                        <span>Edit Service</span>
                                    </button>
                                    <button
                                        onClick={handleDelete}
                                        className="flex items-center space-x-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                                    >
                                        <MdDelete className="w-5 h-5" />
                                        <span>Delete Service</span>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceItems;