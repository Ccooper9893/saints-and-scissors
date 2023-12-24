import scissors from '../../assets/img/icons/scissors-white.png';

export default function Services({ toggleBooking, navServicesRef }) {
    return (
        <div
            id='services'
            className='bgFloral'>
            <div ref={navServicesRef}>
                <div className='flex flex-col justify-center'>
                    <div className='md:mx-auto md:w-3/5 py-12 text-center z-40'>
                        <img className='mx-auto h-10 -rotate-12 my-8' src={scissors} alt='scissors icon'></img>
                        <h2 className='text-stone-200 font2 text-4xl md:text-5xl mx-4 md:px-16 uppercase'>Tailored<br /> Services for Your <br /><span className='text-violet-500 font4 text-2xl md:text-3xl'>Unique Style.</span></h2>
                        <p className='md:right md:mx-auto py-6 px-10 tracking-wide text-stone-300'>Whether you're seeking a fresh, on-trend haircut, a bold and vibrant color transformation, or a classic, timeless look, our team is dedicated to creating a personalized, unparalleled experience that leaves you feeling <strong>confident</strong>, <strong>beautiful</strong>, and absolutely <strong>unique</strong>. We offer a wide range of services to cater to your unique preferences and needs.</p>

                        <div className="w-4/5 md:w-3/5 mx-auto py-8 my-12 border bg-stone-200">
                            <h2 className='text-center text-2xl font4 pt-2 mb-8 text-stone-700'>Services</h2>
                            <table className="table text-center text-stone-900">
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
                                    className='px-8 py-2 hover:underline text-stone-900'>
                                    VIEW ALL SERVICES &rarr;
                                </button>
                            </div>
                            <p className='text-stone-950 mx-6 text-sm'>* Some services may require a consultation appointment. Prices may vary based on the stylist, with each professional specializing in certain areas that may be priced accordingly due to their expertise.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}