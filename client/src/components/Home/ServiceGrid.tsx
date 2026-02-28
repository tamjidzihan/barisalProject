import useService from '../../Hooks/useAllService';
import HeroTitle from './HeroTitle';
import ServiceCard from './ServiceCard';
import LoadingSpinner from './LoadingSpinner';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const ServiceGrid = () => {

    const { service, error, isLoading } = useService();

    if (isLoading) return <LoadingSpinner />;
    if (error) return <div className="text-center py-10 text-red-500">Error: {error}</div>;

    // Show only first 6 or 10 services on homepage
    const limitedServices = service?.slice(0, 10);

    return (
        <section className='container mx-auto px-6 my-20'>
            <div className='flex flex-col md:flex-row justify-between items-end mb-12 gap-6'>
                <HeroTitle headingtext='Our Services' />
                <Link
                    to="/services"
                    className="flex items-center gap-2 text-[#03ab9c] font-bold hover:gap-4 transition-all group border-b-2 border-[#03ab9c]/20 pb-1 whitespace-nowrap"
                >
                    Explore All Services
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
                {
                    limitedServices?.map(service =>
                        <ServiceCard key={service._id} image={service.image} name={service.name} description={service.description} _id={service._id} slug={service.slug} />
                    )
                }
            </div>

            <div className="mt-16 text-center">
                <Link
                    to="/services"
                    className="inline-flex items-center gap-3 px-10 py-5 bg-[#8a173f] text-white rounded-2xl font-bold text-lg shadow-xl hover:bg-[#a01c4a] transition-all transform hover:scale-105 active:scale-95"
                >
                    View All Categories <FaArrowRight />
                </Link>
            </div>
        </section>
    )
}

export default ServiceGrid;
