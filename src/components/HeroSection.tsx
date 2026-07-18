import styles from './HeroSection.module.css';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      {/* Floating stars */}
      <div className={styles.stars}>
        {[...Array(50)].map((_, i) => (
          <div 
            key={i} 
            className="star"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDuration: `${Math.random() * 3 + 2}s`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className={`container ${styles.content}`}>
        <h1 className={styles.title}>
          Explore the Universe,<br />
          <span className={styles.highlight}>One Discovery at a Time.</span>
        </h1>
        <p className={styles.description}>
          A place where astronomy, books, curiosity, programming, and creativity meet.
        </p>
        <div className={styles.actions}>
          <Link href="#library" className={styles.ctaButtonPrimary}>
            Explore My Library
          </Link>
          <Link href="#shop" className={styles.ctaButtonSecondary}>
            Shop My Favorites
          </Link>
        </div>
      </div>
    </section>
  );
}
