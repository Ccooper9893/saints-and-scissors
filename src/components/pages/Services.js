import decal2 from '../../assets/img/decals/decal-1.png';
import logo from '../../assets/img/backgrounds/paintedGirl.png';
export default function Services({ toggleBooking, navServicesRef }) {
    return (
        <div id='services'>
            <div id='navServicesRef'>
                {/* <h2 className="text-3xl text-center text-stone-100 ">SERVICES</h2> */}

                {/* <h2 className='font2 text-6xl md:text-7xl text-left lg:text-center text-stone-950 px-4 py-24 z-10 bg-stone-300'>
                Haircuts That Define<br /><span className='text-lime-500 font2'>Your Style<span className='text-stone-950'>.</span></span>
                </h2> */}
                {/* <img className='w-4/5 md:hidden bg-stone-100' src={decal2} alt='Punk style artwork of a rocker screaming.'></img> */}
                <div className='flex flex-col lg:flex-row bg-stone-200 my-12 md:py-12'>
                    <div className='p-4 md:py-12'>
                        <img className='bg3 mx-auto shadow-sm shadow-stone-900' src={logo} alt='Grunge style headshot of a woman with beautiful flowing hair.'></img>
                    </div>
                    <div className='md:mx-16 md:w-3/5'>
                        <h2 className='text-stone-950 mt-6 font2 text-3xl md:text-4xl md:text-left mx-4 md:mx-8 uppercase'>Crafting Confidence Through Precision</h2>
                        <p className='text-xl md:right md:mx-auto p-6 tracking-wide text-stone-800'>Whether you're seeking a fresh, on-trend haircut, a bold and vibrant color transformation, or a classic, timeless look, our team is dedicated to creating a personalized, unparalleled experience that leaves you feeling confident, beautiful, and absolutely unique. Come and discover the artistry of hair styling at our salon – where beauty is not just a result, but a journey that celebrates your one-of-a-kind style.</p>
                        <div className='flex justify-center md:justify-start md:ml-24 my-20'>
                        <button
                            onClick={() => { toggleBooking(true); }}
                            className=' px-8 py-2 border border-stone-950 text-black hover:bg-stone-300'>
                            MEET OUR STYLISTS
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