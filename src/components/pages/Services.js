import decal2 from '../../assets/img/decals/decal-1.png';

export default function Services({ toggleBooking, navServicesRef }) {
    return (
        <div id='services' className='bg-stone-900'>
            <div id='navServicesRef'>
                {/* <h2 className="text-3xl text-center text-stone-100 ">SERVICES</h2> */}

                <h2 className='font2 text-6xl text-left lg:text-center text-stone-950 px-4 py-24 z-10 bg-stone-300'>
                Haircuts That Define<br /><span className='text-lime-500 font2'>Your Style<span className='text-stone-950'>.</span></span>
                </h2>
                <img className='w-4/5 md:hidden bg-stone-100' src={decal2} alt='Punk style artwork of a rocker screaming.'></img>
                <div className="lg:mx-64 bg-stone-800">
                <p className='text-xl md:w-5/6 md:text-center md:mx-auto p-6 tracking-wide text-stone-300 text-center bg-stone-800'>We offer a wide range of services, catering to all your haircare needs. Our expert team is skilled in everything from basic cuts to full-color transformations, ensuring that you leave our salon discovering your unique style and inner confidence.</p>
                <div className='bg-stone-950'>
                    <h2 className='title text-center text-3xl text-stone-50 py-8'>Our Services</h2>
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
                    <div className="flex justify-center w-full py-10">
                        <button
                            onClick={() => { toggleBooking(true); }}
                            className='tracking-widest z-10 w-1/2 py-2 rounded-sm text-stone-200 text-center text-sm glass bg-opacity-70 shadow-lg shadow-black hover:shadow-none'>
                            VIEW ALL
                        </button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}