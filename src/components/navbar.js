import React from "react";
import logo from '../assets/nav-logo.png';

export default function Navbar() {
  return ( 
<div className="navbar bg-black p-0 h-10 fixed">
  <div className="lg:navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content z-[1] bg-black w-52 text-gray-200 tracking-widestp-2">
      <li><a className="hover py-2">HOME</a></li>
          <li><a className="hover py-2">ABOUT</a></li>
          <li><a className="hover py-2">SERVICES</a></li>
          <li><a className="hover py-2">CREW</a></li>
          <li><a className="hover py-2">CONTACT</a></li>
      </ul>
    </div>
    <div className="lg:w-full">
      <a>
        <img className="w-auto lg:ml-48" src={logo} />
      </a>
    </div>

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 p-0 text-gray-200 tracking-widest">
    <li><a className="hover py-0">HOME</a></li>
          <li><a className="hover py-0">ABOUT</a></li>
          <li><a className="hover py-0">SERVICES</a></li>
          <li><a className="hover py-0">CREW</a></li>
          <li><a className="hover py-0">CONTACT</a></li>
    </ul>
  </div>
</div>
  ) };

  /*
  <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li tabIndex={0}>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
  
  */