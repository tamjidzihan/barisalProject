import React from 'react'
import { Link } from 'react-router-dom'
import { FetchServiceResponse } from '../../Hooks/useService'



const ServiceCard = ({ _id, image, name, description, slug }: FetchServiceResponse) => {
    return (
        <div className=" mt-9">
            <Link to={`service/${slug}`}>
                <div className="text-center bg-[#03ab9c] pt-2 rounded-lg">
                    <div className="mx-1 bg-white rounded-lg">
                        <div className="flex justify-center items-center text-red-500 text-2xl">
                            <img src={image} alt="" className='mt-5 mb-5 h-20 w-auto' />
                        </div>
                        <p className=" pb-2 text-md font-bold">{name}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ServiceCard