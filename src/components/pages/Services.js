import Rating from '../misc/Rating';
import logo from '../../assets/img/backgrounds/paintedGirl.png';
export default function Services({ toggleBooking, navServicesRef }) {
    return (
        <div id='services'>
            <div id='navServicesRef'>
                <div className='flex flex-col lg:flex-row bg-stone-200 my-12 md:py-12'>
                    <div className='p-4 md:py-12'>
                        <img className='mx-auto shadow-inner shadow-stone-900 bg-stone-100' src={logo} alt='Grunge style headshot of a woman with beautiful flowing hair.'></img>
                    </div>
                    <div className='md:mx-16 md:w-3/5'>
                        <h2 className='text-stone-950 mt-6 font2 text-3xl md:text-4xl text-center mx-4 md:mx-8 uppercase'>Tailored Services for Your <span className='text-violet-700 font2'>Unique</span> Style</h2>
                        <p className='text-xl text-center md:right md:mx-auto p-6 tracking-wide text-stone-800'>Whether you're seeking a fresh, on-trend haircut, a bold and vibrant color transformation, or a classic, timeless look, our team is dedicated to creating a personalized, unparalleled experience that leaves you feeling confident, beautiful, and absolutely unique. Come and discover the artistry of hair styling at our salon – where beauty is not just a result, but a journey that celebrates your one-of-a-kind style.</p>
                        {/* <div className='w-5/6 py-4 mx-auto z-0'>
                            <Rating />
                        </div> */}
                        <div className='flex justify-center my-20'>
                        <button
                            onClick={() => { toggleBooking(true); }}
                            className=' px-8 py-2 border border-stone-950 text-black hover:bg-stone-300'>
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