import { useNavigate } from "react-router-dom";
import properties from "../../objects/properties.json";
import locationIcon from "../../images/locationicon.png";
import starIcon from "../../images/star.png";
import guestsicon from "../../images/guestsicon.png";

const FeaturedProperties = () => {
    const navigate = useNavigate();

    const sorted = [...properties]
        .sort((a, b) => a.rent - b.rent)
        .slice(0, 6);

    return (
        <section className="w-full flex flex-col items-center py-12 md:py-20 lg:py-28 px-4 md:px-10 lg:px-28">

            {/* Title */}
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#171717] font-bold text-center">
                Featured Properties
            </h2>

            <p className="text-[#525252] text-xs sm:text-sm md:text-base lg:text-xl mt-2 md:mt-4 text-center max-w-xl">
                Handpicked luxury stays for unforgettable experiences
            </p>

            {/* Property Cards */}
            <div
                className="
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-3
                gap-4
                sm:gap-6
                md:gap-8 
                lg:gap-14
                mt-8
                w-full
            "
            >
                {sorted.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => navigate(`/property/${item.id}`)}
                        className="
                            bg-white rounded-xl shadow-md overflow-hidden 
                            hover:shadow-lg transition-all duration-300
                            cursor-pointer
                        "
                    >
                        {/* Image */}
                        <img
                            src={item.room_image}
                            alt={item.title}
                            className="w-full h-40 sm:h-44 md:h-48 lg:h-52 object-cover cursor-pointer"
                        />

                        {/* Content */}
                        <div className="p-3 sm:p-3 md:p-4 flex flex-col gap-2">

                            {/* Title */}
                            <h3 className="text-sm sm:text-base md:text-lg lg:text-2xl text-[#171717] font-semibold">
                                {item.title}
                            </h3>

                            {/* Location & Rating */}
                            <div className="flex items-center justify-between mt-1">
                                <div className="flex items-center gap-1">
                                    <img src={locationIcon} alt="location" className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                                    <span className="text-[10px] sm:text-xs md:text-sm lg:text-base text-[#525252]">
                                        {item.location}
                                    </span>
                                </div>

                                <div className="flex items-center gap-1">
                                    <img src={starIcon} alt="rating" className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                                    <span className="text-[10px] sm:text-xs md:text-sm lg:text-base text-[#525252]">
                                        {item.rating}
                                    </span>
                                </div>
                            </div>

                            {/* Guests */}
                            <div className="flex items-center mt-1">
                                <img src={guestsicon} alt="guests" className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                                <span className="text-[10px] sm:text-xs md:text-sm lg:text-base text-[#525252] ml-1">
                                    {item.guest} guests
                                </span>
                            </div>

                            {/* Price & Button */}
                            <div className="flex items-center justify-between mt-2 border-t border-[#E5E5E5] pt-2">
                                <p className="font-bold text-sm sm:text-base md:text-lg lg:text-xl">
                                    £{item.rent}
                                    <span className="text-[#737373] text-[10px] sm:text-xs md:text-sm"> / night</span>
                                </p>

                                <button
                                    onClick={(e) => {
                                        e.stopPropagation(); // prevent card click
                                        navigate(`/property/${item.id}`);
                                    }}
                                    className="
                                        bg-[#7FA38B]
                                        text-white
                                        py-1
                                        sm:py-1.5
                                        px-3
                                        sm:px-4
                                        rounded-full
                                        text-[9px]
                                        sm:text-xs
                                        md:text-sm
                                        hover:opacity-90
                                        transition
                                        cursor-pointer
                                    "
                                >
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* View All Button */}
            <button
                onClick={() => navigate("/allproperties")}
                className="
                    mt-12
                    px-5
                    py-2
                    sm:px-6
                    sm:py-2.5
                    md:px-8
                    lg:px-20
                    md:py-3
                    lg:py-5
                    text-xs
                    lg:text-[20px]
                    sm:text-sm
                    md:text-base
                    border
                    border-[#7FA38B]
                    text-[#7FA38B]
                    rounded-full
                    hover:bg-[#7FA38B]
                    hover:text-white
                    transition
                    cursor-pointer
                "
            >
                View All Properties
            </button>
        </section>
    );
};

export default FeaturedProperties;
