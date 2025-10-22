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
  { name: "Multi-Color (pack of 4)", img: mc4, price: "₹450" },
  { name: "Black-white (pack of 7)", img: wbb7 },
  { name: "Pink with White Bow", img: pwwb },
  { name: "Pink with White Star", img: pwws },
  { name: "Pink with Golden Bead", img: fpgb },
  { name: "Bracelets", img: pwgb4 },
  { name: "Resize", img: resize },
  { name: "Resized", img: resized },
  { name: "Two White & Two Black", img: twob_twow },
  { name: "Black & White Alternative", img: bw_alternative },
  { name: "Three Black with One White", img: threeBoneonewhite },
  { name: "Blue & White with Panda Dollar", img: bluewhite_panda },

];

// Earrings array
const earrings = [
  { name: "Baby Pink", img: baby_pink },
  { name: "Green Butterfly", img: gb },
    { name: "Golden Rose", img: golder_rose },
  { name: "Pale Green Butterfly", img: pale_greenB },
  { name: "Pink Star", img: ps },
  { name: "Yellow Butterfly", img: yb },
  { name: "Silver S", img: silver_S },
  { name: "White Perl", img: white_perl },
  { name: "Red Butterfly", img: red_butterfly },
  
  // Add more earrings here
];

const Products = () => {
  return (
    <section className="products-section">
      <h2>Our Bracelets</h2>
      <div className="products-grid">
        {bracelets.map((bracelet) => (
          <div key={bracelet.name} className="product-card">
            <img src={bracelet.img} alt={bracelet.name} />
            <h3>{bracelet.name}</h3>
            <h3>{bracelet.price}</h3>
            
            <button className="add-to-cart-btn">Add to cart</button>
          </div>
        ))}
      </div>
      

      {/* New Section for Earrings */}
      <h2>Our Earrings</h2>
      <div className="products-grid">
        {earrings.map((earring) => (
          <div key={earring.name} className="product-card">
            <img src={earring.img} alt={earring.name} />
            <h3>{earring.name}</h3>
            <button className="add-to-cart-btn">Add to cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
