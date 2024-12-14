import Navbar from "./common/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import Awards from "./sections/Awards/Awards";
import Projects from "./sections/Projects/Projects";
import Experiences from "./sections/Experiences/Experiences";
import Certificates from "./sections/Certificates/Certificates";
import Activities from "./sections/Activities/Activities";
import Skills from "./sections/Skills/Skills";
import Footer from "./sections/Footer/Footer";

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
