import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import properties from "../../objects/properties.json";

import "swiper/css";
import "swiper/css/pagination";

export default function PropertyReviewsCarousel({ propertyId }: { propertyId: number }) {
    const property = properties.find((p) => p.id === propertyId);
    if (!property) return null;

    return (
        <div className="mt-10 w-full">
            {/* Rating Summary */}
            <div className="flex items-center gap-2 mb-6 cursor-pointer">
                <span className="text-[#5F8F6B] text-xl">★</span>
                <p className="text-[#171717] font-semibold text-[32px]">
                    {property.rating} ({property.reviews} reviews)
                </p>
            </div>

            {/* Carousel */}
            <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                spaceBetween={16}
                pagination={{ el: ".custom-pagination", clickable: true }}
                breakpoints={{
                    480: { slidesPerView: 1, spaceBetween: 16 },
                    640: { slidesPerView: 2, spaceBetween: 20 },
                    1024: { slidesPerView: 2, spaceBetween: 20 },
                    1280: { slidesPerView: 3, spaceBetween: 20 },
                }}
                className="pb-12"
            >
                {property.reviews_list.map((review, i) => (
                    <SwiperSlide key={i} className="!flex cursor-pointer">
                        <div className="bg-white border rounded-xl p-5 shadow-sm w-full h-[220px] flex flex-col">

                            {/* Top Row */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3 cursor-pointer">
                                    <img
                                        src={review.reviewer_image}
                                        alt={review.reviewer_name}
                                        className="w-10 h-10 rounded-full object-cover cursor-pointer"
                                    />
                                    <div>
                                        <h4 className="text-[#171717] font-semibold text-[18px] cursor-pointer">
                                            {review.reviewer_name}
                                        </h4>
                                        <p className="text-[#737373] text-[16px] cursor-pointer">
                                            {new Date(review.review_date).toLocaleDateString("en-US", {
                                                month: "long",
                                                year: "numeric",
                                            })}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-1 cursor-pointer">
                                    {Array.from({ length: 5 }).map((_, idx) => (
                                        <span
                                            key={idx}
                                            className={`text-sm ${idx < review.review_rating
                                                ? "text-[#5F8F6B]"
                                                : "text-[#CFCFCF]"
                                                }`}
                                        >
                                            ★
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Truncated Review Text */}
                            <p className="text-[#404040] mt-4 text-[18px] leading-relaxed line-clamp-3 cursor-pointer">
                                {review.review}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Pagination */}
            <div className="custom-pagination flex justify-center gap-2 mt-2 cursor-pointer"></div>

            <style>{`
                .custom-pagination .swiper-pagination-bullet {
                    width: 8px;
                    height: 8px;
                    background: #CFCFCF;
                    opacity: 1;
                    border-radius: 50%;
                    cursor: pointer;
                }
                .custom-pagination .swiper-pagination-bullet-active {
                    background: #5F8F6B;
                    width: 10px;
                    height: 10px;
                    cursor: pointer;
                }
            `}</style>
        </div>
    );
}
