
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
       <h2>South India’s Trusted Wholesale Spice Partner</h2>
       <p>Our marketing, sales, and delivery teams work across South India to ensure every retailer and distributor gets high-quality masalas on time.</p>


       <div className="info-cards">
         {teams.map((team) => (
           <div key={team.name} className="info-card">
            <img src={team.img} alt="" />
             <h3>{team.name}</h3>
             <p>{team.description}</p>
           </div>
         ))}
       </div>
     </section>


     {/* ================= Table Layout ================= */}
     <section className="info-section">
       <h2>Our Teams – Table View</h2>
       <table className="info-table">
         <thead>
           <tr>
             <th>Team</th>
             <th>Description</th>
           </tr>
         </thead>
         <tbody>
           {teams.map((team) => (
             <tr key={team.name}>
               <td>{team.name}</td>
               <td>{team.description}</td>
             </tr>
           ))}
         </tbody>
       </table>
     </section>
   </div>
 );
};


export default Home;
