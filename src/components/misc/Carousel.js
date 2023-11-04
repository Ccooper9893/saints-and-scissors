import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slide1 from '../../assets/img/backgrounds/slides-home-1.jpg';
import slide2 from '../../assets/img/backgrounds/slides-home-2.jpg';
import slide3 from '../../assets/img/backgrounds/slides-home-3.jpg';
import { CustomPrevArrow, CustomNextArrow } from './Arrows';

export default function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5500,
    pauseOnFocus: true,
    pauseOnHover: false,
    prevArrow: <CustomPrevArrow />, // Your custom previous arrow component
    nextArrow: <CustomNextArrow />, // Your custom next arrow component
  };

  return (
      <Slider {...settings}>
        <div className='z-0'>
          <div className="h-screen bg-cover bg-left" style={{ backgroundImage: `url(${slide1})` }}>
          </div>
        </div>
        <div className='z-0'>
          <div className="h-screen bg-cover bg-right" style={{ backgroundImage: `url(${slide2})` }}></div>
        </div>
        <div className='z-0'>
          <div className="h-screen bg-cover bg-right" style={{ backgroundImage: `url(${slide3})` }}></div>
        </div>
        <div className='z-0'>
          <div className="h-screen bg-cover bg-left" style={{ backgroundImage: `url(${slide2})` }}></div>
        </div>
      </Slider>


  );
}