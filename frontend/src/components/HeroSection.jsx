import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <section className="hero">
      <img src="/RESS.jpg" alt="restaurant" />
      <div className="item">
        <h3>Dream Maker</h3>
        <div>
          <h1>Your Event Visionary</h1>
          <p>
          We bring your grand dreams to life, down to the finest details!
          </p>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            BOOK NOW
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;