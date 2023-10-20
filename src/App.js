import './App.css';
import Navbar from './components/Navbar';
import titleAndLogo from './assets/title-and-logo.png';
import Seperator from './components/Seperator';
import bgImg2 from './assets/slides-home-2.jpg';

function App() {
  return (
    <>
      <Navbar />
      <div className="h-screen w-full carousel carousel-vertical">

        <div className="carousel-item background1" id='home'>
          <img className='fade-in centerOfBg md:w-1/3 pt-16' src={titleAndLogo} alt='Saints and Scissors Title and logo. Scissors with angel wings.'></img>
        </div>

        <Seperator />

        <div className="carousel-item background5" id='about'>
          <div className='h-full w-full sectionBg pt-20 md:pt-20'>
            <div className='flex flex-col justify-center w-4/5 lg:w-2/5 mt-6 mx-auto text-center'>
              <h2 className='font2 text-4xl'>ABOUT S&S</h2>
              <hr className='w-3/4 mx-auto mt-2 mb-4'></hr>
              <p className='text-md lg:text-sm'>At Saints and Scissors, we are more than just hairstylists - we are artists, creators, and visionaries dedicated to transforming your hair into a work of art. With a passion for perfection and an unwavering commitment to making you look and feel your best, we have become a go-to destination for exceptional hair design and care.</p>
            </div>
          </div>
        </div>

        <Seperator />

      </div>
    </>
  );
}

export default App;