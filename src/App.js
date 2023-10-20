import './App.css';
import Navbar from './components/Navbar';
import titleAndLogo from './assets/logos/title-and-logo.png';
import Seperator from './components/Seperator';
import aboutBg from './assets/backgrounds/paintedGirl.png';
import Rating from './components/Rating';
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
          <div className='h-full w-full bg-black pt-28 md:pt-14'>
            <div className='flex flex-col justify-center lg:w-3/5 mt-6 mx-3 lg:mx-auto text-center'>
              
              <h2 className='font2 text-5xl text-white mb-4'>Unlock Your Hair's Potential.</h2>
              <p className='text-lg'>At Saints and Scissors, we are more than just hairstylists - we are <strong>artists</strong>, <strong>creators</strong>, and <strong>visionaries</strong> dedicated to transforming your hair into a work of art. With a passion for perfection and an unwavering commitment to making you look and feel your best, we have become a go-to destination for exceptional hair design and care.</p>
              <hr className='w-4/5 lg:w-3/4 mx-auto my-2'></hr>
              <div className='flex flex-col justify-center my-4 text-center '>
                <p class='backdrop-brightness-50 font2 text-lg'>"Best salon experience I have ever had."</p>
                  <div className='mx-auto'><Rating /></div>
                  <small><em>- Ashely A.</em></small>
              </div>

            </div>
            <div className='relative w-full md:w-1/3 mt-5 lg:mt-6 mx-auto'>
              <img class='opacity-80' src={aboutBg} alt='Inside of Saints and Scissors salon. Couch and multiple barber chairs. Coloristic interior design with an emphasize on a lime green, punk rock style.'></img>
              {/* <p className='absolute w-3/4 p-4 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-black bg-opacity-75'><em>“Life is more beautiful when you meet the right hairdresser.”<br></br><small className='mt-3 text-sm'> – Peter Coppola</small></em></p> */}
            </div>
          </div>
        </div>

        <Seperator />

        <div className="carousel-item bg-black" id='stylists'>
          <div className='h-full w-full pt-28 md:pt-20'>
            <div className='flex flex-col justify-center w-full lg:w-3/5 mt-6 mx-auto text-center'>
              <h2 className='font2 text-5xl text-white mb-4'>Discover Our Stylist Team</h2>
              <hr className='w-3/4 mx-auto mb-4'></hr>
              <div className='flex flex-row flex-wrap lg:mx-28 justify-center text-4xl'>
          <div className='p-3 w-52'>
            <img className='selfie' src={sherri} alt='Sherri headshot'></img>
            <h2 className='title'>Sherri</h2>
          </div>
          <div className='p-3 w-52'>
            <img className='selfie' src={paul} alt='Sherri headshot'></img>
            <h2 className='title'>Paul</h2>
          </div>
          <div className='p-3 w-52'>
            <img className='selfie' src={cc} alt='Sherri headshot'></img>
            <h2 className='title'>CC</h2>
          </div>
          <div className='p-3 w-52'>
            <img className='selfie' src={kendal} alt='Sherri headshot'></img>
            <h2 className='title'>Kendal</h2>
          </div>
          <div className='p-3 w-52'>
            <img className='selfie' src={juli} alt='Sherri headshot'></img>
            <h2 className='title'>Juli</h2>
          </div>
          <div className='p-3 w-52'>
            <img className='selfie' src={amanda} alt='Sherri headshot'></img>
            <h2 className='title'>Amanda</h2>
          </div>
        </div>
            </div>
          </div>
        </div>

        <Seperator />

      </div>
    </>
  );
}

export default App;