import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slide1 from '../../assets/img/backgrounds/slides-home-1-edited.jpg';
import slide2 from '../../assets/img/backgrounds/slides-home-2-edited.jpg';
import slide3 from '../../assets/img/backgrounds/slides-home-3-edited.jpg';
import slide4 from '../../assets/img/backgrounds/slides-home-4-edited.jpg';
import titleAndLogoC from '../../assets/img/logos/logo-circle.png';

export default function Carousel() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4500,
    pauseOnFocus: false,
    pauseOnHover: false,
  };

  return (
      <Slider {...settings}>
        <div className='z-0'>
          <div className="h-screen bg-cover bg-left" style={{ backgroundImage: `url(${slide1})` }}>

          </div>
        </div>
        <div className='z-0'>
          <div className="h-screen bg-cover bg-left" style={{ backgroundImage: `url(${slide2})` }}></div>
        </div>
        <div className='z-0'>
          <div className="h-screen bg-cover bg-right" style={{ backgroundImage: `url(${slide3})` }}></div>
        </div>

      </Slider>


  );
}

      {/* <div className='absolute p-4 bottom-24 right-32 bg-black bg-opacity-40 '>

        <p className='fixed bottom-16 right-6 w-3/5 text-center z-20 bg-black bg-opacity-75'><em>A NEW BREED OF SALON<br></br><small className='mt-3 text-sm'>WHERE THE HAIR IS AS IMPORTANT AS THE ATMOSTPHERE.</small></em></p>
      </div> */}