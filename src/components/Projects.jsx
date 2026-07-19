import "../styles/Projects.css";

function Projects() {
  const projects = [
    {
      title: "Road Construction",
      location: "Hyderabad",
      description: "Road excavation, leveling and compaction works."
    },
    {
      title: "Canal Earthwork",
      location: "Nalgonda",
      description: "Excavation and earthmoving for irrigation projects."
    },
    {
      title: "Industrial Site Development",
      location: "Warangal",
      description: "Complete site preparation using heavy equipment."
    },
    {
      title: "Highway Compaction",
      location: "Vijayawada",
      description: "Road roller services for highway construction."
    }
  ];

  return (
    <section id="projects" className="projects">

      <h2>Our Projects</h2>

      <p className="project-subtitle">
        Trusted by Contractors Across Telangana & Andhra Pradesh
      </p>

      <div className="projects-grid">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <div className="project-image">
              🏗️
            </div>

            <div className="project-content">

              <h3>{project.title}</h3>

              <p className="location">
                📍 {project.location}
              </p>

              <p>{project.description}</p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;