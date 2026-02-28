import { useState } from 'react';
import useService from '../../Hooks/useAllService';
import HeroTitle from './HeroTitle';
import ServiceCard from './ServiceCard';
import LoadingSpinner from './LoadingSpinner';
import { FiSearch } from 'react-icons/fi';

const ServiceGrid = () => {

    const { service, error, isLoading } = useService();
    const [searchTerm, setSearchTerm] = useState('');

    if (isLoading) return <LoadingSpinner />;
    if (error) return <div>Error: {error}</div>;

    const filteredServices = service?.filter(s =>
        s.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section className='container mx-auto px-4 my-16'>

            <div className='flex flex-col md:flex-row justify-between items-center mb-10 gap-6'>
                <HeroTitle headingtext='Explore Services' />
                <div className='relative w-full md:w-96'>
                    <FiSearch className='absolute left-3 top-1/2 -transform -translate-y-1/2 text-gray-400 text-xl' />
                    <input
                        type='text'
                        placeholder='Search for a service...'
                        className='w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#03ab9c] focus:border-transparent outline-none transition-all shadow-sm'
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6'>
                {
                    filteredServices?.map(service =>
                        <ServiceCard key={service._id} image={service.image} name={service.name} description={service.description} _id={service._id} slug={service.slug} />
                    )
                }
            </div>

            {filteredServices?.length === 0 && (
                <div className='text-center py-20 text-gray-500'>
                    <p className='text-xl'>No services found matching your search.</p>
                </div>
            )}
        </section>
    )
}

export default ServiceGrid;
