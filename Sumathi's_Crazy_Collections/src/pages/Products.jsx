import brace from  '../assets/bgr/brace.png';



const spices = [
 { img: brace,name: "bracelets",desc: "yellow butterfly"},
 


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
           <p>{spice.desc}</p>
         </div>
         
       ))}
     </div>
   </section>
 );
};


export default Products;
