import locationIcon from "../../images/locationicon.png";
import emailIcon from "../../images/emailIcon.png";
import timeIcon from "../../images/timeicon.png";

interface FeatureItem {
    icon: string;
    title: string;
    desc: string;
    msg: string;
}

const GetInTouch: React.FC = () => {
    const features: FeatureItem[] = [
        {
            icon: locationIcon,
            title: "Address",
            desc: "Perth, Western Australia",
            msg: "Visit us at our office",
        },
        {
            icon: emailIcon,
            title: "Email",
            desc: "hello@guestproperth.com.au",
            msg: "Send us an email anytime",
        },
        {
            icon: timeIcon,
            title: "Working Hours",
            desc: "Mon–Fri: 9:00 AM – 6:00 PM",
            msg: "We're here to help",
        },
    ];

    return (
        <section
            className="
                w-full
                px-4
                sm:px-2
                md:px-3
                lg:px-4
                pb-12
                sm:pb-20
                md:pb-24
                lg:pb-[120px]
                mt-8
                md:mt-12
                lg:mt-[120px]
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
                Get in Touch
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
                Multiple ways to reach us. Choose what works best for you.
            </p>

            {/* Cards */}
            <div
                className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    lg:grid-cols-3
                    gap-4
                    md:gap-6
                    lg:gap-8
                "
            >
                {features.map((item, idx) => (
                    <div
                        key={idx}
                        className="
                            bg-[#FAFAFA] shadow-md rounded-xl
                            flex flex-col items-center text-center
                            py-4 px-2
                            sm:py-4 sm:px-2
                            md:py-4 md:px-4
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
        w-full block
        text-[15px]
        sm:text-[18px]
        md:text-[20px]
        lg:text-[22px]
        font-bold
        text-[#171717]
        whitespace-normal
        break-words
    "
                        >
                            {item.title}
                        </h3>

                        {/* Description */}
                        <p
                            className="
        w-full block
        text-[12px]
        sm:text-[12px]
        md:text-[14px]
        lg:text-[18px]
        text-[#000000]
        mt-1
        sm:mt-2
        whitespace-normal
        break-words
    "
                        >
                            {item.desc}
                        </p>

                        {/* Message */}
                        <p
                            className="
        w-full block
        text-[12px]
        sm:text-[14px]
        md:text-[15px]
        lg:text-[16px]
        text-[#525252]
        mt-1
        sm:mt-2
        whitespace-normal
        break-words
    "
                        >
                            {item.msg}
                        </p>

                    </div>
                ))}
            </div>
        </section>
    );
};

export default GetInTouch;
