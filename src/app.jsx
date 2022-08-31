import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Team from "./components/Team";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import Events from "./components/Events";

export function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Testimonials />
      <Team />
      <Footer />
    </>
  );
}
