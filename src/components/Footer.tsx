import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.brand}>
          <h2 className={styles.logo}>Shona<span className={styles.accent}>Cosmos</span></h2>
          <p className={styles.tagline}>Explore the Universe, One Discovery at a Time.</p>
        </div>
        
        <div className={styles.linksSection}>
          <div className={styles.linkGroup}>
            <h3>Categories</h3>
            <Link href="#astronomy">Astronomy</Link>
            <Link href="#books">Book Recommendations</Link>
            <Link href="#resources">Study Resources</Link>
          </div>
          <div className={styles.linkGroup}>
            <h3>Connect</h3>
            <Link href="#">Pinterest</Link>
            <Link href="#">Instagram</Link>
            <Link href="#">Twitter (X)</Link>
            <Link href="#">GitHub</Link>
          </div>
        </div>
      </div>
      
      <div className={styles.copyright}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Shona Cosmos. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
