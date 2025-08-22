// components/collection/CollectionHeader.jsx
import React from "react";

const CollectionHeader = () => {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 mt-10">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide mb-6">
        MENS NEW ARRIVAL
      </h2>

      {/* Categories */}
      <div className="flex flex-wrap gap-4 sm:gap-6 mb-8">
        {["ALL", "TRACKS", "T-SHIRTS", "SHORTS", "GYM SHORTS", "GYM TRACKS"].map(
          (item, i) => (
            <button
              key={i}
              className="px-4 py-2 border border-gray-300 text-sm sm:text-base tracking-wide hover:bg-black hover:text-white transition"
            >
              {item}
            </button>
          )
        )}
      </div>

      {/* Grid / Filter */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2 cursor-pointer">
          <span className="text-sm sm:text-base">GRID</span>
          <img src="/vector3031-x9e9.svg" alt="grid" className="w-5 h-5" />
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <span className="text-sm sm:text-base">FILTER & SORT</span>
          <img src="/magefilter3031-1q8c.svg" alt="filter" className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default CollectionHeader;
