import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import "swiper/css";
import "swiper/css/pagination";
import type { Swiper as SwiperType } from "swiper";

import properties from "../../objects/properties.json";
import {
    IoIosArrowBack,
    IoIosArrowForward,
} from "react-icons/io";
import sectionbg from "../../images/propertydetailsbg.png";
import image1 from "../../images/hotelimag2.png";
import image2 from "../../images/hotelimage1.png";
import image3 from "../../images/hotelimag2.png";
import image4 from "../../images/hotelimage1.png";
import image5 from "../../images/hotelimag2.png";

import wifiicon from "../../images/wifi.png";
import parkingicon from "../../images/parkingicon.png";
import poolicon from "../../images/poolicon.png";
import aircondiicon from "../../images/aircondition.png";
import coffeeicon from "../../images/coffeeicon.png";
import smarttv from "../../images/smarttvicon.png";
import checkinicon from '../../images/checkinicon.png';
import checkouticon from '../../images/checkouticon.png';

import kithcenicon from "../../images/kitchenicon.png";

import locationicongreen from "../../images/locationgreenicon.png";
import locationicon from "../../images/locationicon.png";
import staricon from "../../images/staricon.png";
import bedroomicon from "../../images/bedroomicon.png";
import bathroomicon from "../../images/bathroomicon.png";
import guesticon from "../../images/guesticon.png";
import guesticongray from "../../images/guesticongray.png";
import ReviewChatModal from "./ReviewChatModal";
import PropertyReviewsCarousel from "./PropertyReviewsCarousel";
// import PropertyDetailsReview from "./PropertyDetailsReview";


export default function PropertyDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const property = properties.find((p) => String(p.id) === String(id));
    useEffect(() => {
        if (property) {
            document.title = `${property.title} | Booking | GuestPro`;
        }
    }, [property]);

    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
    const mainSwiperRef = useRef<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const images = [image1, image2, image3, image4, image5];

    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");

    const checkInRef = useRef<HTMLInputElement>(null);
    const checkOutRef = useRef<HTMLInputElement>(null);


    const [guests, setGuests] = useState(2);
    // const [showGuestDropdown, setShowGuestDropdown] = useState(false);





    if (!property) {
        return (
            <div className="p-10 text-center text-red-500 text-xl font-semibold">
                Property Not Found
            </div>
        );
    }

    return (
        <div>
            {/* ================= PAGE HEADING ================= */}
            <div
                className="
        w-full 
        h-[220px]        /* mobile */
        sm:h-[260px]     /* small devices */
        md:h-[300px]     /* medium */
        lg:h-[350px]     /* large */
        bg-cover 
        bg-center 
        flex 
        items-center 
        justify-center 
        text-white 
        text-[32px]      /* mobile text */
        sm:text-[40px]   /* small devices */
        md:text-[60px]   /* medium */
        lg:text-[80px]   /* large */
        font-bold
    "
                style={{
                    backgroundImage: `linear-gradient(
            rgba(0,0,0,0.4),
            rgba(0,0,0,0.4)
        ), url(${sectionbg})`,
                }}
            >
                Properties Booking
            </div>

            <div className="px-4 sm:px-6 md:px-12 lg:px-[120px] pb-20 text-sm sm:text-base">
                {/* ================= MAIN SECTION ================= */}
                <div className="flex flex-col lg:flex-row gap-8 mt-18">

                    {/* ================= LEFT — CAROUSEL ================= */}
                    <div className="w-full lg:w-[60%] relative">

                        {/* MAIN SWIPER */}
                        <Swiper
                            loop={false}   // IMPORTANT: disable loop so next/prev can disable
                            spaceBetween={10}
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[FreeMode, Navigation, Thumbs]}
                            onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
                            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                            className="rounded-xl max-w-full"
                        >
                            {images.map((img, i) => (
                                <SwiperSlide key={i}>
                                    <img
                                        src={img}
                                        alt={`slide - ${i}`}
                                        className="
                        w-full 
                        h-[300px]      
                        sm:h-[340px]
                        md:h-[380px]
                        lg:h-[430px]
                        object-cover 
                        rounded-xl 
                        select-none
                    "
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* CUSTOM NAV BUTTONS */}
                        <div
                            className="
            absolute 
            bottom-32 md:bottom-32 lg:bottom-48
            lg:left-1/2 left-1/2 md:left-1/2 -translate-x-1/2 
            flex 
            gap-3 sm:gap-4 
            z-10
        "
                        >
                            {/* PREV BUTTON */}
                            <button
                                onClick={() => mainSwiperRef.current?.slidePrev()}
                                disabled={activeIndex === 0}
                                className={`
                w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10
                flex items-center justify-center 
                rounded-full 
                text-white cursor-pointer
                ${activeIndex === 0 ? "bg-[#72c48a] lg:bg-transparent/20 lg:backdrop-blur-sm" : "bg-[#72c48a] lg:bg-transparent/30 lg:backdrop-blur-sm"}
            `}
                            >
                                <IoIosArrowBack size={18} />
                            </button>

                            {/* NEXT BUTTON */}
                            <button
                                onClick={() => mainSwiperRef.current?.slideNext()}
                                disabled={activeIndex === images.length - 1}
                                className={`
                w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10
                flex items-center justify-center 
                rounded-full 
                text-white cursor-pointer
                ${activeIndex === images.length - 1 ? "bg-[#72c48a] lg:bg-transparent/20 lg:backdrop-blur-sm" : "bg-[#72c48a] lg:bg-transparent/30 lg:backdrop-blur-sm"}
            `}
                            >
                                <IoIosArrowForward size={18} />
                            </button>
                        </div>

                        {/* THUMB SWIPER */}
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            loop={false}
                            spaceBetween={10}
                            slidesPerView={4}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mt-4"
                        >
                            {images.map((img, i) => (
                                <SwiperSlide key={i}>
                                    <img
                                        src={img}
                                        alt={`thumb - ${i}`}
                                        className={`
          w-full h-20 object-cover rounded-lg cursor-pointer transition 
          ${activeIndex === i ? "opacity-100" : "opacity-40"}
        `}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>


                    </div>


                    {/* ================= RIGHT — BOOKING CARD ================= */}
                    <div className="w-full lg:w-[40%] max-w-md mx-auto">
                        <div className="border rounded-xl p-6 shadow-sm">

                            {/* CHECK-IN */}
                            <div className="relative mb-4">
                                {/* Clickable UI */}
                                <div
                                    className="flex items-center bg-gray-100 rounded-full px-4 py-3 cursor-pointer pointer-events-auto"
                                    onClick={() => checkInRef.current?.showPicker()}
                                >
                                    <img src={checkinicon} className="w-5 mr-3 text-[#7FA38B]" />
                                    <span className="text-gray-600">
                                        {checkIn ? checkIn : "Check-in"}
                                    </span>
                                </div>

                                {/* Invisible date input */}
                                <input
                                    ref={checkInRef}
                                    type="date"
                                    value={checkIn}
                                    onChange={(e) => setCheckIn(e.target.value)}
                                    className="
            absolute inset-0 w-full h-full opacity-0
            pointer-events-none
        "
                                />
                            </div>


                            {/* CHECK-OUT */}
                            <div className="relative mb-4">
                                <div
                                    className="flex items-center bg-gray-100 rounded-full px-4 py-3 cursor-pointer pointer-events-auto"
                                    onClick={() => checkOutRef.current?.showPicker()}
                                >
                                    <img src={checkouticon} className="w-5 mr-3 text-[#7FA38B]" />
                                    <span className="text-gray-600">
                                        {checkOut ? checkOut : "Check-out"}
                                    </span>
                                </div>

                                <input
                                    ref={checkOutRef}
                                    type="date"
                                    value={checkOut}
                                    onChange={(e) => setCheckOut(e.target.value)}
                                    className="
            absolute inset-0 w-full h-full opacity-0
            pointer-events-none
        "
                                />
                            </div>


                            {/* GUESTS */}
                            <div className="relative mb-4">
                                <div className="flex items-center justify-between w-full bg-gray-100 rounded-full px-4 py-3">
                                    {/* Left side: Guest icon + label */}
                                    <div className="flex items-center gap-3">
                                        <img src={guesticon} className="w-5" />
                                        <span>{guests} Guests</span>
                                    </div>

                                    {/* Right side: - and + buttons */}
                                    <div className="flex items-center gap-3">
                                        {/* Decrease button */}
                                        <button
                                            onClick={() => setGuests((prev) => Math.max(0, prev - 1))}
                                            className="
                    w-8 h-8 flex items-center justify-center 
                    rounded-full bg-gray-200 hover:bg-gray-300
                    text-gray-700 text-xl font-bold cursor-pointer
                "
                                        >
                                            –
                                        </button>

                                        {/* Increase button */}
                                        <button
                                            onClick={() => setGuests((prev) => Math.min(20, prev + 1))}
                                            className="
                    w-8 h-8 flex items-center justify-center 
                    rounded-full bg-gray-200 hover:bg-gray-300
                    text-gray-700 text-xl font-bold cursor-pointer
                "
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>


                            {/* PRICE BREAKDOWN */}
                            <div className="text-gray-700 space-y-2 mb-6">
                                <div className="flex justify-between">
                                    <span>${property.rent} × 3 nights</span>
                                    <span>${property.rent * 3}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Cleaning Fee</span>
                                    <span>$200</span>
                                </div>
                                <div className="flex justify-between font-bold pt-2 border-t">
                                    <span>Total</span>
                                    <span>${property.rent * 3 + 200}</span>
                                </div>
                            </div>

                            {/* BOOK BUTTON */}
                            <button
                                onClick={() => navigate(`/make-payment/${id}`)}
                                className="w-full bg-[#7FA38B] text-white py-3 rounded-full font-medium cursor-pointer"
                            >
                                Book Now
                            </button>



                            <p className="text-[18px] text-center text-[#364153] mt-[] lg:mt-[48px]">
                                You won’t be charged yet
                            </p>
                        </div>
                    </div>
                </div>

                {/* ================= PROPERTY DETAILS ================= */}
                <div className="px-4 mt-12">
                    <h2 className="text-3xl font-bold">{property.title}</h2>

                    {/* LOCATION + RATING ROW */}
                    <div className="flex items-center gap-4 sm:gap-6 mt-3 text-gray-700 flex-wrap">
                        {/* Location */}
                        <div className="flex items-center gap-2 text-sm sm:text-base">
                            <img src={locationicongreen} alt="" className="w-4 sm:w-5" />
                            <span>{property.location}</span>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-2 text-sm sm:text-base">
                            <img src={staricon} alt="" className="w-4 sm:w-5" />
                            <span>
                                {property.rating} ({property.reviews} reviews)
                            </span>
                        </div>
                    </div>

                    {/* ROW: OUTLINE ICON BUTTONS + RENT */}
                    <div className="w-full lg:w-[60%] flex flex-col lg:flex-row justify-between items-start lg:items-center mt-6 gap-4 sm:gap-6">

                        {/* LEFT BUTTONS */}
                        <div className="flex flex-wrap gap-2 sm:gap-3">
                            <div className="flex items-center gap-1.5 sm:gap-2 border border-green-600 text-green-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm">
                                <img src={bedroomicon} className="w-4 sm:w-5" />4 Bedrooms
                            </div>

                            <div className="flex items-center gap-1.5 sm:gap-2 border border-green-600 text-green-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm">
                                <img src={bathroomicon} className="w-4 sm:w-5" />3 Bathrooms
                            </div>

                            <div className="flex items-center gap-1.5 sm:gap-2 border border-green-600 text-green-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm">
                                <img src={guesticon} className="w-4 sm:w-5" />
                                Up to {property.guest} Guests
                            </div>
                        </div>

                        {/* RIGHT — RENT */}
                        <div className="text-[32px] sm:text-[40px] md:text-[52px] font-bold text-[#7FA38B] whitespace-nowrap">
                            ${property.rent}
                            <span className="text-[#737373] text-[22px] md:text-[32px] lg:text-[40px]"> / night</span>

                        </div>
                    </div>

                    {/* ABOUT */}
                    <h3 className="text-lg sm:text-xl font-semibold mt-8 sm:mt-10">
                        About This Property
                    </h3>
                    <p className="text-gray-700 mt-2 leading-relaxed text-sm sm:text-base">
                        {property.description}
                    </p>

                    {/* AMENITIES */}
                    <div className="mt-8 sm:mt-10 w-full lg:w-[40%]">
                        <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-5">Amenities</h2>

                        {/* WRAP ITEMS WITHOUT FULL-WIDTH */}
                        <div className="flex flex-wrap gap-3">
                            {[
                                { icon: wifiicon, text: "High-Speed Wifi" },
                                { icon: parkingicon, text: "Free Parking" },
                                { icon: poolicon, text: "Private Pool" },
                                { icon: aircondiicon, text: "Air Conditioning" },
                                { icon: coffeeicon, text: "Coffee Maker" },
                                { icon: smarttv, text: "Smart TV" },
                                { icon: kithcenicon, text: "Full Kitchen" },
                                { icon: guesticon, text: "Up to 8 Guests" },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-2 bg-gray-100 px-4 sm:px-6 py-2 sm:py-3 rounded-full textprimarygray text-xs sm:text-sm w-fit"
                                >
                                    <img src={item.icon} className="w-4 sm:w-5" />
                                    {item.text}
                                </div>
                            ))}
                        </div>
                    </div>



                    {/* ============Review Chat Modal============ */}

                    <ReviewChatModal></ReviewChatModal>


                    {/* ================= RELATED PROPERTIES ================= */}
                    <div className="mt-16">
                        <h2 className="text-2xl font-bold mb-6">Related Properties</h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {properties
                                .filter((p) => p.id !== property.id)
                                .slice(0, 3)
                                .map((item) => (
                                    <div
                                        key={item.id}
                                        className="
                        bg-white rounded-xl shadow-md
                        hover:shadow-lg transition-all duration-300
                        flex flex-col
                        overflow-hidden
                    "
                                    >
                                        {/* Image */}
                                        <img
                                            src={item.room_image}
                                            alt={item.title}
                                            className="w-full h-40 sm:h-44 md:h-48 lg:h-52 object-cover"
                                        />

                                        {/* CONTENT */}
                                        <div className="p-3 sm:p-4 flex flex-col justify-between gap-2 h-full">

                                            {/* TOP INFO */}
                                            <div className="flex flex-col gap-2 flex-grow">
                                                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl text-[#171717] font-semibold break-words">
                                                    {item.title}
                                                </h3>

                                                {/* Location + Rating */}
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-1">
                                                        <img src={locationicon} alt="" className="w-3 h-3 sm:w-4 sm:h-4" />
                                                        <span className="text-[10px] sm:text-xs md:text-sm text-[#525252]">
                                                            {item.location}
                                                        </span>
                                                    </div>

                                                    <div className="flex items-center gap-1">
                                                        <img src={staricon} alt="" className="w-3 h-3 sm:w-4 sm:h-4" />
                                                        <span className="text-[10px] sm:text-xs md:text-sm text-[#525252]">
                                                            {item.rating}
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Guests */}
                                                <div className="flex items-center">
                                                    <img src={guesticongray} alt="guests" className="w-3 h-3 sm:w-4 sm:h-4" />
                                                    <span className="text-[10px] sm:text-xs md:text-sm text-[#525252] ml-1">
                                                        {item.guest} guests
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Price + Button */}
                                            <div className="flex items-center justify-between mt-3 border-t border-gray-200 pt-2">
                                                <p className="font-bold text-sm sm:text-base md:text-lg">
                                                    £{item.rent}
                                                    <span className="text-[#737373] text-[16px] lg:text-[22px]"> / night</span>
                                                </p>

                                                <button
                                                    onClick={() => navigate(`/property/${item.id}`)}
                                                    className="
                                    bg-[#7FA38B] text-white
                                    py-1 sm:py-1.5
                                    px-3 sm:px-4
                                    rounded-full
                                    text-[9px] sm:text-xs md:text-sm
                                    hover:opacity-90 transition cursor-pointer
                                "
                                                >
                                                    View Details
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>


                    <PropertyReviewsCarousel propertyId={property.id} />


                </div>
            </div>
        </div>
    );
}
