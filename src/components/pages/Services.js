import Rating from '../misc/Rating';
import logo from '../../assets/img/backgrounds/serviceBg.jpg';
import girl from '../../assets/img/backgrounds/paintedGirl.png';
import { Parallax } from 'react-scroll-parallax';
export default function Services({ toggleBooking, navServicesRef }) {
    return (
        <div id='services' className=' bg-stone-900 shadow shadow-stone-900'>
            <div ref={navServicesRef}>
                <div className='flex flex-col lg:flex-row mt-12 md:py-24'>
                    <div className='hidden h-1/2 md:block md:ml-4 md:p-8 '>
                        <img className='md:w-5/6 mx-auto border border-stone-950 opacity-80' src={logo} alt='Grunge style headshot of a woman with beautiful flowing hair.'></img>
                    </div>
                    <div className='md:hidden'>
                        <img className='bgGradient pt-12 opacity-80' src={girl} alt='Grunge style headshot of a woman with beautiful flowing hair.'></img>
                    </div>
                    <div className='mt-6 md:mt-28 md:mx-2 md:w-3/5 text-center'>
                        <h2 className='text-stone-200 font2 py-4 text-5xl md:text-5xl mx-4 md:px-16 uppercase'>Tailored Services for Your <span className='text-violet-400 font2'>Unique</span> Style</h2>
                        
                        <p className='text-xl md:right md:mx-auto p-2 tracking-wide text-stone-400'>Whether you're seeking a fresh, on-trend haircut, a bold and vibrant color transformation, or a classic, timeless look, our team is dedicated to creating a personalized, unparalleled experience that leaves you feeling confident, beautiful, and absolutely unique. We offer a wide range of services to cater to your unique preferences and needs.</p>
                        <div className='flex justify-center my-20'>
                            <a
                                href='#contact'
                                className=' px-8 py-2 border border-stone-200 text-stone-200 hover:bg-stone-800'>
                                CONTACT US
                            </a>
                        </div>
                        {/* <hr className='mx-6 mt-16 bg-stone-950'></hr>
                        <div className='w-5/6 md:w-full py-12 md:py-4 md:bg-stone-300 mx-auto z-0'>
                            <Rating />
                        </div> */}
                    </div>
                </div>

            </div>
        </div>
    )
}