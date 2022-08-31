import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Carousel from "./components/Carousel";
import Team from "./components/Team";
import Footer from "./components/Footer";
import Events from "./components/Events";

export function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Team />
      <Footer/>
    </>
  );
}
