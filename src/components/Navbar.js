import React, { useRef, useState, useEffect } from "react";
import logo from '../assets/img/logos/nav-logo.png';
import calenderIcon from '../assets/img/icons/calender-icon.png';
import logoSm from '../assets/img/logos/logo-bg.png';
import logoNoLogo from '../assets/img/logos/nav-nologo-.png';
import '../assets/styles/nav.css';

export default function Navbar({ children }) {

  const drawerRef = useRef(false);
  const drawerRef2 = useRef(false);

  const toggleNav = () => {
    drawerRef.current.checked = false;
  };

  const toggleBooking = (status) => {
    drawerRef2.current.checked = status;
  };

  const [activeTab, setActiveTab] = useState("home");

  // Define the section IDs
  const availablePages = ["home", "about", "stylists", "services", "gallery", "contact"];

  // Add event listener to handle scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      console.log(scrollPosition);
      // Determine which section is in view based on scroll position
      for (const page of availablePages) {
        const section = document.getElementById(page);
        if (section && scrollPosition >= section.offsetTop + 100) {
          setActiveTab(page);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" ref={drawerRef} />
      <div className="drawer-content flex flex-col">

        {/* NAVBAR START */}
        <div className="fixed navbar z-20 justify-between lg:justify-around p-0 bg-black shadow-2xl shadow-black">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
          </div>
          <div className="hidden md:flex md:justify-center lg:w-1/4 lg:ml-5 ">
            <a href="home" className="mx-auto" aria-label="Go to Home page">
              <img src={logo} alt="Hair stylist clippers with wings logo"></img>
            </a>
          </div>
          <div className="md:hidden w-1/5">
            <a href="#home" className="mx-auto" aria-label="Go to Home page">
              <img className="max-h-20 ml-1" src={logoSm} alt="Hair stylist clippers with wings logo"></img>
            </a>
          </div>

          {/* LARGE SCREEN NAV BAR */}
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal">
              {availablePages.map((page) => {
                return (
                  <li key={page}>
                    <a
                      className={activeTab === page ? 'navBtn border-b border-lime-400' : 'navBtn focus:border-lime-400 bg-black'}
                      href={`#${page}`}
                      aria-label="Go to About page">
                      {page.toUpperCase()}
                    </a>
                  </li>
                )
              })
              }
            </ul>
          </div>

          {/* CALENDER NAV BAR BUTTON */}
          <div className="lg:w-1/4 justify-center">
            <button className="btn btn-ghost px-3" onClick={() => { toggleBooking(true); }} aria-label="Open Vagaro booking drawer">
              <img className="calender" src={calenderIcon} alt="calender icon, book now with vigaro"></img>
            </button>

          </div>
        </div>
        {/* NAVBAR END */}

        {/* BOOK NOW BANNER BUTTON */}
        <div className="relative">
          <div className="absolute w-36 md:w-44 top-custom z-10 left-1/2 transform -translate-x-1/2">
            <button className="normal-case w-full pt-1 shadow-md hover:shadow-stone-600 shadow-black text-black bg-lime-500" onClick={() => { toggleBooking(true); }} aria-label="Open Vagaro booking drawer">BOOK NOW</button>
          </div>
        </div>

        {/* BEGIN MAIN PAGE CONTENT */}
          {/* BEGIN Booking Drawer */}
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" ref={drawerRef2} />
          <div className="drawer-content mt-16">
            {children}
          </div>
          <div className="drawer-side z-20">
            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
            <div className="h-full w-full bg-black">
              <div className="relative w-full top-0 text-center h-16">
                <img className="mx-auto p-3" src={logoSm} alt="Hair stylist clippers with wings logo" />
                <button onClick={() => { toggleBooking(false); }} className="btn btn-sm absolute top-0 right-0 h-16 w-16 text-white" aria-label="Close Vagaro booking drawer">✕</button>
              </div>
              {/* <iframe className="h-full w-full" src="https://www.vagaro.com/saintsandscissors/services" title="W3Schools Free Online Web Tutorials"></iframe> */}
            </div>
          </div>
        </div>
          {/* END Booking Drawer */}
        {/* END MAIN PAGE CONTENT */}


      </div>
      {/* BEGIN NAV MENU DRAWER */}
      <div className="drawer-side z-20">
        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-3/5 min-h-full bg-black">
          <img className="mx-auto mb-4" src={logoNoLogo} alt="Saints and Scissors"></img>
          {/* Sidebar content here */}
          {availablePages.map((page) => {
            return (
              <li className={activeTab === page ? 'w-1/2 border-l-2 mb-2 border-lime-400' : 'mb-2 w-1/2'} key={`${page}2`}>
                <a
                  className={activeTab === page ? 'navBtn py-2 tracking-wider' : 'navBtn py-2 tracking-wider'}
                  href={`#${page}`}
                  aria-label="Go to  page"
                  onClick={toggleNav}
                >
                  {page.toUpperCase()}
                </a>
              </li>
            )
          })
          }
        </ul>
      </div>
      {/* END NAV MENU DRAWER */}
    </div>
  );
};