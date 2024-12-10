import "./App.css";
import Awards from "./sections/Awards/Awards";
import Certificates from "./sections/Certificates/Certificates";
import Contact from "./sections/Contact/Contact";
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
      <Projects />
      <Awards />
      <Certificates />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
