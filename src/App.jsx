import "./App.css";
import Activities from "./sections/Activities/Activities";
import Awards from "./sections/Awards/Awards";
import Certificates from "./sections/Certificates/Certificates";
import Experiences from "./sections/Experiences/Experiences";
import Footer from "./sections/Footer/Footer";
import Hero from "./sections/Hero/Hero";
import Navbar from "./sections/Navbar/Navbar";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Awards />
      <Projects />
      <Experiences />
      <Certificates />
      <Activities />
      <Skills />
      <Footer />
    </>
  );
}

export default App;
