import { useParams } from "react-router";
import { useMemo, useState } from "react";
import { useGetSinglePropertyQuery } from "@/store/api/auth.api";

export default function PropertyImages() {
  const { id } = useParams();
  const { data, isLoading } = useGetSinglePropertyQuery(id!);
  const property = data?.data;

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

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

  const images = useMemo(() => {
    if (!property) return [];

    const allImages = [
      ...(Array.isArray(property.main_image)
        ? property.main_image
        : [property.main_image]),
      ...(Array.isArray(property.multiple_image)
        ? property.multiple_image
        : [property.multiple_image]),
    ].filter(Boolean);

    return allImages.map(getImageUrl);
  }, [property]);

  if (isLoading) {
    return <div className="p-10 text-center text-xl">Loading Gallery...</div>;
  }

  if (!property) {
    return (
      <div className="p-10 text-center text-red-500 text-xl font-semibold">
        Property Not Found
      </div>
    );
  }

  return (
    <div className="px-5 md:px-12 py-10">

      {/* ✅ PAGE HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          {property.title} — Gallery
        </h1>
        <p className="text-gray-500">
          {images.length} Photos Available
        </p>
      </div>

      {/* ✅ IMAGE GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-xl cursor-pointer group"
            onClick={() => setActiveIndex(index)}
          >
            <img
              src={img}
              className="w-full h-[260px] object-cover rounded-xl group-hover:scale-110 transition"
              loading="lazy"
              onError={(e) => {
                if (!e.currentTarget.src.includes("placeholder")) {
                  e.currentTarget.src = "/placeholder.png";
                }
              }}
            />
          </div>
        ))}
      </div>

      {/* ✅ FULLSCREEN LIGHTBOX */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="relative max-w-6xl w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* ✅ IMAGE */}
            <img
              src={images[activeIndex]}
              className="max-h-[90vh] w-auto rounded-xl"
            />

            {/* ✅ CLOSE */}
            <button
              onClick={() => setActiveIndex(null)}
              className="absolute top-4 right-4 text-white text-3xl font-bold"
            >
              ×
            </button>

            {/* ✅ PREVIOUS */}
            {activeIndex > 0 && (
              <button
                onClick={() => setActiveIndex(activeIndex - 1)}
                className="absolute left-4 text-white text-4xl font-bold"
              >
                ‹
              </button>
            )}

            {/* ✅ NEXT */}
            {activeIndex < images.length - 1 && (
              <button
                onClick={() => setActiveIndex(activeIndex + 1)}
                className="absolute right-4 text-white text-4xl font-bold"
              >
                ›
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
