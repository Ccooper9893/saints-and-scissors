import './App.css';
import { useRef, useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Carousel from './components/misc/Carousel';
import { Parallax, ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import titleAndLogo from './assets/img/logos/title-and-logo.png';
import About from './components/pages/About';

export default function App() {


  //Booking drawer toggle
  const drawerRef2 = useRef(false);
  const toggleBooking = (status) => {
    drawerRef2.current.checked = status;
  };



  return (
    <ParallaxProvider>

      <Navbar toggleBooking={toggleBooking} drawerRef2={drawerRef2} />

      <img className='fixed centerOfBg mx-auto z-10 mt-80 md:1/2 lg:w-1/3' src={titleAndLogo} alt='Saints and Scissors Logo'></img>
      <button onClick={() => { toggleBooking(true); }} className='fixed centerOfBg bottom-10 tracking-widest z-10 w-72 text-center text-sm py-2 text-md text-stone-200 bg-black bg-opacity-50 shadow shadow-stone-500 hover:bg-opacity-80'>BOOK NOW</button>

      <Parallax speed={-30}>
        <Carousel />
      </Parallax>

      <div className='relative z-20'>


        <About />

        <div id='services' className='h-screen bg-green-900'>
        </div>


        <div id='stylists' className='h-screen bg-green-200'>
        </div>


        <div id='gallery' className='h-screen bg-green-400'>
        </div>


        <div id='contact' className='h-screen bg-green-700'>
        </div>


      </div>
    </ParallaxProvider>
  );
};