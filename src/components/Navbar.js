
import { useState, useRef } from 'react';
import logoSmall from '../assets/img/logos/nav-logo.png';
import logoLarge from '../assets/img/logos/nav-title-and-logo.png';
import calenderIcon from '../assets/img/icons/calender-icon.png';
import { motion } from "framer-motion";

export default function Navbar({ drawerRef2, toggleBooking, navVisible }) {

    const drawerRef = useRef(false);

    const toggleNav = () => {
        drawerRef.current.checked = false;
    };

    return (
        <div className="drawer z-50">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" ref={drawerRef} />
            <div className="drawer-content flex flex-col">

                {/* Navbar */}
                <motion.div
                    initial={{ opacity: 0 }} // Initial animation state
                    animate={navVisible ? { opacity: 1 } : { opacity: 0 }} // Animate based on visibility
                    transition={{ duration: 1 }} // Animation duration 
                    className="fixed w-full navbar justify-between md:justify-around py-0 bg-black bg-opacity-90 shadow-2xl shadow-stone-600">
                    <div className="flex justify-start lg:hidden w-24">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>

                    </div>

                    <div className="md:hidden">
                        <img src={logoSmall} alt='Saints and Scissors logo. Scissors with angel wings and a neon green halo'></img>
                    </div>

                    <div className="hidden md:block md:w-1/5">
                        <img src={logoLarge} alt='Saints and Scissors logo. Scissors with angel wings and a neon green halo'></img>
                    </div>

                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal">
                            {/* Navbar menu content here */}
                            <li><a href='#home'>HOME</a></li>
                            <li><a href='#about'>ABOUT</a></li>
                            <li><a href='#services'>SERVICES</a></li>
                            <li><a href='#stylists'>STYLISTS</a></li>
                            <li><a href='#gallery'>GALLERY</a></li>
                            <li><a href='#contact'>CONTACT</a></li>
                        </ul>
                    </div>
                    <div className='flex justify-end w-24 md:w-1/4 lg:w-1/5'>
                        <button onClick={() => { toggleBooking(true); }} className="btn btn-ghost px-3 normal-case font-thin" aria-label="Open Vagaro booking drawer">
                            <img className="calender" src={calenderIcon} alt="calender icon, book now with vigaro"></img>
                        </button>
                    </div>
                </motion.div>

                {/* Page content here */}

                <div className="drawer">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" ref={drawerRef2} />
                    <div className="drawer-content">

                    </div>
                    
                    <div className="drawer-side z-50">
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                        <div className="w-full min-h-full bg-stone-950">

                            {/* Sidebar content here */}
                            <div className="w-full h-screen text-center bg-stone-950">
                                <div className="h-full bg-black">
                                    <div className="relative w-full top-0 text-center h-16">
                                        <img className="mx-auto p-3" src={logoSmall} alt="Hair stylist clippers with wings logo" />
                                        <button onClick={() => { toggleBooking(false); }} className="btn btn-sm absolute top-0 right-0 h-16 w-16 text-white" aria-label="Close Vagaro booking drawer">✕</button>
                                    </div>

                                    {/* <iframe className="h-full w-full" src="https://www.vagaro.com/saintsandscissors/services" title="W3Schools Free Online Web Tutorials"></iframe> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-2/3 min-h-full text-lg bg-stone-950 border-r-2 border-stone-800">
                    {/* Sidebar content here */}
                    <li><a href='#home' onClick={() => { toggleNav(); }}>HOME</a></li>
                    <li><a href='#about' onClick={() => { toggleNav(); }}>ABOUT</a></li>
                    <li><a href='#services' onClick={() => { toggleNav(); }}>SERVICES</a></li>
                    <li><a href='#stylists' onClick={() => { toggleNav(); }}>STYLISTS</a></li>
                    <li><a href='#gallery' onClick={() => { toggleNav(); }}>GALLERY</a></li>
                    <li><a href='#contact' onClick={() => { toggleNav(); }}>CONTACT</a></li>
                </ul>
            </div>
        </div>
    )
};