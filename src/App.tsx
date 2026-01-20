// page sections
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import HeroSection from "@/components/sections/hero";
import SkillsSection from "./components/sections/skills";

import "./index.css";

function App() {
  return (
    <div className="snap-y h-screen overflow-y-scroll scroll-smooth custom-scrollbar">
      <Header />
      <HeroSection />
      <SkillsSection />
      <Footer />
    </div>
  );
}

export default App;
