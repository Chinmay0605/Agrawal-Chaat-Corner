function VisitUs() {
  return (
    <section id="visit" className="bg-[#F8EBD7] px-6 py-24">
      <div className="mx-auto max-w-7xl">

        {/* SECTION HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#8B1E1E]">
            Visit Us
          </p>

          <h2 className="font-serif text-4xl font-semibold leading-tight text-[#241510] md:text-6xl">
            Come Taste the Tradition
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#765B4A]">
            Visit Agrawal Chaat Corner and enjoy the flavours that have been
            bringing people together since 2000.
          </p>
        </div>

        {/* DIVIDER */}
        <div className="my-14 flex items-center justify-center gap-3">
          <span className="h-px w-20 bg-[#C89B3C]" />
          <span className="text-[#8B1E1E]">✦</span>
          <span className="h-px w-20 bg-[#C89B3C]" />
        </div>

        {/* MAIN CONTENT */}
        <div className="grid items-stretch gap-8 lg:grid-cols-2">

          {/* LOCATION CARD */}
          <div className="flex h-full flex-col rounded-[2rem] border border-[#E8D5B5] bg-[#FFFDF8] p-8 shadow-sm md:p-10">

            {/* LOCATION HEADING */}
            <div className="flex items-start gap-5">

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#8B1E1E] text-white shadow-md">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8B1E1E]">
                  Our Location
                </p>

                <h3 className="mt-2 font-serif text-3xl font-semibold text-[#241510]">
                  Agrawal Chaat Corner
                </h3>
              </div>
            </div>

            {/* ADDRESS */}
            <div className="mt-12 rounded-2xl bg-[#F8EBD7] p-7">
              <p className="text-xl leading-9 text-[#765B4A]">
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
            </div>

            {/* GOOGLE MAPS BUTTON */}
            <div className="mt-auto pt-10">
              <a
  href="https://www.google.com/maps/place/Agrawal+Chat+Corner/@22.6846861,75.7913527,14z/data=!4m10!1m2!2m1!1sAgrawal+Chaat+Corner,+Suryakoti+Apartment,+280,+Indore,+Madhya+Pradesh!3m6!1s0x3962fc3811a26693:0xa63fddf2dd559bd!8m2!3d22.6846861!4d75.8294615!15sCkZBZ3Jhd2FsIENoYWF0IENvcm5lciwgU3VyeWFrb3RpIEFwYXJ0bWVudCwgMjgwLCBJbmRvcmUsIE1hZGh5YSBQcmFkZXNoWkQiQmFncmF3YWwgY2hhYXQgY29ybmVyIHN1cnlha290aSBhcGFydG1lbnQgMjgwIGluZG9yIG1hZGh5YSBwcmFkZXNoIh1hZ3Jhd2FsIGNoYWF0IGNvcm5lciBzdXJ5YWtvdGkgYXBhcnRtZW50IDI4MCBpbmRvcmUgbWFkaHlhIHByYWRlc2iSARJmYXN0X2Zvb2RfcmVzdGF1cmFudOABAA!16s%2Fg%2F11ddxxjcqg?entry=ttu&g_ep=EgoyMDI2MTAwNS4wIKXMDSoASAFQAw%3D%3D"
  target="_blank"
  rel="noopener noreferrer"
  style={{ color: "#FFFFFF" }}
  className="inline-flex w-fit items-center justify-center rounded-full bg-[#8B1E1E] px-8 py-4 text-base font-semibold shadow-md transition hover:bg-[#741818]"
>
  <svg
    className="mr-2 h-5 w-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>

  Open in Google Maps

  <span className="ml-2">↗</span>
</a>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-8">

            {/* OPENING HOURS */}
            <div className="rounded-[2rem] border border-[#E8D5B5] bg-[#8B1E1E] p-8 shadow-md md:p-10">

              <div className="flex items-start gap-5">

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#FFF8EA] text-[#8B1E1E]">
                  <svg
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E8C778]">
                    Opening Hours
                  </p>

                  <h3 className="mt-2 font-serif text-3xl font-semibold text-white">
                    We're Open Every Day
                  </h3>
                </div>
              </div>

              <div className="mt-8 border-t border-white/20 pt-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-lg text-[#FFF4DF]">
                    Monday – Sunday
                  </span>

                  <span className="text-lg font-semibold text-[#F4D89A]">
                    4:00 PM – 10:30 PM
                  </span>
                </div>
              </div>
            </div>

            {/* CONTACT */}
            <div className="flex flex-1 flex-col rounded-[2rem] border border-[#E8D5B5] bg-[#FFFDF8] p-8 shadow-sm md:p-10">

              <div className="flex items-start gap-5">

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#8B1E1E] text-white shadow-md">
                  <svg
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path
                      d="M22 16.92v3a2 2 0 0 1-2.18 2
                      19.79 19.79 0 0 1-8.63-3.07
                      19.5 19.5 0 0 1-6-6
                      19.79 19.79 0 0 1-3.07-8.67
                      A2 2 0 0 1 4.11 2h3
                      a2 2 0 0 1 2 1.72
                      12.84 12.84 0 0 0 .7 2.81
                      2 2 0 0 1-.45 2.11L8.09 9.91
                      a16 16 0 0 0 6 6l1.27-1.27
                      a2 2 0 0 1 2.11-.45
                      12.84 12.84 0 0 0 2.81.7
                      A2 2 0 0 1 22 16.92z"
                    />
                  </svg>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8B1E1E]">
                    Contact Us
                  </p>

                  <h3 className="mt-2 font-serif text-3xl font-semibold text-[#241510]">
                    We'd Love to Hear From You
                  </h3>
                </div>
              </div>

              {/* PHONE NUMBERS */}
              <div className="mt-8 space-y-4">

                <a
                  href="tel:9039002436"
                  className="flex items-center justify-between rounded-2xl border border-[#E8D5B5] bg-[#F8EBD7] px-5 py-4 transition hover:border-[#8B1E1E]"
                >
                  <div className="flex items-center gap-3">

                    <svg
                      className="h-5 w-5 shrink-0 text-[#8B1E1E]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path
                        d="M22 16.92v3a2 2 0 0 1-2.18 2
                        19.79 19.79 0 0 1-8.63-3.07
                        19.5 19.5 0 0 1-6-6
                        19.79 19.79 0 0 1-3.07-8.67
                        A2 2 0 0 1 4.11 2h3
                        a2 2 0 0 1 2 1.72
                        12.84 12.84 0 0 0 .7 2.81
                        2 2 0 0 1-.45 2.11L8.09 9.91
                        a16 16 0 0 0 6 6l1.27-1.27
                        a2 2 0 0 1 2.11-.45
                        12.84 12.84 0 0 0 2.81.7
                        A2 2 0 0 1 22 16.92z"
                      />
                    </svg>

                    <span className="text-lg text-[#765B4A]">
                      9039002436
                    </span>
                  </div>

                  <span className="font-semibold text-[#8B1E1E]">
                    Call →
                  </span>
                </a>

                <a
                  href="tel:9009574738"
                  className="flex items-center justify-between rounded-2xl border border-[#E8D5B5] bg-[#F8EBD7] px-5 py-4 transition hover:border-[#8B1E1E]"
                >
                  <div className="flex items-center gap-3">

                    <svg
                      className="h-5 w-5 shrink-0 text-[#8B1E1E]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path
                        d="M22 16.92v3a2 2 0 0 1-2.18 2
                        19.79 19.79 0 0 1-8.63-3.07
                        19.5 19.5 0 0 1-6-6
                        19.79 19.79 0 0 1-3.07-8.67
                        A2 2 0 0 1 4.11 2h3
                        a2 2 0 0 1 2 1.72
                        12.84 12.84 0 0 0 .7 2.81
                        2 2 0 0 1-.45 2.11L8.09 9.91
                        a16 16 0 0 0 6 6l1.27-1.27
                        a2 2 0 0 1 2.11-.45
                        12.84 12.84 0 0 0 2.81.7
                        A2 2 0 0 1 22 16.92z"
                      />
                    </svg>

                    <span className="text-lg text-[#765B4A]">
                      9009574738
                    </span>
                  </div>

                  <span className="font-semibold text-[#8B1E1E]">
                    Call →
                  </span>
                </a>

              </div>
            </div>
          </div>
        </div>

        {/* HERITAGE CARD */}
        <div className="mt-10 rounded-[2rem] border border-[#E8D5B5] bg-[#FFFDF8] px-6 py-10 text-center shadow-sm">

          <p className="text-sm font-semibold uppercase tracking-[0.28em] leading-6 text-[#C89B3C]">
            Since 2000
          </p>

          <h3 className="mt-4 font-serif text-3xl font-semibold leading-[1.4] text-[#241510] md:text-4xl">
            Agrawal Chaat Corner
          </h3>

          <p className="mt-2 text-xl font-medium text-[#8B1E1E]">
            बुजुर्गों की देन
          </p>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#765B4A]">
            Traditional flavours. Homemade goodness. Generations of love.
          </p>

        </div>

      </div>
    </section>
  );
}

export default VisitUs;