import './App.css';
import { useRef, useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { ParallaxProvider } from 'react-scroll-parallax';
import About from './components/pages/About';
import Home from './components/pages/Home';
import { useInView } from 'framer-motion';


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

      <Home toggleBooking={toggleBooking}/>

      {/* Main Pages (About, Services, Stylists, Gallery, Contact) */}
      <div className='relative z-20'>
        <About navAboutRef={navAboutRef} />

        <div id='services' className='h-screen bg-black' ref={navServicesRef}>
        </div>

        <div id='stylists' className='h-screen bg-green-200' ref={navStylistsRef}>
        </div>

        <div id='gallery' className='h-screen bg-green-400' ref={navGalleryRef}>
        </div>

        <div id='contact' className='h-screen bg-green-700' ref={navContactRef}>
        </div>
      </div>

    </ParallaxProvider>
  );
};