import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import mc4 from '../assets/bracelets/mc4.png';
import pwwb from '../assets/bracelets/pwwb.png';
import wbb7 from '../assets/Earings/wbb7.png';

const Home = () => {
  const bsproducts = [
    { name: "Black-white (pack of 7)", img: wbb7 },
    { name: "Pink with White Bow", img: pwwb },
    { name: "Multi-Color (pack of 4)", img: mc4 },
  ];

  return (
    <div>
      <Navbar />
      <Hero />

      {/* ================= Best Sellers Section (Reuses product-card style) ================= */}
      <section className="products-section">
        <h2>Best-Selling Products</h2>
        <h4>Hand-picked & loved by customers.</h4>
        <div className="products-grid">
          {bsproducts.map((product) => (
            <div key={product.name} className="product-card">
              <img src={product.img} alt={product.name} />
              <h3>{product.name}</h3>
              <p>Add a small description here.</p>
              <button className="add-to-cart-btn">Add to cart</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
