import contactbg from "../../images/contactimg.png";
import sendusimg from "../../images/contactformimg.png";
import GetInTouch from "./GetInTouch";
import { useEffect } from "react";
import ReviewChatModal from "./ReviewChatModal";

export default function Contact() {

    useEffect(() => {
        document.title = "Contact | GuestPro";
    }, []);

    return (
        <div className="w-full">

            {/* ================= HERO SECTION ================= */}
            <div
                className="
                    w-full 
                    h-[180px] 
                    sm:h-[240px] 
                    md:h-[300px] 
                    lg:h-[360px] 
                    xl:h-[420px]
                    bg-cover bg-center 
                    flex items-center justify-center
                "
                style={{
                    backgroundImage: `linear-gradient(
                        rgba(0,0,0,0.4),
                        rgba(0,0,0,0.4)
                    ), url(${contactbg})`,
                }}
            >
                <h1 className="
                    text-white 
                    text-[32px]
                    sm:text-[40px]
                    md:text-[50px]
                    lg:text-[58px]
                    font-bold
                ">
                    Contact
                </h1>
            </div>

            {/* ================= CONTACT SECTION ================= */}
            <div className="
                px-4 
                sm:px-6 
                md:px-10 
                lg:px-[80px] 
                xl:px-[140px] 
                py-12 
                md:py-20
            ">
                <div className="
                    flex 
                    flex-col 
                    lg:flex-row 
                    items-center 
                    gap-10 
                    xl:gap-16
                ">

                    {/* LEFT IMAGE */}
                    <div className="w-full lg:w-1/2">
                        <img
                            src={sendusimg}
                            alt="Contact handshake"
                            className="
                                w-full 
                                rounded-xl 
                                object-cover
                                max-h-[420px]
                                sm:max-h-[480px]
                                lg:max-h-none
                            "
                        />
                    </div>

                    {/* RIGHT FORM */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="
                            text-[#171717]
                            text-[26px]
                            sm:text-[30px]
                            md:text-[34px]
                            lg:text-[36px]
                            font-bold 
                            mb-6
                        ">
                            Send Us a Message
                        </h2>

                        <form className="w-full space-y-5">

                            {/* Full Name */}
                            <div>
                                <label className="block text-[#171717] text-[22px] font-medium mb-1">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="
                                        w-full 
                                        h-[48px] 
                                        sm:h-[52px] 
                                        md:h-[56px]
                                        rounded-xl 
                                        bg-[#F5F5F5]
                                        px-4
                                        text-[#171717]
                                        placeholder:text-[#9e9e9e]
                                        focus:outline-none
                                    "
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-[#171717] text-[22px] font-medium mb-1">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="
                                        w-full 
                                        h-[48px] 
                                        sm:h-[52px] 
                                        md:h-[56px]
                                        rounded-xl 
                                        bg-[#F5F5F5]
                                        px-4
                                        text-[#171717]
                                        placeholder:text-[#9e9e9e]
                                        focus:outline-none
                                    "
                                />
                            </div>

                            {/* Phone (Optional) */}
                            <div>
                                <label className="block text-[#171717] text-[22px] font-medium mb-1">
                                    Phone number (Optional)
                                </label>
                                <input
                                    type="text"
                                    placeholder="number..."
                                    className="
                                        w-full 
                                        h-[48px] 
                                        sm:h-[52px] 
                                        md:h-[56px]
                                        rounded-xl 
                                        bg-[#F5F5F5]
                                        px-4
                                        text-[#171717]
                                        placeholder:text-[#9e9e9e]
                                        focus:outline-none
                                    "
                                />
                            </div>

                            {/* Subject */}
                            <div>
                                <label className="block text-[#171717] text-[22px] font-medium mb-1">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your subject"
                                    className="
                                        w-full 
                                        h-[48px] 
                                        sm:h-[52px] 
                                        md:h-[56px]
                                        rounded-xl 
                                        bg-[#F5F5F5]
                                        px-4
                                        text-[#171717]
                                        placeholder:text-[#9e9e9e]
                                        focus:outline-none
                                    "
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-[#171717] text-[22px] font-medium mb-1">
                                    Message
                                </label>
                                <textarea
                                    placeholder="Enter your message"
                                    className="
                                        w-full 
                                        h-[120px] 
                                        sm:h-[140px] 
                                        md:h-[160px]
                                        rounded-xl 
                                        bg-[#F5F5F5]
                                        px-4 py-3
                                        text-[#171717]
                                        placeholder:text-[#9e9e9e]
                                        resize-none
                                        focus:outline-none
                                    "
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="
                                    w-full 
                                    h-[48px] 
                                    sm:h-[52px] 
                                    md:h-[56px]
                                    rounded-4xl 
                                    bg-[#7A9C80]
                                    text-white 
                                    text-lg 
                                    font-medium
                                    mt-4
                                    cursor-pointer
                                "
                            >
                                Submit
                            </button>

                        </form>
                    </div>

                </div>

                <GetInTouch></GetInTouch>
                <ReviewChatModal></ReviewChatModal>
            </div>

        </div>
    );
}
