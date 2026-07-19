import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Equipment from "./components/Equipment";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Gallery from "./components/Gallery";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Equipment />
      <About />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}

export default App;