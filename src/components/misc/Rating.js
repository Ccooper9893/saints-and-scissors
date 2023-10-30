import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Stars from './Stars';
import bgWall from '../../assets/img/backgrounds/pictures.png';
import { Parallax } from 'react-scroll-parallax';
import bgGraffiti from '../../assets/img/backgrounds/graffiti.jpg';
import { CustomPrevArrow, CustomNextArrow } from './Arrows';

export default function Rating() {

    const settings = {
        dots: false,
        prevArrow: <CustomPrevArrow />, // Your custom previous arrow component
        nextArrow: <CustomNextArrow />, // Your custom next arrow component
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        autoplay: true,
        autoplaySpeed: 6000,
        pauseOnFocus: true,
        pauseOnHover: false,
    }

    const reviews = [
        {
            review: "Fantastic hair salon, best in Scottsdale & very friendly.",
            author: "- Niel D.",
        },
        {
            review: "Professional grade salon. Great experience with high quality of service provided.",
            author: "- Saad S.",
        },
        {
            review: "I look forward to my appointment every month. It's not a stuffy, pretentious salon. The atmosphere is relaxing and comfortable.",
            author: "- Kevin M.",
        },
        {
            review: "Where hair meets rock! It's cool, calm, and collected. Staff is very welcoming and professional. Check it out!",
            author: "Adam W.",
        },
        {
            review: "The atmosphere is such a great vibe and the stylists are so nice. Each of them bring their own unique style to the shop.",
            author: "Sarah H.",
        },
    ]

    return (
        <div className='w-5/6 md:w-3/4 mx-auto md:my-8 md:py-24 bg-black bg-opacity-30'>
            <Slider {...settings}>
                {reviews.map((review) => {
                    return (
                        <div className='flex flex-col justify-center my-4 text-center bg-opacity-0'>
                            <p className='text-2xl md:text-4xl p-5 text-white'>"{review.review}"</p>
                            <div className='w-full'>
                                <Stars />
                            </div>
                            <small><em className='md:text-xl'>{review.author}</em></small>
                        </div>
                    )
                })}
            </Slider>
            {/* <div className='bgGraffiti h-96 rotate-90 bg-opacity-20'>
                <h2 className='rotate-180 text-5xl text-center'>WE KNOW HAIR.</h2>
            </div> */}
        </div>
    )
}