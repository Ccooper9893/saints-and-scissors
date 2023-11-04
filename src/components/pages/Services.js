import Rating from '../misc/Rating';
import logo from '../../assets/img/backgrounds/serviceBg.jpg';
import girl from '../../assets/img/backgrounds/paintedGirl.png';
import { Parallax } from 'react-scroll-parallax';
export default function Services({ toggleBooking, navServicesRef }) {
    return (
        <div id='services'>
            <div ref={navServicesRef}>
                <div className='flex flex-col lg:flex-row bg-stone-200 md:bg-stone-900 mt-12 md:py-24'>
                    <div className='hidden md:block border border-stone-950 md:p-8 shadow-inner shadow-stone-900 md:bg-stone-300'>
                        <img className='md:w-5/6 mx-auto shadow-inner shadow-stone-900' src={logo} alt='Grunge style headshot of a woman with beautiful flowing hair.'></img>
                    </div>
                    <div className='md:hidden'>
                        <img className='bg-stone-200 pt-12' src={girl} alt='Grunge style headshot of a woman with beautiful flowing hair.'></img>
                    </div>
                    <div className='mt-6 md:mt-28 md:mx-16 md:w-3/5 text-center'>
                        <h2 className='text-stone-900 font2 text-4xl py-4 md:text-5xl mx-4 md:px-16 uppercase'>Tailored Services for Your <span className='text-violet-700 font2'>Unique</span> Style</h2>
                        <p className='text-xl md:right md:mx-auto p-2 tracking-wide text-stone-400'>Whether you're seeking a fresh, on-trend haircut, a bold and vibrant color transformation, or a classic, timeless look, our team is dedicated to creating a personalized, unparalleled experience that leaves you feeling confident, beautiful, and absolutely unique. We offer a wide range of services to cater to your unique preferences and needs.</p>
                        {/* <div className='w-5/6 py-24 mx-auto z-0'>
                            <Rating />
                        </div> */}
                        <div className='flex justify-center my-20'>
                        <button
                            onClick={() => { toggleBooking(true); }}
                            className=' px-8 py-2 border border-stone-950 text-stone-950 hover:bg-stone-900'>
                            VIEW OUR SERVICES
                        </button>
                        </div>
                    </div>
                </div>
                {/* <div className='bg-stone-900 mx-4 md:mx-12'>
                    <h2 className='title text-center text-3xl text-stone-50 py-8 font4'>Cuts & Styling</h2>
                    <hr className='w-4/5 lg:w-3/4 mx-auto mb-4 opacity-30'></hr>

                    <table className="table text-white">
                        <tbody className="lg:text-xl">
                            <tr>
                                <td>Womans Cut and Blowdry</td>
                                <td></td>
                                <td>$60+</td>
                            </tr>
                            <tr>
                                <td>Blowdry Style</td>
                                <td></td>
                                <td>$50+</td>
                            </tr>
                            <tr>
                                <td>Mens Cut</td>
                                <td></td>
                                <td>$40+</td>
                            </tr>
                            <tr>
                                <td>Mens Cut and Color</td>
                                <td></td>
                                <td>$75+</td>
                            </tr>
                            <tr>
                                <td>Conditioning Treatment &amp; Blowdry</td>
                                <td></td>
                                <td>$70+</td>
                            </tr>
                            <tr>
                                <td>Single Process Color</td>
                                <td></td>
                                <td>$85+</td>
                            </tr>
                            <tr>
                                <td>Touch up</td>
                                <td></td>
                                <td>$70+</td>
                            </tr>
                            <tr>
                                <td>Bleach Retouch</td>
                                <td></td>
                                <td>$85+</td>
                            </tr>
                            <tr>
                                <td>Partial Highlight</td>
                                <td></td>
                                <td>$120+</td>
                            </tr>
                            <tr>
                                <td>Full Highlight</td>
                                <td></td>
                                <td>$160+</td>
                            </tr>
                            <tr>
                                <td>Color Correction</td>
                                <td></td>
                                <td>By Consultation</td>
                            </tr>
                            <tr>
                                <td>Extensions</td>
                                <td></td>
                                <td>By Consultation</td>
                            </tr>
                        </tbody>
                    </table>
            </div> */}
            </div>
        </div>
    )
}