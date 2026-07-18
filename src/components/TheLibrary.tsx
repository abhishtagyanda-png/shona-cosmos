import styles from './TheLibrary.module.css';

export default function TheLibrary() {
  const books = [
    {
      title: "Cosmos",
      author: "Carl Sagan",
      category: "Astronomy & Physics",
      rating: "⭐⭐⭐⭐⭐",
      cover: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=400&auto=format&fit=crop", // Placeholder for actual cover
      miniReview: "A profound journey through space and time.",
      quote: `"The cosmos is within us. We are made of star-stuff."`,
      whyRecommend: "It changed the way I see the universe.",
      reviewLink: "#",
      amazonLink: "https://link.amazon/B00TUMpAl"
    },
    {
      title: "Astrophysics for People in a Hurry",
      author: "Neil deGrasse Tyson",
      category: "Astronomy & Physics",
      rating: "⭐⭐⭐⭐⭐",
      cover: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400&auto=format&fit=crop",
      miniReview: "Bite-sized brilliance for busy minds.",
      quote: `"The universe is under no obligation to make sense to you."`,
      whyRecommend: "Perfect for quick, mind-expanding reading.",
      reviewLink: "#",
      amazonLink: "https://link.amazon/B02tPiBNH"
    },
    {
      title: "Dark Matter",
      author: "Blake Crouch",
      category: "Sci-Fi / Thriller",
      rating: "⭐⭐⭐⭐⭐",
      cover: "https://images.unsplash.com/photo-1518331647614-7a1f04cd34af?q=80&w=400&auto=format&fit=crop",
      miniReview: "A mind-bending thriller across parallel universes.",
      quote: `"Are you happy with your life?"`,
      whyRecommend: "You won't be able to put it down.",
      reviewLink: "#",
      amazonLink: "#"
    },
    {
      title: "The Cruel Prince",
      author: "Holly Black",
      category: "Fantasy",
      rating: "⭐⭐⭐⭐",
      cover: "https://images.unsplash.com/photo-1589998059171-989d887dda6e?q=80&w=400&auto=format&fit=crop",
      miniReview: "Political intrigue and fae magic.",
      quote: `"If I cannot be better than them, I will become so much worse."`,
      whyRecommend: "Amazing enemies to lovers dynamic.",
      reviewLink: "#",
      amazonLink: "#"
    },
    {
      title: "The Wicked King",
      author: "Holly Black",
      category: "Fantasy",
      rating: "⭐⭐⭐⭐⭐",
      cover: "https://images.unsplash.com/photo-1533036665798-842247dc2c07?q=80&w=400&auto=format&fit=crop",
      miniReview: "An incredible sequel with high stakes.",
      quote: `"Power is much easier to acquire than it is to hold on to."`,
      whyRecommend: "The tension is perfectly crafted.",
      reviewLink: "#",
      amazonLink: "#"
    },
    {
      title: "The Queen of Nothing",
      author: "Holly Black",
      category: "Fantasy",
      rating: "⭐⭐⭐⭐",
      cover: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=400&auto=format&fit=crop",
      miniReview: "A satisfying conclusion to the trilogy.",
      quote: `"By you, I am forever undone."`,
      whyRecommend: "A must-read if you started the series.",
      reviewLink: "#",
      amazonLink: "#"
    },
    {
      title: "Harry Potter (Series)",
      author: "J.K. Rowling",
      category: "Fantasy",
      rating: "⭐⭐⭐⭐⭐",
      cover: "https://images.unsplash.com/photo-1517436073-3b1b1b5d5b7a?q=80&w=400&auto=format&fit=crop",
      miniReview: "The definitive magical coming-of-age story.",
      quote: `"Words are, in my not-so-humble opinion, our most inexhaustible source of magic."`,
      whyRecommend: "A timeless classic that feels like home.",
      reviewLink: "#",
      amazonLink: "#"
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      category: "Self Improvement",
      rating: "⭐⭐⭐⭐⭐",
      cover: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=400&auto=format&fit=crop",
      miniReview: "The ultimate guide to building good habits.",
      quote: `"You do not rise to the level of your goals. You fall to the level of your systems."`,
      whyRecommend: "Practical and genuinely life-changing.",
      reviewLink: "#",
      amazonLink: "#"
    },
    {
      title: "Ikigai",
      author: "Héctor García & Francesc Miralles",
      category: "Self Improvement",
      rating: "⭐⭐⭐⭐",
      cover: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=400&auto=format&fit=crop",
      miniReview: "Finding your purpose and joy in life.",
      quote: `"Only staying active will make you want to live a hundred years."`,
      whyRecommend: "A peaceful, inspiring read.",
      reviewLink: "#",
      amazonLink: "#"
    },
    {
      title: "Ward D",
      author: "Freida McFadden",
      category: "Mystery / Thriller",
      rating: "⭐⭐⭐⭐",
      cover: "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?q=80&w=400&auto=format&fit=crop",
      miniReview: "A gripping psychological thriller.",
      quote: `"Some doors should never be opened."`,
      whyRecommend: "Fast-paced and full of twists.",
      reviewLink: "#",
      amazonLink: "#"
    },
    {
      title: "Never Lie",
      author: "Freida McFadden",
      category: "Mystery / Thriller",
      rating: "⭐⭐⭐⭐",
      cover: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=400&auto=format&fit=crop",
      miniReview: "Unpredictable and chilling.",
      quote: `"The truth always comes out."`,
      whyRecommend: "Keeps you guessing until the last page.",
      reviewLink: "#",
      amazonLink: "#"
    },
    {
      title: "That's Not My Name",
      author: "Megan Lally",
      category: "Mystery / Thriller",
      rating: "⭐⭐⭐⭐",
      cover: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=400&auto=format&fit=crop",
      miniReview: "An intense and twisty YA thriller.",
      quote: `"Who are you when you can't remember yourself?"`,
      whyRecommend: "A brilliant, suspenseful debut.",
      reviewLink: "#",
      amazonLink: "#"
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
            <span className={styles.goalText}>12 / 20 Books</span>
          </div>
          <div className={styles.progressBarBg}>
            <div className={styles.progressBarFill} style={{ width: '60%' }}></div>
          </div>
          <div className={styles.statusFooter}>
            <p><strong>Currently Reading:</strong> Cosmos by Carl Sagan</p>
            <p><strong>Recently Finished:</strong> Ward D</p>
          </div>
        </div>

        {/* Categories */}
        <div className={styles.categories}>
          {["Astronomy & Physics", "Fantasy", "Mystery / Thriller", "Self Improvement", "Sci-Fi / Thriller"].map(cat => (
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
