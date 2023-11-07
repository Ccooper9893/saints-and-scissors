import hairDryerBg from '../../assets/img/backgrounds/serviceBg.jpg';
import girl from '../../assets/img/backgrounds/paintedGirl.png';
import scissors from '../../assets/img/icons/scissors.png';
import { Parallax } from 'react-scroll-parallax';

export default function Services({ toggleBooking, navServicesRef }) {
    return (
        <div id='services' className=' bg-stone-900 shadow shadow-stone-900 border-b border-stone-500 pb-24'>
            <div ref={navServicesRef}>
                <div className='flex flex-col lg:flex-row mt-12 md:py-24'>
                    <div className='hidden h-1/2 md:block md:ml-4 md:p-8 '>
                        <img className='md:w-5/6 mx-auto border border-stone-950 opacity-80' src={hairDryerBg} alt='Blowdryers hanging above barber chairs'></img>
                    </div>
                    <div className='md:hidden'>
                        <Parallax speed={-5}>
                        <img className='bg-stone-100 pt-12 opacity-80' src={girl} alt='Grunge style headshot of a woman with beautiful flowing hair.'></img>
                        </Parallax>
                    </div>
                    <div className='mt-6 md:mx-2 md:w-3/5 text-center z-40 bg-stone-800'>
                        <h2 className='text-stone-200 font2 py-4 text-5xl mx-4 md:px-16 uppercase'>Tailored Services for Your <span className='text-violet-500 font2'>Unique</span> Style.</h2>

                        <p className='text-xl md:right md:mx-auto py-2 px-6 tracking-wide text-stone-300'>Whether you're seeking a fresh, on-trend haircut, a bold and vibrant color transformation, or a classic, timeless look, our team is dedicated to creating a personalized, unparalleled experience that leaves you feeling <strong>confident</strong>, <strong>beautiful</strong>, and absolutely <strong>unique</strong>. We offer a wide range of services to cater to your unique preferences and needs.</p>
                        <div className="py-8 mt-24 mx-6 md:mx-24 lg:mx-44 bg-stone-200 shadow-inner shadow-stone-800">
                        <img className='mx-auto h-10 -rotate-12 my-6' src={scissors} alt='scissors icon'></img>
                            <h2 className='text-center text-2xl py-4 text-stone-900'>CUTS AND STYLING</h2>
                            <table className="table text-lg text-stone-700">
                                <tbody>
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
                            <div className='flex justify-center py-12'>
                            <button
                                onClick={() => { toggleBooking(true); }}
                                className=' px-8 py-2 border border-stone-800 text-stone-800'>
                                VIEW ALL SERVICES
                            </button>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}