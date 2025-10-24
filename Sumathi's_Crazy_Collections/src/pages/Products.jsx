import { Link } from "react-router-dom";
import "../styles/productDetails.css";



import mc4 from '../assets/bracelets/mc4.png';
import pwwb from '../assets/bracelets/pwwb.png';
import wbb7 from '../assets/Earings/wbb7.png';
import fpgb from '../assets/bracelets/fpgb.png';
import pwws from '../assets/bracelets/pwws.png';
import pwgb4 from '../assets/bracelets/pwgb4.png';
import resize from '../assets/bracelets/resize.png';
import resized from '../assets/bracelets/resized.png';
import twob_twow from '../assets/bracelets/twob_twow.png';
import bw_alternative from '../assets/bracelets/bw_alternative.png';
import threeBoneonewhite from '../assets/bracelets/threeBoneonewhite.png';
import bluewhite_panda from '../assets/bracelets/bluewhite_panda.png';
import baby_pink from '../assets/Earings/baby_pink.png'; 
import gb from '../assets/Earings/gb.png'; 
import golder_rose from '../assets/Earings/golden_rose.png'; 
import pale_greenB from '../assets/Earings/pale_greenB.png'; 
import ps from '../assets/Earings/ps.png'; 
import yb from '../assets/Earings/yb.png';
import silver_S from '../assets/Earings/silver_S.png'; 
import white_perl from '../assets/Earings/white_perl.png'; 
import red_butterfly from '../assets/Earings/red_butterfly.png'; 

// Bracelets array
const bracelets = [
  { name: "Multi-Color (pack of 4)", img: mc4, price: "₹450", description: "Colorful pack of 4 bracelets for casual and festive wear." },
  { name: "Black-white (pack of 6)", img: wbb7, price: "₹399", description: "Classic black and white bracelet set of 6." },
  { name: "Pink with White Bow", img: pwwb, price: "₹350", description: "Elegant pink bracelet with a cute white bow." },
  { name: "Pink with White Star", img: pwws, price: "₹349", description: "Trendy pink bracelet featuring a white star charm." },
  { name: "Pink with Golden Bead", img: fpgb, price: "₹360", description: "Stylish bracelet with a golden bead on pink thread." },
  { name: "Bracelets", img: pwgb4, price: "₹399", description: "A charming bracelet perfect for any occasion." },
  { name: "Black with Silver Butterfly", img: resize, price: "₹299", description: "Adjustable bracelet design with unique flair." },
  { name: "Pink & Blue alternative", img: resized, price: "₹299", description: "Same great style, now in a resized version." },
  { name: "Two White & Two Black", img: twob_twow, price: "₹420", description: "Two white and two black beads for balanced style." },
  { name: "Black & White Alternative", img: bw_alternative, price: "₹399", description: "Alternating black and white beads." },
  { name: "Three Black with One White", img: threeBoneonewhite, price: "₹430", description: "Strong contrast design with black and white tones." },
  { name: "Blue & White with Panda Dollar", img: bluewhite_panda, price: "₹470", description: "Fun panda dollar charm with blue & white theme." },
];

// Earrings array
const earrings = [
  { name: "Baby Pink", img: baby_pink, price: "₹280", description: "Delicate baby pink earrings." },
  { name: "Green Butterfly", img: gb, price: "₹300", description: "Graceful green butterfly earrings." },
  { name: "Golden Rose", img: golder_rose, price: "₹320", description: "Elegant golden rose design." },
  { name: "Pale Green Butterfly", img: pale_greenB, price: "₹290", description: "Soft green butterfly charm earrings." },
  { name: "Pink Star", img: ps, price: "₹310", description: "Cute star-shaped pink earrings." },
  { name: "Yellow Butterfly", img: yb, price: "₹295", description: "Bright yellow butterfly design." },
  { name: "Silver S", img: silver_S, price: "₹330", description: "Stylish silver S-shaped earrings." },
  { name: "White Perl", img: white_perl, price: "₹340", description: "Classic pearl earrings in white." },
  { name: "Red Butterfly", img: red_butterfly, price: "₹315", description: "Vibrant red butterfly charm." },
];

const Products = () => {
  return (
    <section className="products-section px-6 py-12">
      {/* Bracelets */}
      <h2 className="text-3xl font-bold mb-6">Our Bracelets</h2>
      <div className="products-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {bracelets.map((bracelet) => (
          <div key={bracelet.name} className="product-card border p-4 rounded shadow hover:shadow-lg transition">
            <Link 
              to={`/product/${bracelet.name}`} 
              state={{ product: bracelet }}
            >
              <img src={bracelet.img} alt={bracelet.name} className="w-full h-48 object-cover mb-4" />
              <h3 className="text-lg font-medium">{bracelet.name}</h3>
              <p className="price">{bracelet.price}</p>
            </Link>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        ))}
      </div>

      {/* Earrings */}
      <h2 className="text-3xl font-bold mt-16 mb-6">Our Earrings</h2>
      <div className="products-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {earrings.map((earring) => (
          <div key={earring.name} className="product-card border p-4 rounded shadow hover:shadow-lg transition">
            <Link 
              to={`/product/${earring.name}`} 
              state={{ product: earring }}
            >
              <img src={earring.img} alt={earring.name} className="w-full h-48 object-cover mb-4" />
              <h3 className="text-lg font-medium">{earring.name}</h3>
              <p className="price">{earring.price}</p>
            </Link>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export { bracelets, earrings };
export default Products;

