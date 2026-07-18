import styles from './TheLibrary.module.css';

export default function TheLibrary() {
  const books = [
    {
      title: "A Brief History of Time",
      author: "Stephen Hawking",
      category: "Astronomy & Physics",
      rating: "⭐⭐⭐⭐⭐",
      cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&auto=format&fit=crop",
      miniReview: "A fascinating journey through the fundamental concepts of space and time.",
      quote: `"We are just an advanced breed of monkeys on a minor planet of a very average star. But we can understand the Universe."`,
      whyRecommend: "Essential reading for anyone curious about how the universe works.",
      reviewLink: "#",
      amazonLink: "#" // PASTE AMAZON AFFILIATE LINK HERE
    },
    {
      title: "Dune",
      author: "Frank Herbert",
      category: "Fiction",
      rating: "⭐⭐⭐⭐⭐",
      cover: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=400&auto=format&fit=crop",
      miniReview: "The greatest sci-fi epic ever written, blending ecology, politics, and mysticism.",
      quote: `"I must not fear. Fear is the mind-killer."`,
      whyRecommend: "Its world-building is unparalleled and remains highly relevant today.",
      reviewLink: "#",
      amazonLink: "#" // PASTE AMAZON AFFILIATE LINK HERE
    }
  ];

  return (
    <section id="library" className={`section ${styles.librarySection}`}>
      <div className="container">
        <h2 className="section-title">The Library</h2>
        
        {/* Reading Goal Widget */}
        <div className={`glass-panel ${styles.readingGoal}`}>
          <div className={styles.goalHeader}>
            <h3>2026 Reading Goal</h3>
            <span className={styles.goalText}>8 / 20 Books</span>
          </div>
          <div className={styles.progressBarBg}>
            <div className={styles.progressBarFill} style={{ width: '40%' }}></div>
          </div>
          <div className={styles.statusFooter}>
            <p><strong>Currently Reading:</strong> The Three-Body Problem</p>
            <p><strong>Recently Finished:</strong> Project Hail Mary</p>
          </div>
        </div>

        {/* Categories */}
        <div className={styles.categories}>
          {["Astronomy & Physics", "Fiction", "Mystery & Thriller", "Self Improvement", "Programming & Technology"].map(cat => (
            <button key={cat} className={styles.categoryBtn}>{cat}</button>
          ))}
        </div>

        {/* Book Shelf */}
        <div className={styles.bookGrid}>
          {books.map((book, index) => (
            <div key={index} className={`glass-panel ${styles.bookCard}`}>
              <div 
                className={styles.bookCover}
                style={{ backgroundImage: `url(${book.cover})` }}
              />
              <div className={styles.bookDetails}>
                <div className={styles.bookHeader}>
                  <span className={styles.bookCategory}>{book.category}</span>
                  <span className={styles.rating}>{book.rating}</span>
                </div>
                <h3 className={styles.title}>{book.title}</h3>
                <p className={styles.author}>by {book.author}</p>
                
                <div className={styles.reviewSection}>
                  <p className={styles.miniReview}><strong>Mini Review:</strong> {book.miniReview}</p>
                  <blockquote className={styles.quote}>{book.quote}</blockquote>
                  <p className={styles.recommend}><strong>Why I Recommend It:</strong> {book.whyRecommend}</p>
                </div>
                
                <div className={styles.actions}>
                  <a href={book.reviewLink} className={styles.reviewBtn}>Read Full Review</a>
                  <a href={book.amazonLink} className={styles.buyBtn} target="_blank" rel="noopener noreferrer">Buy on Amazon</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
