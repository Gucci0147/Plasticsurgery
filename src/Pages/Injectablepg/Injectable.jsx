import React from "react";
import Sport from '../../images/dysport01.jpg'
import Sports from '../../images/dysport02.jpg'
import Jeu from '../../images/jeuveau01.jpg'
import Jeus from '../../images/jeuveau02.jpg'
import Res from '../../images/restylane1.jpg'
import Ress from '../../images/restylane2.jpg'
import Scul from '../../images/sculptra01.jpg'
import Sculs from '../../images/sculptra02.jpg'
import { Link } from "react-router-dom";

const Injectable = () => {
  return (
    <>
    <div className="container-fluid surg text-center py-5">
     <h1 className="text-white fw-bold">SURGICAL PROCEDURES</h1>
     <Link to="/" className="text-decoration-none text-white">HOME /</Link> <span className="text-warning"> SURGICAL / INJECTABLE TREATMENTS</span>
   </div>  


   <div className="container py-5">
        <div className="row">
        <div className="col bg-info text-white">
          <h2 className="fw-bold pt-5 mb-3 ">Injectable Treatments</h2>
      <div id="overflow" className="mx-auto mb-5">

      <p className="py-2 fs-5">
        More men and women today want to achieve a smoother and more refreshed appearance to reflect the youthful way they feel. 
        Whether your wrinkles are caused by repetitive facial movements or the loss of skin volume and support over the years, 
        injectable treatments with Dermal Fillers and Botulinum Toxin at Cosmetic surgery practice soften frown lines, smooth 
        out your wrinkles and restore fullness to your skin without surgery or downtime.
      </p>
      <p className="py-2 fs-5">
        If your goal is to improve your profile and lessen the double chin look, chin fat injections are FDA approved to destroy 
        fat cells beneath the chin.
      </p>
      <p className="py-2 fs-5">
        The Liquid Facelift is a combination of injectable treatments that is tailored to each patient. 
        Liquid Facelifts may include Botulinum Toxin and/or Dermal Fillers to address both static and dynamic wrinkles. 
        Static wrinkles are treated with Fillers to add skin volume, while dynamic wrinkles are treated with Botulinum Toxin 
        to relax the muscles that cause frown lines.
      </p>

      <h2 className="fw-bold">BOTOX Cosmetic</h2>
      <p className="py-2 fs-5">
        BOTOX Cosmetic is a prescription medicine used to temporarily improve the look of moderate-to-severe frown lines 
        between the eyebrows (glabellar lines) and moderate-to-severe crow's feet lines around the sides of the eyes. 
        Botox is the first and only product FDA-approved to temporarily treat both frown lines and crow's feet in 
        adults from 18 to 65 years of age.
      </p>
      <p className="py-2 fs-5">
        BOTOX Cosmetic should only be performed by a licensed and trained aesthetic provider who has expertise in facial anatomy. 
        Talk to your doctor about your expectations and the results you want to achieve with your Botox treatments.
      </p>
      
      <h3>Botox Cosmetic Prices</h3>
      <p>BOTOX Cosmetic Cost: $250 per site</p>

      <h3>BOTOX Cosmetic Treatments</h3>
      <p className="py-2 fs-5">
      BOTOX Cosmetic treatment is a quick, 10-minute procedure that requires no downtime or recovery. 
      It's often called a lunchtime procedure.<br/>

      Prior to injection, the area may be numbed with a cold pack or anesthetic cream. To temporarily improve moderate-to-severe crow's feet, 
      your doctor will inject BOTOX Cosmetic into the muscle surrounding the sides of your eyes. For temporary improvement of moderate-to-severe 
      frown lines, Botox is injected into two muscles.
      </p>

      <h2 className="fw-bold pt-5">Dysport Injections</h2>
      <p className="py-2 fs-5">
        Dysport is a prescription injection used to temporarily improve the look of your moderate-to-severe frown lines without changing 
        the look of your whole face. The untreated facial muscles continue to work normally, allowing you to freely show facial expressions, 
        such as smiling, in untreated areas.
      </p>

      <p className="py-2 fs-5">
        Over time, the muscles above and between the eyebrows repeatedly contract and tighten, causing wrinkles. With just one injection into 
        each of five points between and over the eyebrows, Dysport® blocks the signal from the nerve to the muscles, ultimately resulting in 
        a reduction of muscle activity and temporarily preventing contraction of the muscles that cause frown lines.
      </p>
      
      <p className="py-2 fs-5">
        Treatment with Dysport to temporarily improve the look of moderate-to-severe frown lines in adults less than 65 years of age generally 
        takes just 10 to 20 minutes, although treatment times can vary from person to person. You should wait at least 90 days between Dysport treatments.
      </p>

      <h3>Dysport Prices</h3>
      <p>Dysport Cost: $250 per site</p>

      <img src={Sport} alt="" />
      <img src={Sports} alt="" />

      <h2 className="fw-bold pt-5">Jeuveau Injections</h2>
      <p className="py-2 fs-5">
        Jeuveau injection, also known as #NEWTOX, is a modern-made neurotoxin approved by the FDA to temporarily improve the appearance of frown 
        lines between the eyebrows. Made using a state-of-the-art manufacturing process, Jeuveau is the first and only product of its kind 
        dedicated exclusively to aesthetics.
      </p>
      <h3>Jeuveau Safety Information</h3>
      <p className="py-2 fs-5">
        Jeuveau® is a prescription medicine that is injected into muscles and used in adults for a short period of time (temporary) to improve the 
        look of moderate to severe frown lines between the eyebrows (glabellar lines). Do not use Jeuveau if you are allergic to any of the ingredients 
        in Jeuveau such as botulinum toxin type A and human serum albumin. Do not use Jeuveau if you have a skin infection at the planned 
        injection site. Tell your healthcare provider about all your medical conditions, including if you have a disease that affects your muscles 
        and nerves or have had any side effects from any botulinum toxin product in the past, plan to become pregnant, are pregnant or breastfeeding.
      </p>

      <img src={Jeu} alt="" /> 
      <img src={Jeus} alt="" />

      <h2 className="fw-bold pt-5">JUVÉDERM Collections</h2>
      <p className="py-2 fs-5">
        Each product in the Juvéderm collection adds volume to a different area of the face without surgery. All Juvéderm fillers are smooth, 
        crystal-clear gels that are administered by injection.
      </p>
      <p className="py-2 fs-5">
        Products of the Juvéderm Collection of Fillers are made from hyaluronic acid (HA). This natural substance found in the skin delivers nutrients, 
        helps the skin retain moisture and softness, and adds skin volume. Each formulation in the Juvéderm filler collection is made from a modified form of HA.
      </p>
      <h3>Juvéderm Treatment Areas</h3>
      <ul className="fs-5">
        <li>Lift the Cheeks</li>
        <li>Smooth Lines and Wrinkles</li>
        <li>Plump the Lips</li>
      </ul>

      <h2 className="fw-bold pt-5">Restylane Line of Fillers</h2>
      <h3>Restylane Products</h3>
      <ul className="fs-5">
      <li>Restylane</li>
      <li>Restylane Kysse</li>
      <li>Restylane Silk</li>
      <li>Restylane Lyft</li>
      <li>Restylane Refyne</li>
      <li>Restylane Defyne</li>
      </ul>

    <img src={Res} alt="" /> 
    <img src={Ress} alt="" />


    <h2 className="fw-bold pt-5">Sculptra Dermal Filler</h2>
    <p className="py-2 fs-5">
      Sculptra addresses an underlying cause of facial aging — not just the symptoms. By stimulating the production of your own natural collagen, 
      Sculptra helps to restore your skin's inner structure and increase facial volume with long-lasting results.
    </p>

      
<h3>How Does Sculptra Work?</h3>
<h4>Collagen — the not-so-secret cause of facial aging</h4>
<p className="py-2 fs-5">
  One of the mains reasons for visible facial aging is the loss of collagen, a fibrous protein in the deep dermis that gives structure to skin and supports the functions of elastin and hyaluronic acid. Skin collagen decreases about 1% per year after age 20, which is when you may start to notice the formation of wrinkles. That adds up to a 30% collagen loss by age 50.
</p>
<h4>Sculptra replaces lost collagen to restore structure and volume</h4>
<p className="py-2 fs-5">
  Even if decades of collagen loss have already occurred, Sculptra can help. This FDA-approved injectable treatment works within the deep dermis to help revitalize collagen production and restore the inner structure and volume of your skin.
</p>
<h4>Sculptra box and vials</h4>
<p className="py-2 fs-5">
  Sculptra is made with biocompatible, biodegradable, synthetic material called poly-L-lactic acid (PLLA). The Sculptra PLLA microparticles help stimulate collagen production as they are gradually and naturally absorbed by the body. Rebuilt collagen strands begin helping to restore facial volume and the look of fullness to wrinkles and folds.
</p>
<p className="py-2 fs-5">
  With slow and steady strength, results with Sculptra appear gradually over the treatment regime and can last up to 2 years. Three injections are typically given over the course of 3 to 4 months. The number of injection appointments and the number of injections per appointment vary from person to person, depending on how much of their collagen has been lost.
</p>
<h3>Sculptra Safety Information</h3>
<p className="py-2 fs-5">
  Sculptra (injectable poly-L-lactic acid) is indicated for use in people with healthy immune systems as a single regimen for the correction of shallow to deep nasolabial fold contour deficiencies and other facial wrinkles in which deep dermal grid pattern (cross-hatch) injection technique is appropriate. Sculptra should not be used by people that are allergic to any ingredient of the product or have a history of keloid formation or hypertrophic scarring.
</p>
      
      <img src={Scul} alt="" />
      <img src={Sculs} alt="" />

     
      </div>
      </div>

      </div>
      </div>

   </>
  )
}

export default Injectable;