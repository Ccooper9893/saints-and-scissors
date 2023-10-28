import './App.css';
import { useRef, useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { ParallaxProvider } from 'react-scroll-parallax';
import About from './components/pages/About';
import Home from './components/pages/Home';
import { useInView, motion } from 'framer-motion';


export default function App() {

  const navAboutRef = useRef(null);
  const isInView = useInView(navAboutRef);
  const [navVisible, setNavVisible] = useState(false);

  //Booking drawer toggle
  const drawerRef2 = useRef(false);
  const toggleBooking = (status) => {
    drawerRef2.current.checked = status;
  };

  useEffect(() => {
    setNavVisible(isInView);
  }, [isInView])

  return (
    <ParallaxProvider>

      <Navbar toggleBooking={toggleBooking} drawerRef2={drawerRef2} navVisible={navVisible} />
      <Home toggleBooking={toggleBooking} />

      {/* Main Pages (About, Services, Stylists, Gallery, Contact) */}
      <div className='relative z-20'>
        <About navAboutRef={navAboutRef} />

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