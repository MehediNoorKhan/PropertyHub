import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import locationicongreen from "../../images/locationgreenicon.png";
import staricon from "../../images/staricon.png";

import { useRef, useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";

import properties from "../../objects/properties.json";

import img1 from "../../images/hotelimag2.png";
import img2 from "../../images/hotelimage1.png";
import img3 from "../../images/hotelimag2.png";

import { GrPrevious, GrNext } from "react-icons/gr";
import { BsArrowLeft } from "react-icons/bs";

import { PaymentForm } from "./PaymentForm";
import { Button } from "@/components/ui/button";

import type { Swiper as SwiperType } from "swiper";

const MakePayment: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const swiperRef = useRef<SwiperType | null>(null);

    const images = [img1, img2, img3];

    const property = properties.find((p) => String(p.id) === String(id));

    // Set page title
    useEffect(() => {
        if (property) {
            document.title = `Finalize Booking | ${property.title} | GuestPro`;
        }
    }, [property]);

    if (!property) {
        return (
            <div className="p-6 text-center text-red-500">
                Property not found.
            </div>
        );
    }

    return (
        <section className="w-full px-4 sm:px-6 xl:px-24 py-8 relative">

            {/* BACK BUTTON */}
            <Button
                onClick={() => navigate(-1)}
                className="
                    flex items-center gap-2 textprimarygray text-[16px] sm:text-[18px]
                    font-semibold px-12 sm:px-16 py-5 sm:py-6 mb-6 sm:mb-8 ml-4 sm:ml-8
                    bg-[#F3F3F3] hover:bg-[#b4b0b0] rounded-4xl
                "
            >
                <BsArrowLeft size={20} />
                Back
            </Button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-14">

                {/* LEFT — PAYMENT FORM */}
                <div className="w-full">
                    <PaymentForm />
                </div>

                {/* RIGHT SIDE */}
                <div className="w-full bg-white rounded-2xl p-2 xl:p-4">

                    {/* IMAGE SLIDER */}
                    <div className="relative w-full">
                        <Swiper
                            loop
                            spaceBetween={10}
                            slidesPerView={1}
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                            className="rounded-xl"
                        >
                            {images.map((img, i) => (
                                <SwiperSlide key={i}>
                                    <img
                                        src={img}
                                        alt={`${property.title}-${i}`}
                                        className="
                                            w-full h-[220px] sm:h-[260px] md:h-[320px] xl:h-[360px]
                                            object-cover rounded-xl
                                        "
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* PREV | NEXT BUTTONS */}
                        <div
                            className="
                                absolute bottom-10 left-1/2 -translate-x-1/2
                                flex gap-4 z-20
                            "
                        >
                            <button
                                onClick={() => swiperRef.current?.slidePrev()}
                                className="
                                    w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center
                                    rounded-full bg-transparent/20 
                                    backdrop-blur-sm
                                    text-white font-bold cursor-pointer
                                "
                            >
                                <GrPrevious size={20} />
                            </button>

                            <button
                                onClick={() => swiperRef.current?.slideNext()}
                                className="
                                    w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center
                                    rounded-full bg-transparent/20 
                                    backdrop-blur-sm
                                    text-white font-bold  cursor-pointer
                                "
                            >
                                <GrNext size={20} />
                            </button>
                        </div>
                    </div>

                    {/* TITLE */}
                    <h2 className="text-[22px] textprimaryblack sm:text-[30px] md:text-[36px] xl:text-[48px] font-semibold mt-5">
                        {property.title}
                    </h2>

                    {/* LOCATION */}
                    <div className="flex flex-wrap items-center gap-4 mt-3">
                        <div className="flex items-center gap-1">
                            <img src={locationicongreen} alt="location" />
                            <p className="textprimarygray">{property.location}</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <img src={staricon} alt="rating" />
                            <p className="textprimarygray">{property.rating}</p>
                            <p className="textprimarygray">{property.reviews} reviews</p>
                        </div>
                    </div>

                    {/* BOOKING DETAILS */}
                    <h3 className="textprimaryblack text-[16px] md:text-[24px] xl:text-[36px] mt-8 mb-5 font-bold">
                        Booking Details
                    </h3>

                    <div className="flex justify-between py-2">
                        <p className="text-black/50">Dec 2 – Dec 6, 2025</p>
                        <a className="textprimarygreen underline cursor-pointer">Edit</a>
                    </div>

                    <div className="flex justify-between py-2">
                        <p className="text-black/50">2 guests</p>
                        <a className="textprimarygreen underline cursor-pointer">Edit</a>
                    </div>

                    {/* PRICE DETAILS */}
                    <h3 className="textprimaryblack text-[16px] md:text-[24px] xl:text-[36px] mt-8 mb-5 font-bold">
                        Price Details
                    </h3>

                    <div className="flex justify-between py-2 text-lg">
                        <p className="text-black/50">$350 × 2 nights</p>
                        <p className="text-black/50">$700</p>
                    </div>

                    <div className="flex justify-between py-4 border-b border-[#ADADAD] text-lg">
                        <p className="text-black/50">Cleaning fee</p>
                        <p className="text-black/50">$200</p>
                    </div>

                    <div className="textprimaryblack flex justify-between mt-4 text-[18px] md:text-[28px] xl:text-[40px] font-bold">
                        <span>Total</span>
                        <span>$900</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakePayment;

