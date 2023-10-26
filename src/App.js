import './App.css';
import { useRef } from 'react';
import Navbar from './components/Navbar';
import Carousel from './components/misc/Carousel';
import { Parallax, ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import titleAndLogo from './assets/img/logos/title-and-logo.png';

export default function App() {

  const toggleBooking = (status) => {
    drawerRef2.current.checked = status;
  };

  const drawerRef2 = useRef(false);

  return (
    <ParallaxProvider>

      <Navbar toggleBooking={toggleBooking} drawerRef2={drawerRef2} />


        <img className='fixed mx-auto z-10 mt-44 centerOfBg' src={titleAndLogo} alt='Saints and Scissors Logo'></img>

      {/* </Parallax> */}
      <Parallax speed={-5}>
      <Carousel />
      </Parallax>
      <div className='relative z-20'>

        <div id='1' className='h-screen bg-black'>
        </div>
        <div id='2' className='h-screen bg-green-900'>
        </div>
        <div id='3' className='h-screen bg-green-200'>
        </div>
        <div id='4' className='h-screen bg-green-400'>
        </div>
        <div id='5' className='h-screen bg-green-700'>
        </div>
      </div>
    </ParallaxProvider>
  );
};