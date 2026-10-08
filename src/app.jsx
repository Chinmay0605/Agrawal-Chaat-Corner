import Navbar from "./components/Navbar";

import Hero from "./sections/Hero";
import MenuSection from "./sections/MenuSection";
import HomemadeCollection from "./sections/HomemadeCollection";
import OurStory from "./sections/OurStory";
import VisitUs from "./sections/VisitUs";

import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#FFF8EA] text-[#241510]">

      <Navbar />

      <main>

        {/* HOME */}
        <div id="home">
          <Hero />
        </div>

        {/* MENU */}
        <div id="menu" className="scroll-mt-28">
          <MenuSection />
        </div>

        {/* HOMEMADE */}
        <div id="homemade" className="scroll-mt-28">
          <HomemadeCollection />
        </div>

        {/* OUR STORY */}
        <div id="story" className="scroll-mt-28">
          <OurStory />
        </div>

        {/* VISIT US */}
        <div id="visit" className="scroll-mt-28">
          <VisitUs />
        </div>

      </main>

      <Footer />

    </div>
  );
}

export default App;