"use client";

import styles from './Newsletter.module.css';

export default function Newsletter() {
  return (
    <section id="contact" className={`section ${styles.newsletterSection}`}>
      <div className={`container ${styles.container}`}>
        <div className={`glass-panel ${styles.newsletterCard}`}>
          <div className={styles.glow}></div>
          <h2 className={styles.title}>Join the Journey</h2>
          <p className={styles.description}>
            Receive thoughtful updates whenever I publish something worth sharing.
          </p>
          
          <div className={styles.benefits}>
            <p>You'll get:</p>
            <ul>
              <li>📚 New book recommendations</li>
              <li>🌌 Astronomy discoveries explained simply</li>
              <li>💻 Programming & project updates</li>
              <li>📌 New Pinterest collections</li>
              <li>🚀 Useful resources</li>
              <li>✨ Behind-the-scenes of my learning journey</li>
            </ul>
          </div>

          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className={styles.input}
              required 
            />
            <button type="submit" className={styles.subscribeBtn}>
              Join the Journey
            </button>
          </form>
          <p className={styles.disclaimer}>No spam. Just curiosity.</p>
        </div>
      </div>
    </section>
  );
}
