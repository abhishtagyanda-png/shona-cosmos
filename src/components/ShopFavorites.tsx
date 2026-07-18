import styles from './ShopFavorites.module.css';

export default function ShopFavorites() {
  const products = [
    {
      name: "NASA Apollo Saturn V",
      category: "Space Decor",
      price: "$119.99",
      image: "https://images.unsplash.com/photo-1541873676-a18131494184?q=80&w=400&auto=format&fit=crop",
      link: "#"
    },
    {
      title: "Levitating Moon Lamp",
      category: "Space Decor",
      price: "$89.50",
      image: "https://images.unsplash.com/photo-1532517892732-b0b0609b6271?q=80&w=400&auto=format&fit=crop",
      link: "#"
    },
    {
      title: "Galaxy Projector Pro",
      category: "Study Desk Accessories",
      price: "$59.99",
      image: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=400&auto=format&fit=crop",
      link: "#"
    },
    {
      title: "Leather Stargazer Journal",
      category: "Journals",
      price: "$24.95",
      image: "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?q=80&w=400&auto=format&fit=crop",
      link: "#"
    }
  ];

  return (
    <section id="shop" className="section">
      <div className="container">
        <h2 className="section-title">Shop My Favorites</h2>
        <div className={styles.grid}>
          {products.map((product, index) => (
            <div key={index} className={`glass-panel ${styles.productCard}`}>
              <div 
                className={styles.productImage}
                style={{ backgroundImage: `url(${product.image})` }}
              >
                <div className={styles.overlay}>
                  <a href={product.link} className={styles.shopBtn}>View Item</a>
                </div>
              </div>
              <div className={styles.productInfo}>
                <span className={styles.category}>{product.category}</span>
                <h3 className={styles.title}>{product.title || product.name}</h3>
                <p className={styles.price}>{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
