import styles from './FeaturedArticles.module.css';

export default function FeaturedArticles() {
  const articles = [
    {
      title: "The Physics of Black Holes",
      category: "Astrophysics Explainers",
      date: "Oct 12, 2026",
      image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=600&auto=format&fit=crop",
      excerpt: "Dive into the event horizon and understand the fundamental equations that govern these cosmic behemoths."
    },
    {
      title: "James Webb's Latest Discoveries",
      category: "Space Discoveries",
      date: "Sep 28, 2026",
      image: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=600&auto=format&fit=crop",
      excerpt: "Exploring the oldest galaxies ever observed and what they mean for the standard cosmological model."
    },
    {
      title: "Simulating Galaxy Collisions",
      category: "Computational Astrophysics",
      date: "Sep 15, 2026",
      image: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?q=80&w=600&auto=format&fit=crop",
      excerpt: "How we use Python and supercomputers to model the majestic dance of merging galaxies."
    }
  ];

  return (
    <section id="astronomy" className="section">
      <div className="container">
        <h2 className="section-title">Featured Astronomy Articles</h2>
        <div className={styles.grid}>
          {articles.map((article, index) => (
            <article key={index} className={`glass-panel ${styles.card}`}>
              <div 
                className={styles.image}
                style={{ backgroundImage: `url(${article.image})` }}
              >
                <span className={styles.category}>{article.category}</span>
              </div>
              <div className={styles.content}>
                <span className={styles.date}>{article.date}</span>
                <h3 className={styles.title}>{article.title}</h3>
                <p className={styles.excerpt}>{article.excerpt}</p>
                <button className={styles.readMore}>Read Article &rarr;</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
