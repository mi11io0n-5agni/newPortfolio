import BackgroundEffects from "./components/BackgroundEffects/BackgroundEffects";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Certificate from "./components/Certificate/Certificate";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./App.css";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <BackgroundEffects />
      <Navbar />
      <main id="main-content" className="app-main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificate />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
