import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import "../styles/productDetails.css"; // ✅ Reuse price design

import mc4 from "../assets/bracelets/mc4.png";
import pwwb from "../assets/bracelets/pwwb.png";
import wbb7 from "../assets/Earings/wbb7.png";

const Home = () => {
  // ✅ Include prices & descriptions (matching your Products page)
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
    <div>
      <Navbar />
      <Hero />

      {/* ================= Best Sellers Section ================= */}
      <section className="products-section px-6 py-12">
        <h2 className="text-3xl font-bold mb-2">Best-Selling Products</h2>
        <h4 className="text-gray-600 mb-8">
          Hand-picked & loved by our customers.
        </h4>

        <div className="products-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {bsproducts.map((product) => (
            <div
              key={product.name}
              className="product-card border p-4 rounded shadow hover:shadow-lg transition"
            >
              <Link
                to={`/product/${product.name}`}
                state={{ product }}
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-48 object-cover mb-4"
                />
                <h3 className="text-lg font-medium">{product.name}</h3>
                <p className="price">{product.price}</p> {/* ✅ same design as ProductDetails */}
                <p className="text-sm text-gray-600">{product.description}</p>
              </Link>

              <button className="add-to-cart-btn">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
