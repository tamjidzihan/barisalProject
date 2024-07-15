import { useParams } from 'react-router-dom'
import useService from '../Hooks/useService'
import Servicelist from '../components/service/Servicelist'
import ServiceListBanner from '../components/service/ServiceListBanner'
import { useServiceStore } from '../stateProviders/ServiceNameStore';

const ServicePage = () => {
    const { slug } = useParams()
    const { service } = useService(slug as string)
    const { serviceName, serviceImage, serviceDescription } = useServiceStore();

    if (!service) return <div>Loading...</div>;

    return (
        <>
            <ServiceListBanner serviceName={serviceName} serviceImage={serviceImage} serviceDescription={serviceDescription} />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-2 gap-5 container mx-auto mt-5">

                {service?.map(service =>
                    <Servicelist
                        key={service._id}
                        _id={service._id}
                        name={service.name}
                        type={service.type}
                        address={service.address}
                        founded={service.founded}
                        campus={service.campus}
                        phone={service.phone}
                        students={service.students}
                    />)}

            </div>
        </>
    )
}

export default ServicePage
