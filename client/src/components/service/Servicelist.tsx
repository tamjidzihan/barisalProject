import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Service } from '../../Hooks/useService';
import { FaFileCircleCheck } from "react-icons/fa6";

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
                    <div className="col-span-12 md:col-span-1 text-4xl text-indigo-500 text-center">
                        <FaFileCircleCheck />
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


