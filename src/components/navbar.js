import React, { useState, useEffect, useRef } from "react";
import logo from '../assets/nav-logo.png';
import logoSmall from '../assets/nav-logo-sm.png';

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
        <div className="w-full navbar fixed justify-between lg:justify-around bg-black">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
          </div>
          <div className="hidden md:block lg:w-1/4 lg:ml-5 ">
            <img className="mx-auto" src={logo} alt="Hair stylist clippers with wings logo"></img>
          </div>

          <img className="md:hidden lg:ml-5 my-0" src={logoSmall} alt="Hair stylist clippers with wings logo"></img>
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              <li><a>ABOUT</a></li>
              <li><a>STYLISTS</a></li>
              <li><a>SERVICES</a></li>
              <li><a>GALLERY</a></li>
              <li><a>CONTACT</a></li>
              <li><a>CAREERS</a></li>
            </ul>
          </div>
          <div className="lg:w-1/4">
            <a className="btn btn-xs mx-auto md:btn-sm normal-case bg-lime-500 text-black hover:bg-stone-200">BOOK</a>
          </div>
        </div>
        {/* Page content here */}
        

<div className="drawer drawer-end">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" ref={drawerRef2}/>
  <div className="drawer-content">
    {/* Page content here */}
    {/* <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">Open drawer</label> */}
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu p-4 w-full min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <li><a onClick={toggle2Close}>{'<--'}BACK</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
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
          <li><a onClick={() => {toggle(); toggle2Open();}}>CAREERS</a></li>
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