import { useState, useRef, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useParams, useNavigate } from "react-router";
import type { Swiper as SwiperType } from "swiper";
import sectionbg from "../../images/propertydetailsbg.png";
// import checkinicon from "../../images/checkinicon.png";
// import checkouticon from "../../images/checkouticon.png";
import locationicongreen from "../../images/locationgreenicon.png";
// import locationIcon from "../../images/locationicon.png";
import calendarIcon from "../../images/calendaricon.png";
import staricon from "../../images/staricon.png";
import guesticon from "../../images/guesticongray.png";
import bedroomicon from "../../images/bedroomicon.png";
import bathroomicon from "../../images/bathroomicon.png";

import ReviewChatModal from "./ReviewChatModal";
// import PropertyReviewsCarousel from "./PropertyReviewsCarousel";

import {
  useGetSinglePropertyQuery,
  // useGetAllPropertiesQuery,
  useGetAmenitiesQuery,
} from "@/store/api/auth.api";



import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import type { DateRange } from "react-day-picker";



export default function PropertyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
 const formatDate = (date: Date) => {
  return date.toLocaleDateString("en-US", {
    month: "short", // Jan
    day: "2-digit", // 17
    year: "numeric", // 2025
  });
};

  // related properties (all)
  // const { data: allPropertiesData } = useGetAllPropertiesQuery();

  // single property
  const { data, isLoading } = useGetSinglePropertyQuery(id!);
  const property = data?.data;

  // amenities for property (skip if no property id)
  const { data: amenitiesData, isLoading: amenitiesLoading } =
    useGetAmenitiesQuery(property?.id, {
      skip: !property?.id,
    });
  const amenities = amenitiesData?.data || [];




  function getImageUrl(img: any) {
  if (!img) return "/placeholder.png";

  if (Array.isArray(img)) img = img[0];

  if (typeof img === "string" && img.startsWith("[")) {
    try {
      const parsed = JSON.parse(img);
      img = Array.isArray(parsed) ? parsed[0] : img;
    } catch {}
  }

  if (typeof img === "string" && img.startsWith("http")) return img;

  if (typeof img === "string") {
    return `${import.meta.env.VITE_API_URL.replace(/\/$/, "")}/${img.replace(
      /^\//,
      ""
    )}`;
  }

  return "/placeholder.png";
}


  // --- IMAGES: build stable image array (no flicker) ---
const images = useMemo(() => {
  if (!property) return ["/placeholder.png"];

  const allImages = [
    ...(Array.isArray(property.main_image) ? property.main_image : [property.main_image]),
    ...(Array.isArray(property.multiple_image) ? property.multiple_image : [property.multiple_image]),
  ].filter(Boolean);

  if (allImages.length === 0) return ["/placeholder.png"];

  return allImages.map(getImageUrl);
}, [property]);


  // related properties (exclude current), maximum 3 properties will be displayed
  // const relatedProperties =
  //   allPropertiesData?.data
  //     ?.filter((p: any) => String(p.id) !== String(id))
  //     .slice(0, 3) || [];

  // swiper refs and state
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const mainSwiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // booking inputs
  // const [checkIn, setCheckIn] = useState("");
  // const [checkOut, setCheckOut] = useState("");
  // const checkInRef = useRef<HTMLInputElement>(null);
  // const checkOutRef = useRef<HTMLInputElement>(null);

  // const [guests, setGuests] = useState(2);

  // price calculations (kept as you had)

  const [checkIn, setCheckIn] = useState<Date | null>(null);
const [checkOut, setCheckOut] = useState<Date | null>(null);
const [guests, setGuests] = useState(2);

const [open, setOpen] = useState(false);
const [range, setRange] = useState<DateRange | undefined>();


const nights = useMemo(() => {
  if (!checkIn || !checkOut) return 1;
  const diff =
    (new Date(checkOut).getTime() - new Date(checkIn).getTime()) /
    (1000 * 60 * 60 * 24);
  return Math.max(1, diff);
}, [checkIn, checkOut]);

 const rentTotal = (property?.price || 0) * nights;
const cleaningFee = property?.cleaning_fee || 0;
const bookingFee = property ? (rentTotal * 4.5) / 100 : 0;
const totalPrice = rentTotal + cleaningFee + bookingFee;


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

  // BOOK NOW click handler (uses the auth check above)
 const handleBookNow = () => {
  navigate(`/make-payment/${id}`);
};




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

  {/* ================= LEFT — CAROUSEL (50%) ================= */}
  <div className="w-full lg:w-1/2 relative">

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
            className="w-full h-[400px] lg:h-[600px] object-cover rounded-xl"
            loading="lazy"
            onError={(e) => {
              if (!e.currentTarget.src.includes("placeholder")) {
                e.currentTarget.src = "/placeholder.png";
              }
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>

    {/* ✅ THUMBNAILS */}
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
            className={`w-full h-20 lg:h-40 object-cover rounded-lg cursor-pointer ${
              activeIndex === i ? "opacity-100" : "opacity-40"
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

  {/* ================= RIGHT — IMAGE GRID (50%) ================= */}
  <div className="w-full lg:w-1/2 grid grid-cols-2 grid-rows-2 gap-3 h-[400px] lg:h-[600px]">

    {images.slice(0, 4).map((img, index) => {
      const remaining = images.length - 4;

      return (
        <div key={index} className="relative w-full h-full rounded-xl overflow-hidden">
          <img
            src={img}
            className="w-full h-full object-cover"
            loading="lazy"
            onError={(e) => {
              if (!e.currentTarget.src.includes("placeholder")) {
                e.currentTarget.src = "/placeholder.png";
              }
            }}
          />

          {/* ✅ OVERLAY ON 4TH IMAGE */}
          {index === 3 && remaining > 0 && (
            <button
              onClick={() => navigate(`/property-images/${id}`)}
              className="absolute inset-0 bg-black/60 flex items-center justify-center text-white text-2xl font-bold rounded-xl hover:bg-black/70 transition"
            >
              +{remaining}
            </button>
          )}
        </div>
      );
    })}
  </div>

</div>

    
           
        {/* ---------------- LEFT CONTENT (50%) + EMPTY RIGHT (40%) ---------------- */}
       <div className="w-full flex flex-col lg:flex-row justify-start gap-6">
          
          {/* ✅ LEFT SIDE (50%) */}
          <div className="w-full lg:w-[50%]">

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

            {/* ✅ BEDROOMS, BATHROOMS, GUESTS + PRICE */}
            <div className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mt-6">
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <div className="flex items-center gap-1.5 sm:gap-2 border border-green-600 text-green-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[22px] sm:text-sm">
                  <img src={bedroomicon} className="w-4 sm:w-5" />
                  {property.bedrooms} Bedrooms
                </div>

                <div className="flex items-center gap-1.5 sm:gap-2 border border-green-600 text-green-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[22px] sm:text-sm">
                  <img src={bathroomicon} className="w-4 sm:w-5" />
                  {property.bathrooms} Bathrooms
                </div>

                <div className="flex items-center gap-1.5 sm:gap-2 border border-green-600 text-green-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[22px] sm:text-sm">
                  <img src={guesticon} className="w-4 sm:w-5" />
                  Up to {property.max_guests} Guests
                </div>
              </div>

              <div className="hidden block">
                
               
              </div>
            </div>
 {/* ✅ ABOUT THIS PROPERTY */}
            <h3 className="text-2xl font-semibold mt-10">Property Information</h3>
            <p className="mt-4 text-gray-700">{property?.description}</p>
            <h3 className="text-2xl font-semibold mt-10">Local Area</h3>
            <p className="mt-4 text-gray-700">{property?.local_area}</p>

            {/* ✅ AMENITIES */}
            <div className="mt-10 w-full lg:w-[40%]">
              <h2 className="text-2xl font-semibold mb-5">Amenities</h2>

              {amenitiesLoading ? (
                <p className="text-gray-500">Loading amenities...</p>
              ) : amenities.length === 0 ? (
                <p className="text-gray-500 italic">
                  No amenities listed for this property.
                </p>
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

          {/* ✅ PROPERTY LOCATION MAP SECTION */}
<div className="mt-14">
  <h2 className="text-2xl font-semibold mb-5">Property Location</h2>

  <div className="w-full h-[320px] rounded-2xl overflow-hidden border shadow-sm">
    <iframe
      title="property-location-map"
      width="100%"
      height="100%"
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      className="w-full h-full"
      src={`https://www.google.com/maps?q=${encodeURIComponent(
        property?.location || ""
      )}&output=embed`}
    />
  </div>

</div>

  
    </div>

            {/* ✅ RIGHT SIDE (Price Card 50%) */}
         <div className="w-full lg:w-[50%] lg:ml-6 lg:mt-12">
  <div className="w-full sm:w-[98%] border rounded-2xl p-5 sm:p-6 shadow-sm bg-white mx-auto">

      {/* ✅ PRICE PER NIGHT */}
      <div className="mb-5 flex items-end gap-2">
        <span className="text-2xl sm:text-3xl font-bold text-[#7FA38B]">
          A${property?.price}
        </span>
        <span className="text-[#000000]/50 text-sm sm:text-[22px] font-bold">
          / night
        </span>
      </div>

      {/* ✅ DATE + GUEST (COLUMN ON MOBILE, ROW ON DESKTOP) */}
      <div className="flex flex-col sm:flex-row gap-3 mb-5">

        {/* ✅ DATE PILL */}
        <div className="relative w-full">
          <div
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 border border-[#7FA38B] rounded-full px-4 py-2 cursor-pointer bg-white w-full"
          >
            <div className="bg-[#E7F1EC] p-1.5 rounded-full shrink-0">
              <img src={calendarIcon} className="w-4 h-4" />
            </div>

            <span className="text-sm sm:text-md text-[#171717] truncate">
              {range?.from && range?.to
                ? `${formatDate(range.from)} - ${formatDate(range.to)}`
                : "Select Dates"}
            </span>
          </div>

          {open && (
            <div className="absolute z-50 bg-white shadow-lg mt-2 rounded-2xl p-3 w-full">
              <DayPicker
                mode="range"
                selected={range}
                onSelect={(values) => {
                  setRange(values)
                  if (values?.from && values?.to) {
                    setCheckIn(values.from)
                    setCheckOut(values.to)
                    setOpen(false)
                  }
                }}
                disabled={{ before: new Date() }}
              />
            </div>
          )}
        </div>

        {/* ✅ GUEST PILL */}
        <div className="flex items-center justify-between border border-[#7FA38B] rounded-full px-5 py-2 bg-white w-full sm:w-auto">

          <div className="bg-[#E7F1EC] p-1.5 rounded-full shrink-0">
            <img src={guesticon} className="w-4 h-4" />
          </div>

          <button
            onClick={() => setGuests((g) => Math.max(1, g - 1))}
            className="text-[#7FA38B] font-bold text-lg"
          >
            −
          </button>

          <span className="text-lg font-semibold text-[#171717] min-w-[20px] text-center">
            {guests}
          </span>

          <button
            onClick={() => setGuests((g) => Math.min(20, g + 1))}
            className="text-[#7FA38B] font-bold text-lg"
          >
            +
          </button>
        </div>
      </div>

      {/* ✅ PRICE DETAILS */}
      <div className="space-y-3 text-sm text-gray-800 mb-5">
        <div className="flex justify-between">
          <span>A${property?.price} × {nights} nights</span>
          <span>A${rentTotal}</span>
        </div>

        <div className="flex justify-between">
          <span>Cleaning Fee</span>
          <span>A${cleaningFee}</span>
        </div>

        <div className="flex justify-between">
          <span>Booking Fee</span>
          <span>A${bookingFee}</span>
        </div>
      </div>

      {/* ✅ TOTAL */}
      <div className="flex justify-between font-bold text-lg border-t pt-4 mb-2">
        <span>Total</span>
        <span>A${totalPrice}</span>
      </div>

      {/* ✅ REFUNDABLE DEPOSIT */}
      <div className="flex justify-between text-sm mb-6">
        <span className="flex items-center gap-1">
          Refundable Damage Deposit
          <span className="text-xs bg-gray-200 w-4 h-4 rounded-full flex items-center justify-center">
            ?
          </span>
        </span>
        <span>A$400</span>
      </div>

      {/* ✅ BUTTONS (STACK ON MOBILE, ROW ON DESKTOP) */}
      <div className="flex flex-col sm:flex-row gap-4">

        <button
          onClick={handleBookNow}
          className="w-full bg-[#7FA38B] text-white py-3 rounded-full font-semibold shadow hover:opacity-90 transition"
        >
          Book now
        </button>

        <button
          className="w-full border border-[#7FA38B] text-[#7FA38B] py-3 rounded-full font-semibold hover:bg-[#7FA38B] hover:text-white transition"
        >
          Send Inquiry
        </button>

      </div>

    </div>
</div>

    </div>



        {/* ================= RELATED PROPERTIES ================= */}
        {/* <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">Related Properties</h2>

          {relatedLoading ? (
            <p className="text-gray-500">Loading related properties...</p>
          ) : relatedProperties.length === 0 ? (
            <p className="text-gray-500 italic">No related properties found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
              {relatedProperties.map((item: any) => {
const getSingleImage = (item: any) => {
  const img = item?.multiple_image?.[0];

  if (!img) return "/placeholder.png";

  if (img.startsWith("http")) return img;

  return `${import.meta.env.VITE_API_URL}${img}`;
};


  return (
    <div
      key={item.id}
      className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 w-full flex flex-col"
    >
      <div className="relative w-full h-40 sm:h-48 md:h-52 lg:h-56 overflow-hidden bg-gray-100">
  <img
    src={getSingleImage(item)}
    alt={item.title}
    loading="lazy"
    decoding="async"
    className="absolute inset-0 w-full h-full object-cover"
    onError={(e) => {
      const target = e.currentTarget;
      if (!target.dataset.fallback) {
        target.dataset.fallback = "true";
        target.src = "/placeholder.png";
      }
    }}
  />
</div>

      <div className="p-4 sm:p-5 md:p-6 flex flex-col justify-between h-full">
        <div className="flex flex-col gap-3 flex-grow">
          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#171717] font-semibold break-words">
            {item.title}
          </h3>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <img src={locationIcon} className="w-4 h-4" />
              <span className="text-[22px] sm:text-sm md:text-base lg:text-lg text-[#525252] break-words">
                {item.location}
              </span>
            </div>

            <div className="flex items-center gap-1">
              <img src={staricon} className="w-4 h-4" />
              <span className="text-[22px] sm:text-sm md:text-base lg:text-lg text-[#525252]">
                {item.rating || 0}
              </span>
            </div>
          </div>

          <div className="flex items-center">
            <img src={guesticon} className="w-4 h-4" />
            <span className="text-[22px] sm:text-sm md:text-base lg:text-lg text-[#525252] ml-1">
              {item.max_guests} guests
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4 border-t border-[#E5E5E5] pt-3">
          <p className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl">
            £{item.price}
            <span className="text-[#737373] text-[22px] sm:text-sm md:text-base">
              {" "}
              / night
            </span>
          </p>

          <button
            onClick={() => navigate(`/property/${item.id}`)}
            className="
              bg-[#7FA38B] text-white
              py-1.5 md:py-1
              px-4 md:px-3
              rounded-full
              text-[22px] sm:text-sm md:text-base
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
        </div> */}
         
        <ReviewChatModal />
        {/* <PropertyReviewsCarousel propertyId={property.id} /> */}
      </div>
    </div>
  );
}



 