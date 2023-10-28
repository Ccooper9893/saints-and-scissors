import './App.css';
import { useRef, useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { ParallaxProvider } from 'react-scroll-parallax';
import About from './components/pages/About';
import Home from './components/pages/Home';
import { useInView, motion } from 'framer-motion';


export default function App() {

  const navRef = useRef(null);
  const isInView = useInView(navRef);
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
      <Home toggleBooking={toggleBooking} navRef={navRef}/>

      {/* Main Pages (About, Services, Stylists, Gallery, Contact) */}
      <div className='relative z-20'>
        <About/>

        <div id='services' className='h-screen bg-black'>
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