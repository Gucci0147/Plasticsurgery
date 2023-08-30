import React, { useState } from "react";
import { Link } from "react-router-dom";

const Appointment = () => {
  const [fname, setFname] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [send, setSend] = useState("");

  const [fnameError, setFnameError] = useState("");
  const [countryError, setCountryError] = useState("");
  const [cityError, setCityError] = useState("");
  const [telError, setTelError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [sendError, setSendError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(fname, country, city, tel, email);
    if (fname === "" || country === "" || city === "" || tel === "" || email === "") {
      setFnameError("There is a field that you must fill in")
      setCountryError("There is a field that you must fill in")
      setCityError("There is a field that you must fill in")
      setTelError("There is a field that you must fill in")
      setEmailError("There is a field that you must fill in")
      setSendError("Validation errors have occurred")
    }
    // after doing everything we want to do
    setTimeout(() => {
      setFnameError("");
      setCountryError("");
      setCityError("");
      setTelError("");
      setEmailError("");
      setSendError("");
    }, 3000);

      setFname("");
      setCountry("");
      setCity("");
      setTel("");
      setEmail("");
      setSend("");
  };


  return (
      <div className="stylebody">
      <div className="container-fluid surg text-center py-5">
      <h1 className="text-white fw-bold">APPOINTMENT</h1>
      <Link to="/" className="text-decoration-none text-white">HOME /</Link> <span className="text-warning">APPOINTMENT</span>
      </div>

    <div className="container text-right">
      <h1 className="coltt ms-5 mt-4 pt-4">Make An Appointment</h1>
      <p className="coltxt ms-5">Complete the form and we will contact you.</p>
     <form className="mx-4 pb-3 coltxt" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="label fs-5">
          Name and Surname (Obligatory field)
        </label>
        <input 
          type="text" 
          className="form-control bg-info-subtle border-0 p-2" 
          id="fname" 
          value={fname}
          onChange={(e) => setFname(e.target.value)}
        />
         <small className="text-danger">{fnameError}</small>
        </div>
        
        <div className="mb-4">
        <label htmlFor="name" className="label fs-5">
           Identification No.
        </label>
        <input 
          type="number" 
          className="form-control bg-info-subtle border-0 p-2"
          id="number" 
        />
        </div>
        
        <div className="row">
          <div className="col-md-6 mb-4">
            <label htmlFor="sex" className="label fs-5">
              Sex
            </label>

          <select aria-label="Default select example" className="bg-info-subtle p-2 mx-3 px-5 coltxt">
            <option value="1" disabled>Gender</option>
            <option value="2">Female</option>
            <option value="3">Male</option>
            <option value="4">Other</option>
          </select>

          </div>
                
        <div className="col-md-6 mb-4">
          <label htmlFor="dob" className="label fs-5 px-3">
            Date of birth
          </label>
          <input type="datetime-local" className="bg-info-subtle p-2 mx-3 coltxt" id="dob" />
          </div>
        </div>

        <div className="mb-4">
        <label htmlFor="name" className="label fs-5">
           Residence address
        </label>
        <input 
          type="text" 
          className="form-control bg-info-subtle border-0 p-2" 
          id="address" 
        />
      </div>

      <div className="mb-4">
        <label htmlFor="name" className="label fs-5">
          Country of residence (Obligatory field)
        </label>
        <input 
          type="text" 
          className="form-control bg-info-subtle border-0 p-2" 
          id="country" 
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <small className="text-danger">{countryError}</small>
      </div>

      <div className="mb-4">
        <label htmlFor="name" className="label fs-5">
          City of residence (Obligatory field)
        </label>
        <input 
          type="text" 
          className="form-control bg-info-subtle border-0 p-2" 
          id="city" 
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <small className="text-danger">{cityError}</small>
      </div>

      <div className="mb-4">
        <label htmlFor="tel" className="label fs-5">
          Mobile (Obligatory field)
        </label>
        <input 
          type="tel" 
          className="form-control bg-info-subtle border-0 p-2" 
          id="tel" 
          value={tel}
          onChange={(e) => setTel(e.target.value)}
        />
        <small className="text-danger">{telError}</small>
      </div>
      
      <div className="mb-4">
        <label htmlFor="email" className="label fs-5">
          Email (Obligatory field)
        </label>
        <input 
          type="email" 
          className="form-control bg-info-subtle border-0 p-2" 
          id="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <small className="text-danger">{emailError}</small>
      </div>

      <div className="mb-4">
        <label htmlFor="text" className="label fs-5">
          Procedure of interest:
        </label> 
        <input 
          type="text" 
          className="form-control bg-info-subtle border-0 p-2" 
          id="poi" 
        />
      </div>
      <div> 
        <button 
        type="submit" 
        className="text-white tint border-0 p-2 px-3
        onClick={handleSubmit}
        ">SEND</button>
      </div>
      <small className="text-danger">{sendError}</small>
     </form>
    </div>

  
   </div>
  );
}

export default Appointment;