import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Stars from './Stars';
// import logo from '../../assets/img/logos/logo.png';
import { CustomPrevArrow, CustomNextArrow } from './Arrows';

export default function Rating() {

    const settings = {
        dots: false,
        prevArrow: <CustomPrevArrow />, // Your custom previous arrow component
        nextArrow: <CustomNextArrow />, // Your custom next arrow component
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        autoplay: true,
        autoplaySpeed: 6000,
        pauseOnFocus: true,
        pauseOnHover: true,
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
        <>
{/* <h2 className='text-2xl text-stone-900 font4 py-2 text-center'></h2> */}
            <div className='mx-auto md:mx-24 bg-stone-300 shadow-inner shadow-stone-900'>
                <Slider {...settings}>
                    {reviews.map((review) => {
                        return (
                            <div className='flex flex-col justify-center my-4 text-center text-stone-800' key={review.review.length}>
                                {/* <img className='w-6 h-6 mx-auto mt-2 opacity-50' src={logo}></img> */}
                                <p className='text-xl p-5 font-medium'>"{review.review}"</p>
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
                {/* <p className='text-center'><a href='https://www.yelp.com/biz/saints-and-scissors-salon-scottsdale' target='_blank' rel='noreferrer' className='btn mb-8'>MORE REVIEWS {'\u2192'}</a></p> */}
                {/* <div className='flex justify-center'>
                <a
                    href='https://www.yelp.com/biz/saints-and-scissors-salon-scottsdale' target='_blank' rel='noreferrer' 
                    className='my-8 px-8 py-2 border bg-stone-100 border-stone-300 shadow-sm shadow-stone-600 text-stone-950 hover:shadow-stone-400'>
                            Leave us a review!
                </a>
                </div> */}
            </div>
        </>
    )
}