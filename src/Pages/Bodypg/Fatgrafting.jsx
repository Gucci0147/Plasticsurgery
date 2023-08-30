import React from 'react'
import Fat from '../../images/fat1.jpg'
import Fats from '../../images/fat2.jpg'
import Fatss from '../../images/fat3.jpg'
import { Link } from 'react-router-dom'

const Fatgrafting = () => {
  return (
    <>
    <div className="container-fluid surg text-center py-5">
     <h1 className="text-white fw-bold">SURGICAL PROCEDURES</h1>
     <Link to="/" className="text-decoration-none text-white">HOME /</Link> <span className="text-warning"> SURGICAL / FAT GRAFTING</span>
   </div>  


   <div className="container py-5">
        <div className="row">
        <div className="col bg-info text-white">
          <h2 className="fw-bold pt-5 mb-3 ">Fat Grafting</h2>
      <div id="overflow" className="mx-auto mb-5">
      

      <p className="py-2 fs-5">
        Fat Grafting, also known as Fat Transfer or Fat Injection, removes 
        excess fat cells from one area of the body and transfers the fat to where it is needed to add volume.
      </p>
      <p className='py-2 fs-5'>
        The Brazilian Butt Lift at Hedden & Gunn Plastic Surgery is a popular fat grafting cosmetic surgery 
        procedure used for augmentation of the buttocks to give you a more rounded and flattering rear end.
      </p>
         
<h3>Fat Grafting Procedure</h3>
<p className='py-2 fs-5'>
  Fat grafting can been used for correcting or improving:
</p>
<ul className='fs-5'>
    <li>Facial scarring (for example, acne scars).</li>
    <li>Buttock hypoplasia with the Brazilian Butt Lift procedure.</li>
    <li>Facial aging such as sunken cheeks and facial lines, either by itself or as an adjunct to cosmetic facial surgery.</li>
    <li>Aging of the hands.</li>
    <li>Thin lips with lip enhancement.</li>
    <li>Other areas with a soft tissue defect (for example, fat atrophy after steroid injections).</li>
</ul>
  <p className='py-2 fs-5'>
    Fat grafting may be performed at our facility on an outpatient basis. There are three basic parts to the procedure:
  </p>
<p className='py-2 fs-5'>
    <span className='fw-bold'>Harvesting —</span>The site is prepared for fat removal by injecting a local anesthetic and/or tumescent solution. 
    A cannula connected to a syringe is inserted through a small incision and used to carefully suck out fat.<br/>
    <span className='fw-bold'>Purification and Transfer —</span> Fat is then purified either by hand or mechanically to obtain fat cells for grafting. 
    The fat cell are prepared for transfer.<br/>
    <span className='fw-bold'>Placement —</span> The graft area is prepared. A small cannula is inserted into the incision point and fat cells are carefully injected. 
    The process is repeated until the desired correction has been achieved.
</p>
<p className='py-2 fs-5'>
  A moderate amount of swelling is expected after fat grafting. This is usually evident for 2 weeks after the procedure. 
  Some bruising may also be apparent. A percentage of the fat grafts are resorbed by the body and overcorrection may 
  initially be evident. It is currently unknown what percentage of the fat grafts are ultimately resorbed, 
  but modern techniques and instrumentation have decreased this percentage considerably over the past few years.
</p> 

<h3>Fat Injections for Facial Rejuvenation</h3>
<p className='py-2 fs-5'>
  Fat injections for facial rejuvenation use fat harvested from the patient's own body re-injected to enhance facial 
  fullness, fill creases or build up shallow contours. Fat injection requires a more extensive procedure than Soft Tissue Fillers.
</p>
<p className='py-2 fs-5'>
  Liposuction is used to extract the fat from a donor area (such as the abdomen or buttocks). 
  The suctioned fat can then be transferred to the face. The grafted fat has to redevelop 
  a blood supply in order to survive. Most of the transferred fat usually survives.
</p>
<p className='py-2 fs-5'>
  This is a minor surgical procedure that can be performed in the surgeon's treatment room or an operating room.
</p>

      </div>
      </div>

      <div className="col bg-info text-white">
        <h3 className="fw-bold my-5">Fat Grafting Before & After Gallery <br/>
        <span className="fs-6 fw-light">Fat Grafting, or Fat Transfer, transfers fat to where it is needed to add volume by removing excess fat from donor area(s).</span></h3>
      <div className="container bg-white pt-3 pb-2 my-4" id="overflow">

      <h3 className="coltxt mb-2 fw-bold">Fat Grafting Before and Afters</h3>

      
      <img src={Fat} alt="" />
        <i>
        <p className="fs-5">Fat Grafting Patient 1</p>
      </i>

      <img src={Fats} alt="" />
        <i>
        <p className="fs-5">Fat Grafting Patient 1</p>
      </i>

      <img src={Fatss} alt="" />
        <i>
        <p className="fs-5">Fat Grafting Patient 1</p>
      </i>


      </div>
      </div>

      </div>
      </div>

   </>
  )
}

export default Fatgrafting