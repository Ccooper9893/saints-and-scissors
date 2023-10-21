import React, { useState, useEffect, useRef } from "react";
import logo from '../assets/logos/nav-logo.png';
import calenderIcon from '../assets/icons/calender-icon.png';
import logoBig from '../assets/logos/logo-bg.png';

export default function Navbar({ children, currentPage, handlePageChange, availablePages }) {

  const drawerRef = useRef(false);
  const drawerRef2 = useRef(false);

  const toggleNav = () => {
    drawerRef.current.checked = false;
  };

  const toggleBooking = (status) => {
    drawerRef2.current.checked = status;
  };


  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" ref={drawerRef} />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="fixed navbar z-10 justify-between lg:justify-around p-0 bg-black">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
          </div>
          <div className="hidden md:flex md:justify-center lg:w-1/4 lg:ml-5 ">
            <button onClick={() => { handlePageChange('Home'); }} className="mx-auto" aria-label="Go to Home page">
              <img src={logo} alt="Hair stylist clippers with wings logo"></img>
            </button>
          </div>
          <div className="md:hidden w-1/5">
            <button onClick={() => { handlePageChange('Home'); }} className="mx-auto" aria-label="Go to Home page">
              <img className="max-h-20 ml-1" src={logoBig} alt="Hair stylist clippers with wings logo"></img>
            </button>
          </div>
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              {availablePages.map((page) => {
                return (
                  <li>
                    <button
                      className={currentPage === page ? 'navBtn border-b border-lime-400' : 'navBtn focus:border-lime-400 bg-black'}
                      onClick={() => { handlePageChange(page) }}
                      aria-label="Go to About page">
                      {page.toUpperCase()}
                    </button>
                  </li>
                )
              })
              }
            </ul>
          </div>
          <div className="lg:w-1/4 justify-center">
            <button className="btn btn-ghost px-3" onClick={() => { toggleBooking(true); }} aria-label="Open Vagaro booking drawer">
              <img className="calender" src={calenderIcon} alt="calender icon, book now with vigaro"></img>
            </button>
            {/* <button className="hidden md:block uppercase" onClick={() => { toggleBooking(true); }} aria-label="Open Vagaro booking drawer">
              SCHEDULE
            </button> */}
          </div>
        </div>

        {/* Page content here for main drawer*/}

        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" ref={drawerRef2} />
          <div className="drawer-content">

            {children}

          </div>
          <div className="drawer-side z-20">
            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
            <div className="w-full min-h-full bg-stone-950">

              {/* Sidebar content here */}
              <div className="w-full h-screen text-center bg-stone-950">
                <div className="h-full bg-black">
                  <div className="relative w-full top-0 text-center h-16">
                    <img className="mx-auto p-3" src={logoBig} alt="Hair stylist clippers with wings logo" />
                    <button onClick={() => { toggleBooking(false); }} className="btn btn-sm absolute top-0 right-0 h-16 w-16 text-white" aria-label="Close Vagaro booking drawer">✕</button>
                  </div>

                  <iframe className="h-full w-full" src="https://www.vagaro.com/saintsandscissors/services" title="W3Schools Free Online Web Tutorials"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="drawer-side z-20">
        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-60 min-h-full bg-base-200">
          {/* Sidebar content here */}
          {availablePages.map((page) => {
            return (
              <li className={currentPage === page ? 'p-1 m-2 border-l-2 border-lime-400' : 'p-1 m-2'}>
                <button
                  className={currentPage === page ? 'navBtn border-left border-lime-400 p-0' : 'p-0'}
                  onClick={() => { toggleNav(); handlePageChange(page); }}
                  aria-label="Go to  page">
                  {page.toUpperCase()}
                </button>
              </li>
            )
          })
          }
          {/* <li><button href="#about" onClick={() => { toggleNav(); handlePageChange('About'); }} aria-label="Go to About page">ABOUT</button></li>
          <li><button href="#services" onClick={() => { toggleNav(); handlePageChange('Services'); }} aria-label="Go to Services page">SERVICES</button></li>
          <li><button href="#stylists" onClick={() => { toggleNav(); handlePageChange('Stylists'); }} aria-label="Go to Stylists page">STYLISTS</button></li>
          <li><button href="#gallery" onClick={() => { toggleNav(); handlePageChange('Gallery'); }} aria-label="Go to Gallery page">GALLERY</button></li>
          <li><button href="#contact" onClick={() => { toggleNav(); handlePageChange('Contact'); }} aria-label="Go to Contact page">CONTACT</button></li> */}
        </ul>
      </div>
    </div>
  );
};