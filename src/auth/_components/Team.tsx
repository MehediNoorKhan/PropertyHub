// import pic1 from "../../images/sarahmitchell.png";
// import pic2 from "../../images/MichaeloChen.png";
// import pic3 from "../../images/EmmaRodriGuez.png";

// export default function Team() {
//     return (
//         <div className="w-full py-10 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 2xl:px-48">

//             {/* Title */}
//             <h2 className="text-[#171717] text-[28px] sm:text-[34px] md:text-[38px] lg:text-[40px] font-bold text-center">
//                 Meet the Team
//             </h2>

//             {/* Subtitle */}
//             <p className="text-[#525252] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-center mt-3 max-w-3xl mx-auto">
//                 The passionate people behind Guest Property, dedicated to making your stay unforgettable.
//             </p>

//             {/* Cards */}
//             <div className="
//                 mt-12 
//                 grid 
//                 grid-cols-1
//                 sm:grid-cols-2
//                 md:grid-cols-3
//                 gap-8 sm:gap-10 md:gap-4 lg:gap-6 xl:gap-10
//             ">
//                 {/* CARD TEMPLATE */}
//                 {[
//                     {
//                         img: pic1,
//                         name: "Sarah Mitchell",
//                         role: "Founder & CEO",
//                         desc: "With 15 years in hospitality, Sarah founded Guest Property to revolutionize short-stay bookings."
//                     },
//                     {
//                         img: pic2,
//                         name: "Michael Chen",
//                         role: "Property Manager",
//                         desc: "Michael ensures every property meets our quality standards and guests have exceptional experiences."
//                     },
//                     {
//                         img: pic3,
//                         name: "Emma Rodriguez",
//                         role: "Guest Relations Director",
//                         desc: "Emma leads our guest services team, ensuring every stay is personalized and memorable."
//                     }
//                 ].map((person, i) => (
//                     <div
//                         key={i}
//                         className="
//                             bg-[#EABD63]/20 
//                             rounded-2xl 
//                             p-4 sm:p-5 md:p-6 lg:p-7 
//                             hover:shadow-lg 
//                             transition-all 
//                             duration-300
//                         "
//                     >
//                         <img
//                             src={person.img}
//                             alt={person.name}
//                             className="w-full rounded-xl mb-5 object-cover"
//                         />

//                         <h3 className="text-[#171717] text-[20px] sm:text-[22px] md:text-[24px] font-bold">
//                             {person.name}
//                         </h3>

//                         <p className="text-[#737373] text-[16px] sm:text-[17px] md:text-[18px] mt-1">
//                             {person.role}
//                         </p>

//                         <p className="text-[#404040] text-[16px] sm:text-[18px] md:text-[20px] mt-3 leading-relaxed">
//                             {person.desc}
//                         </p>
//                     </div>
//                 ))}

//             </div>
//         </div>
//     );
// }


import { useGetAllTeamsQuery } from "@/store/api/auth.api";

export default function Team() {
  const { data, isLoading, isError } = useGetAllTeamsQuery();

  if (isLoading) {
    return <p className="text-center py-10">Loading team...</p>;
  }

  if (isError) {
    return <p className="text-center py-10 text-red-500">Failed to load team.</p>;
  }

  return (
    <div className="w-full py-10 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 2xl:px-48">

      {/* Title */}
      <h2 className="text-[#171717] text-[28px] sm:text-[34px] md:text-[38px] lg:text-[40px] font-bold text-center">
        Meet the Team
      </h2>

      {/* Subtitle */}
      <p className="text-[#525252] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-center mt-3 max-w-3xl mx-auto">
        The passionate people behind Guest Property, dedicated to making your stay unforgettable.
      </p>

      {/* Cards */}
      <div
        className="
          mt-12 
          grid 
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          gap-8 sm:gap-10 md:gap-4 lg:gap-6 xl:gap-10
        "
      >
        {data?.data.map((member) => (
          <div
            key={member.id}
            className="
              bg-[#EABD63]/20 
              rounded-2xl 
              p-4 sm:p-5 md:p-6 lg:p-7 
              hover:shadow-lg 
              transition-all 
              duration-300
            "
          >
  <img
  src={member.image}
  alt={member.name}
  className="w-full rounded-xl mb-5 object-cover h-[280px] bg-gray-200"
  loading="lazy"
  decoding="async"
  onError={(e) => {
    const img = e.currentTarget;

    if (!img.dataset.fallback) {
      img.dataset.fallback = "true";
      img.src = "/placeholder.png"; // ✅ LOCAL fallback (NO INTERNET)
    }
  }}
/>



            <h3 className="text-[#171717] text-[20px] sm:text-[22px] md:text-[24px] font-bold">
              {member.name}
            </h3>

            <p className="text-[#737373] text-[16px] sm:text-[17px] md:text-[18px] mt-1">
              {member.designation}
            </p>

            <p className="text-[#404040] text-[16px] sm:text-[18px] md:text-[20px] mt-3 leading-relaxed">
              {member.bio}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
