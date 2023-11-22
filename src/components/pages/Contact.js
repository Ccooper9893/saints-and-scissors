export default function Contact({ toggleBooking, navContactRef }) {
    return (
        <div id='contact' className='bg-stone-900'>
            <div ref={navContactRef}>

                <div className="flex flex-col w-full md:w-3/5 mx-auto md:px-16">
                    <div className="md:full p-8 md:order-1 bg-stone-900">
                        <div className="w-full md:w-full text-center">
                            <h3 className="text-5xl font2 text-stone-200 mt-8 mb-2 uppercase">Ready to<br /> Transform Your Look?</h3>
                            <p className="md:right md:mx-auto p-2 tracking-wide text-stone-400">Contact us to schedule your next hair transformation. We accept walk-ins on a first-come first-serve basis and offer easy online booking. Feel free to give us a call to book your appointment today!</p>
                            <div className="mt-8 flex flex-col md:mt-6 md:flex-row justify-around bg-stone-300 shadow-inner shadow-stone-900">

                                <div className="md:my-10 p-6 text-stone-900">
                                    <div className="flex justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                        </svg>

                                    </div>
                                    <h4 className="text-3xl">Contact</h4>
                                    <hr className='opacity-20'></hr>
                                    <ul className="text-lg">
                                        <li>Phone: <a href="tel:4809462322"><span className="font-bold">(480) 946-2322</span></a></li>
                                        <li>Address: 6934 E 5th Ave.</li>
                                        <li>Scottsdale, AZ 85251</li>
                                    </ul>
                                </div>
                                <div className="md:my-10 p-6 text-stone-900">
                                    <div className="flex justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h4 className="text-3xl">Hours of Operation</h4>
                                    <hr className='opacity-20'></hr>
                                    <ul className="text-lg">
                                        <li>Monday: 10AM - 6PM</li>
                                        <li>Tuesday: 10AM - 6PM</li>
                                        <li>Wednesday: 10AM - 6PM</li>
                                        <li>Thursday: 10AM - 6PM</li>
                                        <li>Friday: 10AM - 6PM</li>
                                        <li>Saturday: 10AM - 4PM</li>
                                        <li>Sunday: CLOSED</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='flex justify-center my-12'>
                                <button
                                    onClick={() => { toggleBooking(true); }}
                                    className=' px-12 py-2 border border-lime-300 text-lime-300 hover:bg-stone-800'>
                                    BOOK NOW
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-3/4 px-6 h-3/4 pb-12 mx-auto bg-stone-900 md:order-2">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13308.742259374223!2d-111.9319385!3d33.4965489!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b0b95d3511a49%3A0x63b00696b163eb19!2sSaints%20%26%20Scissors%20Salon!5e0!3m2!1sen!2sus!4v1699143477823!5m2!1sen!2sus"
                            className="w-full h-96"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map"
                        ></iframe>
                    </div>



                </div>

            </div>
        </div>
    )
}