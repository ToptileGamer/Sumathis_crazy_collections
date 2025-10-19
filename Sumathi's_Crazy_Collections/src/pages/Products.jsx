import mc4 from '../assets/bracelets/mc4.png';
import pwwb from '../assets/bracelets/pwwb.png';
import wbb7 from '../assets/Earings/wbb7.png';
import fpgb from '../assets/bracelets/fpgb.png';
import pwws from '../assets/bracelets/pwws.png';
import pwgb4 from  '../assets/bracelets/pwgb4.png';
import resize from '../assets/bracelets/resize.png';
import resized from '../assets/bracelets/resized.png';
import twob_twow from '../assets/bracelets/twob_twow.png';
import bw_alternative from '../assets/bracelets/bw_alternative.png';
import threeBoneonewhite from '../assets/bracelets/threeBoneonewhite.png';
import bluewhite_panda from '../assets/bracelets/bluewhite_panda.png';



const spices = [
 { name: "Multi-Color(pack of 4)", img: mc4 },
 { name: "Black-white(pack of 7)", img:wbb7  },
 { name: "Pink with White Bow", img: pwwb  },
 { name: "Pink with White Star", img: pwws },
 { name: "bracelets", img: pwgb4},
 { name: "resized", img: resized},
 { name: "pink with golden bead", img: fpgb },
 { name: "Two White&Two Black", img: twob_twow},
 { name: "Black&White alternative", img: bw_alternative },
 { name: "Three Black with One White", img: threeBoneonewhite  },
{ name: "Blue&White with a panda doller",img:bluewhite_panda},

];



const Products = () => {
 return (
   <section className="products-section">
     <h2>Our Wholesale Products</h2>
     <div className="products-grid">
       {spices.map((spice) => (
         <div key={spice.name} className="product-card">
                <img src={spice.img} alt="" />
           <h3>{spice.name}</h3>
           <p>Add a small discription here.</p>
           <button>Add to cart</button>
         </div>
       ))}
     </div>
     
   </section>
 );
};


export default Products;
