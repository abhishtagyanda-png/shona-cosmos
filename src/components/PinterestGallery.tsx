import styles from './PinterestGallery.module.css';

export default function PinterestGallery() {
  const pins = [
    { image: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=400&auto=format&fit=crop", height: "300px" },
    { image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400&auto=format&fit=crop", height: "450px" },
    { image: "https://images.unsplash.com/photo-1536697246787-1f27d35140cb?q=80&w=400&auto=format&fit=crop", height: "250px" },
    { image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=400&auto=format&fit=crop", height: "350px" },
    { image: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=400&auto=format&fit=crop", height: "400px" },
    { image: "https://images.unsplash.com/photo-1518066000714-58c45f1a2c0a?q=80&w=400&auto=format&fit=crop", height: "280px" }
  ];

  return (
    <section id="pinterest" className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)' }}>
      <div className="container">
        <h2 className="section-title">Aesthetic Inspiration</h2>
        <div className={styles.masonry}>
          {pins.map((pin, index) => (
            <div 
              key={index} 
              className={styles.pin}
              style={{ 
                height: pin.height, 
                backgroundImage: `url(${pin.image})` 
              }}
            >
              <div className={styles.overlay}>
                <button className={styles.saveBtn}>Save</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
