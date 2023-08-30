import React from 'react';
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';




function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!'),
  );

  return (
    <button
      type="button"
      style={{ backgroundColor: 'pink' }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

const Paymentmethod = () => {

  return (
    <>
      <div className="container-fluid surg text-center py-5">
      <h1 className="text-white fw-bold">PAYMENT METHOD</h1>
      <Link to="/" className="text-decoration-none text-white">HOME /</Link> <span className="text-warning"> PAGES / PAYMENT METHOD</span>
      </div>
 
   <div className='container justify-content-center bg-info my-5'>
    <h2 className='fw-bold fs-1 text-primary py-4'>Payment Methods: Crypto Currency</h2>

    <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header className='text-white'>
          <CustomToggle eventKey="0">BTC Wallet</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body className='fs-1 text-warning'>3PiLpXBWNHtgNbj2AtDAhqGTsfKjUTRYA6</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <CustomToggle eventKey="1" clas>ETH Wallet</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body className='fs-1 text-warning'>0xF18286dA3bF99BA7A19aE2a6F644b7426949FAC9</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
      

      <p className='py-2 text-primary fs-2 m-5'>Proceed to your crypto-currency app to complete this transfer</p>
    </div>
    </>
  )
}

export default Paymentmethod;