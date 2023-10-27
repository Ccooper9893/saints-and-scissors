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

      <img className='absolute centerOfBg mx-auto z-10 mt-80 md:1/2 lg:w-1/3' src={titleAndLogo} alt='Saints and Scissors Logo'></img>
      <button onClick={() => { toggleBooking(true); }} className='absolute centerOfBg top-3/4 tracking-widest z-10 w-60 py-1 text-black text-center text-sm bg-lime-400 bg-opacity-90 shadow shadow-black hover:shadow-none'>BOOK NOW</button>

      <Parallax speed={-25}>
        <Carousel />
      </Parallax>

      <div className='relative z-20'>


        <About />

        <div id='services' className='h-screen bg-stone-200 border-custom border-x-2 border-black'>
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