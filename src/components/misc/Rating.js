import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Stars from './Stars';
import bgWall from '../../assets/img/backgrounds/pictures.png';
import { Parallax } from 'react-scroll-parallax';

export default function Rating() {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        // fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnFocus: false,
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
        <div>
            {/* <Parallax speed={-10}>
            <img src={bgWall}></img>
            </Parallax> */}
        <Slider {...settings}>
            {reviews.map((review) => {
                return (
                    <div className='flex flex-col justify-center my-4 text-center'>
                        <p className='text-lg p-5'>"{review.review}"</p>
                        <div className='w-full'>
                            <Stars />
                        </div>
                        <small><em>{review.author}</em></small>
                    </div>
                )
            })}

        </Slider>
        </div>
    )
}