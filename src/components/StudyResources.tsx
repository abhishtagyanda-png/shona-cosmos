import styles from './StudyResources.module.css';

export default function StudyResources() {
  const resources = [
    {
      title: "Python for Astronomy",
      description: "Learn how to use Python, Astropy, and NumPy to analyze real observational data.",
      icon: "🐍",
    },
    {
      title: "Machine Learning in Space",
      description: "Applying neural networks to classify galaxies and detect exoplanets.",
      icon: "🤖",
    },
    {
      title: "Physics Notes",
      description: "Comprehensive notes on classical mechanics, quantum physics, and relativity.",
      icon: "📚",
    },
    {
      title: "Scientific Computing",
      description: "High-performance computing techniques for simulating cosmological structures.",
      icon: "💻",
    }
  ];

  return (
    <section id="resources" className="section">
      <div className="container">
        <h2 className="section-title">Study Resources</h2>
        <div className={styles.grid}>
          {resources.map((resource, index) => (
            <div key={index} className={`glass-panel ${styles.resourceCard}`}>
              <div className={styles.icon}>{resource.icon}</div>
              <h3 className={styles.title}>{resource.title}</h3>
              <p className={styles.description}>{resource.description}</p>
              <button className={styles.exploreBtn}>Explore</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
