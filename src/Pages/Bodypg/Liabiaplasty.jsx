import React from 'react'
import Liab from '../../images/labiaplasty1.jpg'
import { Link } from "react-router-dom";

const Liabiaplasty = () => {
  return (
    <>
    <div className="container-fluid surg text-center py-5">
     <h1 className="text-white fw-bold">SURGICAL PROCEDURES</h1>
     <Link to="/" className="text-decoration-none text-white">HOME /</Link> <span className="text-warning"> SURGICAL / LIABIAPLASTY</span>
   </div>  


   <div className="container py-5">
        <div className="row">
        <div className="col bg-info text-white">
          <h2 className="fw-bold pt-5 mb-3 ">Liabiaplasty</h2>
      <div id="overflow" className="mx-auto mb-5">

      <p className="py-2 fs-5">
        Labiaplasty is a vaginal rejuvenation procedure that reduces the length of the labia minora. Labiaplasty is the most commonly 
        performed aesthetic genital plastic surgery and can relieve symptoms that women experience from twisting and tugging of the labia.
        </p>

          <p className="py-2 fs-5">
            Women opt for labiaplasty at Hedden & Gunn Plastic Surgery for a variety of reasons, including pain from twisting and tugging of 
            the labia when riding a bike or during intercourse, itching, irritation and self-consciousness.
            </p>

         <h3>What Does a Labiaplasty Do?</h3>
         <p className='py-2 fs-5'>
          The goal of the procedure is to reduce the labia minora so that they don't hang below the hair-bearing labia majora. 
          A labiaplasty may be performed to reduce asymmetry when one is longer than the other, or more commonly, to reduce the 
          length of both labia so that the labia no longer twist, tug or fall out of a bathing suit.
         </p>

         <h3>Your Labiaplasty Consultation</h3>
         <p className='py-2 fs-5'>
          If you're considering a labiaplasty, do your homework before scheduling surgery as with any plastic surgery procedure. 
          Advance preparation is an investment in your final outcome.
         </p>
         <p className='py-2 fs-5'>
          During your consultation for vaginal rejuvenation with a labiaplasty, be prepared to discuss:
         </p>
         <ul className='fs-5'>
          <li>Your surgical goals.</li>
          <li>Medical conditions, drug allergies and medical treatments.</li>
          <li>Current medications, vitamins, herbal supplements, alcohol, tobacco and drug use.</li>
          <li>Previous surgeries.</li>
         </ul>
         <p className='py-2 fs-5'>
          Your surgeon may also:
         </p>
         <ul className='fs-5'>
          <li>Evaluate your general health status and any pre-existing health conditions or risk factors.</li>
          <li>Take photographs.</li>
          <li>Discuss your options.</li>
          <li>Recommend a course of treatment.</li>
          <li>Discuss likely outcomes of the surgery and any risks or potential complications.</li>
          <li>Discuss the use of anesthesia during your surgery.</li>
         </ul>
        <p className='py-2 fs-5'>
          Be sure to ask questions at your consultation. It's very important to understand all aspects of your vaginal rejuvenation surgery. 
          It's natural to feel some anxiety, whether it's excitement for your anticipated new look or a bit of preoperative stress. 
          Don't be shy about discussing these feelings with your plastic surgeon.
        </p>
        
        <h3>Labiaplasty Procedure</h3>
        <p className='py-2 fs-5'>
          Labiaplasty is a procedure that can be done under either local anesthesia with oral sedation or under general anesthesia.
        </p>
        <p className='py-2 fs-5'>
          The most common type of labiaplasty is the trim procedure, in which the extra tissue is removed and sewn up directly. 
          Next in popularity is the wedge procedure, which maintains a natural border after a pie-shaped piece of tissue has been removed. 
          Extra folds of the clitoral hood can also be reduced at the same time. Closure is usually done with absorbable sutures.
        </p>

        <h3>Labiaplasty Risks</h3>
        <p className='py-2 fs-5'>
          The risks associated with labiaplasty include those of most surgical procedures including bleeding, hematoma and infection. 
          The most common complication is over-resection. While some women desire an aggressive reduction, this can result in chronic dryness, 
          scarring at or near the vaginal opening and pain with intercourse. Healing problems are more likely to occur with a wedge procedure, 
          particularly if the patient is exposed to substances that cause blood vessels to shrink.
        </p>

        <h3>Labiaplasty Recovery</h3>
        <p className='py-2 fs-5'>
          Most patients take a week off from work, during which they can reduce swelling and pain by icing with a cold pack sandwiched between 
          the patient's underpants and an elastic garment, like Spanx. This can be done "20 minutes on, 20 minutes off." The patient can also 
          lie with her bottom elevated to reduce swelling.
        </p>
        <p className='py-2 fs-5'>
          Patients can resume wearing tampons or having intercourse after 4 to 7 weeks. Trim labiaplasty generally allows for a quicker recovery.
        </p>
        <p className='py-2 fs-5'>
          While the most distorting swelling is gone by 6 weeks, residual swelling may take 6 months to disappear.
        </p>

        <h3>Labiaplasty Results</h3>
        <p className='py-2 fs-5'>
          Labiaplasty typically results in shorter labia that no longer hang down below the level of the hair-bearing labia majora. 
          Most patients who experienced symptoms from twisting and tugging of their labia generally find relief after surgery. 
          According to multiple studies, labiaplasty surgery is associated with a high satisfaction rate of over 90%.
        </p>



      </div>
      </div>

      <div className="col bg-info text-white">
        <h3 className="fw-bold my-5">Liabiaplasty Before & After Gallery <br/>
        <span className="fs-6 fw-light">Fat Grafting, or Fat Transfer, transfers fat to where it is needed to add volume by removing excess fat from donor area(s).</span></h3>
      <div className="container bg-white pt-3 pb-2 my-4" id="overflow">

      <h3 className="coltxt mb-2 fw-bold">Liabiaplasty Before and Afters</h3>

      
      <img src={Liab} alt="" />
        <i>
        <p className="fs-5">Liabiaplasty Patient 1</p>
      </i>
      
      </div>
      </div>
      </div>
      </div>

   </>
  )
}

export default Liabiaplasty;