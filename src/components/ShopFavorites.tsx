import styles from './ShopFavorites.module.css';

export default function ShopFavorites() {
  const collections = ["Astronomy Books", "Fiction Favorites", "Cozy Reading Essentials", "Space Decor", "Desk Setup", "Study Accessories", "Astronomy Equipment"];
  
  const products = [
    {
      name: "NASA Apollo Saturn V",
      category: "Space Decor",
      description: "A stunning 1:110 scale model of the iconic Saturn V rocket.",
      price: "$119.99",
      image: "https://images.unsplash.com/photo-1541873676-a18131494184?q=80&w=400&auto=format&fit=crop",
      amazonLink: "#" // PASTE AMAZON AFFILIATE LINK HERE
    },
    {
      name: "Levitating Moon Lamp",
      category: "Cozy Reading Essentials",
      description: "Creates the perfect ambient lighting for late-night reading sessions.",
      price: "$89.50",
      image: "https://images.unsplash.com/photo-1532517892732-b0b0609b6271?q=80&w=400&auto=format&fit=crop",
      amazonLink: "#" // PASTE AMAZON AFFILIATE LINK HERE
    },
    {
      name: "Leather Stargazer Journal",
      category: "Desk Setup",
      description: "Premium leather notebook for logging observations and thoughts.",
      price: "$24.95",
      image: "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?q=80&w=400&auto=format&fit=crop",
      amazonLink: "#" // PASTE AMAZON AFFILIATE LINK HERE
    }
  ];

  return (
    <section id="shop" className="section">
      <div className="container">
        <h2 className="section-title">Shop My Favorites</h2>
        
        <div className={styles.collections}>
          {collections.map(collection => (
            <button key={collection} className={styles.collectionBtn}>{collection}</button>
          ))}
        </div>

        <div className={styles.grid}>
          {products.map((product, index) => (
            <div key={index} className={`glass-panel ${styles.productCard}`}>
              <div 
                className={styles.productImage}
                style={{ backgroundImage: `url(${product.image})` }}
              />
              <div className={styles.productInfo}>
                <span className={styles.category}>{product.category}</span>
                <h3 className={styles.title}>{product.name}</h3>
                <p className={styles.description}>{product.description}</p>
                <div className={styles.footer}>
                  <p className={styles.price}>{product.price}</p>
                  <a href={product.amazonLink} className={styles.buyBtn} target="_blank" rel="noopener noreferrer">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
