import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slide1 from '../../assets/img/backgrounds/slides-home-1-dark-bottom.jpg';
import slide2 from '../../assets/img/backgrounds/slides-home-2-dark-bottom.jpg';
import slide3 from '../../assets/img/backgrounds/slides-home-3-dark-bottom.jpg';

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