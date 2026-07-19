import "../styles/Equipment.css";
import { equipment } from "../data/equipment";
import { company } from "../data/company";

function Equipment() {
  return (
    <section id="equipment" className="equipment">

      <h2>Our Equipment</h2>

      <p className="equipment-subtitle">
        Reliable Machines Ready for Your Next Project
      </p>

      <div className="equipment-grid">

        {equipment.map((machine) => (

          <div className="equipment-card" key={machine.id}>

            <img src={machine.image} alt={machine.name} />

            <div className="equipment-content">

              <span className="machine-type">
                {machine.category}
              </span>

              <h3>{machine.name}</h3>

              <p>👷 {machine.operator}</p>

              <p>📍 {machine.location}</p>

              <p>🛢 {machine.fuel}</p>

              <p>📅 {machine.rental}</p>

              <span className="available">
                {machine.availability}
              </span>

              <div className="equipment-buttons">

                <button className="quote-btn">
                  Get Quote
                </button>

                <a
                  href={`tel:${company.phone}`}
                  className="call-btn"
                >
                  📞 Call
                </a>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Equipment;