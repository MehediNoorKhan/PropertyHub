import { useState } from "react";
import star from "@/images/star2.png";

export function Review() {
  const [rating, setRating] = useState<number | null>(null);
  const [hover, setHover] = useState<number | null>(null);

  const handleClick = (value: number) => {
    // ✅ TOGGLE: click again to reset
    if (rating === value) {
      setRating(null);
    } else {
      setRating(value);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">
      <div className="bg-white w-[360px] rounded-3xl px-8 py-10 shadow-xl text-center">

        {/* ✅ TITLE */}
        <h2 className="text-xl font-semibold mb-6">
          How was your order ?
        </h2>

        {/* ✅ CLICKABLE + TOGGLEABLE STARS */}
        <div className="flex justify-center gap-3 mb-8">
          {[1, 2, 3, 4, 5].map((starValue) => {
            const isActive =
              (hover ?? rating ?? 0) >= starValue;

            return (
              <img
                key={starValue}
                src={star}
                alt="star"
                onClick={() => handleClick(starValue)}
                onMouseEnter={() => setHover(starValue)}
                onMouseLeave={() => setHover(null)}
                className={`
                  w-8 h-8 cursor-pointer transition
                  ${isActive ? "opacity-100" : "opacity-40"}
                `}
                style={{
                  filter: isActive
                    ? "invert(74%) sepia(60%) saturate(500%) hue-rotate(5deg) brightness(95%) contrast(95%)"
                    : "none",
                }}
              />
            );
          })}
        </div>

        {/* ✅ LABEL */}
        <p className="text-left font-medium mb-2">
          Give a Review
        </p>

        {/* ✅ TEXTAREA */}
        <textarea
          placeholder="Text..."
          className="
            w-full h-[120px]
            border border-gray-200
            rounded-xl
            px-4 py-3
            text-sm
            outline-none
            resize-none
            focus:ring-2 focus:ring-yellow-300
          "
        />

        {/* ✅ SUBMIT BUTTON */}
        <button
          className="
            w-full mt-8
            bg-textprimargray
            text-white
            py-4
            rounded-full
            text-lg
            font-semibold
            hover:opacity-90
            transition
          "
        >
          Submit
        </button>
      </div>
    </div>
  );
}
