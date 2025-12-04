// import { useState, useRef, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import { FreeMode, Navigation, Thumbs } from "swiper/modules";
// import { useParams } from "react-router";
// import { useNavigate } from "react-router";
// import "swiper/css";
// import "swiper/css/pagination";
// import type { Swiper as SwiperType } from "swiper";

// import properties from "../../objects/properties.json";
// import {
//     IoIosArrowBack,
//     IoIosArrowForward,
// } from "react-icons/io";
// import sectionbg from "../../images/propertydetailsbg.png";
// import image1 from "../../images/hotelimag2.png";
// import image2 from "../../images/hotelimage1.png";
// import image3 from "../../images/hotelimag2.png";
// import image4 from "../../images/hotelimage1.png";
// import image5 from "../../images/hotelimag2.png";

// import wifiicon from "../../images/wifi.png";
// import parkingicon from "../../images/parkingicon.png";
// import poolicon from "../../images/poolicon.png";
// import aircondiicon from "../../images/aircondition.png";
// import coffeeicon from "../../images/coffeeicon.png";
// import smarttv from "../../images/smarttvicon.png";
// import checkinicon from '../../images/checkinicon.png';
// import checkouticon from '../../images/checkouticon.png';

// import kithcenicon from "../../images/kitchenicon.png";

// import locationicongreen from "../../images/locationgreenicon.png";
// import locationicon from "../../images/locationicon.png";
// import staricon from "../../images/staricon.png";
// import bedroomicon from "../../images/bedroomicon.png";
// import bathroomicon from "../../images/bathroomicon.png";
// import guesticon from "../../images/guesticon.png";
// import guesticongray from "../../images/guesticongray.png";
// import ReviewChatModal from "./ReviewChatModal";
// import PropertyReviewsCarousel from "./PropertyReviewsCarousel";
// // import PropertyDetailsReview from "./PropertyDetailsReview";


// export default function PropertyDetails() {
//     const { id } = useParams();
//     const navigate = useNavigate();
//     const property = properties.find((p) => String(p.id) === String(id));
//     useEffect(() => {
//         if (property) {
//             document.title = `${property.title} | Booking | GuestPro`;
//         }
//     }, [property]);

//     const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
//     const mainSwiperRef = useRef<SwiperType | null>(null);
//     const [activeIndex, setActiveIndex] = useState<number>(0);

//     const images = [image1, image2, image3, image4, image5];

//     const [checkIn, setCheckIn] = useState("");
//     const [checkOut, setCheckOut] = useState("");

//     const checkInRef = useRef<HTMLInputElement>(null);
//     const checkOutRef = useRef<HTMLInputElement>(null);


//     const [guests, setGuests] = useState(2);
//     // const [showGuestDropdown, setShowGuestDropdown] = useState(false);





//     if (!property) {
//         return (
//             <div className="p-10 text-center text-red-500 text-xl font-semibold">
//                 Property Not Found
//             </div>
//         );
//     }

//     return (
//         <div>
//             {/* ================= PAGE HEADING ================= */}
//             <div
//                 className="
//         w-full 
//         h-[220px]        /* mobile */
//         sm:h-[260px]     /* small devices */
//         md:h-[300px]     /* medium */
//         lg:h-[350px]     /* large */
//         bg-cover 
//         bg-center 
//         flex 
//         items-center 
//         justify-center 
//         text-white 
//         text-[32px]      /* mobile text */
//         sm:text-[40px]   /* small devices */
//         md:text-[60px]   /* medium */
//         lg:text-[80px]   /* large */
//         font-bold
//     "
//                 style={{
//                     backgroundImage: `linear-gradient(
//             rgba(0,0,0,0.4),
//             rgba(0,0,0,0.4)
//         ), url(${sectionbg})`,
//                 }}
//             >
//                 Properties Booking
//             </div>

//             <div className="px-4 sm:px-6 md:px-12 lg:px-[120px] pb-20 text-sm sm:text-base">
//                 {/* ================= MAIN SECTION ================= */}
//                 <div className="flex flex-col lg:flex-row gap-8 mt-18">

//                     {/* ================= LEFT — CAROUSEL ================= */}
//                     <div className="w-full lg:w-[60%] relative">

//                         {/* MAIN SWIPER */}
//                         <Swiper
//                             loop={false}   // IMPORTANT: disable loop so next/prev can disable
//                             spaceBetween={10}
//                             thumbs={{ swiper: thumbsSwiper }}
//                             modules={[FreeMode, Navigation, Thumbs]}
//                             onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
//                             onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
//                             className="rounded-xl max-w-full"
//                         >
//                             {images.map((img, i) => (
//                                 <SwiperSlide key={i}>
//                                     <img
//                                         src={img}
//                                         alt={`slide - ${i}`}
//                                         className="
//                         w-full 
//                         h-[300px]      
//                         sm:h-[340px]
//                         md:h-[380px]
//                         lg:h-[430px]
//                         object-cover 
//                         rounded-xl 
//                         select-none
//                     "
//                                     />
//                                 </SwiperSlide>
//                             ))}
//                         </Swiper>

//                         {/* CUSTOM NAV BUTTONS */}
//                         <div
//                             className="
//             absolute 
//             bottom-32 md:bottom-32 lg:bottom-48
//             lg:left-1/2 left-1/2 md:left-1/2 -translate-x-1/2 
//             flex 
//             gap-3 sm:gap-4 
//             z-10
//         "
//                         >
//                             {/* PREV BUTTON */}
//                             <button
//                                 onClick={() => mainSwiperRef.current?.slidePrev()}
//                                 disabled={activeIndex === 0}
//                                 className={`
//                 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10
//                 flex items-center justify-center 
//                 rounded-full 
//                 text-white cursor-pointer
//                 ${activeIndex === 0 ? "bg-[#72c48a] lg:bg-transparent/20 lg:backdrop-blur-sm" : "bg-[#72c48a] lg:bg-transparent/30 lg:backdrop-blur-sm"}
//             `}
//                             >
//                                 <IoIosArrowBack size={18} />
//                             </button>

//                             {/* NEXT BUTTON */}
//                             <button
//                                 onClick={() => mainSwiperRef.current?.slideNext()}
//                                 disabled={activeIndex === images.length - 1}
//                                 className={`
//                 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10
//                 flex items-center justify-center 
//                 rounded-full 
//                 text-white cursor-pointer
//                 ${activeIndex === images.length - 1 ? "bg-[#72c48a] lg:bg-transparent/20 lg:backdrop-blur-sm" : "bg-[#72c48a] lg:bg-transparent/30 lg:backdrop-blur-sm"}
//             `}
//                             >
//                                 <IoIosArrowForward size={18} />
//                             </button>
//                         </div>

//                         {/* THUMB SWIPER */}
//                         <Swiper
//                             onSwiper={setThumbsSwiper}
//                             loop={false}
//                             spaceBetween={10}
//                             slidesPerView={4}
//                             freeMode={true}
//                             watchSlidesProgress={true}
//                             modules={[FreeMode, Navigation, Thumbs]}
//                             className="mt-4"
//                         >
//                             {images.map((img, i) => (
//                                 <SwiperSlide key={i}>
//                                     <img
//                                         src={img}
//                                         alt={`thumb - ${i}`}
//                                         className={`
//           w-full h-20 object-cover rounded-lg cursor-pointer transition 
//           ${activeIndex === i ? "opacity-100" : "opacity-40"}
//         `}
//                                     />
//                                 </SwiperSlide>
//                             ))}
//                         </Swiper>


//                     </div>


//                     {/* ================= RIGHT — BOOKING CARD ================= */}
//                     <div className="w-full lg:w-[40%] max-w-md mx-auto">
//                         <div className="border rounded-xl p-6 shadow-sm">

//                             {/* CHECK-IN */}
//                             <div className="relative mb-4">
//                                 {/* Clickable UI */}
//                                 <div
//                                     className="flex items-center bg-gray-100 rounded-full px-4 py-3 cursor-pointer pointer-events-auto"
//                                     onClick={() => checkInRef.current?.showPicker()}
//                                 >
//                                     <img src={checkinicon} className="w-5 mr-3 text-[#7FA38B]" />
//                                     <span className="text-gray-600">
//                                         {checkIn ? checkIn : "Check-in"}
//                                     </span>
//                                 </div>

//                                 {/* Invisible date input */}
//                                 <input
//                                     ref={checkInRef}
//                                     type="date"
//                                     value={checkIn}
//                                     onChange={(e) => setCheckIn(e.target.value)}
//                                     className="
//             absolute inset-0 w-full h-full opacity-0
//             pointer-events-none
//         "
//                                 />
//                             </div>


//                             {/* CHECK-OUT */}
//                             <div className="relative mb-4">
//                                 <div
//                                     className="flex items-center bg-gray-100 rounded-full px-4 py-3 cursor-pointer pointer-events-auto"
//                                     onClick={() => checkOutRef.current?.showPicker()}
//                                 >
//                                     <img src={checkouticon} className="w-5 mr-3 text-[#7FA38B]" />
//                                     <span className="text-gray-600">
//                                         {checkOut ? checkOut : "Check-out"}
//                                     </span>
//                                 </div>

//                                 <input
//                                     ref={checkOutRef}
//                                     type="date"
//                                     value={checkOut}
//                                     onChange={(e) => setCheckOut(e.target.value)}
//                                     className="
//             absolute inset-0 w-full h-full opacity-0
//             pointer-events-none
//         "
//                                 />
//                             </div>


//                             {/* GUESTS */}
//                             <div className="relative mb-4">
//                                 <div className="flex items-center justify-between w-full bg-gray-100 rounded-full px-4 py-3">
//                                     {/* Left side: Guest icon + label */}
//                                     <div className="flex items-center gap-3">
//                                         <img src={guesticon} className="w-5" />
//                                         <span>{guests} Guests</span>
//                                     </div>

//                                     {/* Right side: - and + buttons */}
//                                     <div className="flex items-center gap-3">
//                                         {/* Decrease button */}
//                                         <button
//                                             onClick={() => setGuests((prev) => Math.max(0, prev - 1))}
//                                             className="
//                     w-8 h-8 flex items-center justify-center 
//                     rounded-full bg-gray-200 hover:bg-gray-300
//                     text-gray-700 text-xl font-bold cursor-pointer
//                 "
//                                         >
//                                             –
//                                         </button>

//                                         {/* Increase button */}
//                                         <button
//                                             onClick={() => setGuests((prev) => Math.min(20, prev + 1))}
//                                             className="
//                     w-8 h-8 flex items-center justify-center 
//                     rounded-full bg-gray-200 hover:bg-gray-300
//                     text-gray-700 text-xl font-bold cursor-pointer
//                 "
//                                         >
//                                             +
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>


//                             {/* PRICE BREAKDOWN */}
//                             <div className="text-gray-700 space-y-2 mb-6">
//                                 <div className="flex justify-between">
//                                     <span>${property.rent} × 3 nights</span>
//                                     <span>${property.rent * 3}</span>
//                                 </div>
//                                 <div className="flex justify-between">
//                                     <span>Cleaning Fee</span>
//                                     <span>$200</span>
//                                 </div>
//                                 <div className="flex justify-between font-bold pt-2 border-t">
//                                     <span>Total</span>
//                                     <span>${property.rent * 3 + 200}</span>
//                                 </div>
//                             </div>

//                             {/* BOOK BUTTON */}
//                             <button
//                                 onClick={() => navigate(`/make-payment/${id}`)}
//                                 className="w-full bg-[#7FA38B] text-white py-3 rounded-full font-medium cursor-pointer"
//                             >
//                                 Book Now
//                             </button>



//                             <p className="text-[18px] text-center text-[#364153] mt-[] lg:mt-[48px]">
//                                 You won’t be charged yet
//                             </p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* ================= PROPERTY DETAILS ================= */}
//                 <div className="px-4 mt-12">
//                     <h2 className="text-3xl font-bold">{property.title}</h2>

//                     {/* LOCATION + RATING ROW */}
//                     <div className="flex items-center gap-4 sm:gap-6 mt-3 text-gray-700 flex-wrap">
//                         {/* Location */}
//                         <div className="flex items-center gap-2 text-sm sm:text-base">
//                             <img src={locationicongreen} alt="" className="w-4 sm:w-5" />
//                             <span>{property.location}</span>
//                         </div>

//                         {/* Rating */}
//                         <div className="flex items-center gap-2 text-sm sm:text-base">
//                             <img src={staricon} alt="" className="w-4 sm:w-5" />
//                             <span>
//                                 {property.rating} ({property.reviews} reviews)
//                             </span>
//                         </div>
//                     </div>

//                     {/* ROW: OUTLINE ICON BUTTONS + RENT */}
//                     <div className="w-full lg:w-[60%] flex flex-col lg:flex-row justify-between items-start lg:items-center mt-6 gap-4 sm:gap-6">

//                         {/* LEFT BUTTONS */}
//                         <div className="flex flex-wrap gap-2 sm:gap-3">
//                             <div className="flex items-center gap-1.5 sm:gap-2 border border-green-600 text-green-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm">
//                                 <img src={bedroomicon} className="w-4 sm:w-5" />4 Bedrooms
//                             </div>

//                             <div className="flex items-center gap-1.5 sm:gap-2 border border-green-600 text-green-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm">
//                                 <img src={bathroomicon} className="w-4 sm:w-5" />3 Bathrooms
//                             </div>

//                             <div className="flex items-center gap-1.5 sm:gap-2 border border-green-600 text-green-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm">
//                                 <img src={guesticon} className="w-4 sm:w-5" />
//                                 Up to {property.guest} Guests
//                             </div>
//                         </div>

//                         {/* RIGHT — RENT */}
//                         <div className="text-[32px] sm:text-[40px] md:text-[52px] font-bold text-[#7FA38B] whitespace-nowrap">
//                             ${property.rent}
//                             <span className="text-[#737373] text-[22px] md:text-[32px] lg:text-[40px]"> / night</span>

//                         </div>
//                     </div>

//                     {/* ABOUT */}
//                     <h3 className="text-lg sm:text-xl font-semibold mt-8 sm:mt-10">
//                         About This Property
//                     </h3>
//                     <p className="text-gray-700 mt-2 leading-relaxed text-sm sm:text-base">
//                         {property.description}
//                     </p>

//                     {/* AMENITIES */}
//                     <div className="mt-8 sm:mt-10 w-full lg:w-[40%]">
//                         <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-5">Amenities</h2>

//                         {/* WRAP ITEMS WITHOUT FULL-WIDTH */}
//                         <div className="flex flex-wrap gap-3">
//                             {[
//                                 { icon: wifiicon, text: "High-Speed Wifi" },
//                                 { icon: parkingicon, text: "Free Parking" },
//                                 { icon: poolicon, text: "Private Pool" },
//                                 { icon: aircondiicon, text: "Air Conditioning" },
//                                 { icon: coffeeicon, text: "Coffee Maker" },
//                                 { icon: smarttv, text: "Smart TV" },
//                                 { icon: kithcenicon, text: "Full Kitchen" },
//                                 { icon: guesticon, text: "Up to 8 Guests" },
//                             ].map((item, i) => (
//                                 <div
//                                     key={i}
//                                     className="flex items-center gap-2 bg-gray-100 px-4 sm:px-6 py-2 sm:py-3 rounded-full textprimarygray text-xs sm:text-sm w-fit"
//                                 >
//                                     <img src={item.icon} className="w-4 sm:w-5" />
//                                     {item.text}
//                                 </div>
//                             ))}
//                         </div>
//                     </div>



//                     {/* ============Review Chat Modal============ */}

//                     <ReviewChatModal></ReviewChatModal>


//                     {/* ================= RELATED PROPERTIES ================= */}
//                     <div className="mt-16">
//                         <h2 className="text-2xl font-bold mb-6">Related Properties</h2>

//                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                             {properties
//                                 .filter((p) => p.id !== property.id)
//                                 .slice(0, 3)
//                                 .map((item) => (
//                                     <div
//                                         key={item.id}
//                                         className="
//                         bg-white rounded-xl shadow-md
//                         hover:shadow-lg transition-all duration-300
//                         flex flex-col
//                         overflow-hidden
//                     "
//                                     >
//                                         {/* Image */}
//                                         <img
//                                             src={item.room_image}
//                                             alt={item.title}
//                                             className="w-full h-40 sm:h-44 md:h-48 lg:h-52 object-cover"
//                                         />

//                                         {/* CONTENT */}
//                                         <div className="p-3 sm:p-4 flex flex-col justify-between gap-2 h-full">

//                                             {/* TOP INFO */}
//                                             <div className="flex flex-col gap-2 flex-grow">
//                                                 <h3 className="text-sm sm:text-base md:text-lg lg:text-xl text-[#171717] font-semibold break-words">
//                                                     {item.title}
//                                                 </h3>

//                                                 {/* Location + Rating */}
//                                                 <div className="flex items-center justify-between">
//                                                     <div className="flex items-center gap-1">
//                                                         <img src={locationicon} alt="" className="w-3 h-3 sm:w-4 sm:h-4" />
//                                                         <span className="text-[10px] sm:text-xs md:text-sm text-[#525252]">
//                                                             {item.location}
//                                                         </span>
//                                                     </div>

//                                                     <div className="flex items-center gap-1">
//                                                         <img src={staricon} alt="" className="w-3 h-3 sm:w-4 sm:h-4" />
//                                                         <span className="text-[10px] sm:text-xs md:text-sm text-[#525252]">
//                                                             {item.rating}
//                                                         </span>
//                                                     </div>
//                                                 </div>

//                                                 {/* Guests */}
//                                                 <div className="flex items-center">
//                                                     <img src={guesticongray} alt="guests" className="w-3 h-3 sm:w-4 sm:h-4" />
//                                                     <span className="text-[10px] sm:text-xs md:text-sm text-[#525252] ml-1">
//                                                         {item.guest} guests
//                                                     </span>
//                                                 </div>
//                                             </div>

//                                             {/* Price + Button */}
//                                             <div className="flex items-center justify-between mt-3 border-t border-gray-200 pt-2">
//                                                 <p className="font-bold text-sm sm:text-base md:text-lg">
//                                                     £{item.rent}
//                                                     <span className="text-[#737373] text-[16px] lg:text-[22px]"> / night</span>
//                                                 </p>

//                                                 <button
//                                                     onClick={() => navigate(`/property/${item.id}`)}
//                                                     className="
//                                     bg-[#7FA38B] text-white
//                                     py-1 sm:py-1.5
//                                     px-3 sm:px-4
//                                     rounded-full
//                                     text-[9px] sm:text-xs md:text-sm
//                                     hover:opacity-90 transition cursor-pointer
//                                 "
//                                                 >
//                                                     View Details
//                                                 </button>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 ))}
//                         </div>
//                     </div>


//                     <PropertyReviewsCarousel propertyId={property.id} />


//                 </div>
//             </div>
//         </div>
//     );
// }



import { useState, useRef, useEffect, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useParams, useNavigate } from "react-router";
import type { Swiper as SwiperType } from "swiper";
import sectionbg from "../../images/propertydetailsbg.png";
import checkinicon from "../../images/checkinicon.png";
import checkouticon from "../../images/checkouticon.png";
import locationicongreen from "../../images/locationgreenicon.png";
import locationIcon from "../../images/locationicon.png";
import staricon from "../../images/staricon.png";
import guesticon from "../../images/guesticon.png";
import bedroomicon from "../../images/bedroomicon.png";
import bathroomicon from "../../images/bathroomicon.png";

import ReviewChatModal from "./ReviewChatModal";
import PropertyReviewsCarousel from "./PropertyReviewsCarousel";

import {
    useGetSinglePropertyQuery,
    useGetAllPropertiesQuery,
    useGetAmenitiesQuery
} from "@/store/api/auth.api";

export default function PropertyDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data: allPropertiesData, isLoading: relatedLoading } =
        useGetAllPropertiesQuery();

    const { data, isLoading } = useGetSinglePropertyQuery(id!);

    const property = data?.data;

    const { data: amenitiesData, isLoading: amenitiesLoading } =
        useGetAmenitiesQuery(property?.id, {
            skip: !property?.id,
        });
    const amenities = amenitiesData?.data || [];





    // ✅ FIXED IMAGE HANDLING (NO FLICKER)
    const images = useMemo(() => {
        if (!property) return ["/placeholder.png"];

        const rawImages = [
            ...(Array.isArray(property.main_image) ? property.main_image : []),
            ...(Array.isArray(property.multiple_image)
                ? property.multiple_image
                : []),
        ];

        if (rawImages.length === 0) return ["/placeholder.png"];

        return rawImages.map((img: string) =>
            img.startsWith("http")
                ? img
                : `${import.meta.env.VITE_API_URL.replace(/\/$/, "")}/${img.replace(
                    /^\//,
                    ""
                )}`
        );
    }, [property]);

    useEffect(() => {
        if (property) {
            document.title = `${property.title} | Booking | GuestPro`;
        }
    }, [property]);

    const relatedProperties =
        allPropertiesData?.data
            ?.filter((p) => String(p.id) !== String(id))
            .slice(0, 3) || [];


    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
    const mainSwiperRef = useRef<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const checkInRef = useRef<HTMLInputElement>(null);
    const checkOutRef = useRef<HTMLInputElement>(null);

    const [guests, setGuests] = useState(2);

    // ✅ PRICE CALCULATION
    const nights = 3;
    const rentTotal = property?.price * nights || 0;
    const cleaningFee = property?.cleaning_fee || 0;
    const totalPrice = rentTotal + cleaningFee;

    if (isLoading) {
        return <div className="p-10 text-center text-xl">Loading Property...</div>;
    }

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
                className="w-full h-[260px] md:h-[350px] bg-cover bg-center flex items-center justify-center text-white text-[40px] md:text-[80px] font-bold"
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.4)), url(${sectionbg})`,
                }}
            >
                Properties Booking
            </div>

            <div className="px-4 md:px-[120px] pb-20">
                <div className="flex flex-col lg:flex-row gap-8 mt-12">

                    {/* ================= LEFT — CAROUSEL ================= */}
                    <div className="w-full lg:w-[60%] relative">
                        <Swiper
                            loop={false}
                            spaceBetween={10}
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[FreeMode, Navigation, Thumbs]}
                            onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
                            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                            className="rounded-xl"
                        >
                            {images.map((img, i) => (
                                <SwiperSlide key={i}>
                                    <img
                                        src={img}
                                        className="w-full h-[400px] object-cover rounded-xl"
                                        loading="lazy"
                                        onError={(e) => {
                                            if (e.currentTarget.src.includes("placeholder")) return;
                                            e.currentTarget.src = "/placeholder.png";
                                        }}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <Swiper
                            onSwiper={setThumbsSwiper}
                            spaceBetween={10}
                            slidesPerView={4}
                            freeMode
                            watchSlidesProgress
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mt-4"
                        >
                            {images.map((img, i) => (
                                <SwiperSlide key={i}>
                                    <img
                                        src={img}
                                        className={`w-full h-20 object-cover rounded-lg cursor-pointer ${activeIndex === i ? "opacity-100" : "opacity-40"
                                            }`}
                                        onError={(e) => {
                                            if (e.currentTarget.src.includes("placeholder")) return;
                                            e.currentTarget.src = "/placeholder.png";
                                        }}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* ================= RIGHT — BOOKING CARD ================= */}
                    <div className="w-full lg:w-[40%] max-w-md mx-auto">
                        <div className="border rounded-xl p-6 shadow-sm bg-white">

                            {/* CHECK-IN */}
                            <div className="relative mb-4">
                                <div
                                    className="flex items-center bg-gray-100 rounded-full px-4 py-3 cursor-pointer"
                                    onClick={() => checkInRef.current?.showPicker()}
                                >
                                    <img src={checkinicon} className="w-5 mr-3" />
                                    {checkIn || "Check-in"}
                                </div>
                                <input
                                    ref={checkInRef}
                                    type="date"
                                    value={checkIn}
                                    onChange={(e) => setCheckIn(e.target.value)}
                                    className="absolute inset-0 opacity-0"
                                />
                            </div>

                            {/* CHECK-OUT */}
                            <div className="relative mb-4">
                                <div
                                    className="flex items-center bg-gray-100 rounded-full px-4 py-3 cursor-pointer"
                                    onClick={() => checkOutRef.current?.showPicker()}
                                >
                                    <img src={checkouticon} className="w-5 mr-3" />
                                    {checkOut || "Check-out"}
                                </div>
                                <input
                                    ref={checkOutRef}
                                    type="date"
                                    value={checkOut}
                                    onChange={(e) => setCheckOut(e.target.value)}
                                    className="absolute inset-0 opacity-0"
                                />
                            </div>

                            {/* GUESTS */}
                            <div className="flex items-center justify-between bg-gray-100 rounded-full px-4 py-3 mb-6">
                                <div className="flex items-center gap-3">
                                    <img src={guesticon} className="w-5" />
                                    {guests} Guests
                                </div>
                                <div className="flex gap-3">
                                    <button onClick={() => setGuests((p) => Math.max(1, p - 1))}>–</button>
                                    <button onClick={() => setGuests((p) => Math.min(20, p + 1))}>+</button>
                                </div>
                            </div>

                            {/* ✅ PRICE BREAKDOWN */}
                            <div className="space-y-2 text-gray-700 mb-6">
                                <div className="flex justify-between">
                                    <span>${property.price} × {nights} nights</span>
                                    <span>${rentTotal}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Cleaning Fee</span>
                                    <span>${cleaningFee}</span>
                                </div>
                                <div className="flex justify-between font-bold border-t pt-2">
                                    <span>Total</span>
                                    <span>${totalPrice}</span>
                                </div>
                            </div>

                            <button
                                onClick={() => navigate(`/make-payment/${id}`)}
                                className="w-full bg-[#7FA38B] text-white py-3 rounded-full font-medium"
                            >
                                Book Now
                            </button>

                            <p className="text-center mt-4 text-gray-600">
                                You won’t be charged yet
                            </p>
                        </div>
                    </div>
                </div>

                {/* ================= PROPERTY DETAILS ================= */}
                <h2 className="text-3xl font-bold mt-12">{property.title}</h2>

                <div className="flex items-center gap-6 mt-3">
                    <div className="flex items-center gap-2">
                        <img src={locationicongreen} className="w-5" />
                        {property.location}
                    </div>
                    <div className="flex items-center gap-2">
                        <img src={staricon} className="w-5" />
                        {property.rating || 0} ({property.total_reviews} reviews)
                    </div>
                </div>

                {/* ✅ BEDROOMS, BATHROOMS, GUESTS + PRICE (STYLE PRESERVED WITH ICONS) */}
                <div className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mt-6">

                    {/* ✅ LEFT BUTTONS */}
                    <div className="flex flex-wrap gap-2 sm:gap-3">

                        <div className="flex items-center gap-1.5 sm:gap-2 border border-green-600 text-green-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm">
                            <img src={bedroomicon} className="w-4 sm:w-5" />
                            {property.bedrooms} Bedrooms
                        </div>

                        <div className="flex items-center gap-1.5 sm:gap-2 border border-green-600 text-green-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm">
                            <img src={bathroomicon} className="w-4 sm:w-5" />
                            {property.bathrooms} Bathrooms
                        </div>

                        <div className="flex items-center gap-1.5 sm:gap-2 border border-green-600 text-green-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm">
                            <img src={guesticon} className="w-4 sm:w-5" />
                            Up to {property.max_guests} Guests
                        </div>

                    </div>

                    {/* ✅ PRICE */}
                    <div className="text-[28px] sm:text-[32px] font-bold text-[#7FA38B]">
                        ${property.price}
                        <span className="text-gray-500 text-[16px] sm:text-[18px] ml-1">/ night</span>
                    </div>

                </div>


                {/* ✅ ABOUT THIS PROPERTY */}
                <h3 className="text-2xl font-semibold mt-10">About This Property</h3>
                <p className="mt-4 text-gray-700">{property.description}</p>

                {/* ✅ AMENITIES */}
                <div className="mt-10 w-full lg:w-[40%]">
                    <h2 className="text-2xl font-semibold mb-5">Amenities</h2>

                    {amenitiesLoading ? (
                        <p className="text-gray-500">Loading amenities...</p>
                    ) : amenities.length === 0 ? (
                        <p className="text-gray-500 italic">No amenities listed for this property.</p>
                    ) : (
                        <div className="flex flex-wrap gap-3">
                            {amenities.map((item: any) => (
                                <div
                                    key={item.id}
                                    className="flex items-center gap-2 bg-gray-100 px-6 py-3 rounded-full text-sm"
                                >
                                    {item.name}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* ================= ✅ RELATED PROPERTIES (STYLE MATCHED) ================= */}
                <div className="mt-16">
                    <h2 className="text-2xl font-semibold mb-6">Related Properties</h2>

                    {relatedLoading ? (
                        <p className="text-gray-500">Loading related properties...</p>
                    ) : relatedProperties.length === 0 ? (
                        <p className="text-gray-500 italic">No related properties found.</p>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
                            {relatedProperties.map((item) => {

                                // ✅ 1. SAFELY EXTRACT IMAGE ARRAY (NO RE-PARSING LOOP)
                                let imageArray: string[] = [];

                                if (Array.isArray(item.main_image)) {
                                    imageArray = item.main_image;
                                } else if (typeof item.main_image === "string") {
                                    try {
                                        const parsed = JSON.parse(item.main_image);
                                        if (Array.isArray(parsed)) {
                                            imageArray = parsed;
                                        }
                                    } catch (error) {
                                        imageArray = [];
                                    }
                                }

                                // ✅ 2. BUILD A STABLE FINAL IMAGE URL (NO CHANGE PER RENDER)
                                const stableImageUrl =
                                    imageArray.length > 0 && imageArray[0]
                                        ? imageArray[0].startsWith("http")
                                            ? imageArray[0]
                                            : `${import.meta.env.VITE_API_URL.replace(/\/$/, "")}/${imageArray[0].replace(/^\//, "")}`
                                        : "/placeholder.png";

                                return (
                                    <div
                                        key={item.id}
                                        className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 w-full flex flex-col"
                                    >
                                        <img
                                            src={stableImageUrl}
                                            alt={item.title}
                                            className="w-full h-40 sm:h-48 md:h-52 lg:h-56 object-cover"
                                            loading="lazy"

                                            // ✅ 3. HARD STOP INFINITE ERROR LOOP (NO MORE FLICKER)
                                            onError={(e) => {
                                                if (e.currentTarget.src.includes("placeholder")) return;
                                                e.currentTarget.src = "/placeholder.png";
                                            }}
                                        />

                                        <div className="p-4 sm:p-5 md:p-6 flex flex-col justify-between h-full">
                                            <div className="flex flex-col gap-3 flex-grow">

                                                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#171717] font-semibold break-words">
                                                    {item.title}
                                                </h3>

                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-1">
                                                        <img src={locationIcon} className="w-4 h-4" />
                                                        <span className="text-xs sm:text-sm md:text-base lg:text-lg text-[#525252] break-words">
                                                            {item.location}
                                                        </span>
                                                    </div>

                                                    <div className="flex items-center gap-1">
                                                        <img src={staricon} className="w-4 h-4" />
                                                        <span className="text-xs sm:text-sm md:text-base lg:text-lg text-[#525252]">
                                                            {item.rating || 0}
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="flex items-center">
                                                    <img src={guesticon} className="w-4 h-4" />
                                                    <span className="text-xs sm:text-sm md:text-base lg:text-lg text-[#525252] ml-1">
                                                        {item.max_guests} guests
                                                    </span>
                                                </div>

                                            </div>

                                            <div className="flex items-center justify-between mt-4 border-t border-[#E5E5E5] pt-3">
                                                <p className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl">
                                                    £{item.price}
                                                    <span className="text-[#737373] text-xs sm:text-sm md:text-base">
                                                        {" "} / night
                                                    </span>
                                                </p>

                                                <button
                                                    onClick={() => navigate(`/property/${item.id}`)}
                                                    className="
                    bg-[#7FA38B] text-white
                    py-1.5 md:py-1
                    px-4 md:px-3
                    rounded-full
                    text-xs sm:text-sm md:text-base
                    hover:bg-[#6e927c]
                    transition
                    cursor-pointer
                  "
                                                >
                                                    View Details
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>




                <ReviewChatModal />
                <PropertyReviewsCarousel propertyId={property.id} />
            </div>
        </div>
    );
}



