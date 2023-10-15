import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
// import Stylists from './components/About';
// import Services from './components/Services';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
import titleAndLogo from './assets/title-and-logo.png';
import pointer from './assets/pointer.png';

import background1 from './assets/slides-home-1.jpg';
import background2 from './assets/slides-home-1.jpg';
import background3 from './assets/slides-home-1.jpg';
import background4 from './assets/slides-home-4.jpg';

function App() {
  return (
    <div>
      <Navbar />
      <div className="h-screen w-full carousel carousel-vertical">
        <div className="carousel-item background1">
          <img className='fade-in centerOfBg' src={titleAndLogo}></img>
        </div>
        <div className="carousel-item background2">

        </div>
        <div className="carousel-item background2">

        </div>
        <div className="carousel-item background3">

        </div>
        <div className="carousel-item background4">

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