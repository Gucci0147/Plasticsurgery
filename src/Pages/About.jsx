import React from "react"; 
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";


const About = () => {
  return (
   <>
       <div className="container-fluid surg text-center py-5">
      <h1 className="text-white fw-bold">ABOUT</h1>
      <Link to="/" className="text-decoration-none text-white">HOME /</Link> <span className="text-warning">ABOUT</span>
    </div>

    <div className="container-fluid-sm py-5 px-5">
      <div className="row">
        <div className="col justify-content-center">
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

        <div className="col text-center">
        <img src="https://webdesign-finder.com/lumenos/wp-content/uploads/2017/12/one_half-1-1.png"
          alt="" />
        </div>
      </div>

    </div>

  
   <div className="container-fluid bg-info-subtle py-5">
   <Carousel slide={true}>
      <Carousel.Item>
        <div className="container-fluid --bs-info-bg-subtle text-center">
            <div className="d-flex justify-content-center mb-4">
            <img src="https://webdesign-finder.com/lumenos/wp-content/uploads/2017/12/face_3-1.jpg"
            className="rounded-circle shadow-1-strong mt-5" width="150" height="150" />
        </div>
        <h2 className="mb-3 fw-bold">Dorothy Greer</h2>
          <h6 className="text-primary mb-1">PATIENT</h6>
          <ul className="list-unstyled d-flex justify-content-center">
        <li>
          <i className="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i className="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i className="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i className="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i className="fas fa-star-half-alt fa-sm text-warning"></i>
        </li>
      </ul>
        <p className="px-xl-3">
        <i className="fas fa-quote-left pe-2 fs-3"></i>I was very happy with the care I received from the doctors and staffs. Very friendly,efficient and deligent.
        </p>
        
    </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="container-fluid --bs-info-bg-subtle text-center">
            <div className="d-flex justify-content-center mb-4">
            <img src="https://webdesign-finder.com/lumenos/wp-content/uploads/2017/12/team_2.jpg"
            className="rounded-circle shadow-1-strong mt-5" width="150" height="150" />
        </div>
        <h2 className="mb-3 fw-bold">Lakisha Knaus</h2>
          <h6 className="text-primary mb-1">PATIENT</h6>
          <ul className="list-unstyled d-flex justify-content-center">
          <li>
          <i className="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i className="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i className="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i className="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i className="fas fa-star fa-sm text-warning"></i>
        </li>
      </ul>
        <p className="px-xl-3">
        <i className="fas fa-quote-left pe-2 fs-3"></i>The doctors listened well to my situation, was very quick to diagnose me and gave very clear guidelines on how I should manage my condition. 
        </p>
      
    </div>
        
      </Carousel.Item>
      <Carousel.Item>
      <div className="container-fluid text --bs-info-bg-subtle text-center border-0">
            <div className="d-flex justify-content-center mb-4">
            <img src="https://webdesign-finder.com/lumenos/wp-content/uploads/2017/12/face_1-1.jpg"
            className="rounded-circle shadow-1-strong mt-5" width="150" height="150" />
        </div>
        <h2 className="mb-3 fw-bold">John Blair</h2>
          <h6 className="text-primary mb-1">PATIENT</h6>
       <ul className="list-unstyled d-flex justify-content-center">
       <li>
          <i className="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i className="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i className="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i className="fas fa-star fa-sm text-warning"></i>
        </li>
        <li>
          <i className="far fa-star fa-sm text-warning"></i>
        </li>
      </ul>
        <p className="px-xl-3">
        <i className="fas fa-quote-left pe-2 fs-3"></i>The doctors are very approachable, friendly, professional and supportive.
        </p>
        
    </div>
      
      </Carousel.Item>
    </Carousel>


   </div>

   <div className="container-fluid text-center py-5 my-5">
    <h5 className="coltxt">OUR ADVANTAGES</h5>
    <h2 className="coltt mb-5">WHY CUSTOMERS CHOOSE US</h2>
    <hr className="text-warning border-3" />

    <div className="row my-5">
      <div className="col">
      <i class="fa-solid fa-trophy fa-beat-fade fs-1 text-warning my-4"></i>
        <h3 className="coltt fs-4">CERTIFIED SPECIALISTS</h3>
        <p className="coltxt fs-5">Top specialist and surgeons only for a guaranteed success and maximum result</p>

      </div>

      <div className="col">
      <i className="fa-solid fa-earth-americas fa-beat-fade fs-1 text-warning my-4"></i>
        <h3 className="coltt fs-4">CENTERS IN ALL STATES</h3>
        <p className="coltxt fs-5">Our centers are in 50 states and the Federal District of Columbia.</p>
      </div>

      <div className="col">
      <i className="fa-solid fa-people-group fa-beat-fade fs-1 text-warning my-4"></i>
        <h3 className="coltt fs-4">TEAM APPROACH</h3>
        <p className="coltxt fs-5">All specialists work in communication with each other, and often decide together.</p>
      </div>

    </div>

    <div className="row my-5">
      <div className="col">
      <i class="fa-solid fa-gears fa-beat-fade fs-1 text-warning my-4"></i>
        <h3 className="coltt fs-4">3D VECTRA TECHNOLOGY</h3>
        <p className="coltxt fs-5">Modern and highly effective technology for plastic surgeries and cosmetic treats.</p>
      </div>

      <div className="col">
      <i class="fa-solid fa-comments fa-beat-fade fs-1 text-warning my-4"></i>
        <h3 className="coltt fs-4">100% POSITIVE FEEDBACK</h3>
        <p className="coltxt fs-5">Cosmetic surgery team is dedicated to providing our patients with safe treatment.</p>
      </div>

      <div className="col">
      <i class="fa-solid fa-lightbulb fa-beat-fade fs-1 text-warning my-4"></i>
        <h3 className="coltt fs-4">20 YEARS REPUTATION</h3>
        <p className="coltxt fs-5">Since 1997 NewLook are the favourites of plastic surgery in the USA.</p>
      </div>
    </div>


   </div>

   </>
  );
}

export default About;