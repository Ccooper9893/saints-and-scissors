import './App.css';
import Navbar from './components/Navbar';
import titleAndLogo from './assets/logos/title-and-logo.png';
import Seperator from './components/Seperator';
import aboutBg from './assets/backgrounds/slides-home-3.jpg';

import amanda from './assets/stylists/amanda.png';
import kendal from './assets/stylists/kendal.jpg';
import cc from './assets/stylists/cc-1.jpg';
import juli from './assets/stylists/juli.jpg';
import paul from './assets/stylists/paul.jpg';
import sherri from './assets/stylists/sherri.jpg';


function App() {
  return (
    <>
      <Navbar />
      <div className="h-screen w-full carousel carousel-vertical">

        <div className="carousel-item background1" id='home'>
          <img className='fade-in-1 centerOfBg md:w-1/3 pt-16' src={titleAndLogo} alt='Saints and Scissors Title and logo. Scissors with angel wings.'></img>
        </div>

        <Seperator />

        <div className="carousel-item backgroundAbout" id='about'>
          <div className='h-full w-full bg-black pt-20 md:pt-20'>
            <div className='flex flex-col justify-center w-4/5 lg:w-3/5 mt-6 mx-auto text-center'>
              <h2 className='font2 text-4xl lg:text-5xl text-lime-600'>Unlock Your Hair's Potential.</h2>
              <hr className='w-3/4 mx-auto mt-2 mb-4'></hr>
              <p className='text-xl'>At Saints and Scissors, we are more than just hairstylists - we are artists, creators, and visionaries dedicated to transforming your hair into a work of art. With a passion for perfection and an unwavering commitment to making you look and feel your best, we have become a go-to destination for exceptional hair design and care.</p>
            </div>
            <div className='relative w-full md:w-1/3 mt-6 lg:mt-6 mx-auto'>
              <img src={aboutBg} alt='Inside of Saints and Scissors salon. Couch and multiple barber chairs. Coloristic interior design with an emphasize on a lime green, punk rock style.'></img>
              <p className='absolute w-3/4 p-4 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-black bg-opacity-50'><em>“Life is more beautiful when you meet the right hairdresser.”<br></br><small className='mt-3 text-sm'> – Peter Coppola</small></em></p>
            </div>
          </div>
        </div>

        <Seperator />

        <div className="carousel-item backgroundAbout" id='stylists'>
          <div className='h-full w-full bg-black pt-20 md:pt-20'>
            <div className='flex flex-col justify-center w-4/5 lg:w-3/5 mt-6 mx-auto text-center'>
              <h2 className='font2 text-4xl lg:text-5xl'>Meet the Team</h2>
              <hr className='w-3/4 mx-auto mt-2 mb-4'></hr>
            </div>
          </div>
        </div>

        <Seperator />

      </div>
    </>
  );
}

export default App;