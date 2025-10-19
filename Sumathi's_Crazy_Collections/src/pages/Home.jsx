
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import pwgb4 from '../assets/bracelets/pwgb4.png';

const Home = () => {
 const best_selling = [
  {img:pwgb4,name: "Purple with Gold crystal",desc: "its a Purple bracelet with a gold crystal in the center"},
  {img:bp, name:"blue with pink"},
   
 ];


 return (
   <div>
     <Navbar />
     <Hero />


     {/* ================= Card Layout ================= */}
     <section className="info-section">
       <h2>Our Best selling Products</h2>
       <p>Our marketing, sales, and delivery teams work across South India to ensure every retailer and distributor gets high-quality masalas on time.</p>


       <div className="product-cards">
         {best_selling.map((selling) => (
           <div key={selling.name} className="product-card">
            <img src={selling.img} alt="" />
             <h3>{selling.name}</h3>
             <p>{selling.desc}</p>
           </div>
         ))}
       </div>
     </section>


     
   </div>
 );
};


export default Home;
