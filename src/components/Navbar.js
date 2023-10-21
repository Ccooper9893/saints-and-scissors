import React, { useState, useEffect, useRef } from "react";
import logo from '../assets/logos/nav-logo.png';
import calenderIcon from '../assets/icons/calender-icon.png';
import logoBig from '../assets/logos/logo-bg.png';

export default function Navbar() {
  const drawerRef = useRef(false);
  const drawerRef2 = useRef(false);

  const toggle = () => {
    // Use the current property of the ref to access the input element
    drawerRef.current.checked = false;
  };

  const toggle2Open = () => {
    // Use the current property of the ref to access the input element
    drawerRef2.current.checked = true;
  };

  const toggle2Close = () => {
    // Use the current property of the ref to access the input element
    drawerRef2.current.checked = false;
  };

  return (
    <div className="drawer z-50">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" ref={drawerRef} />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar fixed justify-between lg:justify-around p-0 bg-black shadow-2xl shadow-stone-900">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
          </div>
          <div className="hidden md:block lg:w-1/4 lg:ml-5 ">
            <img className="mx-auto" src={logo} alt="Hair stylist clippers with wings logo"></img>
          </div>
          <div className="md:hidden ml-2 lg:ml-5 w-1/5">
            <img className="max-h-20 ml-1" src={logoBig} alt="Hair stylist clippers with wings logo"></img>
          </div>
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              <li><a href="#about" className=" text-xs">ABOUT</a></li>
              <li><a href="#services" className=" text-xs">SERVICES</a></li>
              <li><a href="#stylists" className=" text-xs">STYLISTS</a></li>
              <li><a href="#gallery" className=" text-xs">GALLERY</a></li>
              <li><a href="#contact" className=" text-xs">CONTACT</a></li>
            </ul>
          </div>
          <div className="lg:w-1/4 justify-center">
            <button onClick={() => { toggle2Open(); }} className="btn btn-ghost px-3"><img className="calender" src={calenderIcon} alt="calender icon, book now with vigaro"></img></button>
          </div>
        </div>

        {/* Page content here */}

        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" ref={drawerRef2} />
          <div className="drawer-content">

            {/* Page content here */}
          
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
            <div className="w-full md:w-1/2 lg:w-full min-h-full bg-black">

              {/* Sidebar content here */}
              <div className="w-full h-screen text-center bg-stone-950">
                <div className="h-full pt-16">

                  <button onClick={() => { toggle2Close(); }} className="btn btn-sm absolute right-0 top-0 h-16 w-16 text-white">✕</button>
                  <iframe className="h-full w-full" src="https://www.vagaro.com/saintsandscissors/services" title="W3Schools Free Online Web Tutorials"></iframe>
                  
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-60 min-h-full bg-base-200">
          {/* Sidebar content here */}
          <li><a href="#about" onClick={toggle}>ABOUT</a></li>
          <li><a href="#services" onClick={toggle}>SERVICES</a></li>
          <li><a href="#stylists" onClick={toggle}>STYLISTS</a></li>
          <li><a href="#gallery" onClick={toggle}>GALLERY</a></li>
          <li><a href="#contact" onClick={toggle}>CONTACT</a></li>
          {/* <li><label onClick={() => { toggle(); toggle2Open(); }}>CAREERS</label></li> */}
        </ul>
      </div>
    </div>
  );
};