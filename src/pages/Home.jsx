import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import FeedbackForm from "../components/FeedbackForm";
import Footer from "../components/Footer";
import Contact from "../components/contact";
import Experience from "../components/Experince";
import Skills from "../components/Skills";
import StatsResume from "../components/StatsResume";
import ParticlesBackground from "../components/ParticularBackground";
import CurrentlyBuilding from "../components/FeedbackForm";
import BackgroundEffects from "../components/BackgroundEffects";



export default function Home() {
  return (
    <>
     <div className="bg-zinc-950 text-zinc-50 relative overflow-x-hidden">

      <BackgroundEffects />

      <div className="relative z-10">
      <Navbar />
      <Hero />
       <About />
         <Experience />
    
      <Projects />
        <Skills/>
        {/* <StatsResume /> */}
      {/* <FeedbackForm /> */}
      {/* <CurrentlyBuilding /> */}
      <Contact />

      <Footer />
      </div>
      </div>
    </>
  );
}
