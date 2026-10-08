import { useEffect, useState } from "react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Menu", id: "menu" },
    { name: "Homemade", id: "homemade" },
    { name: "Our Story", id: "story" },
    { name: "Visit Us", id: "visit" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems
        .map((item) => {
          const element = document.getElementById(item.id);

          if (!element) return null;

          return {
            id: item.id,
            top: element.getBoundingClientRect().top,
          };
        })
        .filter(Boolean);

      if (!sections.length) return;

      const activationPoint = 150;
      let current = sections[0];

      sections.forEach((section) => {
        if (section.top <= activationPoint) {
          current = section;
        }
      });

      setActiveSection(current.id);
    };

    const updateFromHash = () => {
      const hash = window.location.hash.replace("#", "");

      if (navItems.some((item) => item.id === hash)) {
        setActiveSection(hash);
      }
    };

    handleScroll();
    updateFromHash();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);
    window.addEventListener("hashchange", updateFromHash);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("hashchange", updateFromHash);
    };
  }, []);

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 top-3 z-50 px-3 sm:top-4 sm:px-4 md:px-8">
      <nav className="mx-auto max-w-7xl rounded-2xl border border-[#E8D5B5] bg-[#FFFDF8]/95 px-4 py-2.5 shadow-lg backdrop-blur-md sm:px-5">

        {/* MAIN NAVBAR */}
        <div className="flex items-center justify-between gap-3">

          {/* BRAND */}
          <a
            href="#home"
            onClick={() => handleNavClick("home")}
            className="flex shrink-0 items-center gap-3"
          >
            {/* AC LOGO */}
            <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#D9A441] bg-[#8B1E1E] font-serif text-lg font-bold text-white shadow-sm sm:h-12 sm:w-12 sm:text-xl">
              AC
            </div>

            {/* BRAND NAME */}
            <div className="leading-tight">
              <div className="font-serif text-lg font-bold tracking-wide text-[#8B1E1E] sm:text-xl">
                AGRAWAL
              </div>

              <div className="text-[9px] font-semibold tracking-[0.22em] text-[#241510] sm:text-[10px]">
                CHAAT CORNER
              </div>
            </div>
          </a>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-4 md:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  style={{
                    color: isActive ? "#F4D89A" : "#241510",
                    backgroundColor: isActive
                      ? "#8B1E1E"
                      : "transparent",
                  }}
                  className="relative rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 hover:bg-[#F8EBD7]"
                >
                  {item.name}

                  {isActive && (
                    <span
                      className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full"
                      style={{
                        backgroundColor: "#F4D89A",
                      }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* DESKTOP FIND US */}
          <a
            href="#visit"
            onClick={() => handleNavClick("visit")}
            style={{
              backgroundColor: "#8B1E1E",
              color:
                activeSection === "visit"
                  ? "#F4D89A"
                  : "#FFFFFF",
            }}
            className="hidden shrink-0 items-center rounded-full px-5 py-3 text-sm font-semibold shadow-md transition-all duration-300 hover:bg-[#741818] md:flex"
          >
            <svg
              className="mr-2 h-4 w-4"
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

            Find Us
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#8B1E1E] text-white shadow-md md:hidden"
          >
            {mobileMenuOpen ? (
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            )}
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="mt-3 border-t border-[#E8D5B5] pt-3 md:hidden">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;

                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    style={{
                      color: isActive ? "#F4D89A" : "#241510",
                      backgroundColor: isActive
                        ? "#8B1E1E"
                        : "transparent",
                    }}
                    className="rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200"
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>

            {/* MOBILE FIND US */}
            <a
              href="#visit"
              onClick={() => handleNavClick("visit")}
              style={{
                backgroundColor: "#8B1E1E",
                color: "#FFFFFF",
              }}
              className="mt-2 flex items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold shadow-md"
            >
              <svg
                className="mr-2 h-4 w-4"
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

              Find Us
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;