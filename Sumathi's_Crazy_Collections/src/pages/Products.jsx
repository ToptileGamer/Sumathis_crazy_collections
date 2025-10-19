import termuric from '../assets/turmeric.jpg';
import cummin_seeds from '../assets/cummin_seeds.jpeg';
import Red_Chilli from '../assets/red_chilli.jpeg';
import black_pepper from '../assets/black_pepper.jpg';
import cardamom from '../assets/cardamom.jpg';
import brace from  '../assets/bgr/brace.png';



const spices = [
 { name: "Turmeric", img: termuric },
 { name: "Red Chilli", img: Red_Chilli },
 { name: "Cumin Seeds", img: cummin_seeds },
 { name: "Black Pepper", img: black_pepper },
 { name: "Cardamom", img: cardamom },
 { name: "bracelets", img: brace},
 


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
           <p>Pure and fresh spices directly from the source.</p>
         </div>
         
       ))}
     </div>
     
   </section>
 );
};


export default Products;
