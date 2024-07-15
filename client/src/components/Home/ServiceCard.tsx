import { Link } from 'react-router-dom'
import { FetchAllServiceResponse } from '../../Hooks/useAllService'
import { useServiceStore } from '../../stateProviders/ServiceNameStore';

const ServiceCard = ({ _id, image, name, description, slug }: FetchAllServiceResponse) => {

    const setServiceName = useServiceStore((state) => state.setServiceName)
    const setServiceImage = useServiceStore((state) => state.setServiceImage)
    const setServiceDescription = useServiceStore((state) => state.setServiceDescription)

    return (
        <div className=" mt-9" onClick={() => { setServiceName(name); setServiceImage(image); setServiceDescription(description) }}>
            <Link to={`service/${slug}`} >
                <div className="text-center bg-[#03ab9c] pt-2 rounded-lg">
                    <div className="mx-1 bg-white rounded-lg">
                        <div className="flex justify-center items-center text-red-500 text-2xl">
                            <img src={image} alt="" className='mt-5 mb-5 h-20 w-auto' />
                        </div>
                        <p className=" pb-2 text-md font-bold">{name}</p>
                    </div>
                </div>
            </Link>
        </div >
    )
}

export default ServiceCard