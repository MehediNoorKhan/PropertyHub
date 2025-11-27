import { useEffect } from "react";
import aboutusbg from "../../images/aboutusbg.png";
import aboutusstory from "../../images/aboutusstory.png";
import Team from "./Team";
import Values from "./Values";
import ReviewChatModal from "./ReviewChatModal";

export default function AboutUs() {

    useEffect(() => {
        document.title = "About | GuestPro";
    }, []);

    return (
        <div className="w-full">

            {/* ================= HERO SECTION ================= */}
            <div
                className="
                    w-full 
                    h-[180px] 
                    sm:h-[240px] 
                    md:h-[320px] 
                    lg:h-[380px] 
                    xl:h-[450px]
                    bg-cover bg-center flex items-center justify-center
                "
                style={{
                    backgroundImage: `linear-gradient(
                        rgba(0,0,0,0.4),
                        rgba(0,0,0,0.4)
                    ), url(${aboutusbg})`,
                }}
            >
                <h1
                    className="
                        text-white 
                        text-[28px]
                        sm:text-[36px]
                        md:text-[48px]
                        lg:text-[58px]
                        xl:text-[64px]
                        font-bold
                    "
                >
                    About us
                </h1>
            </div>

            {/* ================= OUR STORY SECTION ================= */}
            <div
                className="
                    px-4 
                    sm:px-6 
                    md:px-10 
                    lg:px-[80px] 
                    xl:px-[120px] 
                    py-12 
                    md:py-20
                "
            >
                <div
                    className="
                        flex 
                        flex-col 
                        md:flex-row 
                        items-center 
                        gap-10 
                        lg:gap-14
                    "
                >

                    {/* LEFT IMAGE */}
                    <div className="w-full md:w-1/2">
                        <img
                            src={aboutusstory}
                            alt="About Us story"
                            className="
                                w-full 
                                rounded-xl 
                                object-cover
                                max-h-[400px]
                                sm:max-h-[450px]
                                md:max-h-none
                            "
                        />
                    </div>

                    {/* RIGHT TEXT */}
                    <div className="w-full md:w-1/2">

                        <h2
                            className="
                                textprimaryblack 
                                text-[28px]
                                sm:text-[32px]
                                md:text-[36px]
                                lg:text-[40px]
                                font-bold 
                                mb-[16px] 
                                sm:mb-[20px] 
                                md:mb-[24px]
                            "
                        >
                            Our Story
                        </h2>

                        <p
                            className="
                                textprimarygray
                                text-[16px] 
                                sm:text-[18px] 
                                md:text-[20px] 
                                lg:text-[22px]
                                leading-relaxed 
                                mb-4
                            "
                        >
                            Guest Property began with a mission to provide premium short-stay
                            experiences that feel like home. We understood that travelers
                            wanted more than just a place to sleep—they wanted a destination
                            that feels personal, comfortable, and thoughtfully curated.
                        </p>

                        <p
                            className="
                                textprimarygray
                                text-[16px] 
                                sm:text-[18px] 
                                md:text-[20px] 
                                lg:text-[22px]
                                leading-relaxed 
                                mb-4
                            "
                        >
                            With over 25 properties across sought-after locations, we combine
                            luxury comfort with smart AI-driven booking simplicity. Our
                            platform eliminates the middleman, allowing guests to book
                            directly and property owners to maximize their earnings.
                        </p>

                        <p
                            className="
                                textprimarygray
                                text-[16px] 
                                sm:text-[18px] 
                                md:text-[20px] 
                                lg:text-[22px]
                                leading-relaxed 
                                mb-4
                            "
                        >
                            Every property in our collection is carefully vetted and meets our
                            high standards for quality, cleanliness, and guest experience. We
                            believe in transparency, exceptional service, and creating stays
                            that turn into cherished memories.
                        </p>

                    </div>
                </div>
            </div>

            {/* ==========================Our Values section================================ */}
            <Values />

            {/* ==========================Our Team section================================ */}
            <Team />

            {/* ==========================Review Chat Modal================================ */}
            {/* Make sure the modal trigger button inside ReviewChatModal has cursor-pointer */}
            <ReviewChatModal />
        </div>
    );
}
