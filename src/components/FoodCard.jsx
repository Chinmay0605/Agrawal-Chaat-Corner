import React from "react";

function FoodCard({ item }) {
  return (
    <div className="bg-[#fffdf8] rounded-3xl overflow-hidden border border-[#eadfce] shadow-sm hover:shadow-lg transition-shadow duration-300">

      {/* Image */}
      <div className="relative w-full h-[260px] overflow-hidden bg-[#eee0d0]">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />

        {/* Price */}
        <div className="absolute top-4 right-4 bg-[#8f1d1d] text-white px-4 py-2 rounded-full font-semibold">
          ₹{item.price}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">

        <h3 className="text-2xl font-serif font-semibold text-[#4a1515]">
          {item.name}
        </h3>

        {item.hindi && (
          <p className="mt-1 text-lg text-[#8f1d1d]">
            {item.hindi}
          </p>
        )}

        {item.description && (
          <p className="mt-4 text-[#765b4a] leading-relaxed">
            {item.description}
          </p>
        )}

        {item.pieces && (
          <p className="mt-5 text-sm text-[#765b4a]">
            {item.pieces}
          </p>
        )}

        <div className="mt-5 flex items-center justify-between">
          <span className="text-xl font-semibold text-[#8f1d1d]">
            ₹{item.price}
          </span>
        </div>

      </div>
    </div>
  );
}

export default FoodCard;