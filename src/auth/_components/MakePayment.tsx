// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";

// import locationicongreen from "../../images/locationgreenicon.png";
// import staricon from "../../images/staricon.png";

// import { useRef, useEffect } from "react";
// import { useParams } from "react-router";
// import { useNavigate } from "react-router-dom";

// import properties from "../../objects/properties.json";

// import img1 from "../../images/hotelimag2.png";
// import img2 from "../../images/hotelimage1.png";
// import img3 from "../../images/hotelimag2.png";

// import { GrPrevious, GrNext } from "react-icons/gr";
// import { BsArrowLeft } from "react-icons/bs";

// import { PaymentForm } from "./PaymentForm";
// import { Button } from "@/components/ui/button";

// import type { Swiper as SwiperType } from "swiper";

// const MakePayment: React.FC = () => {
//     const { id } = useParams();
//     const navigate = useNavigate();

//     const swiperRef = useRef<SwiperType | null>(null);

//     const images = [img1, img2, img3];

//     const property = properties.find((p) => String(p.id) === String(id));

//     // Set page title
//     useEffect(() => {
//         if (property) {
//             document.title = `Finalize Booking | ${property.title} | GuestPro`;
//         }
//     }, [property]);

//     if (!property) {
//         return (
//             <div className="p-6 text-center text-red-500">
//                 Property not found.
//             </div>
//         );
//     }

//     return (
//         <section className="w-full px-4 sm:px-6 xl:px-24 py-8 relative">

//             {/* BACK BUTTON */}
//             <Button
//                 onClick={() => navigate(-1)}
//                 className="
//                     flex items-center gap-2 textprimarygray text-[16px] sm:text-[18px]
//                     font-semibold px-12 sm:px-16 py-5 sm:py-6 mb-6 sm:mb-8 ml-4 sm:ml-8
//                     bg-[#F3F3F3] hover:bg-[#b4b0b0] rounded-4xl
//                 "
//             >
//                 <BsArrowLeft size={20} />
//                 Back
//             </Button>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-14">

//                 {/* LEFT — PAYMENT FORM */}
//                 <div className="w-full">
//                     <PaymentForm />
//                 </div>

//                 {/* RIGHT SIDE */}
//                 <div className="w-full bg-white rounded-2xl p-2 xl:p-4">

//                     {/* IMAGE SLIDER */}
//                     <div className="relative w-full">
//                         <Swiper
//                             loop
//                             spaceBetween={10}
//                             slidesPerView={1}
//                             onSwiper={(swiper) => (swiperRef.current = swiper)}
//                             className="rounded-xl"
//                         >
//                             {images.map((img, i) => (
//                                 <SwiperSlide key={i}>
//                                     <img
//                                         src={img}
//                                         alt={`${property.title}-${i}`}
//                                         className="
//                                             w-full h-[220px] sm:h-[260px] md:h-[320px] xl:h-[360px]
//                                             object-cover rounded-xl
//                                         "
//                                     />
//                                 </SwiperSlide>
//                             ))}
//                         </Swiper>

//                         {/* PREV | NEXT BUTTONS */}
//                         <div
//                             className="
//                                 absolute bottom-10 left-1/2 -translate-x-1/2
//                                 flex gap-4 z-20
//                             "
//                         >
//                             <button
//                                 onClick={() => swiperRef.current?.slidePrev()}
//                                 className="
//                                     w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center
//                                     rounded-full bg-transparent/20 
//                                     backdrop-blur-sm
//                                     text-white font-bold cursor-pointer
//                                 "
//                             >
//                                 <GrPrevious size={20} />
//                             </button>

//                             <button
//                                 onClick={() => swiperRef.current?.slideNext()}
//                                 className="
//                                     w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center
//                                     rounded-full bg-transparent/20 
//                                     backdrop-blur-sm
//                                     text-white font-bold  cursor-pointer
//                                 "
//                             >
//                                 <GrNext size={20} />
//                             </button>
//                         </div>
//                     </div>

//                     {/* TITLE */}
//                     <h2 className="text-[22px] textprimaryblack sm:text-[30px] md:text-[36px] xl:text-[48px] font-semibold mt-5">
//                         {property.title}
//                     </h2>

//                     {/* LOCATION */}
//                     <div className="flex flex-wrap items-center gap-4 mt-3">
//                         <div className="flex items-center gap-1">
//                             <img src={locationicongreen} alt="location" />
//                             <p className="textprimarygray">{property.location}</p>
//                         </div>
//                         <div className="flex items-center gap-1">
//                             <img src={staricon} alt="rating" />
//                             <p className="textprimarygray">{property.rating}</p>
//                             <p className="textprimarygray">{property.reviews} reviews</p>
//                         </div>
//                     </div>

//                     {/* BOOKING DETAILS */}
//                     <h3 className="textprimaryblack text-[16px] md:text-[24px] xl:text-[36px] mt-8 mb-5 font-bold">
//                         Booking Details
//                     </h3>

//                     <div className="flex justify-between py-2">
//                         <p className="text-black/50">Dec 2 – Dec 6, 2025</p>
//                         <a className="textprimarygreen underline cursor-pointer">Edit</a>
//                     </div>

//                     <div className="flex justify-between py-2">
//                         <p className="text-black/50">2 guests</p>
//                         <a className="textprimarygreen underline cursor-pointer">Edit</a>
//                     </div>

//                     {/* PRICE DETAILS */}
//                     <h3 className="textprimaryblack text-[16px] md:text-[24px] xl:text-[36px] mt-8 mb-5 font-bold">
//                         Price Details
//                     </h3>

//                     <div className="flex justify-between py-2 text-lg">
//                         <p className="text-black/50">$350 × 2 nights</p>
//                         <p className="text-black/50">$700</p>
//                     </div>

//                     <div className="flex justify-between py-4 border-b border-[#ADADAD] text-lg">
//                         <p className="text-black/50">Cleaning fee</p>
//                         <p className="text-black/50">$200</p>
//                     </div>

//                     <div className="textprimaryblack flex justify-between mt-4 text-[18px] md:text-[28px] xl:text-[40px] font-bold">
//                         <span>Total</span>
//                         <span>$900</span>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default MakePayment;



// import { useEffect, useMemo } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { BsArrowLeft } from "react-icons/bs";

// import { Button } from "@/components/ui/button";
// import { useGetSinglePropertyQuery } from "@/store/api/auth.api";

// import stripeLogo from "../../images/stripe1.jpg";

// const MakePayment: React.FC = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const { data, isLoading, isError } = useGetSinglePropertyQuery(id!);
//   const property = data?.data;

//   // ✅ TEMP STATIC VALUES (replace later with real state)
//   const nights = 3;
//   const bookingFeeRate = 4.5;

//   const rentTotal = useMemo(() => {
//     if (!property) return 0;
//     return property.price * nights;
//   }, [property, nights]);

//   const bookingFee = useMemo(() => {
//     return (rentTotal * bookingFeeRate) / 100;
//   }, [rentTotal]);

//   const totalPrice = useMemo(() => {
//     return rentTotal + property?.cleaning_fee + bookingFee;
//   }, [rentTotal, property, bookingFee]);

//   useEffect(() => {
//     if (property) {
//       document.title = `Booking Summary | ${property.title}`;
//     }
//   }, [property]);

//   if (isLoading) {
//     return <div className="p-10 text-center">Loading...</div>;
//   }

//   if (isError || !property) {
//     return <div className="p-10 text-center text-red-500">Property not found.</div>;
//   }

//   return (
//     <section className="w-full px-4 md:px-16 xl:px-24 py-10">

//       {/* ✅ BACK BUTTON */}
//       <Button
//   onClick={() => navigate(-1)}
//   className="flex items-center gap-2 bg-[#F3F3F3] text-black px-12 py-3 rounded-full mb-8 hover:bg-gray-200"
// >
//   <BsArrowLeft size={22} />
//   Back
// </Button>


//       {/* ✅ MAIN GRID */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

//         {/* ✅ LEFT — FORM */}
//         <div>
//           <h1 className="text-3xl font-bold mb-8">Booking Summary</h1>

//           <h3 className="text-xl font-semibold mb-6">Guests Details :</h3>

//           <div className="space-y-6">

//             {/* Arrival / Departure */}
//             <div className="grid grid-cols-2 gap-4">
//               <input className="input-pill" placeholder="Check-in" />
//               <input className="input-pill" placeholder="Check-out" />
//             </div>

//             {/* Name */}
//             <div className="grid grid-cols-2 gap-4">
//               <input className="input-pill" placeholder="First Name" />
//               <input className="input-pill" placeholder="Last Name" />
//             </div>

//             <input className="input-pill w-full" placeholder="Email" />
//             <input className="input-pill w-full" placeholder="Phone number" />

//             {/* Guests */}
//             <div className="grid grid-cols-2 gap-4">
//               <input className="input-pill" placeholder="Adults" />
//               <input className="input-pill" placeholder="Children" />
//             </div>

//             <input className="input-pill w-full" placeholder="Address" />
//             <input className="input-pill w-full" placeholder="City" />
//             <input className="input-pill w-full" placeholder="Country" />
//             <input className="input-pill w-full" placeholder="Postal Code" />

//             <textarea
//               className="input-pill w-full h-32 resize-none"
//               placeholder="Message"
//             />
//           </div>
//         </div>

//         {/* ✅ RIGHT — BOOKING CARD */}
//         <div className="w-full max-w-xl mx-auto">

//           {/* ✅ PROPERTY IMAGE */}
//           <img
//             src={property?.multiple_image?.[0] || "/placeholder.png"}
//             className="w-full h-[250px] object-cover rounded-2xl mb-6"
//           />

//           <h2 className="text-2xl font-semibold mb-6">Your Booking Details</h2>

//           <div className="space-y-4 text-gray-700">

//             <div className="flex justify-between">
//               <span>A$ {property.price} × {nights} night</span>
//               <span>A$ {rentTotal}</span>
//             </div>

//             <div className="flex justify-between">
//               <span>Cleaning Fee</span>
//               <span>A$ {property.cleaning_fee}</span>
//             </div>

//             <div className="flex justify-between">
//               <span>Booking Fee (4.5%)</span>
//               <span>A$ {bookingFee.toFixed(2)}</span>
//             </div>

//             <div className="flex justify-between text-xl font-bold border-t pt-4">
//               <span>Total</span>
//               <span>A$ {totalPrice.toFixed(2)}</span>
//             </div>
//           </div>

//           {/* ✅ STRIPE */}
//           <div className="mt-6 round-2xl">
//             <img src={stripeLogo} className="h-20 w-36 rounded-2xl" />
//           </div>

//           {/* ✅ BUTTON */}
//           <button className="w-full mt-8 bg-[#85A790] text-white py-4 rounded-full text-lg font-semibold hover:opacity-90 transition">
//             Proceed to Payment
//           </button>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default MakePayment;



import { useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BsArrowLeft, BsPlus, BsDash } from "react-icons/bs";
import { useForm} from "react-hook-form";

import { Button } from "@/components/ui/button";
import { useGetSinglePropertyQuery } from "@/store/api/auth.api";

import stripeLogo from "../../images/stripe1.jpg";

type FormValues = {
  checkin: string;
  checkout: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  adults: number;
  children: number;
  address: string;
  city: string;
  country: string;
  postalCode: string;
  message: string;
};

const MakePayment: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, isError } = useGetSinglePropertyQuery(id!);
  const property = data?.data;

  // ✅ FORM
  const {
    register,
    setValue,
    watch,
  } = useForm<FormValues>({
    defaultValues: {
      adults: 1,
      children: 0,
    },
  });

  const adults = watch("adults");
  const children = watch("children");

  // ✅ TEMP STATIC VALUES (replace later with real state)
  const nights = 3;
  const bookingFeeRate = 4.5;

  const rentTotal = useMemo(() => {
    if (!property) return 0;
    return property.price * nights;
  }, [property, nights]);

  const bookingFee = useMemo(() => {
    return (rentTotal * bookingFeeRate) / 100;
  }, [rentTotal]);

  const totalPrice = useMemo(() => {
    return rentTotal + property?.cleaning_fee + bookingFee;
  }, [rentTotal, property, bookingFee]);

  useEffect(() => {
    if (property) {
      document.title = `Booking Summary | ${property.title}`;
    }
  }, [property]);

  if (isLoading) {
    return <div className="p-10 text-center">Loading...</div>;
  }

  if (isError || !property) {
    return <div className="p-10 text-center text-red-500">Property not found.</div>;
  }

  return (
    <section className="w-full px-4 md:px-16 xl:px-24 py-10">

      {/* ✅ BACK BUTTON */}
      <Button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 bg-[#F3F3F3] text-black px-12 py-3 rounded-full mb-8 hover:bg-gray-200"
      >
        <BsArrowLeft size={22} />
        Back
      </Button>

      {/* ✅ MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* ✅ LEFT — FORM */}
        <div>
  <h1 className="text-3xl font-bold mb-8">Booking Summary</h1>

  <h3 className="text-xl font-semibold mb-6">Guests Details :</h3>

  <div className="space-y-6">

    {/* ✅ CHECK IN / OUT */}
    <div className="grid grid-cols-2 gap-4">
      <div>
        <label className="block mb-1 text-md">Check-in</label>
        <input
          type="date"
          {...register("checkin")}
          placeholder="Select check-in date"
          className="input-pill"
        />
      </div>

      <div>
        <label className="block mb-1 text-md">Check-out</label>
        <input
          type="date"
          {...register("checkout")}
          placeholder="Select check-out date"
          className="input-pill"
        />
      </div>
    </div>

    {/* ✅ NAME */}
    <div className="grid grid-cols-2 gap-4">
      <div>
        <label className="block mb-1 text-md">First Name</label>
        <input
          {...register("firstName")}
          placeholder="Enter first name"
          className="input-pill"
        />
      </div>

      <div>
        <label className="block mb-1 text-md">Last Name</label>
        <input
          {...register("lastName")}
          placeholder="Enter last name"
          className="input-pill"
        />
      </div>
    </div>

    <div>
      <label className="block mb-1 text-md">Email</label>
      <input
        {...register("email")}
        placeholder="Enter your email"
        className="input-pill w-full"
      />
    </div>

    <div>
      <label className="block mb-1 text-md">Phone Number</label>
      <input
        {...register("phone")}
        placeholder="Enter phone number"
        className="input-pill w-full"
      />
    </div>

    {/* ✅ GUEST COUNTERS (NO PLACEHOLDERS ADDED AS PER YOUR REQUEST) */}
    <div className="grid grid-cols-2 gap-4">

      {/* ADULTS */}
      <div>
        <label className="block mb-1 text-md">Adults</label>
        <div className="flex items-center justify-between input-pill">
          <button
            onClick={() => setValue("adults", Math.max(1, adults - 1))}
          >
            <BsDash />
          </button>
          <span>{adults}</span>
          <button
            onClick={() => setValue("adults", adults + 1)}
          >
            <BsPlus />
          </button>
        </div>
      </div>

      {/* CHILDREN */}
      <div>
        <label className="block mb-1 text-md">Children</label>
        <div className="flex items-center justify-between input-pill">
          <button
            onClick={() =>
              setValue("children", Math.max(0, children - 1))
            }
          >
            <BsDash />
          </button>
          <span>{children}</span>
          <button
            onClick={() => setValue("children", children + 1)}
          >
            <BsPlus />
          </button>
        </div>
      </div>

    </div>

    <div>
      <label className="block mb-1 text-md">Address</label>
      <input
        {...register("address")}
        placeholder="Enter street address"
        className="input-pill w-full"
      />
    </div>

    <div>
      <label className="block mb-1 text-md">City</label>
      <input
        {...register("city")}
        placeholder="Enter city"
        className="input-pill w-full"
      />
    </div>

    <div>
      <label className="block mb-1 text-md">Country</label>
      <input
        {...register("country")}
        placeholder="Enter country"
        className="input-pill w-full"
      />
    </div>

    <div>
      <label className="block mb-1 text-md">Postal Code</label>
      <input
        {...register("postalCode")}
        placeholder="Enter postal code"
        className="input-pill w-full"
      />
    </div>

    <div>
      <label className="block mb-2 text-md">Booking Comments</label>
      <textarea
        {...register("message")}
        placeholder="Add any special requests or comments..."
        className="input-pill w-full h-32 resize-none"
      />
    </div>
  </div>
</div>


        {/* ✅ RIGHT — BOOKING CARD (UNCHANGED) */}
        <div className="w-full max-w-2xl mx-auto">

          <img
            src={property?.multiple_image?.[0] || "/placeholder.png"}
            className="w-full h-[300px] object-cover rounded-2xl mb-6"
          />

          <h2 className="text-2xl font-semibold mb-6">Your Booking Details</h2>

          <div className="space-y-4 text-gray-700">

            <div className="flex justify-between">
              <span>A$ {property.price} × {nights} night</span>
              <span>A$ {rentTotal}</span>
            </div>

            <div className="flex justify-between">
              <span>Cleaning Fee</span>
              <span>A$ {property.cleaning_fee}</span>
            </div>

            <div className="flex justify-between">
              <span>Booking Fee (4.5%)</span>
              <span>A$ {bookingFee.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-xl font-bold border-t pt-4">
              <span>Total</span>
              <span>A$ {totalPrice.toFixed(2)}</span>
            </div>
          </div>

          <div className="mt-6 round-2xl">
            <img src={stripeLogo} className="h-20 w-36 rounded-2xl" />
          </div>

          <button className="w-full mt-8 bg-[#85A790] text-white py-4 rounded-full text-lg font-semibold hover:opacity-90 transition"  onClick={() => navigate(`/paymentconfirm/${id}`)}>
            Proceed to Payment
          </button>

        </div>
      </div>
    </section>
  );
};

export default MakePayment;
