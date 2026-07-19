import { company } from "../data/company";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        <h2>VVR</h2>
        <span>Earthmovers & Contractors</span>
      </div>

      <nav>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#equipment">Equipment</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#gallery">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
      </nav>

      <div className="nav-buttons">
        <a href={`tel:${company.phone}`} className="call-btn">
            📞 Call Now
        </a>

        <button className="quote-btn">
          Get Quote
        </button>
      </div>
    </header>
  );
}

export default Navbar;