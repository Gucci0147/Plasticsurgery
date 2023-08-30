import React from 'react'
import { Link } from 'react-router-dom'
import Fac from '../../images/fem1.jpg'
import Facs from '../../images/fem2.jpg'

const Facialfem = () => {
  return (
    <>
            <div className="container-fluid surg text-center py-5">
            <h1 className="text-white fw-bold">SURGICAL PROCEDURES</h1>
            <Link to="/" className="text-decoration-none text-white">HOME /</Link> <span className="text-warning">FACIAL FERMINIZATION</span>
        </div>  

        <div className="container py-5">
                <div className="row">
                <div className="col bg-info text-white">
                <h2 className="fw-bold pt-5 mb-3 ">Facial Ferminization</h2>
            <div id="overflow" className="mx-auto mb-5">
            <p className='py-2 fs-5'>
                Includes surgical and non-surgical procedures that alter the face to create more classically feminine characteristics, such as a higher brow, 
                a more refined feminine nose, less pronounced Adam’s apple, and others.  Facial feminization greatly enhances the socialization process as a woman. 
            </p>
            <ul className='fs-5'>
                <li>Scalp advancement</li>
                <li>Frontal bone contouring</li>
                <li>Reduction supra-orbital rims</li>
                <li>Chin augmentation or reduction</li>
                <li>Mandible contouring</li>
                <li>Thyroid cartilage («Adam’s Apple») reduction</li>
                <li>Rhytidoplasty (face lift)</li>
                <li>Blepharoplasty (eyelid modification)</li>
                <li>Rhinoplasty (nose modification)</li>
                <li>Upper lip shortening</li>
                <li>Lip augmentation and reduction</li>
            </ul>
            <p className='py-2 fs-5'>Non-surgical procedures:</p>
            <ul className='fs-5'>
                <li>Hormones</li>
                <li>Fillers (hyaluronic acid)</li>
            </ul>

            </div>
            </div>

            <div className="col bg-info text-white">
                <h3 className="fw-bold my-5">Facial Ferminization Before & After Gallery</h3>
            <div className="container bg-white pt-3 pb-2 my-4" id="overflow">

            <h3 className="coltxt mb-2 fw-bold fs-5">Facial Ferminization Before and Afters</h3>
            
            <img src={Fac} alt='' className='w-75 py-4' />
            <i>
        <p className="fs-5">Facial Ferminization Surgery Patient 1</p>
             </i>
            
            <img src={Facs} alt='' className='w-75 py-4'/>
            <i>
        <p className="fs-5">Facial Ferminization Surgery Patient 1</p>
            </i>


            
            </div>
            </div>
            </div>
            </div>
    </>
  )
}

export default Facialfem;