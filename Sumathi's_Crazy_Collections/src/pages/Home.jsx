
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";


const Home = () => {
 const teams = [
   {
     name: "Marketing Team",
     description: "Strategically promoting our products across South India to ensure maximum reach."
   },
   {
     name: "Sales Team",
     description: "Dedicated sales personnel helping retailers and distributors efficiently place orders."
   },
   {
     name: "Delivery Team",
     description: "Timely delivery across South India, ensuring fresh and high-quality masalas reach every client."
     
   }
 ];


 return (
   <div>
     <Navbar />
     <Hero />


     {/* ================= Card Layout ================= */}
     <section className="info-section">
       <h2>Our Top Selling Products</h2>
       <p>any small text or message</p>


       <div className="product-cards">
         {teams.map((team) => (
           <div key={team.name} className="product-card">
            <img src={team.img} alt="" />
             <h3>{team.name}</h3>
             <p>{team.description}</p>
           </div>
         ))}
       </div>
     </section>


    
   </div>
 );
};


export default Home;
