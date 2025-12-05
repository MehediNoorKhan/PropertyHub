import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import footerLogo from "../../images/footer-logo.png"; // Update path if needed

export default function Footer() {

    return (
        <footer className="bg-black text-white pt-[83.5px]">

            {/* Newsletter */}
            <div className="max-w-[722px] mx-auto text-center px-6">
                <h2 className="text-[40px] font-bold mb-[24px]">Newsletter</h2>
                <p className="text-white text-[22px] mb-[32px] opacity-80">
                    Subscribe for exclusive offers and updates
                </p>

                {/* Email input */}
                <div className="mt-6 mx-auto w-full max-w-[722px]">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-5 py-3 rounded-full text-[16px] text-black bg-white placeholder:text-black outline-none"
                    />
                </div>

                {/* Button */}
                <div className="flex justify-center mt-[24px] mb-[83.5px]">
                    <button className="bg-[#7FA38B] px-[83.5px] py-[10px] rounded-full hover:opacity-90 cursor-pointer">
                        Subscribe
                    </button>
                </div>
            </div>


            {/* Main Footer Content */}
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10 px-6 py-16">

                {/* Left Logo Section */}
                <div className="max-w-[248px]">
                    <img src={footerLogo} alt="Guest Pro Logo" className="w-[248px] h-[66px]" />
                    <p className="mt-4 text-[16px] opacity-80 leading-6 max-w-[248px]">
                        Quality short-stay properties in <br></br> the Perth’s most beautiful <br></br>locations.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="font-semibold text-white mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-[16px] opacity-80">
                        <li>
                            <Link
                                to="/"
                                className="text-[#A1A1A1] hover:text-[#7FA38B] cursor-pointer"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/allproperties"
                                className="text-[#A1A1A1] hover:text-[#7FA38B] cursor-pointer"
                            >
                                Properties
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className="text-[#A1A1A1] hover:text-[#7FA38B] cursor-pointer"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h4 className="font-semibold text-white mb-4">Company</h4>
                    <ul className="space-y-2 text-[16px] opacity-80">
                        <li>
                            <Link
                                to="/about"
                                className="text-[#A1A1A1] hover:text-[#7FA38B] cursor-pointer"
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/"
                                className="text-[#A1A1A1] hover:text-[#7FA38B] cursor-pointer"
                            >
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/"
                                className="text-[#A1A1A1] hover:text-[#7FA38B] cursor-pointer"
                            >
                                Terms of Service
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/"
                                className="text-[#A1A1A1] hover:text-[#7FA38B] cursor-pointer"
                            >
                                FAQ
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Social Icons */}
                <div className="flex gap-4 self-start md:self-center mt-2">
                    <div className="bg-[#262626] rounded-full p-[10px]">
                        <a className="hover:text-[#7FA38B] cursor-pointer h-[10px] w-[10px]">
                            <FaFacebookF />
                        </a>
                    </div>
                    <div className="bg-[#262626] rounded-full p-[10px]">
                        <a className="hover:text-[#7FA38B] cursor-pointer h-[10px] w-[10px]">
                            <FaInstagram />
                        </a>
                    </div>
                    <div className="bg-[#262626] rounded-full p-[10px]">
                        <a className="hover:text-[#7FA38B] cursor-pointer h-[10px] w-[10px]">
                            <FaTwitter />
                        </a>
                    </div>
                </div>
            </div>
            {/* Divider */}
            <div className="border-b border-gray-700 mt-[43px]" />

            {/* Footer Bottom */}
            <div className="text-start py-6 lg:ml-[224px] md:ml-12 ml-6 text-sm opacity-60">
                © 2025 Guest Property. All rights reserved.
            </div>
        </footer>
    )
}
