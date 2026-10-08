import { useEffect, useState } from "react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

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

          const rect = element.getBoundingClientRect();

          return {
            id: item.id,
            top: rect.top,
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
  };

  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4 md:px-8">
      <nav className="mx-auto max-w-7xl rounded-2xl border border-[#E8D5B5] bg-[#FFFDF8]/95 px-5 py-3 shadow-lg backdrop-blur-md">

        <div className="flex items-center justify-between gap-4">

          {/* LOGO */}
          <a
            href="#home"
            onClick={() => handleNavClick("home")}
            className="flex shrink-0 items-center gap-3"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#D9A441] bg-[#8B1E1E] text-xl font-serif font-bold text-white">
              AC
            </div>

            <div className="hidden leading-tight sm:block">
              <div className="text-xl font-bold tracking-wide text-[#8B1E1E]">
                AGRAWAL
              </div>

              <div className="text-xs font-semibold tracking-[0.25em] text-[#241510]">
                CHAAT CORNER
              </div>
            </div>
          </a>

          {/* NAVIGATION */}
          <div className="hidden items-center gap-2 md:flex">

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
                  className="relative rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300"
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

          {/* FIND US */}
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
            className="shrink-0 rounded-full px-5 py-3 text-sm font-semibold shadow-md transition-all duration-300 hover:bg-[#6F1515]"
          >
            <span className="mr-1">📍</span>

            <span className="hidden sm:inline">
              Find Us
            </span>
          </a>

        </div>

      </nav>
    </header>
  );
}

export default Navbar;