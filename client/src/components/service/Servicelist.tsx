import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Service } from '../../Hooks/useService';

interface ServiceUse extends Service {
    mainServiceID: string;
    mainServiceSlug: string | undefined;
}

const Servicelist = ({ _id, mainServiceID, mainServiceSlug, name, type, }: ServiceUse) => {
    return (
        <div className="flex flex-col gap-4 items-center justify-center mb-4">
            {/* <!-- Card 1 --> */}
            <motion.div
                whileHover={{ scale: 1.05, boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)' }}
                transition={{ duration: 0.3 }}
            >
                <Link to={`/service/${mainServiceSlug}/${mainServiceID}/${_id}`} className="bg-gradient-to-r from-[#9be2dc] to-[#f1d7e0] rounded-lg w-70 grid grid-cols-12 shadow p-4 gap-3 items-center transform border-s-[1rem] border-[#0b635b]">
                    {/* <!-- Icon --> */}
                    <div className="col-span-12 md:col-span-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="#2563eb">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                        </svg>
                    </div>

                    {/* <!-- Title --> */}
                    <div className="col-span-11 xl:-ml-5">
                        <p className="text-red-800 text-xl font-semibold">{name}</p>
                    </div>

                    {/* <!-- Description --> */}
                    <div className="md:col-start-2 col-span-11 xl:-ml-5 w-[15rem] md:w-[14rem] lg:w-[50rem]">
                        <p className="text-sm text-blue-600 font-light">{type}</p>
                    </div>
                </Link>
            </motion.div>
        </div>
    );
};

export default Servicelist;







{/* <span className=" bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl h-80 md:h-[15rem] lg:h-[20rem]">
                <div className="py-8 w-full hover:bg-gray-100 ">
                    <div className="lg:flex items-center justify-center w-full">
                        <div className="lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-white p-6 shadow rounded">
                            <div className="flex items-center border-b border-gray-200 pb-4 ">
                                <img src={image || "https://picsum.photos/id/870/200/300?grayscale&blur=2"} alt={name} className="w-24 h-12  rounded-2xl  " />
                                <div className="flex items-start justify-between w-full ">
                                    <div className="pl-3 w-full">
                                        <Link to={`/service/${mainServiceSlug}/${mainServiceID}/${_id}`}>
                                            <p className="text-xl font-medium leading-5 text-gray-800 hover:underline">{name}</p>
                                        </Link>
                                        <p className="text-sm leading-normal pt-2 text-gray-500">{type}</p>
                                    </div>
                                    <svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.5001 4.66667H17.5001C18.1189 4.66667 18.7124 4.9125 19.15 5.35009C19.5876 5.78767 19.8334 6.38117 19.8334 7V23.3333L14.0001 19.8333L8.16675 23.3333V7C8.16675 6.38117 8.41258 5.78767 8.85017 5.35009C9.28775 4.9125 9.88124 4.66667 10.5001 4.66667Z" stroke="#2C3E50" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                            <div className="px-2">
                                {address && <p className="text-sm leading-5 py-4 text-gray-600">{address}</p>}
                                {location && <p className="text-sm leading-5 py-4 text-gray-600">{location}</p>}
                                {description && <p className="text-sm leading-5 py-4 text-gray-600">{description}</p>}
                                {destinations && <p className="text-sm leading-5 py-4 text-gray-600">{destinations}</p>}
                                {campus && <p className="text-sm leading-5 py-4 text-gray-600">{campus}</p>}
                                <div className="flex">
                                    {phone && <div className="py-2 px-4 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">{phone}</div>}
                                    {founded && <div className="py-2 px-4 ml-3 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">{founded}</div>}
                                    {students && <div className="py-2 px-4 ml-3 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">{students}</div>}
                                    {contact && <div className="py-2 px-4 ml-3 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">{contact}</div>}

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </span > */}