import { useParams } from 'react-router-dom';
import useServiceItems from '../../Hooks/useServiceItems';
import { FaChevronRight } from "react-icons/fa6";
import { motion } from 'framer-motion';

const ServiceItems = () => {
    const { mainServiceSlug, mainServiceID, id } = useParams();
    const { serviceItem } = useServiceItems(mainServiceSlug!, mainServiceID!, id!);

    const serviceDetails = [
        { label: "Branch", value: serviceItem?.branch },
        { label: "Address", value: serviceItem?.address },
        { label: "Campus", value: serviceItem?.campus },
        { label: "Contact", value: serviceItem?.contact },
        { label: "Description", value: serviceItem?.description },
        { label: "Destinations", value: serviceItem?.destinations },
        { label: "Founded", value: serviceItem?.founded },
        { label: "Location", value: serviceItem?.location },
        { label: "Students", value: serviceItem?.students },
        { label: "Phone", value: serviceItem?.phone }
    ];

    return (
        <>
            <div className="bg-gradient-to-b from-[#8a173f] to-[#03ab9c] h-60 md:h-[15rem] lg:h-[10rem] rounded-b-full flex flex-col justify-center items-center">
                <p className="text-white text-center px-4 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
                    {serviceItem?.name}
                </p>
            </div>
            <div className="flex flex-col gap-6 items-center justify-center mt-12 px-4">
                <motion.div
                    whileHover={{ scale: 1.05, boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)' }}
                    transition={{ duration: 0.3 }}
                    className="bg-gradient-to-r from-[#9be2dc] to-[#f1d7e0] rounded-lg shadow-md w-full max-w-4xl p-6"
                >
                    <div className="grid grid-cols-12 gap-4 items-center">
                        <div className="col-span-12 md:col-span-2 flex justify-center text-[#0b635b] text-7xl">
                            <FaChevronRight />
                        </div>
                        {serviceItem?.image && (
                            <div className="col-span-12 md:col-span-12 flex justify-center">
                                <img
                                    src={serviceItem.image}
                                    alt={`${serviceItem.name} image`}
                                    className="rounded-lg max-w-full h-auto"
                                />
                            </div>
                        )}
                        <div className="col-span-12 md:col-span-10">
                            {serviceDetails.map((detail, index) => detail.value && (
                                <div key={index} className="py-2">
                                    <p className="text-gray-700 text-lg md:text-xl font-semibold">
                                        <span className="text-blue-600">{detail.label}:</span> {detail.value}
                                    </p>
                                </div>
                            ))}
                            {serviceItem?.type && (
                                <div className="py-2">
                                    <p className="text-md text-blue-600 font-light">Type: {serviceItem?.type}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default ServiceItems;
