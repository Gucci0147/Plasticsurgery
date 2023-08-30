import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

const Banner = () => {
  return (
    <>
    <div className="container d-flex justify-content-center justify-content-start align-items-center">
          <MDBCarousel showControls>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='https://www.cecmcolombia.com/eng/wp-content/uploads/2017/08/banners-eng-06.png'
        alt='...'>

      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://www.cecmcolombia.com/eng/wp-content/uploads/2017/08/banner-doc-eng-comfort.jpg'
        alt='...'>
        </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://www.cecmcolombia.com/eng/wp-content/uploads/2017/08/banners-eng-02.png'
        alt='...'>
       </MDBCarouselItem>
    </MDBCarousel>
    </div>

    
    </>
  );
}

export default Banner;