import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import reviews from "../../objects/reviews.json";
import star from "../../images/star.png";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

interface ReviewType {
    id: number;
    name: string;
    location: string;
    rating: number;
    review: string;
}

const GuestReviews = () => {
    const renderStars = (count: number) => (
        <div className="flex gap-1 mb-3 sm:mb-4">
            {Array.from({ length: count }).map((_, i) => (
                <img
                    key={i}
                    src={star}
                    alt="star"
                    className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5"
                />
            ))}
        </div>
    );

    const ReviewCard: React.FC<{ review: ReviewType }> = ({ review }) => {
        const [expanded] = useState(false);

        const limit = 140;
        const displayedText = expanded
            ? review.review
            : review.review.slice(0, limit);

        return (
            <div className="bg-[#7FA38B1A] rounded-xl shadow-md flex flex-col p-5 sm:p-6 md:p-7 lg:p-8 h-full">
                {renderStars(review.rating)}

                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#404040] leading-relaxed line-clamp-2 text-ellipsis">
                    {displayedText}
                </p>

                <div className="mt-auto pt-4">
                    <p className="text-[#171717] font-bold text-base sm:text-lg md:text-xl">
                        {review.name}
                    </p>
                    <p className="text-[#737373] text-xs sm:text-sm md:text-base">
                        {review.location}
                    </p>
                </div>
            </div>
        );
    };


    return (
        <section className="py-12 sm:py-16 lg:py-24 px-6 sm:px-10 md:px-16 lg:px-24">
            {/* Title */}
            <h2 className="text-[#171717] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-center">
                Guest Reviews
            </h2>

            <p className="text-[#525252] text-sm sm:text-base md:text-lg lg:text-[22px] mt-3 mb-12 text-center">
                See what our guests have to say about their experiences
            </p>

            {/* Swiper */}
            <Swiper
                slidesPerView={1}
                spaceBetween={16}
                breakpoints={{
                    480: { slidesPerView: 1, spaceBetween: 26 },
                    640: { slidesPerView: 1, spaceBetween: 24 },
                    768: { slidesPerView: 2, spaceBetween: 28 },
                    1024: { slidesPerView: 3, spaceBetween: 32 },
                }}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                className="pb-12!"
            >
                {reviews.map((review: ReviewType) => (
                    <SwiperSlide key={review.id} className="h-auto!">
                        <ReviewCard review={review} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default GuestReviews;
