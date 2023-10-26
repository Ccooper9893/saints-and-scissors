import './App.css';
import { useRef, useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Carousel from './components/misc/Carousel';
import { Parallax, ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import titleAndLogo from './assets/img/logos/title-and-logo.png';

export default function App() {


  //Booking drawer toggle
  const drawerRef2 = useRef(false);
  const toggleBooking = (status) => {
    drawerRef2.current.checked = status;
  };



  return (
    <ParallaxProvider>

      <Navbar toggleBooking={toggleBooking} drawerRef2={drawerRef2}/>

      <div className='absolute h-screen' id='home'>
        <img className='fixed mx-auto z-10 mt-80 centerOfBg md:1/2 lg:w-1/3' src={titleAndLogo} alt='Saints and Scissors Logo'></img>
      </div>

      <Parallax speed={-5}>
        <Carousel />
      </Parallax>

      <div className='relative z-20'>
        <div id='about' className='h-screen bg-black'>
        </div>
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