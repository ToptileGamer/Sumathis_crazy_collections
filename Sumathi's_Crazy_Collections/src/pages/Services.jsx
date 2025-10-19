import deli from '../assets/deli.jpeg';
import MarketingTeam from '../assets/MarketingTeam.jpg';
import whole from '../assets/whole.jpeg';
import doorstep from '../assets/doorstep.jpg'

const services = [
 {img:whole,  title: "Wholesale Supply", desc: "We provide bulk orders for retailers, restaurants, and distributors." },
 {img:deli, title: "Pan-South Delivery", desc: "Efficient logistics team ensuring timely deliveries." },
 {img:MarketingTeam, title: "Marketing & Branding", desc: "Support for promoting local and regional spice brands." },
 {img:doorstep, title:"Door-Step Delivery", desc: "Have your spices Delivered to your door step"},


];


const Services = () => (
 <section className="services-section">
   <h2>Our Services</h2>
   <div className="services-grid">
     {services.map((s) => (
       <div key={s.title} className="service-card">
          <img src={s.img} alt="" />
         <h3>{s.title}</h3>
         <p>{s.desc}</p>
       </div>
     ))}
   </div>
 </section>
);


export default Services;
