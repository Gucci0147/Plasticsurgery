import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contacts from "./Pages/Contacts";
import Appointment from "./Pages/Appointment";
import Pricelist from "./Pages/Pricelist";
import Testimonials from "./Pages/Testimonials";
import Paymentmethod from "./Pages/Paymentmethod";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Augmentation from "./Pages/Breastpg/Augmentation";
import Breastlift from "./Pages/Breastpg/Breastlift";
import Reduction from "./Pages/Breastpg/Reduction";
import Reconstruction from "./Pages/Breastpg/Reconstruction";
import Liabiaplasty from "./Pages/Bodypg/Liabiaplasty";
import Armlift from "./Pages/Bodypg/Armlift";
import BCAWL from "./Pages/Bodypg/BCAWL";
import Lowbodylift from "./Pages/Bodypg/Lowbodylift";
import Buttockslift from "./Pages/Bodypg/Buttockslift";
import Fatgrafting from "./Pages/Bodypg/Fatgrafting";
import Liposuction from "./Pages/Bodypg/Liposuction";
import Tummytuck from "./Pages/Bodypg/Tummytuck";
import Rhinoplasty from "./Pages/Facialpg/Rhinoplasty";
import Eyelid from "./Pages/Facialpg/Eyelid";
import Facelift from "./Pages/Facialpg/Facelift";
import Injectable from "./Pages/Injectablepg/Injectable";
import Threadlift from "./Pages/Facialpg/Threadlift";
import Browlift from "./Pages/Facialpg/Browlift";
import Otoplasty from "./Pages/Facialpg/Otoplasty";
import Facialimplants from "./Pages/Facialpg/Facialimplants";
import Correction from "./Pages/Formenpg/Correction";
import Pectoralimplants from "./Pages/Formenpg/Pectoralimplants";
import Calvesimplants from "./Pages/Formenpg/Calvesimplants";
import GASmale from "./Pages/MFpages/GASmale";
import Facialfem from "./Pages/MFpages/Facialfem";
import GASfemale from "./Pages/FMpages/GASfemale";
import Chestmas from "./Pages/FMpages/Chestmas";







function App() {
 
  return (
  
      <div>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/paymentmethod" element={<Paymentmethod />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/pricelist" element={<Pricelist />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/augmentation" element={<Augmentation />} />
            <Route path="/breastlift" element={<Breastlift />} />
            <Route path="/reduction" element={<Reduction />} />
            <Route path="/reconstruction" element={<Reconstruction />} />
            <Route path="/liabiaplasty" element={<Liabiaplasty />} />
            <Route path="/armlift" element={<Armlift />} />
            <Route path="/bcawl" element={<BCAWL />} />
            <Route path="lowbodylift" element={<Lowbodylift />} />
            <Route path="tummytuck" element={<Tummytuck />} />
            <Route path="buttockslift" element={<Buttockslift />} />
            <Route path="fatgrafting" element={<Fatgrafting />} />
            <Route path="liposuction" element={<Liposuction />} />
            <Route path="/rhinoplasty" element={<Rhinoplasty />} />
            <Route path="/eyelid" element={<Eyelid />} />
            <Route path="/facelift" element={<Facelift />} />
            <Route path="/injectable" element={<Injectable />} />
            <Route path="/threadlift" element={<Threadlift />} />
            <Route path="/browlift" element={<Browlift />} />
            <Route path="/otoplasty" element={<Otoplasty />} />
            <Route path="/facialimplants" element={<Facialimplants />} />
            <Route path="/correction" element={<Correction />} />
            <Route path="/pectoralimplants" element={<Pectoralimplants />} />
            <Route path="/calvesimplants" element={<Calvesimplants />} />
            <Route path="/gasmale" element={<GASmale />} />
            <Route path="/facialfem" element={<Facialfem />} />
            <Route path="/gasfemale" element={<GASfemale />} />
            <Route path="/chestmas" element={<Chestmas />} />
            
          </Routes>
          <Footer />
        </Router>
      </div>
     
  );
}

export default App;
