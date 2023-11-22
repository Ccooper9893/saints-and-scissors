import scissors from '../../assets/img/icons/scissors.png';

export default function Services({ toggleBooking, navServicesRef }) {
    return (
        <div 
        id='services' 
        className=' bg-stone-900 shadow shadow-stone-900 pt-4 pb-32'>
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
                    <div className='md:mx-auto md:w-3/5 text-center z-40 bg-stone-900'>
                        {/* <h2 className='text-stone-200 font2 py-8 text-5xl md:text-6xl mx-4 md:px-16 uppercase'>Tailored<br /> Services for Your <br /><em className='text-violet-500 font2'>Unique </em>Style.</h2> */}
                        <h2 className='text-stone-200 font2 py-8 text-5xl mx-4 md:px-16 uppercase'>Tailored<br /> Services for Your <br /><span className='text-violet-500 font4 text-3xl'>Unique Style.</span></h2>
                        {/* <hr className='mx-6 my-4 bg-stone-800'></hr> */}
                        <p className='md:right md:mx-auto py-2 px-6 tracking-wide text-stone-300'>Whether you're seeking a fresh, on-trend haircut, a bold and vibrant color transformation, or a classic, timeless look, our team is dedicated to creating a personalized, unparalleled experience that leaves you feeling <strong>confident</strong>, <strong>beautiful</strong>, and absolutely <strong>unique</strong>. We offer a wide range of services to cater to your unique preferences and needs.</p>

                        <div className="w-4/5 md:w-3/5 mx-auto py-8 mt-12 bg-stone-200 shadow-inner shadow-stone-800">
                        <img className='mx-auto h-10 -rotate-12 my-3' src={scissors} alt='scissors icon'></img>
                            <h2 className='text-center text-3xl font4 pt-2 mb-8 text-stone-900'>Services</h2>
                            <table className="table text-center text-stone-700">
                                <tbody>
                                    <tr>
                                        <td>Womans Cut and Blowdry</td>
                                        <td>Blowdry &amp; Styling</td>
                                    </tr>
                                    <tr>
                                        <td>Mens Cuts</td>
                                        <td>Men's Cut and Color</td>
                                    </tr>
                                    <tr>
                                        <td>Conditioning &amp; Blowdry</td>
                                        <td>Single Process Color</td>
                                    </tr>
                                    <tr>
                                        <td>Touch ups</td>
                                        <td>Bleach Retouch</td>
                                    </tr>
                                    <tr>
                                        <td>Partial Highlights</td>
                                        <td>Full Highlights</td>
                                    </tr>
                                    <tr>
                                        <td>Color Corrections</td>
                                        <td>Extensions</td>
                                    </tr>
                                    <tr>
                                        <td>Makeup</td>
                                        <td>Hair Treatments</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className='flex justify-center py-12'>
                            <button
                                onClick={() => { toggleBooking(true); }}
                                className=' px-8 py-2 hover:bg-violet-400 border border-stone-800 text-stone-800'>
                                VIEW ALL SERVICES
                            </button>
                        </div>
                        <p className='text-stone-950 mx-6'>* Some services may require a consultation appointment. Prices may vary based on the stylist, with each professional specializing in certain areas that may be priced accordingly due to their expertise.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}