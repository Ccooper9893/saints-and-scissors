import hairDryerBg from '../../assets/img/backgrounds/serviceBg.jpg';
import girl from '../../assets/img/backgrounds/paintedGirl.png';
import scissors from '../../assets/img/icons/scissors.png';
import { Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';

export default function Services({ toggleBooking, navServicesRef }) {
    return (
        <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1, delay: .5 }}
        id='services' 
        className=' bg-stone-900 shadow shadow-stone-900 pt-4 mb-12'>
            <div ref={navServicesRef}>
                <div className='flex flex-col justify-center md:py-24'>
                    {/* <div className='hidden h-1/2 md:block md:ml-4 md:p-8 '>
                        <img className='md:w-5/6 mx-auto border border-stone-950 opacity-80' src={hairDryerBg} alt='Blowdryers hanging above barber chairs'></img>
                    </div> */}
                    {/* <div className='px-6'>
                        <Parallax speed={-2}>
                        <img className='bg-stone-100 pt-12 opacity-80 md:rounded-full shadow-inner shadow-stone-900' src={girl} alt='Grunge style headshot of a woman with beautiful flowing hair.'></img>
                        </Parallax>
                    </div> */}
                    <div className='pt-6 md:mx-auto md:w-3/5 text-center z-40 bg-stone-900'>
                        <h2 className='text-stone-200 font2 py-4 text-5xl mx-4 md:px-16 uppercase'>Tailored Services for Your <span className='text-violet-500 font2'>Unique</span> Style.</h2>

                        <p className='text-xl md:right md:mx-auto py-2 px-6 tracking-wide text-stone-300'>Whether you're seeking a fresh, on-trend haircut, a bold and vibrant color transformation, or a classic, timeless look, our team is dedicated to creating a personalized, unparalleled experience that leaves you feeling <strong>confident</strong>, <strong>beautiful</strong>, and absolutely <strong>unique</strong>. We offer a wide range of services to cater to your unique preferences and needs.</p>
                        <div className="py-8 mt-24 mx-6 bg-stone-200 shadow-inner shadow-stone-800">
                        <img className='mx-auto h-10 -rotate-12 my-6' src={scissors} alt='scissors icon'></img>
                            <h2 className='text-center text-4xl py-4 text-stone-900'>Services</h2>
                            <table className="table text-xl text-center text-stone-700">
                                <tbody>
                                    <tr>
                                        <td>Womans Cut and Blowdry</td>
                                        {/* <td></td>
                                        <td>$60+</td> */}
                                    </tr>
                                    <tr>
                                        <td>Blowdry &amp; Styling</td>
                                        {/* <td></td>
                                        <td>$50+</td> */}
                                    </tr>
                                    <tr>
                                        <td>Mens Cuts</td>
                                        {/* <td></td>
                                        <td>$40+</td> */}
                                    </tr>
                                    <tr>
                                        <td>Men's Cut and Color</td>
                                        {/* <td></td>
                                        <td>$75+</td> */}
                                    </tr>
                                    <tr>
                                        <td>Conditioning Treatment &amp; Blowdry</td>
                                        {/* <td></td>
                                        <td>$70+</td> */}
                                    </tr>
                                    <tr>
                                        <td>Single Process Color</td>
                                        {/* <td></td>
                                        <td>$85+</td> */}
                                    </tr>
                                    <tr>
                                        <td>Touch ups</td>
                                        {/* <td></td>
                                        <td>$70+</td> */}
                                    </tr>
                                    <tr>
                                        <td>Bleach Retouch</td>
                                        {/* <td></td>
                                        <td>$85+</td> */}
                                    </tr>
                                    <tr>
                                        <td>Partial Highlights</td>
                                        {/* <td></td>
                                        <td>$120+</td> */}
                                    </tr>
                                    <tr>
                                        <td>Full Highlights</td>
                                        {/* <td></td>
                                        <td>$160+</td> */}
                                    </tr>
                                    <tr>
                                        <td>Color Corrections</td>
                                        {/* <td></td>
                                        <td>By Consultation</td> */}
                                    </tr>
                                    <tr>
                                        <td>Extensions</td>
                                        {/* <td></td>
                                        <td>By Consultation</td> */}
                                    </tr>
                                    <tr>
                                        <td>Makeup</td>
                                        {/* <td></td>
                                        <td>By Consultation</td> */}
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
        </motion.div>
    )
}