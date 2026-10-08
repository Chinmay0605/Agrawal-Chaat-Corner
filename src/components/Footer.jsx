function Footer() {
  return (
    <footer className="bg-[#241510] text-[#FFF8EA]">

      {/* ================= MAIN FOOTER ================= */}
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* ================= BRAND ================= */}
          <div className="lg:col-span-1">

            <div className="flex items-center gap-3">

              <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#D9A441] bg-[#8B1E1E] font-serif text-xl font-bold text-white">
                AC
              </div>

              <div>
                <h3 className="font-serif text-2xl font-semibold text-white">
                  Agrawal
                </h3>

                <p className="text-xs font-semibold tracking-[0.25em] text-[#E8C778]">
                  CHAAT CORNER
                </p>
              </div>

            </div>

            <p className="mt-6 text-2xl text-[#F4D89A]">
              बुजुर्गों की देन
            </p>

            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#C89B3C]">
              Since 2000
            </p>

            <p className="mt-5 max-w-sm text-sm leading-7 text-[#CBB9AA]">
              Traditional flavours, homemade goodness and the warmth
              of generations — served with love.
            </p>

          </div>

          {/* ================= QUICK LINKS ================= */}
          <div>

            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E8C778]">
              Quick Links
            </h4>

            <div className="mt-6 space-y-3">

              <a
                href="#home"
                className="block text-[#D8C9BD] transition hover:text-[#F4D89A]"
              >
                Home
              </a>

              <a
                href="#menu"
                className="block text-[#D8C9BD] transition hover:text-[#F4D89A]"
              >
                Menu
              </a>

              <a
                href="#homemade"
                className="block text-[#D8C9BD] transition hover:text-[#F4D89A]"
              >
                Homemade Collection
              </a>

              <a
                href="#story"
                className="block text-[#D8C9BD] transition hover:text-[#F4D89A]"
              >
                Our Story
              </a>

              <a
                href="#visit"
                className="block text-[#D8C9BD] transition hover:text-[#F4D89A]"
              >
                Visit Us
              </a>

            </div>

          </div>

          {/* ================= CONTACT ================= */}
          <div>

            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E8C778]">
              Contact
            </h4>

            <div className="mt-6 space-y-4">

              <a
                href="tel:9039002436"
                className="block text-[#D8C9BD] transition hover:text-[#F4D89A]"
              >
                9039002436
              </a>

              <a
                href="tel:9009574738"
                className="block text-[#D8C9BD] transition hover:text-[#F4D89A]"
              >
                9009574738
              </a>

            </div>

          </div>

          {/* ================= VISIT ================= */}
          <div>

            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E8C778]">
              Visit Us
            </h4>

            <p className="mt-6 text-sm leading-7 text-[#D8C9BD]">
              280, G-1 Suryakoti Appartment,
              <br />
              Sahajeevan Nagar,
              <br />
              Gopur Square,
              <br />
              Parag Bakery Road,
              <br />
              Indore
            </p>

            <div className="mt-5">

              <p className="text-sm font-semibold text-white">
                Monday – Sunday
              </p>

              <p className="mt-1 text-sm text-[#F4D89A]">
                4:00 PM – 10:30 PM
              </p>

            </div>

          </div>

        </div>

        {/* ================= DIVIDER ================= */}
        <div className="my-12 h-px bg-white/10" />


        {/* ================= BOTTOM ================= */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">

          <p className="text-sm text-[#A99587]">
            © {new Date().getFullYear()} Agrawal Chaat Corner.
            All rights reserved.
          </p>

          <p className="font-serif text-lg text-[#F4D89A]">
            स्वाद जो दिल में रह जाए
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;