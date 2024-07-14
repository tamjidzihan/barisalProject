
interface ServiceNameProps {
    serviceName: string | null
}

const ServiceListBanner = ({ serviceName }: ServiceNameProps) => {


    return (
        <div className=" bg-gradient-to-b from-[#8a173f]  to-[#03ab9c] h-15 md:h-[5rem] lg:h-[7rem] rounded-b-full flex flex-col justify-center items-center  ">
            <h3 className=' text-white font-bold uppercase text-2xl md:text-4xl lg:text-6xl my-6'>{serviceName}</h3>
        </div>
    )
}

export default ServiceListBanner
