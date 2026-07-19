import excavator from "../assets/images/excavator.jpg";
import roadroller1 from "../assets/images/roadroller1.jpg";
import roadroller2 from "../assets/images/roadroller2.jpg";
import trailer from "../assets/images/trailer.jpg";

function Gallery() {
  const images = [
    {
      image: excavator,
      title: "Excavator Operations",
    },
    {
      image: roadroller1,
      title: "Road Roller Project",
    },
    {
      image: roadroller2,
      title: "Compaction Work",
    },
    {
      image: trailer,
      title: "Machine Transportation",
    },
  ];

  return (
    <section id="gallery" className="gallery">
      <h2>Our Projects & Fleet</h2>

      <p className="gallery-subtitle">
        Heavy Equipment Ready for Your Next Project
      </p>

      <div className="gallery-grid">
        {images.map((item, index) => (
          <div className="gallery-card" key={index}>
            <img src={item.image} alt={item.title} />
            <div className="gallery-overlay">
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;