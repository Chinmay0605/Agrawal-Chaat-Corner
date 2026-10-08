import React from "react";
import menuItems from "../data/menu";
import FoodCard from "../components/FoodCard";

function MenuSection() {
  return (
    <section className="w-full bg-[#fff8ed] pt-20 pb-3">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-sm tracking-[0.3em] uppercase text-[#8f1d1d] mb-3">
            Our Menu
          </p>

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#4a1515]">
            Street Food Made With Love
          </h2>

          <p className="mt-4 text-[#765b4a] max-w-2xl mx-auto">
            Freshly prepared favourites inspired by tradition and served with
            the warmth of generations.
          </p>
        </div>

        {/* Menu Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item, index) => (
            <FoodCard
              key={item.name || index}
              item={item}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default MenuSection;