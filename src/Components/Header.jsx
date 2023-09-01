import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
       {[false,].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-info">
          <Container>
          <Navbar.Brand> 
            <Link to="/" className="text-decoration-none text-primary fw-bold">
                CECM SURGERY
            </Link>
        </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className="bg-primary" />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className="text-info fw-bold fs-3">
                  MAIN MENU
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 fs-4">
                  <Link to="/" className="text-primary fw-bold">HOME</Link>
                  <Link to="/about" className="text-primary fw-bold">ABOUT</Link>
                  <Link to="/appointment" className="text-primary fw-bold">APPOINTMENT</Link>
                  <Link to="/contacts" className="text-primary fw-bold">CONTACTS</Link>
                  <NavDropdown
                    title="SURGICAL PROCEDURES"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    className="text-primary fw-bold"
                  >
                    <NavDropdown.Item className="fs-1">
                        
                        <Link to="/" className="text-info fw-bold pt-4">Breast</Link><br/>
                        <Link to="/augmentation" className="fs-5">Breast Augmentation</Link><br/>
                        <Link to="/reduction" className="fs-5">Breast Reduction</Link><br/>
                        <Link to="/breastlift" className="fs-5">Breast Lift</Link><br/>
                        <Link to="/reconstruction" className="fs-5" >Breast Reconstruction</Link><br/>
                        
                        
                        <Link to="/" className="text-info fw-bold pt-4">Body</Link><br/>
                        <Link to="/liposuction" className="fs-5">Liposuction </Link><br/> 
                        <Link to="/tummytuck" className="fs-5">Tummy Tuck</Link><br/>
                        <Link to="/buttockslift" className="fs-5">Buttocks Lift</Link><br/>
                        <Link to="/lowbodylift" className="fs-5">Low Body Lift</Link><br/>
                        <Link to="/bcawl" className="fs-5">Body Contouring <br/> After Weight Loss</Link><br/>
                        <Link to="/fatgrafting" className="fs-5">Fat Grafting</Link><br/>
                        <Link to="/armlift" className="fs-5">Arm Lift</Link><br/>
                        <Link to="/liabiaplasty" className="fs-5">Labiaplasty</Link><br/>

                      
                        <Link to="/" className="text-info fw-bold pt-4">Facial Surgeries</Link><br/>
                         <Link to="/rhinoplasty" className="fs-5">Rhinoplasty</Link><br/>
                        <Link to="/eyelid" className="fs-5">Eye lid or blepharoplasty</Link><br/>
                        <Link to="/facelift" className="fs-5">Face Lift</Link><br/>
                        <Link to="/threadlift" className="fs-5">Thread Lift</Link><br/>
                        <Link to="/browlift" className="fs-5">Browlift</Link><br/>
                        <Link to="/otoplasty" className="fs-5">Otoplasty</Link><br/>
                        <Link to="/facialimplants" className="fs-5">Facial implants</Link><br/>
                        
                  
                        <Link to="/" className="text-info fw-bold pt-4">For Men</Link><br/>
                        <Link to="/correction" className="fs-5">Correction of Gynecomasty<br/>or male breast reduction</Link><br/>
                        <Link to="/pectoralimplants" className="fs-5">Pectoral implants</Link><br/>
                        <Link to="/calvesimplants" className="fs-5">Calves implants</Link><br/>
                        
                        <Link to="/" className="text-info fw-bold pt-4">Injectable Treatments</Link><br/>
                        <Link to="/injectable" className="fs-5">Injectable</Link><br/>
                  </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="TRANSGENDER"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    className="text-primary fw-bold"
                  >
                    <NavDropdown.Item className="text-info">
                      <p className="fs-1">MALE-FEMALE</p>
                      <Link to="/gasmale" className="fs-5">Gender affirmation Surgery</Link><br/>
                      <Link to="/facialfem" className="fs-5">Facial Feminization</Link><br/>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item className="text-info">
                      <p className="fs-1">FEMALE-MALE</p>
                      <Link to="/gasfemale" className="fs-5">Gender affirmation Surgery</Link><br/>
                      <Link to="/chestmas" className="fs-5">Chest Masculinization</Link><br/>
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="PAGES"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    className="text-primary fw-bold"
                  >
                    <NavDropdown.Item className="text-info fs-5">
                      <Link to="/testimonials" className="text-info pt-4">Testimonials</Link><br/>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item className="text-info fs-5">
                    <Link to="/pricelist" className="text-info pt-4">Pricing</Link><br/>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item className="text-info fs-5">
                    <Link to="/paymentmethod" className="text-info pt-4">Payment Method</Link><br/>
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;


