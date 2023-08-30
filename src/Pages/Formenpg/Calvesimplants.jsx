import React from "react";
import { Link } from "react-router-dom";

const Calvesimplants = () => {
  return (
    <>
    <div className="container-fluid surg text-center py-5">
     <h1 className="text-white fw-bold">SURGICAL PROCEDURES</h1>
     <Link to="/" className="text-decoration-none text-white">HOME /</Link> <span className="text-warning"> SURGICAL / CALVES IMPLANTS</span>
   </div>  

   <div className="container py-5">
        <div className="row">
        <div className="col bg-info text-white">
          <h2 className="fw-bold pt-5 mb-3 ">Calves Implants</h2>
      <div id="overflow" className="mx-auto mb-5">
      <h5 className="line py-3">

        Is the procedure that increases the size and improves the shape of the calves. 
        Patients look for these type of implants to tone and define the lower leg 
        if they can’t achieved it with exercise, or to correct a muscle imbalance 
        resulting from physical or birth defects.<br/>

         

          

          <p className="line pt-5">Average time: 1 hour 30 min<br/>

            Type of anesthesia: Spinal anesthesia</p>
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

export default Calvesimplants;