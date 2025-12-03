import { useSelector } from "react-redux";
import type { RootState } from "@/store";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/headerlogo.png";

export default function Navbar() {
    const location = useLocation();
    const [open, setOpen] = useState(false);
    const authFromRedux = useSelector((state: RootState) => state.auth);

// ✅ Instant fallback from persisted storage (no delay)
const persistedAuth = JSON.parse(
  localStorage.getItem("persist:auth") || "null"
);

// ✅ Final safe auth check
const isAuthenticated =
  authFromRedux?.isAuthenticated || persistedAuth?.isAuthenticated;



    const navLinks = [
        { label: "Home", href: "/" },
        { label: "Properties", href: "/allproperties" },
        { label: "About us", href: "/about" },
        { label: "Contact", href: "/contact" },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white h-[90px] md:h-[95px] lg:h-[104px] shadow-sm">
            <div className="
                h-full flex items-center justify-between
                px-[16px]
                md:px-[30px]
                lg:px-[120px]
            ">

                {/* Logo */}
                <Link to="/" className="cursor-pointer">
                    <img
                        src={logo}
                        alt="Logo"
                        className="
                            h-[42px] w-[155px]
                            md:h-[45px] md:w-[165px]
                            lg:h-[50px] lg:w-[188px]
                        "
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="
                    hidden md:flex items-center 
                    gap-6 
                    md:gap-6 
                    lg:gap-10 
                    text-[15px] 
                    md:text-[16px] 
                    lg:text-[20px] 
                    font-regular
                ">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            to={link.href}
                            className={`transition cursor-pointer ${location.pathname === link.href
                                ? "text-[#7FA38B]"
                                : "text-[#333]"
                                } hover:text-[#7FA38B]`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Desktop Button */}
                <Link
  to={isAuthenticated ? "/allproperties" : "/login"}
  className="
    hidden md:block 
    bg-[#7FA38B] text-white 
    px-4 py-2 
    md:px-5 md:py-2 
    lg:px-6 lg:py-3 
    rounded-full 
    text-[15px] 
    md:text-[16px] 
    lg:text-[20px] 
    hover:bg-[#5d8d6d] cursor-pointer
  "
>
  Book now
</Link>


                {/* Hamburger icon (mobile only) */}
                <button
                    className="block md:hidden text-[30px]"
                    onClick={() => setOpen(true)}
                >
                    <RxHamburgerMenu />
                </button>
            </div>

            {/* MOBILE DRAWER */}
            <div
                className={`fixed top-0 right-0 h-full w-[60%] max-w-[300px] bg-white shadow-lg z-[100] transition-transform duration-300
                ${open ? "translate-x-0" : "translate-x-full"} md:hidden`}
            >
                {/* Close Button */}
                <button
                    className="absolute top-4 right-4 text-[28px]"
                    onClick={() => setOpen(false)}
                >
                    <IoClose />
                </button>

                <div className="flex flex-col gap-6 mt-20 p-6 text-[18px]">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            to={link.href}
                            onClick={() => setOpen(false)}
                            className={`transition cursor-pointer ${location.pathname === link.href
                                ? "text-[#7FA38B]"
                                : "text-[#333]"
                                } hover:text-[#7FA38B]`}
                        >
                            {link.label}
                        </Link>
                    ))}

                    {/* Mobile Button */}
                    <Link
                         to={isAuthenticated ? "/allproperties" : "/login"}
                        className="bg-[#7FA38B] text-white px-6 py-3 rounded-full text-[18px] hover:bg-[#5d8d6d] cursor-pointer"
                    >
                        Book now
                    </Link>
                </div>
            </div>

            {/* BACKDROP */}
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 bg-black/40 z-[90] md:hidden"
                />
            )}
        </header>
    );
}
