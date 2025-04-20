
import AppShowcase from "./sections/ShowcaseSection";
import Hero from "./sections/Hero";
import  NavBar from "./components/NavBar";
import LogoSection from "./components/LogoSection";
import FeatureCards from "./sections/FeatureCards";
import ExperienceSection from "./sections/ExperienceSection";
import TechStack from "./sections/TechStack";
import Footer from "./sections/Footer";
import Technical from "./sections/Technical";
import Contact from "./sections/Contact";
const App = () => (
  <>
    <NavBar />
    <Hero />
    <AppShowcase />
    <LogoSection />
    <FeatureCards />
    <ExperienceSection />
    <TechStack />
    <Technical />
     <Contact />
    <Footer />
  </>
);

export default App;