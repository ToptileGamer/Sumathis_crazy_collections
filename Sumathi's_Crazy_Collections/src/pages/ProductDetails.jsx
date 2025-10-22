import React from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import "../styles/productDetails.css";
import { bracelets, earrings } from "../pages/Products"; // ⬅️ make sure this is where your arrays are

const ProductDetails = () => {
  const { name } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const product = location.state?.product;

  // If direct access without state
  if (!product) {
    return (
      <div className="product-details-container text-center">
        <h2 className="text-2xl font-bold mb-4 text-pink-600">Product Not Found</h2>
        <p className="text-gray-600 mb-6">
          This product doesn't exist or was accessed directly without full data.
        </p>
        <button onClick={() => navigate(-1)} className="back-btn">Go Back</button>
      </div>
    );
  }

  // Combine all products and remove current one
  const allProducts = [...bracelets, ...earrings];
  const recommendations = allProducts
    .filter((p) => p.name !== product.name)
    .sort(() => 0.5 - Math.random()) // Shuffle
    .slice(0, 4); // Show 4 recommendations

  return (
    <div className="product-details-container">
      <div className="product-details-wrapper">
        {/* Image and Info */}
        <div className="product-details-image">
          <img src={product.img} alt={product.name} />
        </div>

        <div className="product-details-info">
          <h1>{product.name}</h1>
          {product.price && <p className="price">Price: {product.price}</p>}
          {product.description && <p className="description">{product.description}</p>}

          <button className="add-to-cart-btn">Add to Cart</button>
          <button className="back-btn" onClick={() => navigate(-1)}>⬅️ Go Back</button>
        </div>
      </div>

      {/* 💖 Recommendations */}
      <section className="recommendations">
        <h2>You may also like...</h2>
        <div className="recommendation-grid">
          {recommendations.map((item) => (
            <div
              key={item.name}
              className="product-card"
              onClick={() =>
                navigate(`/product/${encodeURIComponent(item.name)}`, {
                  state: { product: item },
                })
              }
            >
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
              {item.price && <p>{item.price}</p>}
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
