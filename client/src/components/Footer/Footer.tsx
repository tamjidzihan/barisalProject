import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../../assets/image.png';
import { Link } from 'react-router-dom';
import useService from '../../Hooks/useAllService';

const Footer = () => {
    const { service: services, isLoading } = useService();
    const displayServices = services.slice(0, 4);

    return (
        <footer className="bg-[#8a173f] text-white pt-20 pb-10">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                <div>
                    <img src={logo} alt="Logo" className="w-32 mb-6 bg-white/10 p-2 rounded-xl" />
                    <p className="text-white/70 leading-relaxed mb-6">
                        Dedicated to providing easy access to all essential services and locations in Barishal.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="p-3 bg-white/5 rounded-xl hover:bg-[#03ab9c]/20 hover:text-[#03ab9c] transition-all"><FaFacebook /></a>
                        <a href="#" className="p-3 bg-white/5 rounded-xl hover:bg-[#03ab9c]/20 hover:text-[#03ab9c] transition-all"><FaTwitter /></a>
                        <a href="#" className="p-3 bg-white/5 rounded-xl hover:bg-[#03ab9c]/20 hover:text-[#03ab9c] transition-all"><FaInstagram /></a>
                    </div>
                </div>

                <div>
                    <h4 className="text-xl font-bold mb-8">Quick Links</h4>
                    <ul className="space-y-4 text-white/60">
                        <li><Link to="/" className="hover:text-white transition-colors flex items-center gap-2">Home</Link></li>
                        <li><Link to="/#explore" className="hover:text-white transition-colors flex items-center gap-2">Explore Services</Link></li>
                        <li><Link to="/about" className="hover:text-white transition-colors flex items-center gap-2">About Us</Link></li>
                        <li><Link to="/contact" className="hover:text-white transition-colors flex items-center gap-2">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-xl font-bold mb-8">Top Services</h4>
                    <ul className="space-y-4 text-white/60">
                        {isLoading ? (
                            <li className="italic text-sm">Loading services...</li>
                        ) : (
                            displayServices.map((s) => (
                                <li key={s._id}>
                                    <Link to={`/service/${s.slug}`} className="hover:text-white transition-colors capitalize">
                                        {s.name}
                                    </Link>
                                </li>
                            ))
                        )}
                        {!isLoading && services.length > 4 && (
                            <li className="pt-2">
                                <Link to="/#explore" className="text-sm font-bold text-[#03ab9c] hover:underline uppercase tracking-tighter">
                                    + View All Services
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>

                <div>
                    <h4 className="text-xl font-bold mb-8">Contact Info</h4>
                    <ul className="space-y-4 text-white/60 text-sm">
                        <li className="flex items-start gap-3"><FaMapMarkerAlt className="text-[#03ab9c] mt-1" /> Barishal City, Bangladesh</li>
                        <li className="flex items-start gap-3"><FaPhone className="text-[#03ab9c] mt-1" /> +880 1234 567890</li>
                        <li className="flex items-start gap-3"><FaEnvelope className="text-[#03ab9c] mt-1" /> info@barishalservice.com</li>
                    </ul>
                </div>
            </div>

            <div className="container mx-auto px-6 border-t border-white/10 mt-16 pt-8 text-center text-white/40 text-sm">
                <p>&copy; {new Date().getFullYear()} E-Service Barishal. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
