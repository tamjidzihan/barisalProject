import { useAuth } from "../../context/AuthContext";
import { motion } from "framer-motion";
import { FaHospital, FaSchool, FaBus, FaUniversity } from "react-icons/fa";

const Banner = () => {
    const { account } = useAuth();

    return (
        <div className="relative overflow-hidden bg-white pb-16 pt-12 md:pb-24 md:pt-20">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-1/2 -z-10 h-[600px] w-[1000px] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-[-10%]" aria-hidden="true">
                <svg viewBox="0 0 1208 1024" className="absolute top-0 left-1/2 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]">
                    <circle cx="512" cy="512" r="512" fill="url(#gradient)" fillOpacity="0.05" />
                    <defs>
                        <radialGradient id="gradient">
                            <stop stopColor="#03ab9c" />
                            <stop offset="1" stopColor="#8a173f" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>

            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="flex-1 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {account?.role === "admin" && (
                                <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-[#8a173f] uppercase bg-[#8a173f]/10 rounded-full">
                                    Welcome Back, {account.username}
                                </span>
                            )}
                            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl mb-6">
                                Everything <span className="text-[#03ab9c]">Barishal</span> <br /> 
                                in one place.
                            </h1>
                            <p className="text-lg leading-8 text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0">
                                বরিশাল জেলার সকল সার্ভিস এবং লোকেশন সম্পর্কে জানতে আমাদের সাথেই থাকুন। 
                                আমরা আপনাকে আপনার প্রয়োজনীয় তথ্যের সাথে সংযুক্ত করতে সাহায্য করি।
                            </p>
                            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                                <a href="#explore" className="rounded-xl bg-[#8a173f] px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-[#a01c4a] transition-all transform hover:scale-105 active:scale-95">
                                    Get Started
                                </a>
                                <a href="#" className="rounded-xl border-2 border-gray-200 px-8 py-4 text-lg font-semibold text-gray-700 hover:bg-gray-50 transition-all">
                                    About Barishal
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    <div className="flex-1 w-full max-w-xl lg:max-w-none">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="grid grid-cols-2 gap-4"
                        >
                            {[
                                { icon: <FaHospital className="text-3xl" />, label: "Hospitals", color: "bg-blue-50 text-blue-600" },
                                { icon: <FaSchool className="text-3xl" />, label: "Schools", color: "bg-green-50 text-green-600" },
                                { icon: <FaBus className="text-3xl" />, label: "Transport", color: "bg-orange-50 text-orange-600" },
                                { icon: <FaUniversity className="text-3xl" />, label: "University", color: "bg-purple-50 text-purple-600" }
                            ].map((item, idx) => (
                                <div key={idx} className={`p-8 rounded-3xl ${item.color} flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow`}>
                                    {item.icon}
                                    <span className="mt-4 font-bold text-gray-800">{item.label}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;