// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router";
// import { IoIosArrowDown } from "react-icons/io";
// import properties from "../../objects/properties.json";
// import locationIcon from "../../images/locationicon.png";
// import guestsicon from "../../images/guestsicon.png"
// import starIcon from "../../images/star.png";
// import HERO_BG_URL from "../../images/allpropertiesbg.png";
// import FILTER_ICON_URL from "../../images/filter.png";
// import ReviewChatModal from "./ReviewChatModal";

// const AllProperties: React.FC = () => {
//     useEffect(() => {
//         document.title = "Properties | GuestPro";
//     }, []);

//     const navigate = useNavigate();

//     const [locationQ, setLocationQ] = useState<string>("");
//     const [minPrice, setMinPrice] = useState<string>("");
//     const [maxPrice, setMaxPrice] = useState<string>("");

//     const [showFilterDrop, setShowFilterDrop] = useState(false);

//     const applyFilters = () => {
//         console.log({ locationQ, minPrice, maxPrice });
//     };

//     const handleSort = (type: string) => {
//         console.log("Sorting:", type);
//     };

//     const sorted = [...properties].sort((a, b) => a.rent - b.rent);

//     return (
//         <div>
//             {/* Hero Section */}
//             <div
//                 className="h-36 sm:h-44 md:h-56 lg:h-72 relative flex items-center justify-center"
//                 style={{
//                     backgroundImage: `url(${HERO_BG_URL})`,
//                     backgroundSize: "cover",
//                     backgroundPosition: "center",
//                 }}
//             >
//                 <div className="absolute inset-0 bg-black/40" />
//                 <h1 className="relative z-10 text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
//                     All Properties
//                 </h1>
//             </div>

//             {/* Page Container */}
//             <div className="mx-auto px-3 sm:px-6 md:px-20 lg:px-[120px] py-8">

//                 {/* FILTER DROPDOWN BUTTON */}
//                 <div className="mb-6">
//                     <button
//                         onClick={() => setShowFilterDrop((prev) => !prev)}
//                         className="
//                             flex items-center justify-between 
//                             w-40 sm:w-44 md:w-48 
//                             bg-[#F0F0F0] border rounded-full 
//                             px-4 py-2.5
//                             text-sm sm:text-base 
//                             shadow-sm
//                             h-11
//                             cursor-pointer
//                         "
//                     >
//                         <div className="flex items-center gap-2">
//                             <img
//                                 src={FILTER_ICON_URL}
//                                 alt="filter"
//                                 className="w-5 h-5 opacity-80"
//                             />
//                             <span className="text-[#717182]">Filter</span>
//                         </div>

//                         <IoIosArrowDown className="text-[#5A5A5A] text-lg" />
//                     </button>

//                     {/* DROPDOWN MENU */}
//                     {showFilterDrop && (
//                         <ul
//                             className="
//                                 mt-2 mb-4 
//                                 w-40 sm:w-44 md:w-48
//                                 bg-white rounded-xl border shadow-lg 
//                                 overflow-hidden 
//                                 text-sm sm:text-base 
//                                 z-50
//                             "
//                         >
//                             {[
//                                 { label: "Price Up", action: "up" },
//                                 { label: "Price Down", action: "down" },
//                                 { label: "Rent", action: "rent" },
//                             ].map((item) => (
//                                 <li
//                                     key={item.action}
//                                     onClick={() => {
//                                         handleSort(item.action);
//                                         setShowFilterDrop(false);
//                                     }}
//                                     className="
//                                         px-4 py-2.5 
//                                         hover:bg-[#7FA38B] hover:text-white 
//                                         cursor-pointer 
//                                         text-[#717182]
//                                     "
//                                 >
//                                     {item.label}
//                                 </li>
//                             ))}
//                         </ul>
//                     )}
//                 </div>

//                 {/* FILTER BAR */}
//                 <div className="bg-[#F8F8F8] rounded-xl p-5 sm:p-6 md:p-8 mb-10">
//                     <div className="flex flex-col md:flex-row md:flex-wrap gap-5 md:gap-6">

//                         {/* Location */}
//                         <div className="flex-1 min-w-[250px]">
//                             <label className="block text-sm sm:text-base md:text-lg font-medium mb-2">
//                                 Location
//                             </label>
//                             <input
//                                 type="text"
//                                 value={locationQ}
//                                 onChange={(e) => setLocationQ(e.target.value)}
//                                 placeholder="Search Location"
//                                 className="
//                                     w-full 
//                                     bg-[#EEEEEE] 
//                                     rounded-full 
//                                     px-4 py-3 
//                                     text-sm sm:text-base md:text-lg
//                                     border border-transparent 
//                                     outline-none 
//                                     focus:border-[#7FA38B]
//                                     h-12
//                                 "
//                             />
//                         </div>

//                         {/* Min Price */}
//                         <div className="flex-1 min-w-[200px]">
//                             <label className="block text-sm sm:text-base md:text-lg font-medium mb-2">
//                                 Min Price (per night)
//                             </label>
//                             <input
//                                 type="number"
//                                 value={minPrice}
//                                 onChange={(e) => setMinPrice(e.target.value)}
//                                 placeholder="Price..."
//                                 className="
//                                     w-full 
//                                     bg-[#EEEEEE] 
//                                     rounded-full 
//                                     px-4 py-3
//                                     text-sm sm:text-base md:text-lg
//                                     border border-transparent 
//                                     outline-none 
//                                     focus:border-[#7FA38B]
//                                     h-12
//                                 "
//                             />
//                         </div>

//                         {/* Max Price */}
//                         <div className="flex-1 min-w-[200px]">
//                             <label className="block text-sm sm:text-base md:text-lg font-medium mb-2">
//                                 Max Price (per night)
//                             </label>
//                             <input
//                                 type="number"
//                                 value={maxPrice}
//                                 onChange={(e) => setMaxPrice(e.target.value)}
//                                 placeholder="Price..."
//                                 className="
//                                     w-full 
//                                     bg-[#EEEEEE] 
//                                     rounded-full 
//                                     px-4 py-3
//                                     text-sm sm:text-base md:text-lg
//                                     border border-transparent 
//                                     outline-none 
//                                     focus:border-[#7FA38B]
//                                     h-12
//                                 "
//                             />
//                         </div>

//                         {/* Search Button */}
//                         <div className="w-full pt-2">
//                             <button
//                                 onClick={applyFilters}
//                                 className="
//                                     bg-[#7FA38B] hover:bg-[#5d8d6d] 
//                                     text-white 
//                                     rounded-full 
//                                     px-6 py-3 
//                                     text-sm sm:text-base md:text-lg 
//                                     w-full sm:w-auto
//                                     h-12
//                                     cursor-pointer
//                                 "
//                             >
//                                 Search Filter
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//                 {/* PROPERTY GRID */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
//                     {sorted.map((item, index) => (
//                         <div
//                             key={index}
//                             className="
//                                 bg-white rounded-2xl shadow-md 
//                                 overflow-hidden
//                                 hover:shadow-xl 
//                                 transition-all duration-300
//                                 w-full 
//                                 flex flex-col
//                             "
//                         >
//                             {/* Image */}
//                             <img
//                                 src={item.room_image}
//                                 alt={item.title}
//                                 className="w-full h-40 sm:h-48 md:h-52 lg:h-56 object-cover"
//                             />

//                             {/* Content */}
//                             <div
//                                 className="
//                                     p-4 sm:p-5 md:p-6 
//                                     flex flex-col justify-between 
//                                     h-full
//                                 "
//                             >
//                                 <div className="flex flex-col gap-3 flex-grow">

//                                     {/* Title */}
//                                     <h3
//                                         className="
//                                             text-base sm:text-lg md:text-xl lg:text-2xl 
//                                             text-[#171717] font-semibold
//                                             break-words
//                                         "
//                                     >
//                                         {item.title}
//                                     </h3>

//                                     {/* Location & Rating */}
//                                     <div className="flex items-center justify-between">

//                                         <div className="flex items-center gap-1">
//                                             <img src={locationIcon} alt="location" className="w-4 h-4" />
//                                             <span
//                                                 className="
//                                                     text-xs sm:text-sm md:text-base lg:text-lg 
//                                                     text-[#525252]
//                                                     break-words
//                                                 "
//                                             >
//                                                 {item.location}
//                                             </span>
//                                         </div>

//                                         <div className="flex items-center gap-1">
//                                             <img src={starIcon} alt="rating" className="w-4 h-4" />
//                                             <span className="text-xs sm:text-sm md:text-base lg:text-lg text-[#525252]">
//                                                 {item.rating}
//                                             </span>
//                                         </div>
//                                     </div>

//                                     {/* Guests */}
//                                     <div className="flex items-center">
//                                         <img src={guestsicon} alt="guests" className="w-4 h-4" />
//                                         <span
//                                             className="
//                                                 text-xs sm:text-sm md:text-base lg:text-lg 
//                                                 text-[#525252] ml-1
//                                             "
//                                         >
//                                             {item.guest} guests
//                                         </span>
//                                     </div>

//                                 </div>

//                                 {/* BOTTOM SECTION */}
//                                 <div
//                                     className="
//                                         flex items-center justify-between 
//                                         mt-4 
//                                         border-t border-[#E5E5E5] 
//                                         pt-3
//                                     "
//                                 >
//                                     <p className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl">
//                                         £{item.rent}
//                                         <span className="text-[#737373] text-xs sm:text-sm md:text-base">
//                                             {" "}
//                                             / night
//                                         </span>
//                                     </p>

//                                     <button
//                                         onClick={() => navigate(`/property/${item.id}`)}
//                                         className="
//                                             bg-[#7FA38B] text-white
//                                             py-1.5 md:py-1
//                                             px-4 md:px-3
//                                             rounded-full
//                                             text-xs sm:text-sm md:text-base
//                                             hover:bg-[#6e927c]
//                                             transition
//                                             cursor-pointer
//                                         "
//                                     >
//                                         View Details
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 <ReviewChatModal />
//             </div>
//         </div>
//     );
// };

// export default AllProperties;



// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router";
// import { IoIosArrowDown } from "react-icons/io";
// import locationIcon from "../../images/locationicon.png";
// import guestsicon from "../../images/guestsicon.png";
// import starIcon from "../../images/star.png";
// import HERO_BG_URL from "../../images/allpropertiesbg.png";
// import FILTER_ICON_URL from "../../images/filter.png";
// import ReviewChatModal from "./ReviewChatModal";
// import { useGetAllPropertiesQuery } from "@/store/api/auth.api";

// const AllProperties: React.FC = () => {
//   useEffect(() => {
//     document.title = "Properties | GuestPro";
//   }, []);

//   const navigate = useNavigate();
//   const { data, isLoading } = useGetAllPropertiesQuery();
//   const properties = data?.data || [];

//   const [showFilterDrop, setShowFilterDrop] = useState(false);

//   const handleSort = (type: string) => {
//     console.log("Sorting:", type);
//     setShowFilterDrop(false);
//   };

//   if (isLoading) {
//     return <div className="text-center py-20 text-lg">Loading properties...</div>;
//   }

//   return (
//     <div>
//       {/* ✅ HERO SECTION */}
//       <div
//         className="h-36 sm:h-44 md:h-56 lg:h-72 relative flex items-center justify-center"
//         style={{
//           backgroundImage: `url(${HERO_BG_URL})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="absolute inset-0 bg-black/40" />
//         <h1 className="relative z-10 text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
//           All Properties
//         </h1>
//       </div>

//       {/* ✅ PAGE CONTAINER */}
//       <div className="mx-auto px-3 sm:px-6 md:px-20 lg:px-[120px] py-8">

//        {/* ✅ FILTER DROPDOWN BUTTON */}
// <div className="mb-6 w-fit">
//   <button
//     onClick={() => setShowFilterDrop((prev) => !prev)}
//     className="flex items-center justify-between w-40 sm:w-44 md:w-48 bg-[#F0F0F0] border rounded-full px-4 py-2.5 text-sm sm:text-base shadow-sm h-11 cursor-pointer"
//   >
//     <div className="flex items-center gap-2">
//       <img
//         src={FILTER_ICON_URL}
//         alt="filter"
//         className="w-5 h-5 opacity-80"
//       />
//       <span className="text-[#717182]">Filter</span>
//     </div>
//     <IoIosArrowDown className="text-[#5A5A5A] text-lg" />
//   </button>

//   {/* ✅ ✅ ✅ DROPDOWN THAT PUSHES CONTENT DOWN */}
//   {showFilterDrop && (
//     <ul
//       className="
//         mt-3
//         w-40 sm:w-44 md:w-48
//         bg-white rounded-xl border shadow-lg 
//         overflow-hidden 
//         text-sm sm:text-base 
//         z-50
//       "
//     >
//       {[
//         { label: "Price Up", action: "up" },
//         { label: "Price Down", action: "down" },
//         { label: "Rent", action: "rent" },
//       ].map((item) => (
//         <li
//           key={item.action}
//           onClick={() => handleSort(item.action)}
//           className="
//             px-4 py-2.5 
//             hover:bg-[#7FA38B] hover:text-white 
//             cursor-pointer 
//             text-[#717182]
//           "
//         >
//           {item.label}
//         </li>
//       ))}
//     </ul>
//   )}
// </div>


//         {/* ✅ PROPERTY GRID */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
//           {properties.map((item: any) => {

//             // ✅ IMAGE FIX (NO FLICKER)
//             const rawImageString =
//               Array.isArray(item.main_image) && item.main_image.length > 0
//                 ? item.main_image[0]
//                 : "";

//             const cleanedImage =
//               typeof rawImageString === "string"
//                 ? rawImageString
//                     .replace('["', "")
//                     .replace('"]', "")
//                     .replace("[\"", "")
//                     .replace("\"]", "")
//                 : "";

//             const finalImageUrl =
//               cleanedImage.startsWith("http")
//                 ? cleanedImage
//                 : cleanedImage
//                 ? `${import.meta.env.VITE_API_URL}/${cleanedImage}`
//                 : "/placeholder.png";

//             return (
//               <div
//                 key={item.id}
//                 className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 w-full flex flex-col"
//               >
//                 <img
//                   src={finalImageUrl}
//                   alt={item.title}
//                   className="w-full h-52 object-cover"
//                   loading="lazy"
//                   draggable={false}
//                   onError={(e) => {
//                     if (!e.currentTarget.dataset.fallback) {
//                       e.currentTarget.dataset.fallback = "true";
//                       e.currentTarget.src = "/placeholder.png";
//                     }
//                   }}
//                 />

//                 <div className="p-4 sm:p-5 md:p-6 flex flex-col justify-between h-full">
//                   <div className="flex flex-col gap-3 flex-grow">
//                     <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#171717] font-semibold">
//                       {item.title}
//                     </h3>

//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center gap-1">
//                         <img src={locationIcon} alt="location" className="w-4 h-4" />
//                         <span className="text-xs sm:text-sm md:text-base text-[#525252]">
//                           {item.location}
//                         </span>
//                       </div>

//                       <div className="flex items-center gap-1">
//                         <img src={starIcon} alt="rating" className="w-4 h-4" />
//                         <span className="text-xs sm:text-sm md:text-base text-[#525252]">
//                           {item.rating || 0}
//                         </span>
//                       </div>
//                     </div>

//                     <div className="flex items-center">
//                       <img src={guestsicon} alt="guests" className="w-4 h-4" />
//                       <span className="text-xs sm:text-sm md:text-base text-[#525252] ml-1">
//                         {item.max_guests} guests
//                       </span>
//                     </div>
//                   </div>

//                   <div className="flex items-center justify-between mt-4 border-t pt-3">
//                     <p className="font-bold text-base sm:text-lg md:text-xl">
//                       £{item.price}
//                       <span className="text-[#737373] text-sm"> / night</span>
//                     </p>

//                     <button
//                       onClick={() => navigate(`/property/${item.id}`)}
//                       className="bg-[#7FA38B] text-white py-1 px-4 rounded-full text-sm hover:bg-[#6e927c] transition cursor-pointer"
//                     >
//                       View Details
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         <ReviewChatModal />
//       </div>
//     </div>
//   );
// };

// export default AllProperties;


import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { IoIosArrowDown } from "react-icons/io";
import locationIcon from "../../images/locationicon.png";
import guestsicon from "../../images/guestsicon.png";
import starIcon from "../../images/star.png";
import HERO_BG_URL from "../../images/allpropertiesbg.png";
import FILTER_ICON_URL from "../../images/filter.png";
import ReviewChatModal from "./ReviewChatModal";
import { useGetAllPropertiesQuery } from "@/store/api/auth.api";

const AllProperties: React.FC = () => {
  useEffect(() => {
    document.title = "Properties | GuestPro";
  }, []);

  const navigate = useNavigate();

  // ✅ BACKEND API
  const { data, isLoading } = useGetAllPropertiesQuery();
  const properties = data?.data || [];

  // ✅ FILTER STATES (UNCHANGED)
  const [locationQ, setLocationQ] = useState<string>("");
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");

  const [showFilterDrop, setShowFilterDrop] = useState(false);
  const [sortType, setSortType] = useState<"up" | "down" | null>(null);
  const [priceError, setPriceError] = useState<string>("");



  // const applyFilters = () => {
    
  // };
  
  const applyFilters = () => {
  if (minPrice && !maxPrice) {
    setPriceError("Please select a maximum price");
    return;
  }

  if (!minPrice && maxPrice) {
    setPriceError("Please select a minimum price");
    return;
  }

  setPriceError(""); // ✅ clear error if valid
};

 const handleSort = (type: string) => {
  setSortType(type as "up" | "down");
  setShowFilterDrop(false);
};


const filteredProperties = properties.filter((item: any) => {
  const location = item.location?.toLowerCase() || "";
  const search = locationQ.trim().toLowerCase();

  // ✅ LOCATION FILTER
  const matchesLocation =
    search === "" ? true : location.startsWith(search);

  // ✅ PRICE FILTER
  const price = Number(item.price);

  const min = minPrice ? Number(minPrice) : null;
  const max = maxPrice ? Number(maxPrice) : null;

  const matchesPrice =
    min !== null && max !== null
      ? price >= min && price <= max
      : true;

  return matchesLocation && matchesPrice;
});

// ✅ SORTING STILL APPLIES AFTER FILTERING
const sortedProperties = [...filteredProperties].sort((a: any, b: any) => {
  if (!sortType) return 0;

  if (sortType === "up") {
    return b.price - a.price; // ✅ HIGH → LOW
  }

  if (sortType === "down") {
    return a.price - b.price; // ✅ LOW → HIGH
  }

  return 0;
});


// ✅ SORT STILL WORKS ON FILTERED DATA
// const sortedProperties = [...filteredProperties].sort((a: any, b: any) => {
//   if (!sortType) return 0;

//   if (sortType === "up") {
//     return b.price - a.price; // ✅ High → Low
//   }

//   if (sortType === "down") {
//     return a.price - b.price; // ✅ Low → High
//   }

//   return 0;
// });



  if (isLoading) {
    return <div className="text-center py-20 text-lg">Loading properties...</div>;
  }

  return (
    <div>
      {/* ✅ HERO SECTION (UNCHANGED) */}
      <div
        className="h-36 sm:h-44 md:h-56 lg:h-72 relative flex items-center justify-center"
        style={{
          backgroundImage: `url(${HERO_BG_URL})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <h1 className="relative z-10 text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          All Properties
        </h1>
      </div>

      {/* ✅ PAGE CONTAINER (UNCHANGED) */}
      <div className="mx-auto px-3 sm:px-6 md:px-20 lg:px-[120px] py-8">

        {/* ✅ FILTER DROPDOWN BUTTON (UNCHANGED) */}
        <div className="mb-6">
          <button
            onClick={() => setShowFilterDrop((prev) => !prev)}
            className="
              flex items-center justify-between 
              w-40 sm:w-44 md:w-48 
              bg-[#F0F0F0] border rounded-full 
              px-4 py-2.5
              text-sm sm:text-base 
              shadow-sm
              h-11
              cursor-pointer
            "
          >
            <div className="flex items-center gap-2">
              <img
                src={FILTER_ICON_URL}
                alt="filter"
                className="w-5 h-5 opacity-80"
              />
              <span className="text-[#717182]">Filter</span>
            </div>

            <IoIosArrowDown className="text-[#5A5A5A] text-lg" />
          </button>

          {/* ✅ DROPDOWN MENU (UNCHANGED) */}
          {showFilterDrop && (
            <ul
              className="
                mt-2 mb-4 
                w-40 sm:w-44 md:w-48
                bg-white rounded-xl border shadow-lg 
                overflow-hidden 
                text-sm sm:text-base 
                z-50
              "
            >
              {[
                { label: "Price Up", action: "up" },
                { label: "Price Down", action: "down" },
              ].map((item) => (
                <li
                  key={item.action}
                  onClick={() => handleSort(item.action)}
                  className="
                    px-4 py-2.5 
                    hover:bg-[#7FA38B] hover:text-white 
                    cursor-pointer 
                    text-[#717182]
                  "
                >
                  {item.label}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* ✅ FILTER BAR (FULLY PRESERVED) */}
        <div className="bg-[#F8F8F8] rounded-xl p-5 sm:p-6 md:p-8 mb-10">
          <div className="flex flex-col md:flex-row md:flex-wrap gap-5 md:gap-6">

            <div className="flex-1 min-w-[250px]">
              <label className="block text-sm sm:text-base md:text-lg font-medium mb-2">
                Location
              </label>
              <input
                type="text"
                value={locationQ}
                onChange={(e) => setLocationQ(e.target.value)}
                placeholder="Search Location"
                className="
                  w-full bg-[#EEEEEE] rounded-full 
                  px-4 py-3 
                  text-sm sm:text-base md:text-lg
                  border border-transparent 
                  outline-none 
                  focus:border-[#7FA38B]
                  h-12
                "
              />
            </div>

            <div className="flex-1 min-w-[200px]">
              <label className="block text-sm sm:text-base md:text-lg font-medium mb-2">
                Min Price (per night)
              </label>
              <input
                type="number"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                placeholder="Price..."
                className="
                  w-full bg-[#EEEEEE] rounded-full 
                  px-4 py-3
                  text-sm sm:text-base md:text-lg
                  border border-transparent 
                  outline-none 
                  focus:border-[#7FA38B]
                  h-12
                "
              />

                         {priceError && (
  <p className="text-red-500 text-sm mt-1">{priceError}</p>
)}
            </div>

            <div className="flex-1 min-w-[200px]">
              <label className="block text-sm sm:text-base md:text-lg font-medium mb-2">
                Max Price (per night)
              </label>
              <input
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                placeholder="Price..."
                className="
                  w-full bg-[#EEEEEE] rounded-full 
                  px-4 py-3
                  text-sm sm:text-base md:text-lg
                  border border-transparent 
                  outline-none 
                  focus:border-[#7FA38B]
                  h-12
                "
              />
              {priceError && (
  <p className="text-red-500 text-sm mt-1">{priceError}</p>
)}

            </div>

            <div className="w-full pt-2">
              <button
                onClick={applyFilters}
                className="
                  bg-[#7FA38B] hover:bg-[#5d8d6d] 
                  text-white rounded-full 
                  px-6 py-3 
                  text-sm sm:text-base md:text-lg 
                  w-full sm:w-auto
                  h-12
                  cursor-pointer
                "
              >
                Search Filter
              </button>
            </div>
          </div>
        </div>

        {/* ✅ PROPERTY GRID (STYLE PRESERVED) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
          {sortedProperties.map((item: any) => {


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
                        <img src={starIcon} className="w-4 h-4" />
                        <span className="text-xs sm:text-sm md:text-base lg:text-lg text-[#525252]">
                          {item.rating || 0}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <img src={guestsicon} className="w-4 h-4" />
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

        <ReviewChatModal />
      </div>
    </div>
  );
};

export default AllProperties;
