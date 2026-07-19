import {
  FaTruckMoving,
  FaRoad,
  FaHardHat,
  FaTools,
} from "react-icons/fa";

function Services() {
  const services = [
    {
      title: "Equipment Rental",
      description:
        "Excavators, Road Rollers and Heavy Transport Trailer available for short and long-term rental.",
      icon: <FaTools />,
    },
    {
      title: "Earthwork",
      description:
        "Professional earth excavation, site clearing, and land development services.",
      icon: <FaHardHat />,
    },
    {
      title: "Road Construction",
      description:
        "Road compaction, grading, and infrastructure support using modern equipment.",
      icon: <FaRoad />,
    },
    {
      title: "Machine Transportation",
      description:
        "Safe transportation of heavy machinery across Telangana and Andhra Pradesh.",
      icon: <FaTruckMoving />,
    },
  ];

  return (
<section id="services" className="services">
          <h2>Our Services</h2>

      <p className="services-subtitle">
        Reliable Equipment & Construction Solutions
      </p>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;