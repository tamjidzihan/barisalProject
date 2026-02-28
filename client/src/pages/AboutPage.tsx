import { motion } from "framer-motion";
import { FaHistory, FaBullseye, FaUsers, FaHeart } from "react-icons/fa";

const AboutPage = () => {
    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="relative py-20 bg-[#8a173f]/5">
                <div className="container mx-auto px-6 text-center">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6"
                    >
                        Connecting Barishal <br /> 
                        <span className="text-[#03ab9c]">to the Future</span>
                    </motion.h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        We are dedicated to digitizing Barishal's essential services, making information accessible to every citizen.
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-[#03ab9c]/10 rounded-xl text-[#03ab9c] text-2xl">
                                    <FaBullseye />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                            </div>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                To provide a unified, transparent, and easily accessible digital platform for all public and private services in the Barishal district, empowering citizens with accurate information.
                            </p>
                        </div>
                        <div>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-[#8a173f]/10 rounded-xl text-[#8a173f] text-2xl">
                                    <FaHistory />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
                            </div>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                Founded in 2024, E-Service Barishal started as a community project to bridge the gap between service providers and the general public. Today, it serves as the primary digital directory for the region.
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-square bg-gradient-to-tr from-[#8a173f]/20 to-[#03ab9c]/20 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center">
                             <div className="text-center p-12">
                                <h3 className="text-8xl font-black text-white/50 mb-4">2026</h3>
                                <p className="text-2xl font-bold text-gray-800">Leading the Digital Transformation of Barishal</p>
                             </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-16">Our Core Values</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: <FaUsers />, title: "Community First", desc: "Every feature we build is designed with the citizen's needs in mind." },
                            { icon: <FaHeart />, title: "Trust & Integrity", desc: "We ensure all data is verified and comes from reliable sources." },
                            { icon: <FaBullseye />, title: "Innovation", desc: "Constantly evolving to provide a better user experience for our region." }
                        ].map((value, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-3xl text-[#03ab9c] mb-6">{value.icon}</div>
                                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AboutPage;
