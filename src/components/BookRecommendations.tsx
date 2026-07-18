import styles from './BookRecommendations.module.css';

export default function BookRecommendations() {
  const books = [
    {
      title: "A Brief History of Time",
      author: "Stephen Hawking",
      category: "Physics",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&auto=format&fit=crop",
      link: "#"
    },
    {
      title: "Astrophysics for People in a Hurry",
      author: "Neil deGrasse Tyson",
      category: "Astronomy",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400&auto=format&fit=crop",
      link: "#"
    },
    {
      title: "Dune",
      author: "Frank Herbert",
      category: "Sci-Fi",
      image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=400&auto=format&fit=crop",
      link: "#"
    },
    {
      title: "Cosmos",
      author: "Carl Sagan",
      category: "Astronomy",
      image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=400&auto=format&fit=crop",
      link: "#"
    }
  ];

  return (
    <section id="books" className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)' }}>
      <div className="container">
        <h2 className="section-title">Book Recommendations</h2>
        <div className={styles.grid}>
          {books.map((book, index) => (
            <div key={index} className={`glass-panel ${styles.bookCard}`}>
              <div 
                className={styles.bookCover}
                style={{ backgroundImage: `url(${book.image})` }}
              />
              <div className={styles.bookInfo}>
                <span className={styles.category}>{book.category}</span>
                <h3 className={styles.title}>{book.title}</h3>
                <p className={styles.author}>by {book.author}</p>
                <a href={book.link} className={styles.buyButton}>
                  Get Copy
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
