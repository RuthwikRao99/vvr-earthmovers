import { company } from "../data/company";
import "../styles/Hero.css";
import heroImage from "../assets/images/hero.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(${heroImage})`,
      }}
    >
      <div className="hero-content">

        <h1>V.V. Rao Earthmovers & Contractors</h1>

        <h2>
          Heavy Equipment Rental <br />
          & Earthwork Solutions
        </h2>

        <p>
          Trusted construction equipment partner serving
          Telangana & Andhra Pradesh.
        </p>

        <div className="hero-buttons">
          <button className="hero-btn primary">
            Get Instant Quote
          </button>

          <a href={`tel:${company.phone}`} className="hero-btn secondary">
              📞 Call Now
          </a>
        </div>

        <div className="hero-stats">
          <div>
            <h3>4+</h3>
            <span>Machines</span>
          </div>

          <div>
            <h3>2</h3>
            <span>States Served</span>
          </div>

          <div>
            <h3>24/7</h3>
            <span>Support</span>
          </div>

          <div>
            <h3>100%</h3>
            <span>Customer Focus</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;