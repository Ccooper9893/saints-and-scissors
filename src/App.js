import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import titleAndLogo from './assets/title-and-logo.png';

function App() {
  return (
    <div>
      <Navbar>
        <div className='bgimg-1'>
          <div className='z-0 w-full'>
            <img className='mx-auto mt-36' src={titleAndLogo} alt='Saints and Scissors Logo'></img>
          </div>
        </div>
        <div className='bg-black h-96 text-center'>
          <h1 className='title text-5xl md:text-7xl my-10 pb-4 mx-auto'>ABOUT S&S</h1>
          <p className=' mx-10 lg:mx-60 text text-lg'>At Saints and Scissors, we are more than just hairstylists - we are artists, creators, and visionaries dedicated to transforming your hair into a work of art. With a passion for perfection and an unwavering commitment to making you look and feel your best, we have become a go-to destination for exceptional hair design and care.</p>
        </div>
        <div className='bgimg-2'></div>
        <div className='bgimg-3'></div>
        <div className='bgimg-4'></div>
        <Footer />
      </Navbar>
    </div>
  );
}

export default App;
