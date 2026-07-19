import { company } from "../data/company";
import "../styles/Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">

      <h2>Contact Us</h2>

      <p className="contact-subtitle">
        Get in touch for equipment rentals and earthwork contracts.
      </p>

      <div className="contact-container">

        <div className="contact-info">

          <div className="info-box">
            <h3>📞 Phone</h3>
            <p>{company.phone}</p>
          </div>

          <div className="info-box">
            <h3>💬 WhatsApp</h3>
            <p>{company.whatsapp}</p>
          </div>

          <div className="info-box">
            <h3>📍 Service Area</h3>
            <p>{company.serviceArea}</p>
          </div>

          <div className="info-box">
            <h3>🕒 Working Hours</h3>
            <p>{company.workingDays}</p>
            <p>{company.workingHours}</p>
          </div>

          <div className="info-box">
            <h3>📧 Email</h3>
            <p>{company.email}</p>
          </div>

        </div>

        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="tel"
            placeholder="Phone Number"
          />

          <input
            type="text"
            placeholder="Equipment Required"
          />

          <input
            type="text"
            placeholder="Project Location"
          />

          <textarea
            rows="5"
            placeholder="Project Details"
          ></textarea>

          <button type="submit">
            Request Quote
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;