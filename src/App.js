import './App.css';
import Navbar from './components/Navbar';
import titleAndLogo from './assets/title-and-logo.png';
import Seperator from './components/Seperator';

function App() {
  return (
    <div>
      <Navbar />
      <div className="h-screen w-full carousel carousel-vertical">

        <div className="carousel-item background1" id='home'>
          <img className='fade-in centerOfBg md:w-1/3' src={titleAndLogo} alt='Saints and Scissors Title and logo. Scissors with angel wings.'></img>
        </div>

        <Seperator />

        <div className="carousel-item background4" id='about'>
          <div className='h-full w-full sectionBg'>
            <div className='flex flex-col justify-center w-4/5 lg:w-2/5 pt-16 mt-6 mx-auto text-center'>
              <h2 className='font2 text-4xl lg:text-6xl'>ABOUT S&S</h2>
              <hr className='w-3/4 mx-auto mt-2 mb-4'></hr>
              <p className='text-lg'>At Saints and Scissors, we are more than just hairstylists - we are artists, creators, and visionaries dedicated to transforming your hair into a work of art. With a passion for perfection and an unwavering commitment to making you look and feel your best, we have become a go-to destination for exceptional hair design and care.</p>
              <div className="rating mx-auto mt-4">
                <input type="radio" name="rating-1" className="mask mask-star bg-lime-400" checked />
                <input type="radio" name="rating-1" className="mask mask-star bg-lime-400" checked />
                <input type="radio" name="rating-1" className="mask mask-star bg-lime-400" checked />
                <input type="radio" name="rating-1" className="mask mask-star bg-lime-400" checked />
                <input type="radio" name="rating-1" className="mask mask-star bg-lime-400" checked />
              </div>
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
        </div>*/}
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