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
            Join thousands of curious minds exploring the universe. Receive weekly updates on astrophysics, book recommendations, and cosmic discoveries.
          </p>
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className={styles.input}
              required 
            />
            <button type="submit" className={styles.subscribeBtn}>
              Subscribe
            </button>
          </form>
          <p className={styles.disclaimer}>No spam, just stars.</p>
        </div>
      </div>
    </section>
  );
}
