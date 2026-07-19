import "../styles/Footer.css";
import { company } from "../data/company";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-about">
          <h2>{company.shortName}</h2>

          <p>
            Reliable heavy equipment rental and earthwork contractor
            serving Telangana & Andhra Pradesh.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#equipment">Equipment</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-contact">

          <h3>Contact</h3>

          <p>📞 {company.phone}</p>

          <p>📧 {company.email}</p>

          <p>📍 {company.serviceArea}</p>

        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} {company.name}. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;