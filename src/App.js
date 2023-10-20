import './App.css';
import Navbar from './components/Navbar';
import titleAndLogo from './assets/logos/title-and-logo.png';
import Seperator from './components/Seperator';
import aboutBg from './assets/backgrounds/slides-home-3.jpg';

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
              <h2 className='font2 text-5xl'>Unlock Your Hair's Potential.</h2>
              <hr className='w-3/4 mx-auto mt-2 mb-4'></hr>
              <p className='text-lg'>At Saints and Scissors, we are more than just hairstylists - we are artists, creators, and visionaries dedicated to transforming your hair into a work of art. With a passion for perfection and an unwavering commitment to making you look and feel your best, we have become a go-to destination for exceptional hair design and care.</p>
            </div>
            <div className='relative w-full md:w-1/3 mt-6 lg:mt-6 mx-auto'>
            <img src={aboutBg}></img>
            <p className='absolute text-white text-center left-1/2 top-1/2'>I LOVE SNIFFING <br></br>HAIR</p>
            </div>
          </div>
        </div>

        <Seperator />

        <div className="carousel-item" id='about'>
          <div className='h-3/4 w-full bg-black pt-20 md:pt-20 box-border'>
            <div className='flex flex-col justify-center w-4/5 mt-6 mx-auto text-center'>
              <h2 className='font2 text-4xl'>ABOUT S&S</h2>
              <hr className='w-3/4 mx-auto mt-2 mb-4'></hr>
              <p className='text-lg'>At Saints and Scissors, we are more than just hairstylists - we are artists, creators, and visionaries dedicated to transforming your hair into a work of art. With a passion for perfection and an unwavering commitment to making you look and feel your best, we have become a go-to destination for exceptional hair design and care.</p>
              
            </div>
          </div>
        </div>

        {/* <div className="carousel-item background5" id='about'>
          <div className='h-full w-full sectionBg pt-20 md:pt-20'>
            <div className='flex flex-col justify-center w-4/5 lg:w-2/5 mt-6 mx-auto text-center'>
              <h2 className='font2 text-4xl'>ABOUT S&S</h2>
              <hr className='w-3/4 mx-auto mt-2 mb-4'></hr>
              <p className='text-lg'>At Saints and Scissors, we are more than just hairstylists - we are artists, creators, and visionaries dedicated to transforming your hair into a work of art. With a passion for perfection and an unwavering commitment to making you look and feel your best, we have become a go-to destination for exceptional hair design and care.</p>
            </div>
          </div>
        </div> */}

        <Seperator />

      </div>
    </>
  );
}

export default App;