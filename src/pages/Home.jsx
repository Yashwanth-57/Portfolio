import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import FeedbackForm from "../components/FeedbackForm";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Experience from "../components/Experince";
import Skills from "../components/Skills";
import StatsResume from "../components/StatsResume";
import ParticlesBackground from "../components/ParticularBackground";
import Cursor from "../components/Cursor";

export default function Home() {
  return (
    <>
    <ParticlesBackground />
        <Cursor />
      <Navbar />
      <Hero />
       <About />
         <Experience />
    
      <Projects />
        <Skills/>
        <StatsResume />
      <FeedbackForm />
      <Contact />

      <Footer />
    </>
  );
}
