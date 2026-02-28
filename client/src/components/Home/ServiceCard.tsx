import { Link } from 'react-router-dom'
import { FetchAllServiceResponse } from '../../Hooks/useAllService'
import { motion } from 'framer-motion';

const ServiceCard = ({ _id, image, name, description, slug }: FetchAllServiceResponse) => {
    return (
        <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="group"
        >
            <Link to={`service/${slug}`} className="block">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col items-center transition-all group-hover:shadow-xl group-hover:border-[#03ab9c]/20 h-full">
                    <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#03ab9c]/5 transition-colors">
                        <img 
                            src={image} 
                            alt={name} 
                            className='w-12 h-12 object-contain filter group-hover:scale-110 transition-transform duration-300' 
                        />
                    </div>
                    <h3 className="text-gray-800 text-lg font-bold mb-2 group-hover:text-[#03ab9c] transition-colors">{name}</h3>
                    <div className="mt-auto pt-4 flex items-center text-[#03ab9c] text-sm font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        View Details →
                    </div>
                </div>
            </Link>
        </motion.div>
    )
}

export default ServiceCard;