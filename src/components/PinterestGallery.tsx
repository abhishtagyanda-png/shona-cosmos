import styles from './PinterestGallery.module.css';

export default function PinterestGallery() {
  const filters = ["Astronomy", "Books", "Quotes", "Wallpapers", "Study", "Moodboards", "Reading"];
  
  // Placeholders for user's own pins
  const pins = [
    { 
      title: "Dark Academia Desk Setup",
      description: "My cozy late-night study corner with warm lights.",
      image: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=400&auto=format&fit=crop", 
      height: "300px",
      pinLink: "https://www.pinterest.com/shonagyanda/"
    },
    { 
      title: "Favorite Sci-Fi Reads",
      description: "Must-read science fiction books for 2026.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400&auto=format&fit=crop", 
      height: "450px",
      pinLink: "https://www.pinterest.com/shonagyanda/"
    },
    { 
      title: "James Webb Wallpaper",
      description: "High-res deep field wallpaper for mobile.",
      image: "https://images.unsplash.com/photo-1536697246787-1f27d35140cb?q=80&w=400&auto=format&fit=crop", 
      height: "250px",
      pinLink: "https://www.pinterest.com/shonagyanda/"
    },
    { 
      title: "Astrophysics Notes",
      description: "Aesthetic handwritten physics notes.",
      image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=400&auto=format&fit=crop", 
      height: "350px",
      pinLink: "https://www.pinterest.com/shonagyanda/"
    }
  ];

  return (
    <section id="pinterest" className="section" style={{ backgroundColor: 'rgba(255,255,255,0.01)' }}>
      <div className="container">
        <h2 className="section-title">Pinterest Gallery</h2>
        
        <div className={styles.filters}>
          {filters.map(filter => (
            <button key={filter} className={styles.filterBtn}>{filter}</button>
          ))}
        </div>

        <div className={styles.masonry}>
          {pins.map((pin, index) => (
            <a 
              key={index} 
              href={pin.pinLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.pin}
              style={{ 
                height: pin.height, 
                backgroundImage: `url(${pin.image})` 
              }}
            >
              <div className={styles.overlay}>
                <div className={styles.pinInfo}>
                  <h3 className={styles.pinTitle}>{pin.title}</h3>
                  <p className={styles.pinDesc}>{pin.description}</p>
                </div>
                <button className={styles.saveBtn}>Save</button>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
