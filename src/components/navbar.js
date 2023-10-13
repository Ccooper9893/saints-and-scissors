import React from "react";
import logo from '../assets/nav-logo.png';

export default function Navbar({children}) {
  return ( 
<div className="drawer">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
    {/* Navbar */}
    <div className="w-full navbar bg-black text-gray-200 fixed z-50 lg:px-10 p-0">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div className="flex-1 px-2 ml-8"><img className="navImg" src={logo}/></div>
      <div className="flex-2 hidden lg:block">
        <ul className="menu menu-horizontal text-sm tracking-widest font-light space-x-5 mr-40 p-0">
          {/* Navbar menu content here */}
          <li><a className="hover py-0">HOME</a></li>
          <li><a className="hover py-0">ABOUT</a></li>
          <li><a className="hover py-0">SERVICES</a></li>
          <li><a className="hover py-0">CREW</a></li>
          <li><a className="hover py-0">CONTACT</a></li>
        </ul>
      </div>
    </div>
    {children}
  </div> 
  <div className="drawer-side z-50 w-48">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-stone-900 text-gray-200">
      {/* Sidebar content here */}
      <li><a className="hover">HOME</a></li>
      <li><a className="hover">ABOUT</a></li>
      <li><a className="hover">SERVICES</a></li>
      <li><a className="hover">CREW</a></li>
      <li><a className="hover">CONTACT</a></li>
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