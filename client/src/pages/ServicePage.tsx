import { useParams } from 'react-router-dom'
import useService from '../Hooks/useService'
import Servicelist from '../components/service/Servicelist'
import ServiceListBanner from '../components/service/ServiceListBanner'

const ServicePage = () => {
    const { slug } = useParams()
    const { serviceList } = useService(slug as string)


    if (!serviceList) return <div>Loading...</div>;

    return (
        <>
            {
                serviceList.map((mainService) => (
                    <div key={mainService._id}>
                        < ServiceListBanner

                            serviceName={mainService.name}
                            serviceImage={mainService.image}
                            serviceDescription={mainService.description}
                        />


                        {/* <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2 gap-5 container mx-auto mt-5"> */}


                        {
                            mainService.result.map((item) => (
                                <Servicelist
                                    key={item._id}
                                    _id={item._id}
                                    name={item.name}
                                    type={item.type}
                                    address={item.address}
                                    phone={item.phone}
                                    image={item.image}
                                    branch={item.branch}
                                    founded={item.founded}
                                    campus={item.campus}
                                    students={item.students}
                                    contact={item.contact}
                                    location={item.location}
                                    description={item.description}
                                    destinations={item.destinations}
                                />
                            ))
                        }

                    </div>



                    // </div>

                ))}
        </>
    )
}

export default ServicePage
