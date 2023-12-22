import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Stars from './Stars';
// import logo from '../../assets/img/logos/logo.png';
import { CustomPrevArrow, CustomNextArrow } from './Arrows';

export default function Rating({ name }) {

    const settings = {
        dots: false,
        prevArrow: <CustomPrevArrow />, // Your custom previous arrow component
        nextArrow: <CustomNextArrow />, // Your custom next arrow component
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        // autoplay: true,
        // autoplaySpeed: 6000,
        pauseOnFocus: true,
        pauseOnHover: true,
    }
    let reviews;

    switch (name) {
        case 'Paul':
            reviews = [
                {
                    review: 'Amazing salon! Paul did such a thorough job on my haircut and did exactly what I asked for.',
                    author: 'Liz H.',
                },
                {
                    review: "It's been a solid few years I've been coming here and Paul has never disappointed.",
                    author: 'James A.',
                },
                {
                    review: 'Paul is the GOAT does a great job and is chill.',
                    author: 'Ashwath V.',
                },
                {
                    review: "Have been coming here for the last 2 years. I've had cut/colors/bang trims, Paul is amazing I'm always happy with my experience and the end result!",
                    author: 'Heather M.',  
                }
            ]
            break;
        case 'Amanda':
            reviews = [
                {
                    review: "Super easy going but very professional service. My stylist was Amanda, and she was awesome. I'm definitely going back!",
                    author: "Teona C.",
                },
                {
                    review: "Amanda is my go to hair girl at Saints and Scissors! I've been coming here for about 2 years and I totally picked this salon based on yelp reviews!",
                    author: "Cassie M.",
                },
                {
                    review: "Amanda is an amazing stylist. Her is work is amazing. She listens to her clients and gives wonderful suggestions. She does an amazing job when it comes to foils/highlights.",
                    author: "Tiffany F.",
                },
                {
                    review: "Amanda did an amazing job and I'm happy to admit that I've found my stylist for years to come.",
                    author: "David W.",
                },
            ]
            break;
        case 'Sherri':
            reviews = [
                {
                    review: "I moved to Scottsdale about a year ago and have tried several salons looking for a hair stylist. I am so happy to have found Sherri! My search for a hair stylist is finally over.",
                    author: "Erin B.",
                },
                {
                    review: "Sherri did a fabulous wash and blow dry/style for me today. Really excellent! I'll be back.",
                    author: "Jayne B.",
                },
                {
                    review: "Sherri Did a really great job on my hair. I brought in a few pictures on the look I was looking for and she nailed it. Thank so much!!",
                    author: "Erin P.",
                },
                {
                    review: "I've been going to Sherri for years, one of the best stylist in the studio! I always walk out with exactly what I want, and she makes you feel confident from the moment you sit in her chair.",
                    author: "Alexis B.",
                },
            ]
            break;
        case 'Juli':
            reviews = [
                {
                    review: "Juli is a color genius! She's taken me from fuschia pink 5 mermaid colors without hair damage.",
                    author: "April T.",
                },
                {
                    review: "Every 6 weeks like clockwork, I go see Juli, and get a great cut every time. Been going to Juli for years, and I'm never disappointed.",
                    author: "Jeff G.",
                },
                {
                    review: "Juli is amazing! I followed her from her previous salon. She does an awesome job on not only my hair but my daughter's, son and husband. Do yourself a favor and book with Juli!",
                    author: "Laura H.",
                },
                {
                    review: "Juli is the best! I've been going to her for a few years now. I show her my inspiration and she always makes it happen! She's super friendly and very sweet. I highly recommend her!",
                    author: "Amanda B.",
                },
            ]
            break;
        case 'Kendal':
            reviews = [
                {
                    review: "If you need an expert colorist, a great cut and want to meet a really kind & fun person, don't hesitate to book with Kendal! The result speaks for itself...",
                    author: "M H.",
                },
                {
                    review: "Kendal did a great job with my haircut and styled it in some gorgeous curls! He had great suggestions for some of the details of my cut. I will definitely be going back to him.",
                    author: "Casey W.",
                },
                {
                    review: "Do your self a favor and get your mens haircut by Kendal. Your lady will thank you later.",
                    author: "Kyle A.",
                },
                {
                    review: "Kendal was my stylist and did an amazing job on my cut. Super friendly and personable and made the whole experience relaxing.",
                    author: "Megan C.",
                },
            ]
            break;
        case 'CC':
            reviews = [
                {
                    review: "Finally found someone who can layer my curly hair properly. Definitely happy with my haircut and glad I came across this place. Will be going back regularly. I went to CC.",
                    author: "Christine B.",
                },
                {
                    review: "Great cut from CC today. Good conversation too. Nice vibe in this salon with no pretentiousness. I'll be back!",
                    author: "Margaret L.",
                },
                {
                    review: "I had been going to the same stylist for over a decade and thought I should change it up. I was EXTREMELY nervous to cut my hair but CC was amazing to say the least.",
                    author: "Kassandra L.",
                },
                {
                    review: "I can't say enough good things about CC! She took my ugly box dyed black hair with silver roots to a beautiful Carmel color. She explained everything that she was doing and was super friendly. This salon rocks!",
                    author: "Jill C.",
                },
            ]
            break;
        default:
            break;
    }

    return (
        <div className='my-12 py-6 bg-stone-100 border border-stone-900'>
            <h2 className='text-xl font4 text-stone-800 py-2 text-center'>Reviews</h2>
            <div className='mx-auto'>
                <Slider {...settings}>
                    {reviews.map((review) => {
                        return (
                            <div className='flex flex-col justify-center my-4 text-center text-stone-800' key={review.review.length}>
                                {/* <img className='w-6 h-6 mx-auto mt-2 opacity-50' src={logo}></img> */}
                                <p className='text-md px-2 pb-5'>"{review.review}"</p>
                                <div className='w-full'>
                                    <Stars />
                                </div>
                                <small><em className='md:text-xl'>{review.author}</em></small>
                            </div>
                        )
                    })}
                </Slider>
                <a href="https://www.yelp.com/biz/saints-and-scissors-salon-scottsdale" className='btn normal-case' >Leave us a review!</a>
            </div>
        </div>
    )
}