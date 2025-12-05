import React from "react";

import luxuryIcon from "../../images/luxurystays.png";
import bookingIcon from "../../images/easybooking.png";
import aiIcon from "../../images/aiassistance.png";
import priceIcon from "../../images/guarantee.png";

interface FeatureItem {
    icon: string;
    title: string;
    desc: string;
}

const ChooseProperty: React.FC = () => {
    const features: FeatureItem[] = [
        {
            icon: luxuryIcon,
            title: "Quality Stays",
            desc: "Handpicked premium properties in stunning locations",
        },
        {
            icon: bookingIcon,
            title: "Easy Booking",
            desc: "Simple, secure booking process in just a few clicks",
        },
        {
            icon: aiIcon,
            title: "AI Assistance",
            desc: "24/7 intelligent support for all your questions",
        },
        {
            icon: priceIcon,
            title: "Best Price Guarantee",
            desc: "Competitive rates with no hidden fees or charges",
        },
    ];

    return (
        <section
            className="
                w-full
                px-4
                sm:px-8
                md:px-16
                lg:px-[120px]
                pb-12
                sm:pb-20
                md:pb-24
                lg:pb-[120px]
            "
        >
            {/* Section Header */}
            <h2
                className="
                    text-center text-[#171717] font-bold
                    text-[20px]
                    sm:text-[26px]
                    md:text-[32px]
                    lg:text-[40px]
                "
            >
                Why Choose Guest Property
            </h2>

            <p
                className="
                    text-center text-[#525252]
                    text-[12px]
                    sm:text-[14px]
                    md:text-[18px]
                    lg:text-[22px]
                    mt-2
                    mb-8
                    sm:mb-10
                    md:mb-12
                    lg:mb-[60px]
                "
            >
                Experience the finest in quality short-stay accommodation
            </p>

            {/* Cards */}
            <div
                className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    lg:grid-cols-4
                    gap-4
                    sm:gap-2
                    md:gap-4
                    lg:gap-[20px]
                "
            >
                {features.map((item, idx) => (
                    <div
                        key={idx}
                        className="
                            bg-[#FAFAFA] shadow-md rounded-xl
                            flex flex-col items-center text-center
                            py-4 px-2
                            sm:py-6 sm:px-2
                            md:py-8 md:px-2
                            lg:py-[40px] lg:px-[16px]
                        "
                    >
                        {/* Icon */}
                        <div
                            className="
                                w-[36px] h-[36px]
                                sm:w-[44px] sm:h-[44px]
                                md:w-[50px] md:h-[50px]
                                lg:w-[64px] lg:h-[64px]
                                rounded-full flex items-center justify-center
                                mb-2
                                sm:mb-3
                                md:mb-4
                            "
                            style={{
                                backgroundColor: "rgba(234, 189, 99, 0.3)",
                            }}
                        >
                            <img
                                src={item.icon}
                                alt={item.title}
                                className="
                                    w-[18px] h-[18px]
                                    sm:w-[22px] sm:h-[22px]
                                    md:w-[26px] md:h-[26px]
                                    lg:w-[32px] lg:h-[32px]
                                "
                                style={{
                                    filter:
                                        "brightness(0) saturate(100%) invert(54%) sepia(22%) saturate(398%) hue-rotate(73deg) brightness(90%) contrast(87%)",
                                }}
                            />
                        </div>

                        {/* Title */}
                        <h3
                            className="
                                text-[15px]
                                sm:text-[18px]
                                md:text-[20px]
                                lg:text-[22px]
                                font-bold
                                text-[#171717]
                            "
                        >
                            {item.title}
                        </h3>

                        {/* Description */}
                        <p
                            className="
                                text-[12px]
                                sm:text-[14px]
                                md:text-[15px]
                                lg:text-[16px]
                                text-[#525252]
                                mt-1
                                sm:mt-2
                            "
                        >
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ChooseProperty;
