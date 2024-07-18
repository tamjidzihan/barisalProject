import { useParams } from 'react-router-dom'
import useServiceItems from '../../Hooks/useServiceItems'
import { motion } from 'framer-motion'

const ServiceItems = () => {
    const { mainServiceSlug, mainServiceID, id } = useParams()
    const { serviceItem } = useServiceItems(mainServiceSlug!, mainServiceID!, id!)

    return (
        <div className="flex flex-col gap-4 items-center justify-center mb-4">
            {/* <!-- Card 1 --> */}
            <motion.div
                whileHover={{ scale: 1.05, boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)' }}
                transition={{ duration: 0.3 }}
            >
                <span className="bg-gradient-to-r from-[#9be2dc] to-[#f1d7e0] rounded-lg w-70 grid grid-cols-12 shadow p-4 gap-3 items-center transform border-s-[1rem] border-[#0b635b]">
                    {/* <!-- Icon --> */}
                    <div className="col-span-12 md:col-span-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="#2563eb">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                        </svg>
                    </div>

                    {/* <!-- Title --> */}
                    <div className="col-span-11 xl:-ml-5">
                        <p className="text-red-800 text-xl font-semibold">{serviceItem?.name}</p>
                    </div>

                    {/* <!-- Description --> */}
                    <div className="md:col-start-2 col-span-11 xl:-ml-5 w-[15rem] md:w-[14rem] lg:w-[50rem]">
                        <p className="text-sm text-blue-600 font-light">{serviceItem?.type}</p>
                    </div>
                </span>
            </motion.div>
        </div>
    )
}

export default ServiceItems
