import { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  useEffect(() => {
    const nav = document.querySelector("nav");
    const onScroll = () => {
      if (window.scrollY === 0) {
        nav.classList.add("nav-solid");
        nav.classList.remove("nav-glass");
        nav.classList.remove("nav-shrink");
      } else {
        nav.classList.add("nav-glass");
        nav.classList.remove("nav-solid");
        nav.classList.add("nav-shrink");
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll(); 
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Router>
      <Navbar />
      <HeroSection />
      <Services />
      <About />
      <Contact />
      <Footer />
      <Toaster />
    </Router>
  );
};

export default App;