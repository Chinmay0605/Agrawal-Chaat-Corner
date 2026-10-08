function HomemadeCollection() {
  const products = [
    {
      name: "Chana Papad",
      hindi: "चना पापड़",
      description: "Crispy homemade papad made with traditional recipes.",
      image: "/homemade/chana-papad.jpg",
      tag: "Traditional",
    },
    {
      name: "Moong Papad",
      hindi: "मूंग पापड़",
      description: "Light, crisp and full of authentic homemade flavour.",
      image: "/homemade/moong-papad.jpg",
      tag: "Homemade",
    },
    {
      name: "Chana Badi",
      hindi: "चना बड़ी",
      description: "Sun-dried homemade badi prepared with traditional care.",
      image: "/homemade/chana-badi.jpg",
      tag: "Homemade",
    },
    {
      name: "Moong Badi",
      hindi: "मूंग बड़ी",
      description: "Traditional moong badi made the old-fashioned way.",
      image: "/homemade/moong-badi.jpg",
      tag: "Traditional",
    },
    {
      name: "Aloo Papad",
      hindi: "आलू पापड़",
      description: "Crispy potato papad perfect for every meal.",
      image: "/homemade/aloo-papad.jpg",
      tag: "Favourite",
    },
    {
      name: "Aloo Chips",
      hindi: "आलू चिप्स",
      description: "Thin, crispy potato chips made for a delicious crunch.",
      image: "/homemade/aloo-chips.jpg",
      tag: "Popular",
    },
    {
      name: "Lasun Papad",
      hindi: "लहसुन पापड़",
      description: "A traditional papad with a delicious garlic flavour.",
      image: "/homemade/Lehsun-papad.jpg",
      tag: "Special",
    },
    {
      name: "Aloo Sabudana Papad",
      hindi: "आलू साबूदाना पापड़",
      description:
        "A traditional crispy combination of potato and sabudana.",
      image: "/homemade/aloo-sabudana-papad.jpg",
      tag: "Traditional",
    },
    {
      name: "Wheat Kuldaayi",
      hindi: "गेहूं की कुलड़ाई",
      description: "Traditional wheat-based homemade speciality.",
      image: "/homemade/wheat-kuldaayi.jpg",
      tag: "Homemade",
    },
    {
      name: "Rice Kuldaayi",
      hindi: "चावल की कुलड़ाई",
      description: "Crispy rice-based traditional homemade speciality.",
      image: "/homemade/rice-kuldaayi.jpg",
      tag: "Traditional",
    },
    {
      name: "Aloo Sabudana Kuldaayi",
      hindi: "आलू साबूदाना कुलड़ाई",
      description:
        "A delicious traditional blend of potato and sabudana.",
      image: "/homemade/aloo-sabudana-kuldaayi.jpg",
      tag: "Favourite",
    },
    {
      name: "Different Fryums",
      hindi: "अलग-अलग फ्रायम्स",
      description:
        "A variety of colourful and crunchy fryums for every generation.",
      image: "/homemade/fryums.jpg",
      tag: "Popular",
    },
  ];

  return (
    <section
      id="homemade"
      className="bg-[#FFF8EA] px-6 pt-24 pb-10"
    >
      <div className="mx-auto max-w-7xl">

        {/* ================= HEADING ================= */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#8B1E1E]">
            Homemade Collection
          </p>

          <h2 className="font-serif text-4xl font-semibold leading-tight text-[#241510] md:text-6xl">
            From Our Home
            <br />
            To Your Home
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#765B4A]">
            Traditional homemade favourites prepared with simple
            ingredients, familiar recipes and the warmth of generations.
          </p>

        </div>

        {/* ================= DIVIDER ================= */}
        <div className="mx-auto mt-8 flex items-center justify-center gap-3">
          <span className="h-px w-16 bg-[#C89B3C]" />
          <span className="text-[#8B1E1E]">✦</span>
          <span className="h-px w-16 bg-[#C89B3C]" />
        </div>

        {/* ================= PRODUCT GRID ================= */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {products.map((product) => (
            <div
              key={product.name}
              className="group overflow-hidden rounded-[1.5rem] border border-[#E8D5B5] bg-[#FFFDF8] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

              <div className="relative h-64 overflow-hidden bg-[#F3DFC5]">

                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute left-4 top-4 rounded-full bg-[#8B1E1E] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-md">
                  {product.tag}
                </div>

              </div>

              <div className="p-7">

                <h3 className="font-serif text-2xl font-semibold text-[#241510]">
                  {product.name}
                </h3>

                <p className="mt-1 text-lg text-[#8B1E1E]">
                  {product.hindi}
                </p>

                <p className="mt-4 text-[15px] leading-7 text-[#765B4A]">
                  {product.description}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-[#E8D5B5] pt-5">

                  <span className="text-sm font-medium text-[#765B4A]">
                    Made with care
                  </span>

                  <span className="text-lg text-[#8B1E1E] transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>

                </div>

              </div>

            </div>
          ))}

        </div>

       {/* ================= MANY MORE ================= */}
<div className="mt-16 rounded-[1.5rem] border border-[#E8D5B5] bg-[#F8EBD7] px-6 py-12 text-center">

  <h3 className="font-serif text-4xl font-semibold leading-tight text-[#8B1E1E] md:text-5xl">
    And Many More
  </h3>

  <p className="mt-3 text-lg font-semibold font-medium text-[#765B4A] md:text-xl">
    (और भी बहुत कुछ)
  </p>

  <p className="mx-auto mt-6 max-w-2xl leading-7 text-[#765B4A]">
    Discover more homemade favourites, traditional snacks and
    family recipes prepared with the same care passed down
    through generations.
  </p>

  <a
    href="#menu"
    style={{ color: "#FFFFFF" }}
    className="mt-8 inline-flex rounded-full bg-[#8B1E1E] px-7 py-3 font-semibold shadow-md transition hover:bg-[#741818]"
  >
    Explore Our Menu
    <span className="ml-2">→</span>
  </a>

</div>

      </div>
    </section>
  );
}

export default HomemadeCollection;