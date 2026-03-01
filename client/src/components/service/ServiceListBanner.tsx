import { Link } from 'react-router-dom';
import { FaHome, FaChevronRight } from 'react-icons/fa';

interface ServiceNameProps {
    serviceName: string | null
    serviceImage: string | undefined
    serviceDescription: string | null
}

const ServiceListBanner = ({ serviceName, serviceImage, serviceDescription }: ServiceNameProps) => {
    return (
        <div className="relative bg-[#8a173f] py-12 md:py-18 overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#03ab9c]/10 skew-x-12 transform translate-x-1/4" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Breadcrumb */}
                <nav className="flex items-center space-x-2 text-white/60 text-sm mb-8">
                    <Link to="/" className="flex items-center hover:text-white transition-colors">
                        <FaHome className="mr-1" />
                        Home
                    </Link>
                    <FaChevronRight className="text-[10px]" />
                    <Link to="/services" className="hover:text-white transition-colors">
                        Services
                    </Link>
                    <FaChevronRight className="text-[10px]" />
                    <span className="text-white font-medium">{serviceName}</span>
                </nav>

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
