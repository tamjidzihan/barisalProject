import { useState } from 'react';
import { Service } from '../../Hooks/useService';
import { FaSave, FaTimes, FaCloudUploadAlt, FaInfoCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface UpdateServiceItemProps {
    serviceItem: Service;
    onUpdate: (updatedItem: Service) => void;
    onCancel: () => void;
}

const UpdateServiceItem: React.FC<UpdateServiceItemProps> = ({ serviceItem, onUpdate, onCancel }) => {
    const [updatedItem, setUpdatedItem] = useState<Service>(serviceItem);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setUpdatedItem((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onUpdate(updatedItem);
    };

    const inputFields = [
        { name: 'name', label: 'Service Name', type: 'text', placeholder: 'e.g. Barishal General Hospital' },
        { name: 'type', label: 'Service Type', type: 'text', placeholder: 'e.g. Medical, Education, Transport' },
        { name: 'image', label: 'Image URL', type: 'text', placeholder: 'https://example.com/image.jpg' },
        { name: 'phone', label: 'Phone Number', type: 'text', placeholder: '+880 1XXX XXXXXX' },
        { name: 'email', label: 'Email Address', type: 'email', placeholder: 'contact@example.com' },
        { name: 'website', label: 'Website URL', type: 'text', placeholder: 'https://example.com' },
        { name: 'address', label: 'Physical Address', type: 'text', placeholder: 'Full address here' },
        { name: 'location', label: 'Map Location/Area', type: 'text', placeholder: 'e.g. Sadar Road, Barishal' },
        { name: 'branch', label: 'Branch Name', type: 'text', placeholder: 'e.g. Main Branch' },
        { name: 'campus', label: 'Campus', type: 'text', placeholder: 'e.g. North Campus' },
        { name: 'founded', label: 'Founded Year', type: 'text', placeholder: 'e.g. 1995' },
        { name: 'students', label: 'Students/Capacity', type: 'number', placeholder: 'Current count' },
        { name: 'contact', label: 'Contact Person', type: 'text', placeholder: 'Name of person to contact' },
        { name: 'destinations', label: 'Destinations', type: 'text', placeholder: 'For transport services' },
    ];

    return (
        <main className="bg-gray-50 min-h-screen py-12 px-6">
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-4xl mx-auto"
            >
                <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100">
                    {/* Header */}
                    <div className="bg-[#8a173f] p-8 md:p-12 text-white">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-white/10 rounded-2xl">
                                <FaCloudUploadAlt className="text-3xl" />
                            </div>
                            <h1 className="text-3xl font-bold">Update Service</h1>
                        </div>
                        <p className="text-white/70 text-lg">Modifying information for <span className="text-white font-bold">{serviceItem.name}</span></p>
                    </div>

                    <form onSubmit={handleSubmit} className="p-8 md:p-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                            {inputFields.map((field) => (
                                <div key={field.name} className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 ml-1">{field.label}</label>
                                    <input
                                        type={field.type}
                                        name={field.name}
                                        value={(updatedItem as any)[field.name] || ''}
                                        onChange={handleChange}
                                        placeholder={field.placeholder}
                                        className="w-full px-5 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#03ab9c] focus:border-transparent outline-none transition-all"
                                    />
                                </div>
                            ))}
                            
                            <div className="md:col-span-2 space-y-2">
                                <label className="text-sm font-bold text-gray-700 ml-1">Detailed Description</label>
                                <textarea
                                    name="description"
                                    rows={4}
                                    value={updatedItem.description || ''}
                                    onChange={handleChange}
                                    placeholder="Provide a comprehensive description of the service..."
                                    className="w-full px-5 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#03ab9c] focus:border-transparent outline-none transition-all resize-none"
                                />
                            </div>
                        </div>

                        <div className="mt-12 flex flex-col sm:flex-row gap-4">
                            <button
                                type="submit"
                                className="flex-1 bg-[#03ab9c] text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:bg-[#028e82] transition-all transform active:scale-95 flex items-center justify-center gap-2"
                            >
                                <FaSave /> Save Changes
                            </button>
                            <button
                                type="button"
                                onClick={onCancel}
                                className="flex-1 bg-gray-100 text-gray-600 py-4 rounded-2xl font-bold text-lg hover:bg-gray-200 transition-all flex items-center justify-center gap-2"
                            >
                                <FaTimes /> Discard Changes
                            </button>
                        </div>

                        <div className="mt-8 flex items-center gap-2 text-gray-400 text-xs justify-center italic">
                            <FaInfoCircle />
                            Changes will be applied immediately across the platform.
                        </div>
                    </form>
                </div>
            </motion.div>
        </main>
    );
};

export default UpdateServiceItem;
