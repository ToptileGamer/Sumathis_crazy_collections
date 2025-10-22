import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import "../styles/home.css"; // 🌸 new cute & complete design

import mc4 from "../assets/bracelets/mc4.png";
import pwwb from "../assets/bracelets/pwwb.png";
import wbb7 from "../assets/Earings/wbb7.png";

const Home = () => {
  const bsproducts = [
    {
      name: "Black-white (pack of 7)",
      img: wbb7,
      price: "₹399",
      description: "Classic black and white bracelet set of 7.",
    },
    {
      name: "Pink with White Bow",
      img: pwwb,
      price: "₹350",
      description: "Elegant pink bracelet with a cute white bow.",
    },
    {
      name: "Multi-Color (pack of 4)",
      img: mc4,
      price: "₹450",
      description: "Colorful pack of 4 bracelets for casual and festive wear.",
    },
  ];

  return (
    <div className="home-page">
      <Navbar />
      <Hero />

      {/* 🌸 Best Sellers Section */}
      <section className="products-section">
        <h2>🌟 Best-Selling Products</h2>
        <p className="subtitle">Hand-picked & loved by our happy customers 💕</p>

        <div className="products-grid">
          {bsproducts.map((product) => (
            <div key={product.name} className="product-card">
              <Link to={`/product/${product.name}`} state={{ product }}>
                <div className="img-wrapper">
                  <img src={product.img} alt={product.name} />
                </div>
                <h3>{product.name}</h3>
                <p className="price">{product.price}</p>
                <p className="desc">{product.description}</p>
              </Link>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      {/* 💖 Custom Order Section */}
      <section className="custom-order">
        <h2>💌 Customize Your Bracelet</h2>
        <p>
          Choose your favorite color, charm, and style! We'll make it uniquely yours 🎀
        </p>
        <Link to="/contact" className="custom-btn">
          Create My Bracelet
        </Link>
      </section>

      {/* 🌷 Customer Reviews */}
      <section className="reviews">
        <h2>✨ What Our Customers Say</h2>
        <div className="review-grid">
          <div className="review-card">
            <p>"Absolutely love the pink bow bracelet! It's so cute and comfy 💗"</p>
            <h4>- Sneha</h4>
          </div>
          <div className="review-card">
            <p>"Fast delivery and beautiful packaging! Totally worth it 🌸"</p>
            <h4>- Aishwarya</h4>
          </div>
          <div className="review-card">
            <p>"Got matching bracelets with my bestie — we adore them 🫶"</p>
            <h4>- Meera & Diya</h4>
          </div>
        </div>
      </section>

      {/* 🎀 Call to Action */}
      <section className="cta">
        <h2>Follow us on Instagram 💕</h2>
        <p>@sumathiscrazycollection</p>
        <a
          href="https://instagram.com/sumathiscrazycollection"
          target="_blank"
          rel="noreferrer"
          className="insta-btn"
        >
          Visit Instagram ✨
        </a>
      </section>
    </div>
  );
};

export default Home;
