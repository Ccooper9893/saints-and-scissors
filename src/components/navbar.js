import React, { useState, useEffect, useRef } from "react";
import logo from '../assets/nav-logo.png';
import logoSmall from '../assets/nav-logo-sm.png';
import calenderIcon from '../assets/calender-icon.png';
import logoBig from '../assets/logo-bg.png';
import graffiti from '../assets/graffiti.jpg';

export default function Navbar() {
  const drawerRef = useRef(null);
  const drawerRef2 = useRef(null);

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
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" ref={drawerRef} />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar fixed justify-between lg:justify-around fade-in-2 bg-black">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
          </div>
          <div className="hidden md:block lg:w-1/4 lg:ml-5 ">
            <img className="mx-auto" src={logo} alt="Hair stylist clippers with wings logo"></img>
          </div>

          <img className="md:hidden lg:ml-5 my-2 w-1/6" src={logoBig} alt="Hair stylist clippers with wings logo"></img>
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              <li><a>ABOUT</a></li>
              <li><a>STYLISTS</a></li>
              <li><a>SERVICES</a></li>
              <li><a>GALLERY</a></li>
              <li><a>CONTACT</a></li>
              <li><a onClick={() => { toggle(); toggle2Open(); }}>CAREERS</a></li>
            </ul>
          </div>
          <div className="lg:w-1/4 justify-center">
            <div className="btn btn-square btn-ghost">
              <a href="https://www.vagaro.com/saintsandscissors/services" target="_blank" rel="noreferrer" className="btn btn-ghost"><img className="calender" src={calenderIcon}></img></a>
            </div>
          </div>
          {/* <div className="lg:w-1/4">
            <a className=" btn btn-md mx-auto md:btn-md normal-case bg-lime-400 text-black hover:bg-stone-900 hover:text-white">BOOK <br />ME</a>
          </div> */}
        </div>
        {/* Page content here */}

        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" ref={drawerRef2} />
          <div className="drawer-content">
            {/* Page content here */}
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
            <div className="w-3/4 md:w-1/2 lg:w-1/4 min-h-full border-r border-r-stone-800 bg-black text-base-content">
              {/* Sidebar content here */}
              <div className="flex flex-col text-center">
                <div className="p-4">
                  <h2 className="title font2 pt-4 pb-2 text-4xl">CAREERS</h2>
                  <hr></hr>
                  {/* <p className="text-center">Crafting style, one strand at a time. Join our team of artistic hair stylists, where scissors are chisels, hair is our marble, and together, we create masterpieces.</p> */}
                  <p className="pt-4 text-lg">We're seeking passionate individuals with an eye for artistry and a dedication to transforming hair into works of beauty. If you're a creative stylist who thrives in an environment that values innovation and precision, we'd love to have you as part of our team.</p>
                  <p className="pt-4">To apply, send your resume to</p>
                  <a className=" text-lime-400" href="mailto:rent@saintsandscissors.com">rent@saintsandscissors.com</a>
                </div>
                <img className="absolute bottom-0 -z-10" src={graffiti} alt="Graffiti painting of Saints and Scissors"></img>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-60 min-h-full bg-base-200">
          {/* Sidebar content here */}
          <li><a onClick={toggle}>ABOUT</a></li>
          <li><a onClick={toggle}>STYLISTS</a></li>
          <li><a onClick={toggle}>SERVICES</a></li>
          <li><a onClick={toggle}>GALLERY</a></li>
          <li><a onClick={toggle}>CONTACT</a></li>
          <li><a onClick={() => { toggle(); toggle2Open(); }}>CAREERS</a></li>
        </ul>
      </div>
    </div>
  );
}

{/* <div className="navbar fixed bg-black z-10">
<div className="navbar-start lg:justify-center">
  <div className="dropdown">
    <label tabIndex={0} className="btn btn-ghost lg:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
    </label>
    <ul tabIndex={0} className="menu menu-sm dropdown-content z-[1] bg-base-100 rounded-box w-44">
      <li><a>ABOUT</a></li>
      <li><a>STYLISTS</a></li>
      <li><a>SERVICES</a></li>
      <li><a>GALLERY</a></li>
      <li><a>CONTACT</a></li>
    </ul>
  </div>
  <img className="ml-5 my-0" src={logo} alt="Hair stylist clippers with wings logo"></img>
</div>
<div className="navbar-center hidden lg:flex">
  <ul className="menu menu-horizontal px-1 hidden lg:flex text-base">
    <li><a>ABOUT</a></li>
    <li><a>STYLISTS</a></li>
    <li><a>SERVICES</a></li>
    <li><a>GALLERY</a></li>
    <li><a>CONTACT</a></li>
  </ul>
</div>
<div className="navbar-end lg:justify-center">
  <a className="btn btn-xs md:btn-sm normal-case bg-lime-500 text-black hover:bg-stone-200">BOOK NOW</a>
</div>
</div> */}