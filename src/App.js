import './App.css';
import Navbar from './components/Navbar';
import titleAndLogo from './assets/title-and-logo.png';
import Seperator from './components/Seperator';

import background1 from './assets/slides-home-1.jpg';
import background2 from './assets/slides-home-1.jpg';
import background3 from './assets/slides-home-1.jpg';
import background4 from './assets/slides-home-4.jpg';

function App() {
  return (
    <div>
      <Navbar />
      <div className="h-screen w-full carousel carousel-vertical">

        <div className="carousel-item background9" id='home'>
          <img className='fade-in centerOfBg' src={titleAndLogo} alt='Saints and Scissors Title and logo. Scissors with angel wings.'></img>
        </div>

        <Seperator />
        
        <div className="carousel-item background4" id='about'>
          <div className='sectionBg flex justify-center items-baseline pt-24 md:pt-20 w-full lg:h-1/2'>
              <div className='w-4/5 lg:w-1/2 h-1/2 mb-6 mx-auto lg:pt-10 text-center'>
                  <h1 className='font2 text-5xl'>ABOUT S&S</h1>
                  <hr className='mx-auto md:w-1/2 mt-2 md:mt-4'></hr>
                  <p className='mt-3 lg:text-xl'>At Saints and Scissors, we are more than just hairstylists - we are artists, creators, and visionaries dedicated to transforming your hair into a work of art. With a passion for perfection and an unwavering commitment to making you look and feel your best, we have become a go-to destination for exceptional hair design and care.</p>
              </div>
          </div>
        </div>

        <Seperator />
{/* 
        <div className="carousel-item background3" id='stylists'>
        <div className='sectionBg flex justify-center items-center w-full lg:h-1/2'>
              <div className='h-1/2 mb-6 mx-10 md:mx-40 lg:mx-60 pt-0 lg:pt-10 text-center'>
                  <h1 className='font2 text-5xl lg:text-6xl'>ABOUT S&S</h1>
                  <hr className='mx-1/2 mt-2'></hr>
                  <p className='mt-3 lg:text-xl'>At Saints and Scissors, we are more than just hairstylists - we are artists, creators, and visionaries dedicated to transforming your hair into a work of art. With a passion for perfection and an unwavering commitment to making you look and feel your best, we have become a go-to destination for exceptional hair design and care.</p>
              </div>
          </div>
        </div>

        <Seperator />

        <div className="carousel-item background4" id='services'>
        <div className='sectionBg flex justify-center items-center w-full lg:h-1/2'>
              <div className='h-1/2 mb-6 mx-10 md:mx-40 lg:mx-60 pt-0 lg:pt-10 text-center'>
                  <h1 className='font2 text-5xl lg:text-6xl'>ABOUT S&S</h1>
                  <hr className='mx-1/2 mt-2'></hr>
                  <p className='mt-3 lg:text-xl'>At Saints and Scissors, we are more than just hairstylists - we are artists, creators, and visionaries dedicated to transforming your hair into a work of art. With a passion for perfection and an unwavering commitment to making you look and feel your best, we have become a go-to destination for exceptional hair design and care.</p>
              </div>
          </div>
        </div>
        
        <Seperator />

        <div className="carousel-item background4" id='gallery'>
        <div className='sectionBg flex justify-center items-center w-full lg:h-1/2'>
              <div className='h-1/2 mb-6 mx-10 md:mx-40 lg:mx-60 pt-0 lg:pt-10 text-center'>
                  <h1 className='font2 text-5xl lg:text-6xl'>ABOUT S&S</h1>
                  <hr className='mx-1/2 mt-2'></hr>
                  <p className='mt-3 lg:text-xl'>At Saints and Scissors, we are more than just hairstylists - we are artists, creators, and visionaries dedicated to transforming your hair into a work of art. With a passion for perfection and an unwavering commitment to making you look and feel your best, we have become a go-to destination for exceptional hair design and care.</p>
              </div>
          </div>
        </div>

        <Seperator />

        <div className="carousel-item background4" id='contact'>
        <div className='sectionBg flex justify-center items-center w-full lg:h-1/2'>
              <div className='h-1/2 mb-6 mx-10 md:mx-40 lg:mx-60 pt-0 lg:pt-10 text-center'>
                  <h1 className='font2 text-5xl lg:text-6xl'>ABOUT S&S</h1>
                  <hr className='mx-1/2 mt-2'></hr>
                  <p className='mt-3 lg:text-xl'>At Saints and Scissors, we are more than just hairstylists - we are artists, creators, and visionaries dedicated to transforming your hair into a work of art. With a passion for perfection and an unwavering commitment to making you look and feel your best, we have become a go-to destination for exceptional hair design and care.</p>
              </div>
          </div>
        </div>
      </div>
    </div> */}
  );
}

export default App;

/*
      <header className='background1'>
        <img className='mx-auto pt-56 md:pt-36 fade-in' src={titleAndLogo}></img>
      </header>
      <div className='h-96 bg-slate-400'></div>
      <a className='fixed bottom-0 left-1/2 transform -translate-x-1/2'><img className='h-8 mx-auto opacity-50' src={pointer} alt="Arrow" /></a>
    </div>
*/