import {
  FaUserTie,
  FaTools,
  FaClock,
  FaMapMarkedAlt,
} from "react-icons/fa";

function WhyChooseUs() {
  const features = [
    {
      icon: <FaUserTie />,
      title: "Experienced Operators",
      description: "Skilled operators ensuring safe and efficient work on every project.",
    },
    {
      icon: <FaTools />,
      title: "Well-Maintained Equipment",
      description: "Regularly serviced machinery for reliable performance and minimum downtime.",
    },
    {
      icon: <FaClock />,
      title: "On-Time Delivery",
      description: "Machines delivered to your project site on schedule.",
    },
    {
      icon: <FaMapMarkedAlt />,
      title: "Wide Service Area",
      description: "Serving customers across Telangana and Andhra Pradesh.",
    },
  ];

  return (
    <section className="why">
      <h2>Why Choose Us</h2>
      <p className="why-subtitle">
        Trusted by contractors, builders, and infrastructure companies.
      </p>

      <div className="why-grid">
        {features.map((item, index) => (
          <div className="why-card" key={index}>
            <div className="why-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;