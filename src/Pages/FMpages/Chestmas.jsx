import React from 'react'
import { Link } from 'react-router-dom'
import Chest from '../../images/cbefore1.jpg'
import Chests from '../../images/cafter1.jpg'
import Chestss from '../../images/cbefore2.jpg'
import Chestt from '../../images/cafter2.jpg'
import Ches from '../../images/cbefore3.jpg'
import Chess from '../../images/cafter3.jpg'

const Chestmas = () => {
  return (
    <>
    <div className="container-fluid surg text-center py-5">
     <h1 className="text-white fw-bold">SURGICAL PROCEDURES</h1>
     <Link to="/" className="text-decoration-none text-white">HOME /</Link> <span className="text-warning">CHEST MASCULINIZATION</span>
   </div>  

   <div className="container py-5">
        <div className="row">
        <div className="col bg-info text-white">
          <h2 className="fw-bold pt-5 mb-3 ">Chest Masculinization</h2>
      <div id="overflow" className="mx-auto mb-5">
        <p className='py-2 fs-5'>
            Hormone therapy usually adds hair and muscle mass, increasing the masculine appearance of the chest. 
            The operation to masculinize the chest is called Subcutaneous Mastectomy because most of the breast tissue is 
            removed from beneath the skin. The nipple/areola complex is left intact, although usually smaller.
        </p>
        <p className='py-2 fs-5'>
            In the case of larger and more fallen breasts, removal of the skin and elevation of the areola-nipple complex is required, 
            resulting in longer incisions and therefore more evident scars.
        </p>
        <p className='py-2 fs-5'>
            In addition to this procedure, patients may consider the placement of pectoral implants to give a more defined masculine appearance.
        </p>
        <p className='py-3 fs-5'>
             Average time: 3 hours<br/>
             Type of anesthesia:  Epidural + sedation
        </p>


        </div>
      </div>

      <div className="col bg-info text-white">
        <h3 className="fw-bold my-5">Chest Masculinization Before & After Gallery</h3>
        
      <div className="container bg-white pt-3 pb-2 my-4" id="overflow">

      <h3 className="coltxt mb-2 fw-bold">Chest Masculinization Before and Afters</h3>
    <h4 className='py-4'>Anterior</h4>
      <img src={Chest} alt='' className='w-50' />
      <img src={Chests} alt='' className='w-50' /> 
      
      <h4 className='py-4'>Oblique</h4>
      <img src={Chestss} alt='' className='w-50' />
      <img src={Chestt} alt='' className='w-50' />

    <h4 className='py-4'>Lateral</h4>
    <img src={Ches} alt='' className='w-50' />
    <img src={Chess} alt='' className='w-50' />
    
    
    </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Chestmas;