import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import useService from '../Hooks/useAllService';
import ServiceCard from '../components/Home/ServiceCard';
import LoadingSpinner from '../components/Home/LoadingSpinner';
import HeroTitle from '../components/Home/HeroTitle';
import { FiSearch, FiFilter, FiChevronDown } from 'react-icons/fi';
import { FaGraduationCap, FaHeartbeat, FaBus, FaUtensils, FaBriefcase, FaAllergies, FaHome, FaChevronRight } from 'react-icons/fa';

const ServicesPage = () => {
    const { service, error, isLoading } = useService();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [sortBy, setSortBy] = useState<'name' | 'slug'>('name');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

    // Define Category Groups for filtering
    const categoryGroups = [
        { name: 'All', icon: <FaAllergies /> },
        { name: 'Education', icon: <FaGraduationCap />, keywords: ['university', 'college', 'school'] },
        { name: 'Health', icon: <FaHeartbeat />, keywords: ['hospital', 'ambulance', 'blood'] },
        { name: 'Transport', icon: <FaBus />, keywords: ['bus', 'launch', 'air', 'transport'] },
        { name: 'Food & Fun', icon: <FaUtensils />, keywords: ['food', 'hotel', 'bar', 'touring'] },
        { name: 'Business', icon: <FaBriefcase />, keywords: ['company', 'market', 'courier', 'govt'] }
    ];

    const filteredAndSortedServices = useMemo(() => {
        if (!service) return [];

        let filtered = service.filter(s =>
            s.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        if (selectedCategory !== 'All') {
            const group = categoryGroups.find(g => g.name === selectedCategory);
            if (group?.keywords) {
                filtered = filtered.filter(s =>
                    group.keywords?.some(k => s.slug?.toLowerCase().includes(k) || s.name.toLowerCase().includes(k))
                );
            }
        }

        return filtered.sort((a, b) => {
            const valA = (a[sortBy] || '').toLowerCase();
            const valB = (b[sortBy] || '').toLowerCase();
            if (sortOrder === 'asc') return valA > valB ? 1 : -1;
            return valA < valB ? 1 : -1;
        });
    }, [service, searchTerm, selectedCategory, sortBy, sortOrder]);

    if (isLoading) return <LoadingSpinner />;
    if (error) return <div className="py-20 text-center text-red-500">Error: {error}</div>;

    return (
        <main className="min-h-screen bg-gray-50 pb-20">
            {/* Header Section */}
            <div className="bg-white border-b border-gray-100 pt-12 pb-8">
                <div className="container mx-auto px-6">
                    <nav className="flex items-center space-x-2 text-gray-400 text-sm mb-4">
                        <Link to="/" className="flex items-center hover:text-[#8a173f] transition-colors">
                            <FaHome className="mr-1" />
                            Home
                        </Link>
                        <FaChevronRight className="text-[10px]" />
                        <span className="text-gray-600 font-medium">Services</span>
                    </nav>
                    <HeroTitle headingtext="Service Explorer" />
                    <p className="text-gray-500 mt-2 max-w-2xl">
                        Find and filter every service available in Barishal with our discovery tools.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 mt-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar Filters */}
                    <aside className="w-full lg:w-64 flex-shrink-0">
                        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 sticky top-24">
                            <div className="flex items-center gap-2 mb-6 text-[#8a173f]">
                                <FiFilter className="text-xl" />
                                <h3 className="font-bold text-lg">Filter By Group</h3>
                            </div>

                            <div className="space-y-2">
                                {categoryGroups.map((group) => (
                                    <button
                                        key={group.name}
                                        onClick={() => setSelectedCategory(group.name)}
                                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all font-medium ${selectedCategory === group.name
                                                ? 'bg-[#03ab9c] text-white shadow-md'
                                                : 'text-gray-600 hover:bg-gray-50'
                                            }`}
                                    >
                                        <span className={selectedCategory === group.name ? 'text-white' : 'text-[#03ab9c]'}>
                                            {group.icon}
                                        </span>
                                        {group.name}
                                    </button>
                                ))}
                            </div>

                            <div className="mt-10 pt-6 border-t border-gray-50">
                                <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                                    <FiChevronDown /> Sort Results
                                </h3>
                                <select
                                    className="w-full bg-gray-50 border-none rounded-xl p-3 text-sm focus:ring-2 focus:ring-[#03ab9c] outline-none"
                                    onChange={(e) => {
                                        const [newSortBy, newOrder] = e.target.value.split('-') as [any, any];
                                        setSortBy(newSortBy);
                                        setSortOrder(newOrder);
                                    }}
                                >
                                    <option value="name-asc">Alphabetical (A-Z)</option>
                                    <option value="name-desc">Alphabetical (Z-A)</option>
                                    <option value="slug-asc">Slug (A-Z)</option>
                                </select>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="flex-grow">
                        {/* Search Bar */}
                        <div className="relative mb-8">
                            <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
                            <input
                                type="text"
                                placeholder="Search by service name or keyword..."
                                className="w-full pl-14 pr-6 py-5 bg-white rounded-3xl shadow-sm border border-gray-100 outline-none focus:ring-2 focus:ring-[#03ab9c] transition-all text-lg"
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        {/* Results Count */}
                        <div className="flex justify-between items-center mb-6 px-2">
                            <p className="text-gray-500">
                                Found <span className="text-[#8a173f] font-bold">{filteredAndSortedServices.length}</span> services
                                {selectedCategory !== 'All' && <span> in <span className="text-[#03ab9c] font-bold">{selectedCategory}</span></span>}
                            </p>
                        </div>

                        {/* Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                            <AnimatePresence mode='popLayout'>
                                {filteredAndSortedServices.map((s) => (
                                    <motion.div
                                        key={s._id}
                                        layout
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <ServiceCard {...s} />
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>

                        {filteredAndSortedServices.length === 0 && (
                            <div className="text-center py-32 bg-white rounded-3xl border border-dashed border-gray-200 mt-8">
                                <div className="text-6xl mb-4 text-gray-200 flex justify-center"><FiSearch /></div>
                                <h3 className="text-xl font-bold text-gray-400">No services match your criteria</h3>
                                <button
                                    onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
                                    className="mt-4 text-[#03ab9c] font-bold hover:underline"
                                >
                                    Clear all filters
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ServicesPage;
