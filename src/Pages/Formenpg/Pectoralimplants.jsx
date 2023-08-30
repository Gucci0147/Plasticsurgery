import React from "react";
import { Link } from "react-router-dom";

const Pectoralimplants = () => {
  return (
    <>
    <div className="container-fluid surg text-center py-5">
     <h1 className="text-white fw-bold">SURGICAL PROCEDURES</h1>
     <Link to="/" className="text-decoration-none text-white">HOME /</Link> <span className="text-warning"> SURGICAL / PECTORAL IMPLANTS</span>
   </div>  

   <div className="container py-5">
        <div className="row">
        <div className="col bg-info text-white">
          <h2 className="fw-bold pt-5 mb-3 ">Pectoral Implants</h2>
      <div id="overflow" className="mx-auto mb-5">
      <h5 className="line py-3">

        Is a method used to improve the contour of the chest. 
        Pectoral implants come in a variety of shapes and sizes. 
        They are made of silicone gel more dense than the one used in mamary implants. 
        This procedure has become a popular option, particularly for men 
        who are athletic or go to the gym and want to be able to show off their 
        more sculpted, masculine chests.<br/>

         

          

          <p className="line pt-5">Average time: 2 hours<br/>

            Type of anesthesia: Epidural + sedation</p>
      </h5>
      </div>
      </div>

      <div className="col">

      </div>
      </div>
      </div>

   </>
  )
}

export default Pectoralimplants;