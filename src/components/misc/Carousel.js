import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slide1 from '../../assets/img/backgrounds/slides-home-1.jpg';
import slide2 from '../../assets/img/backgrounds/slides-home-2.jpg';
import slide3 from '../../assets/img/backgrounds/slides-home-3.jpg';
import slide4 from '../../assets/img/backgrounds/slides-home-4.jpg';

export default function Carousel() {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnFocus: false,
        pauseOnHover: false,
    };

    return (
        <Slider {...settings}>
            <div className="h-full bg-cover bg-center" style={{ backgroundImage: `url(${slide1})` }}>
            
            </div>
            <div className="h-full bg-cover bg-left" style={{ backgroundImage: `url(${slide2})` }}>

            </div>
            <div className="h-full bg-cover bg-center" style={{ backgroundImage: `url(${slide3})` }}>

            </div>
            <div className="h-full bg-cover bg-center" style={{ backgroundImage: `url(${slide4})` }}>

            </div>
        </Slider>
    );
}