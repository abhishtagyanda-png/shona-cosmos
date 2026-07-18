import Link from 'next/link';
import styles from './Navigation.module.css';

export default function Navigation() {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'Library', path: '#library' },
    { name: 'Shop', path: '#shop' },
    { name: 'Pinterest', path: '#pinterest' },
    { name: 'Astronomy', path: '#astronomy' },
    { name: 'About', path: '#about' },
    { name: 'Contact', path: '#contact' },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          Shona<span className={styles.accent}>Cosmos</span>
        </Link>
        <ul className={styles.navLinks}>
          {links.map((link) => (
            <li key={link.name}>
              <Link href={link.path} className={styles.link}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <button className={styles.ctaButton}>Join Newsletter</button>
      </div>
    </nav>
  );
}
