import './App.css';
import { useRef, useState, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { ParallaxProvider } from 'react-scroll-parallax';

import Navbar from './components/Navbar';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import bgBtm from './assets/img/backgrounds/bottom-white.png';

export default function App() {

  const navAboutRef = useRef(null);
  const navServicesRef = useRef(null);
  const navStylistsRef = useRef(null);
  const navGalleryRef = useRef(null);
  const navContactRef = useRef(null);

  const isInView = useInView(navAboutRef);
  const isInView2 = useInView(navServicesRef);
  const isInView3 = useInView(navStylistsRef);
  const isInView4 = useInView(navGalleryRef);
  const isInView5 = useInView(navContactRef);
  
  const [navVisible, setNavVisible] = useState(false);

  //Booking drawer toggle
  const drawerRef2 = useRef(false);
  const toggleBooking = (status) => {
    drawerRef2.current.checked = status;
  };

  useEffect(() => {
    if(isInView || isInView2 || isInView3 || isInView4 || isInView5) {
      setNavVisible(true);
    } else {
      setNavVisible(false);
    };

  }, [isInView, isInView2, isInView3, isInView4, isInView5])

  return (
    
    <ParallaxProvider>

      <Navbar toggleBooking={toggleBooking} drawerRef2={drawerRef2} navVisible={navVisible} />
      <div className='absolute h-screen w-full -bottom-24 md:bottom-0 md:fixed z5'>
          <div className="h-screen bg-cover bg-left" style={{ backgroundImage: `url(${bgBtm})` }}>
          </div>
          </div>
      <Home toggleBooking={toggleBooking}/>

      {/* Main Pages (About, Services, Stylists, Gallery, Contact) */}
      <div className='relative z-20 bg-black' ref={navAboutRef}>

        <About navAboutRef={navAboutRef} />
        <Services toggleBooking={toggleBooking} navServicesRef={navServicesRef} />
        {/* <div id='services' className='h-screen bg-black' ref={navServicesRef}>
          <h2 className='text-6xl'>We Know Hair.</h2>
        </div> */}

        <div id='stylists' className='h-screen bg-stone-200' ref={navStylistsRef}>
        </div>

        <div id='gallery' className='h-screen bg-stone-400' ref={navGalleryRef}>
        </div>

        <div id='contact' className='h-screen bg-stone-700' ref={navContactRef}>
        </div>
      </div>

    </ParallaxProvider>
  );
};