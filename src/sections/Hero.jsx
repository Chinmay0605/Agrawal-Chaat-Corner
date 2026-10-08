import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#FFF8EA]"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute -left-32 top-40 h-80 w-80 rounded-full bg-[#C6923E]/10 blur-3xl" />

        <div className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-[#7A1717]/10 blur-3xl" />

      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-16 pt-32 lg:px-8">

        <div className="grid w-full items-center gap-12 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >

            {/* Small label */}
            <div className="mb-6 flex items-center gap-3">

              <span className="h-px w-10 bg-[#C6923E]" />

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#7A1717]">
                Tradition • Taste • Together
              </span>

            </div>

            {/* Main heading */}
            <h1 className="max-w-2xl text-6xl font-semibold leading-[0.9] tracking-tight text-[#4A0D0D] sm:text-7xl lg:text-8xl">

              Agrawal

              <span className="block text-[#7A1717]">
                Chaat Corner
              </span>

            </h1>

            {/* Hindi tagline */}
            <div className="mt-8">

              <h2 className="hindi text-3xl font-semibold text-[#241510] sm:text-3xl">
                बुज़ुर्गों की देन
              </h2>

              <p className="mt-3 max-w-md text-base font-semibold leading-7 text-[#765B4A]">
                Authentic flavours rooted in tradition.
              </p>

            </div>

            {/* CTA */}
            <div className="mt-9 flex flex-wrap gap-4">

              <a
  href="#menu"
  style={{ color: "#FFFFFF" }}
  className="inline-flex items-center rounded-full bg-[#8B1E1E] px-7 py-4 font-semibold shadow-lg transition hover:bg-[#741818]"
>
  Explore Our Menu
  <span className="ml-2">↓</span>
</a>

              <a
                href="#story"
                className="rounded-full border border-[#C6923E]/50 px-7 py-3.5 text-sm font-semibold text-[#7A1717] transition-all duration-300 hover:bg-[#C6923E]/10"
              >
                Our Story
              </a>

            </div>

          </motion.div>

          {/* RIGHT FOOD IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >

            {/* Gold circle */}
            <div className="absolute inset-4 rounded-full border border-[#C6923E]/30" />

            {/* Image */}
            <div className="relative mx-auto aspect-square max-w-[580px] overflow-hidden rounded-[50%] border-[10px] border-[#FFFCF5] shadow-2xl shadow-[#4A0D0D]/20">

              <img
                src="/hero/hero-food.jpg"
                alt="Fresh Indian street food"
                className="h-full w-full object-cover"
                onError={(e) => {
                console.error("Hero image failed to load:", e.currentTarget.src);
                }}
/>

              <div className="absolute inset-0 bg-gradient-to-t from-[#4A0D0D]/30 via-transparent to-transparent" />

            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-8 left-0 rounded-2xl border border-[#C6923E]/30 bg-[#FFFCF5]/95 px-5 py-4 shadow-xl backdrop-blur-md"
            >

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#7A1717] text-white">
                  <Sparkles size={18} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#C6923E]">
                    Since Generations
                  </p>

                  <p className="text-sm font-semibold text-[#241510]">
                    Made with tradition
                  </p>
                </div>

              </div>

            </motion.div>

          </motion.div>

        </div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[#765B4A] md:flex"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">
          Scroll
        </span>

        <ArrowDown size={15} />
      </motion.div>

    </section>
  );
}

export default Hero;