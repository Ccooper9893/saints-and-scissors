import './App.css';
import { useRef, useState, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { ParallaxProvider } from 'react-scroll-parallax';

import Navbar from './components/Navbar';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Stylists from './components/pages/Stylists';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';

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
    if (isInView || isInView2 || isInView3 || isInView4 || isInView5) {
      setNavVisible(true);
    } else {
      setNavVisible(false);
    };

  }, [isInView, isInView2, isInView3, isInView4, isInView5])

  return (

    <ParallaxProvider>

      <Navbar toggleBooking={toggleBooking} drawerRef2={drawerRef2} navVisible={navVisible} />

      <Home toggleBooking={toggleBooking} />

      {/* Main Pages (About, Services, Stylists, Gallery, Contact) */}
      <div className='relative z-20 bg-stone-800' ref={navAboutRef}>
        <div className='w-full mx-auto'>

          <About toggleBooking={toggleBooking} navAboutRef={navAboutRef} />

          <Services toggleBooking={toggleBooking} navServicesRef={navServicesRef} />

          <Stylists toggleBooking={toggleBooking} navStylistsRef={navStylistsRef} />

          <Contact toggleBooking={toggleBooking} navContactRef={navContactRef} />

          <Footer />

        </div>
      </div>
    </ParallaxProvider>
  );
};