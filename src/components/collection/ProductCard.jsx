// components/collection/ProductCard.jsx
import React, { useState } from "react";

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);

  const changeImage = (direction) => {
    const total = product.images.length;
    setImgIndex((prev) =>
      direction === "next" ? (prev + 1) % total : (prev - 1 + total) % total
    );
  };

  return (
    <div
      className="w-full bg-white border border-gray-200 shadow hover:shadow-lg transition rounded-lg overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative w-full">
        <img
          src={product.images[imgIndex]}
          alt={product.title}
          className="w-full h-[300px] sm:h-[350px] lg:h-[450px] object-cover"
        />

        {hovered && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-4">
            <button
              onClick={(e) => {
                e.stopPropagation();
                changeImage("prev");
              }}
              className="px-3 py-1 bg-white shadow hover:bg-black hover:text-white transition"
            >
              ◀
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                changeImage("next");
              }}
              className="px-3 py-1 bg-white shadow hover:bg-black hover:text-white transition"
            >
              ▶
            </button>
          </div>
        )}
      </div>

      <div className="p-4 text-center">
        <p className="text-sm text-gray-500 mb-1">{product.badge}</p>
        <h3 className="text-base font-semibold">{product.title}</h3>
        <p className="text-sm text-gray-700">{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
