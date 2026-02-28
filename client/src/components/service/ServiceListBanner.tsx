interface ServiceNameProps {
    serviceName: string | null
    serviceImage: string | undefined
    serviceDescription: string | null
}

const ServiceListBanner = ({ serviceName, serviceImage, serviceDescription }: ServiceNameProps) => {
    return (
        <div className="relative bg-[#8a173f] py-16 md:py-24 overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#03ab9c]/10 skew-x-12 transform translate-x-1/4" />
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    <div className="flex-shrink-0">
                        <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-3xl p-4 shadow-xl flex items-center justify-center transform hover:rotate-3 transition-transform">
                            <img
                                src={serviceImage}
                                alt={serviceName || 'Service'}
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>

                    <div className="text-center md:text-left">
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
                            {serviceName}
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
                            {serviceDescription || `Explore the best ${serviceName} services available in the Barishal region.`}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceListBanner;
