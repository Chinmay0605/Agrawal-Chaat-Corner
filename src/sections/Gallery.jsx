function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-[#FFF8EA] px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#8B1E1E]">
            A Glimpse Of Our Corner
          </p>

          <h2 className="font-serif text-5xl font-semibold text-[#241510] md:text-6xl">
            Taste. Tradition. Together.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[#765B4A]">
            A little glimpse into the flavours and traditions of
            Agrawal Chaat Corner.
          </p>
        </div>

        {/* Gallery placeholders */}
        <div className="grid gap-5 md:grid-cols-3">

          <div className="flex min-h-[280px] items-center justify-center rounded-3xl border border-[#E8D5B5] bg-[#F4E6D2]">
            <span className="text-sm font-medium text-[#765B4A]">
              Chaat Gallery
            </span>
          </div>

          <div className="flex min-h-[280px] items-center justify-center rounded-3xl border border-[#E8D5B5] bg-[#EBD8C2]">
            <span className="text-sm font-medium text-[#765B4A]">
              Homemade Collection
            </span>
          </div>

          <div className="flex min-h-[280px] items-center justify-center rounded-3xl border border-[#E8D5B5] bg-[#F1DEC8]">
            <span className="text-sm font-medium text-[#765B4A]">
              Our Corner
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Gallery;