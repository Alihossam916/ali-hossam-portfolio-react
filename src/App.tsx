// page sections
import Header from "@/components/sections/header";
import HeroSection from "@/components/sections/hero";
import SkillsSection from "./components/sections/skills";
import ProjectsSection from "./components/sections/projects";
import ContactSection from "./components/sections/contact";
import Footer from "@/components/sections/footer";

import "./index.css";

function App() {
  return (
    <div className="snap-y h-screen overflow-y-scroll scroll-smooth custom-scrollbar">
      <Header />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
