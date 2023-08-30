import React, {useState} from "react";
import { Link } from "react-router-dom";

const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [telError, setTelError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [messageError, setMessageError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, email, tel, subject, message);
    if (name === "" || email === "" || tel === "" || subject === "" || message === "") {
      setNameError("please fill out this field.");
      setEmailError("please fill out this field.");
      setTelError("please fill out this field.");
      setSubjectError("please fill out this field.");
      setMessageError("please fill out this field.");
    }
    
    if (name === "name" || email === "email" || tel === "tel" || subject === "subject" || message === "message") {
      
    }
    // after doing everything we want to do
      setTimeout(() => {
        setNameError("");
        setEmailError("");
        setTelError("");
        setSubjectError("");
        setMessageError("");
      }, 3000);

      setName("");
      setEmail("");
      setTel("");
      setSubject("");
      setMessage("");

  };
  return ( 
  <>
   <div className="container-fluid surg text-center py-5">
     <h1 className="text-white fw-bold">CONTACTS</h1>
     <Link to="/" className="text-decoration-none display-11 text-white">HOME /</Link> <span className="text-warning">CONTACTS</span>
  </div>
 
<section className="mx-3">
  <div className="row d-flex mb-5">
    <div className="col card md-10">
      <form className="text-primary bg-white" onSubmit={handleSubmit}>
        <h1 className="fw-bold display-7 coltxt mb-3 mt-4">CONTACT FORM </h1>
 
        <div className="mb-4">
        <i class="fa-solid fa-user-large fa-sm mx-1 text-warning"></i>
          <label htmlFor="name" className="label fs-5">
            Full name
          </label>
          <input 
          type="text" 
          id="name" 
          className="form-control bg-info-subtle p-3 border-0"  
          value={name}
          onChange={(e) => setName(e.target.value)}
          />
          <small className="text-danger">{nameError}</small>
        </div>
       <div class="mb-4">
       <i class="fa-solid fa-pencil fa-sm mx-1 text-warning"></i>
          <label htmlFor="email" className="label fs-5">
            Email address
          </label>
          <input 
          type="email" 
          id="email" 
          className="form-control bg-info-subtle p-3 border-0" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
          <small className="text-danger">{emailError}</small>

       </div>
       <div className="mb-4">
       <i class="fa-solid fa-phone fa-sm mx-1 text-warning"></i>
        <label htmlFor="tel" className="label fs-5">
          Phone number
        </label>
         <input 
         type="tel" 
         id="tel" 
         className="form-control bg-info-subtle p-3 border-0" 
         value={tel}
         onChange={(e) => setTel(e.target.value)}
         />
         <small className="text-danger">{telError}</small>
        </div>
        <div className="mb-4">
        <i class="fa-solid fa-flag fa-sm mx-1 text-warning"></i>
          <label htmlFor="subject" className="label fs-5">
            Subject
          </label>
         <input 
         type="text" 
         id="text" 
         className="form-control bg-info-subtle p-3 border-0" 
         value={subject}
         onChange={(e) => setSubject(e.target.value)}
         />
         <small className="text-danger">{subjectError}</small>
        </div>

     <div className="mb-4">
     <i class="fa-solid fa-message fa-sm mx-1 text-warning"></i>
      <label htmlFor="message" className="label fs-5">
        Your message
      </label>
       <textarea 
       className="form-control bg-info-subtle border-0" 
       id="form4Example3" 
       rows="4"
       value={message}
       onChange={(e) => setMessage(e.target.value)}
       >
       </textarea>
       <small className="text-danger">{messageError}</small>
     </div>
 <button type="submit" className="btn btn-white mb-4 w-20 mt-4 bg-warning text-white p-3">SEND NOW!</button>
</form>
</div> 
<div className="col card d-flex">
  <h1 className="fw-bold display-7 coltxt mb-3 mt-4 text-right ms-5">CONTACT INFO</h1>
  <p 
    className="text-primary text-right ms-5 fs-5">
    <i class="fa-solid fa-location-dot fa-sm mx-1 text-info"></i>92/2 Medhurst Str., San Diego, MO 26958,<br />
    <i class="fa-solid fa-envelope fa-sm mx-1 text-info"></i>Infocecmcolombia@gmail.com,<br />
    <i class="fa-solid fa-business-time fa-sm mx-1 text-info"></i>Mon-Fri: 8:00-19:00 <br />
  </p>
</div>
</div>
</section>
  </>
  );
}

export default Contacts;