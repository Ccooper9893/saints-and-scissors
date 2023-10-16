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
        <div className="carousel-item background1" id='home'>
          <img className='fade-in centerOfBg' src={titleAndLogo} alt='Saints and Scissors Title and logo. Scissors with angel wings.'></img>
        </div>
        <Seperator />
        <div className="carousel-item background2" id='about'>
          <div className='flex justify-center items-center w-full h-3/5 sectionBg'>
              <div className='h-1/2 w-full text-center mx-10 md:mx-40 pt-0 lg:pt-10'>
                  <h1 className='text-4xl font2'>ABOUT S&S</h1>
                  <hr className='mx-1/2 mt-2'></hr>
                  <p className='mt-3'>At Saints and Scissors, we don't just cut hair; we sculpt, shape, and craft it like a work of art. Our scissors are our chisels, and your hair is the beautiful, unique marble we create masterpieces from. With a passion for style and an unwavering commitment to the art of hairdressing, we are dedicated to making every visit to our salon a truly transformative and artistic experience.</p>
              </div>
          </div>
        </div>
        <Seperator />
        <div className="carousel-item background3" id='stylists'>

        </div>
        <Seperator />
        <div className="carousel-item background4" id='services'>

        </div>
        <div className="carousel-item background4" id='gallery'>

        </div>
        <div className="carousel-item background4" id='contact'>

        </div>
      </div>
    </div>
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