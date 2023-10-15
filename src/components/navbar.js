import React, { useState, useEffect } from "react";
import logo from '../assets/nav-logo.png';

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("home");

  // Define the section IDs
  const sectionIds = ["home", "about", "stylists", "services", "contact"];

  // Add event listener to handle scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Determine which section is in view based on scroll position
      for (const sectionId of sectionIds) {
        const section = document.getElementById(sectionId);
        if (section && scrollPosition >= section.offsetTop - 200) {
          setActiveTab(sectionId);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    
  }, []);

  return (
    <div className="navbar bg-black p-0 h-10 fixed">
      <div className="lg:navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content z-[1] bg-black w-44 text-gray-200 tracking-widest p-2">
          {sectionIds.map((sectionId) => (
            <li key={sectionId}>
              <a href={`#${sectionId}`} className={activeTab === sectionId ? "active py-2" : "py-2"}>
                {sectionId.toUpperCase()}
              </a>
            </li>
          ))}
          </ul>
        </div>
        <div className="lg:w-full">
            <img className="w-auto lg:mx-auto lg:pl-20" src={logo} alt='Saints and Scissors Logo. Scissors with wings. Phoenix, Arizona'/>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 p-0 text-gray-200 tracking-widest">
          {sectionIds.map((sectionId) => (
            <li key={sectionId}>
              <a href={`#${sectionId}`} className={activeTab === sectionId ? "active py-0" : "py-0"}>
                {sectionId.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

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