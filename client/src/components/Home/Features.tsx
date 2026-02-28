import { motion } from "framer-motion";
import { FaShieldAlt, FaMapMarkedAlt, FaClock, FaCheckCircle } from "react-icons/fa";

const Features = () => {
    const features = [
        {
            icon: <FaShieldAlt className="text-3xl text-[#8a173f]" />,
            title: "Trusted Info",
            description: "All information is verified and regularly updated to ensure accuracy for our users."
        },
        {
            icon: <FaMapMarkedAlt className="text-3xl text-[#03ab9c]" />,
            title: "Easy Navigation",
            description: "Find exactly what you're looking for with our intuitive search and categorized services."
        },
        {
            icon: <FaClock className="text-3xl text-[#8a173f]" />,
            title: "Real-time Access",
            description: "Access essential services 24/7 from the comfort of your home or on the go."
        },
        {
            icon: <FaCheckCircle className="text-3xl text-[#03ab9c]" />,
            title: "Direct Connection",
            description: "Connect directly with service providers through the contact information provided."
        }
    ];

    return (
        <section className="bg-gray-50 py-20">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                        Why Use <span className="text-[#03ab9c]">E-Service Barishal</span>?
                    </h2>
                    <p className="text-lg text-gray-600">
                        We provide a comprehensive digital platform to access all essential services in Barishal district efficiently.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
                        >
                            <div className="mb-6 p-4 bg-gray-50 rounded-xl inline-block">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
