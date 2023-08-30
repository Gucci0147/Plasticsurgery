import React from "react";
import { Link } from "react-router-dom";

const Pricelist = () => {
  return (
       <>
      <div className="container-fluid surg text-center py-5">
      <h1 className="text-white  fw-bold">PRICING</h1>
      <Link to="/" className="text-decoration-none text-white">HOME /</Link> <span className="text-warning"> PAGES / PRICING</span>
    </div>

    <div className="row justify-content-xxl-center py-5 mx-5">
    <div className="col card">
      <div className="container">
        <h3 className="text-center text-white bg-info fw-bold p-4 fs-4">BODY</h3>
      </div>
      <div className="card-body text-center">
        <h5 className="text-warning fs-4 fw-bold">PLASTIC SURGEON</h5>
        <p className="card-text coltt fs-5">
          Abdominoplasty (Tummy Tuck): $1,400 – $12,600 <br/>
          Belt Lipectomy (Body Lift): $14,630 <br/>
          Brachioplasty (Arm Lift): $7,750 <br/>
          Liposuction (Whole Body): $2,550 – $8,500 <br/>
          Thigh / Buttock Lift: $10,100 <br/>
          Liabiaplasty: $2,000 - $6,670 <br/>
          Fat Grafting: $1,450 - $5,465 <br/>
          Body Contouring: $3,550 - $9,740 <br/>
        </p>
       
     

      </div>
    </div>

    <div className="col card">
    <div className="container">
      <h3 className="text-center text-white bg-info fw-bold p-4 fs-4">BREASTS</h3>
    </div>
      <div className="card-body text-center">
        <h5 className="text-warning fs-4 fw-bold">PLASTIC SURGEON</h5>
        <p className="card-text coltt fs-5">
          Breast Augmentation (saline): $4,215 - $6,530 <br/>
          Breast Augmentation (silicone): $7,250 <br/>
          Breast Reconstruction: $4,900 – $7,000 <br/>
          Revision of Breast Augmentation: $4,800 – $9,000 <br/>
          Breast Reduction: $10,100 <br/>
        </p>
      </div>
    </div>

    <div className="col card">
    <div className="container">
      <h3 className="text-center text-white bg-info fw-bold p-4 fs-4">FACIAL SURGERIES</h3>
    </div>
      <div className="card-body text-center">
        <h5 className="text-warning fs-4 fw-bold">PLASTIC SURGEON</h5>
        <p className="card-text coltt fs-5">
          Facelift and Necklift $9,850 / $3,650 – $5,200 <br/>
          Eyelid Surgery $3,750 – $6,400 <br/>
          Nose Surgery (Rhinoplasty) $6,400 – $10,250 <br/>
          Forehead Lift $5,150 – $10,700 <br/>
          Ear Surgery (Otoplasty) $5,685 <br/>
          Browlift: $3,150 - $8,900 <br/>
          Threadlift: $2,300 - $12,450 <br/>
          Facial Implants: $4,670 - $14,590 <br/>

        </p>
      </div>
    </div>
    </div>

    <div className="row pt-4 mb-5 m-3 ">
    <div className="col card">
      <div className="container">
        <h3 className="text-center text-white bg-info fw-bold p-4 fs-4">INJECTABLES</h3>
        </div>
      <div className="card-body text-center">
        <h5 className="text-warning fs-4 fw-bold">PLASTIC SURGEON</h5>
        <p className="card-text coltt fs-5">
          Botox $13 per unit <br/>
          Dysport $4 per unit <br/>
          Restalyne $585 per syringe <br/>
          Juvederm Ultra Plus $600 per syringe <br/>
          Sculptra $775 per vial  <br/>
        </p>
      </div>
    </div>

    <div className="col card">
    <div className="container">
      <h3 className="text-center text-white bg-info fw-bold p-4 fs-4">FOR MEN</h3>
    </div>
      <div className="card-body text-center">
        <h5 className="text-warning fs-4 fw-bold">PLASTIC SURGEON</h5>
        <p className="card-text coltt fs-5">
          Male Breast Reduction:  $2,150 - $12,750 <br/>
          Pectoral implants: $3,170 - $15,500 <br/>
          Calves implants: $2,010 - $10,230 <br/>
        </p>
      </div>
    </div>

    <div className="col card">
    <div className="container">
      <h3 className="text-center text-white bg-info fw-bold p-2  fs-4">GENDER AFFIRMATION SURGERY</h3>
    </div>
      <div className="card-body text-center">
        <h5 className="text-warning fs-4 fw-bold">PLASTIC SURGEON</h5>
        <p className="card-text coltt fs-5">
         Female - Male; <br/>
         Gender Affirmation Surgery: $15,480 - $25,670 <br/>
         Chest Masculinization: $13,500 - $20,000 <br/>
         Male - Female;<br/>
         Gender Affirmation Surgery: $15,480 - $19,670 <br/>
         Facial Feminization: $11,590 - 17,000  <br/>
        </p>
      </div>
    </div>
    </div>
  
      
   </>

  );
}

export default Pricelist;