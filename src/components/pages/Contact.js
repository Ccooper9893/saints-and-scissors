export default function Contact({ toggleBooking, navContactRef }) {
    return (
        <div id='contact' className='bg-stone-900'>
            <div ref={navContactRef}>

                <div className="flex flex-col lg:grid lg:grid-cols-2 w-full md:p-16">
                <div className="md:full p-8 md:order-1 bg-stone-900">
                        <div className="w-full md:w-full text-center">
                            <h3 className="text-5xl md:text-6xl font2 text-stone-200 mt-8 mb-2 uppercase">Ready to Transform Your Look?</h3>
                            <p className="text-xl md:right md:mx-auto p-2 tracking-wide text-stone-400">Contact us to schedule your next hair transformation. We welcome walk-ins, offer easy online booking, and are just a phone call away for appointments that suit your style.</p>
                            <div className="flex flex-col md:mt-6 md:flex-row justify-around bg-stone-800">
                                <div className="md:my-10 p-6 text-stone-200">
                                    <h4 className="text-3xl">Hours of Operation</h4>
                                    <hr className='opacity-20'></hr>
                                    <ul>
                                        <li>Monday: 10AM - 6PM</li>
                                        <li>Tuesday: 10AM - 6PM</li>
                                        <li>Wednesday: 10AM - 6PM</li>
                                        <li>Thursday: 10AM - 6PM</li>
                                        <li>Friday: 10AM - 6PM</li>
                                        <li>Saturday: 10AM - 4PM</li>
                                        <li>Sunday: CLOSED</li>
                                    </ul>
                                </div>
                                <div className="md:my-10 p-6 text-stone-200">

                                <h4 className="text-3xl">Contact Us!</h4>
                                <hr className='opacity-20'></hr>
                                    <ul>
                                        <li>Phone: (940) 445-0543</li>
                                        <li>Address: 235 SW Dingleberry Ln.</li>
                                        <li>Scottsdale, AZ 54678</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className="w-full px-2 h-3/4 md:h-5/6 pb-12 md:mt-24 mx-auto bg-stone-900  md:order-2">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13308.742259374223!2d-111.9319385!3d33.4965489!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b0b95d3511a49%3A0x63b00696b163eb19!2sSaints%20%26%20Scissors%20Salon!5e0!3m2!1sen!2sus!4v1699143477823!5m2!1sen!2sus"
                            className="w-full h-96 md:h-full"
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