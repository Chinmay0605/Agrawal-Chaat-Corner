function OurStory() {
  return (
    <section
      id="story"
      className="bg-[#FFF8EA] px-6 pt-8 pb-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#8B1E1E]">
            Our Story
          </p>

          <h2 className="font-serif text-4xl font-semibold leading-tight text-[#241510] md:text-6xl">
            A Taste of Tradition
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#765B4A]">
            Some flavours are more than food. They are memories,
            traditions and stories passed from one generation to another.
          </p>

        </div>

        {/* ================= DIVIDER ================= */}
        <div className="my-14 flex items-center justify-center gap-3">
          <span className="h-px w-20 bg-[#C89B3C]" />
          <span className="text-[#8B1E1E]">✦</span>
          <span className="h-px w-20 bg-[#C89B3C]" />
        </div>

        {/* ================= STORY CONTENT ================= */}
        <div className="grid items-center gap-12 md:grid-cols-2">

          {/* ================= LEFT HERITAGE CARD ================= */}
          <div className="relative overflow-hidden rounded-[2rem] border border-[#E8D5B5] bg-[#8B1E1E] p-10 shadow-lg md:p-14">

            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-white/10" />

            <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full border border-white/10" />

            <div className="relative z-10">

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#E8C778]">
                Since 2000
              </p>

              <h3 className="mt-5 font-serif text-4xl font-semibold leading-tight text-white md:text-5xl">
                Agrawal Chaat Corner
              </h3>

              <p className="mt-4 text-2xl text-[#F4D89A]">
                बुजुर्गों की देन
              </p>

              <div className="my-8 h-px w-20 bg-[#C89B3C]" />

              <p className="text-lg leading-8 text-[#FFF4DF]">
                The flavours we serve today are inspired by the food,
                recipes and traditions that have been loved by our family
                for generations.
              </p>

              <p className="mt-5 text-lg leading-8 text-[#FFF4DF]">
                From comforting chaat to homemade favourites, every dish
                carries a little piece of that tradition.
              </p>

            </div>

          </div>

          {/* ================= RIGHT CONTENT ================= */}
          <div className="space-y-8">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8B1E1E]">
                More Than Just Chaat
              </p>

              <h3 className="mt-3 font-serif text-3xl font-semibold leading-tight text-[#241510] md:text-4xl">
                Food that brings people together.
              </h3>

            </div>

            <p className="text-lg leading-8 text-[#765B4A]">
              Agrawal Chaat Corner was created around a simple idea:
              serve familiar Indian flavours with the same warmth and
              care found in a family kitchen.
            </p>

            <p className="text-lg leading-8 text-[#765B4A]">
              Our menu brings together beloved street-food favourites
              alongside traditional homemade products such as papad,
              badi, chips, kuldaayi and fryums.
            </p>

            {/* ================= VALUES ================= */}
            <div className="grid gap-4 sm:grid-cols-3">

              <div className="rounded-2xl border border-[#E8D5B5] bg-[#FFFDF8] p-5">

                <div className="text-2xl text-[#8B1E1E]">
                  ✦
                </div>

                <h4 className="mt-3 font-semibold text-[#241510]">
                  Tradition
                </h4>

                <p className="mt-2 text-sm leading-6 text-[#765B4A]">
                  Recipes inspired by generations.
                </p>

              </div>

              <div className="rounded-2xl border border-[#E8D5B5] bg-[#FFFDF8] p-5">

                <div className="text-2xl text-[#8B1E1E]">
                  ✦
                </div>

                <h4 className="mt-3 font-semibold text-[#241510]">
                  Freshness
                </h4>

                <p className="mt-2 text-sm leading-6 text-[#765B4A]">
                  Prepared with care and attention.
                </p>

              </div>

              <div className="rounded-2xl border border-[#E8D5B5] bg-[#FFFDF8] p-5">

                <div className="text-2xl text-[#8B1E1E]">
                  ✦
                </div>

                <h4 className="mt-3 font-semibold text-[#241510]">
                  Together
                </h4>

                <p className="mt-2 text-sm leading-6 text-[#765B4A]">
                  Food made to be shared.
                </p>

              </div>

            </div>

            {/* ================= BUTTON ================= */}
            <a
              href="#menu"
              style={{ color: "#FFFFFF" }}
              className="inline-flex rounded-full bg-[#8B1E1E] px-7 py-3 font-semibold shadow-md transition hover:bg-[#741818]"
            >
              Explore Our Menu
              <span className="ml-2">→</span>
            </a>

          </div>

        </div>

        {/* ================= OUR BELIEF ================= */}
        <div className="mt-20 rounded-[2rem] border border-[#E8D5B5] bg-[#F8EBD7] px-6 py-12 text-center">

          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8B1E1E]">
              Our Belief
            </p>

            <h3 className="mt-5 w-full font-serif text-3xl font-semibold leading-[1.35] text-[#241510] md:text-5xl">
              Good food brings people closer, and traditions keep those
              moments alive.
            </h3>

            <p className="mt-6 text-[#765B4A]">
              Agrawal Chaat Corner
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default OurStory;