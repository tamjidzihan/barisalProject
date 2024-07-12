import useService from '../../Hooks/useService';
import HeroTitle from './HeroTitle';
import ServiceCard from './ServiceCard';

const ServiceGrid = () => {

    const { service, error, isLoading } = useService();
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <section className='container mx-auto px-4 my-10'>
            <HeroTitle headingtext='All Services' />
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-6 gap-5 container mx-auto mt-10'>
                {
                    service?.map(service =>
                        <ServiceCard key={service._id} image={service.image} name={service.name} description={service.description} _id={service._id} slug={service.slug} />)

                }
            </div>
        </section>
    )
}

export default ServiceGrid
