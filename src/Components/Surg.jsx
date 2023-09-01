import React from "react";
import { Link } from "react-router-dom";

const Surg = () => {
  return (
    <>
        <h2 className="pt-5 pb-3 ps-5 coltxt">What We Offer Cosmatic procedures</h2>
        <div className="row px-5">
            <div className="col">
             <img src="https://webdesign-finder.com/lumenos/wp-content/uploads/2017/12/service_1-600x400.jpg" 
                  className="img-fluid"/>
             <Link to="/lowbodylift" className="text-info fs-4 py-3">Body</Link><br/>

            </div>

            <div className="col">
             <img src="https://webdesign-finder.com/lumenos/wp-content/uploads/2017/12/service_3-600x400.jpg" 
                  className="img-fluid"/>
             <Link to="/augmentation" className="text-info fs-4 py-3">Breast</Link><br/>
            </div>

            <div className="col">
             <img src="https://webdesign-finder.com/lumenos/wp-content/uploads/2017/12/service_2-600x400.jpg" 
                  className="img-fluid"/>
             <Link to="/facelift" className="text-info fs-4 py-3">Facial Surgeries</Link><br/>
            </div>

            <div className="col">
             <img src="https://www.medicalcosmeticsltd.co.uk/wp-content/uploads/2019/08/botox-and-dermal-fillers-male-cosmetic-procedures-scaled.jpg" 
                  className="img-fluid"/>
            <Link to="/correction" className="text-info fs-3 py-3">For Men</Link><br/>
            </div>

        </div>

    
   
        <div className="py-5 px-5 justify-content-center">
        <h5 className="text-info fw-bold fs-6">ABOUT OUR CLINIC</h5>
        <h1 className="fw-bold fs-4 mb-4">WELCOME TO THE NEWLOOK</h1>
        <hr className="text-warning border-2" />
        <h3 className="text-info-subtle fs-5 mt-4 mb-4">San Diego is home to one of the top plastic surgery centers in the country - NewLook.</h3>
        <p>
         <span className="text-info fw-bold">NewLook</span> unlike  many traditional plastic surgery centers in San Diego, 
          are industry recognized experts in a wide variety of cosmetic 
          procedures, and are dedicated to providing customers.
        </p>
        <ul>
          <li>Determine what you want a change;</li>
          <li>Check out our services and prices;</li>
          <li>Call us quickly: <span className="text-warning">+1 914-206-2747</span></li>
        </ul>
        </div>


    </>
  )
}

export default Surg;