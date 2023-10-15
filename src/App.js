import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Prices from './components/Prices';
import ContactUs from './components/Contact';
import titleAndLogo from './assets/title-and-logo.png';
import kendalPic from "./assets/kendal.jpg";
import sherriPic from "./assets/sherri.jpg";
import paulPic from "./assets/paul.jpg";
import juliPic from "./assets/juli.jpg";
import ccPic from "./assets/cc-1.jpg";
import amandaPic from "./assets/amanda.png";

function App() {
  return (
    <div>
      <Navbar />
      <div className='bgimg-1' id='home'>
        <div className='z-0 w-full'>
          <img className='mx-auto pt-64 md:pt-36 fade-in' src={titleAndLogo} alt='Saints and Scissors Logo'></img>
        </div>
      </div>
      <div id='about'></div>
      <div className='bg-stone-950 shadowY text-center py-8'>
        <h1 className='title text-5xl md:text-7xl mx-auto py-6'>ABOUT S&S</h1>
        <div className='hr'></div>
        <p className='mx-10 lg:mx-60 text lg:text-2xl py-12'>At Saints and Scissors, we are more than just hairstylists - we are artists, creators, and visionaries dedicated to transforming your hair into a work of art. With a passion for perfection and an unwavering commitment to making you look and feel your best, we have become a go-to destination for exceptional hair design and care.</p>
      </div>
      <div className='bgimg-2'>
        <div className='relative text-center top-64 text-slate-300'>
          <div>
            <div className='mx-4 lg:mx-72 py-8 text-white quoteBg'>
              <p className='text-2xl lg:text-4xl pb-5'>&ldquo;Fashions fade, style is eternal.&rdquo;</p>
              <p className='text-xl lg:text-2xl'><em>– Yves Saint-Laurent</em></p>
              <div className="divider"></div>
            </div>
          </div>
        </div>
      </div>
      <div id='stylists'></div>
      <div className='floralBg shadowY text-center py-8'>
        <h1 className='title text-5xl md:text-7xl mx-auto py-6'>STYLISTS</h1>
        <div className='hr'></div>
        <div className='flex flex-row flex-wrap lg:mx-28 justify-center text-4xl'>
          <div className='p-6'>
            <img className='selfie rounded-full' src={sherriPic} alt='Sherri headshot'></img>
            <h2 className='title'>Sherri</h2>
          </div>
          <div className='p-6'>
            <img className='selfie rounded-full' src={paulPic} alt='Sherri headshot'></img>
            <h2 className='title'>Paul</h2>
          </div>
          <div className='p-6'>
            <img className='selfie rounded-full' src={ccPic} alt='Sherri headshot'></img>
            <h2 className='title'>CC</h2>
          </div>
          <div className='p-6'>
            <img className='selfie rounded-full' src={kendalPic} alt='Sherri headshot'></img>
            <h2 className='title'>Kendal</h2>
          </div>
          <div className='p-6'>
            <img className='selfie rounded-full' src={juliPic} alt='Sherri headshot'></img>
            <h2 className='title'>Juli</h2>
          </div>
          <div className='p-6'>
            <img className='selfie rounded-full' src={amandaPic} alt='Sherri headshot'></img>
            <h2 className='title'>Amanda</h2>
          </div>
        </div>
      </div>
      <div className='bgimg-3'>
        <div className='relative text-center top-48 lg:top-64 text-slate-300'>
          <div className='mx-4 lg:mx-72 py-8 text-white quoteBg'>
            <p className='text-2xl lg:text-4xl pb-5'>&ldquo;To sculpt a head of Hair with Scissors is an Art Form. It’s In Pursuit Of Art.&rdquo;</p>
            <p className='text-xl lg:text-2xl'><em>– Vidal Sassoon</em></p>
          </div>
        </div>
      </div>
      <div id='services'></div>
      <div className='bg-stone-950 shadowY text-center py-8'>
        <h1 className='title text-5xl md:text-7xl mx-auto py-6'>SERVICES</h1>
        <div className='hr'></div>
        <Prices />
      </div>

      <div className='bgimg-4'>
        <div className='relative text-center top-48 lg:top-64 text-slate-300'>
          <div className='mx-4 lg:mx-72 py-8 text-white quoteBg'>
            <p className='text-2xl lg:text-4xl pb-5'>&ldquo;A woman who cuts her hair is about to change her life.&rdquo;</p>
            <p className='text-xl lg:text-2xl'><em>– Coco Chanel</em></p>
          </div>
        </div>
      </div>
      <div id='contact'></div>
      <div className='bg-stone-950 text-center py-8'>
        <h1 className='title text-5xl md:text-7xl mx-auto py-6'>CONTACT</h1>
        <div className='hr'></div>
        <div className='flex flex-col lg:flex-row mx-4 lg:mx-40 pt-10'>
          <div>
          </div>
          <div className='w-full'>
            <ContactUs />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;


/* 
Virtual Tour Modal
        <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>open modal</button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      if there is a button in form, it will close the modal
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <iframe className='tour' src="https://www.google.com/maps/embed?pb=!4v1697173625151!6m8!1m7!1sPp6lmciY0gob81SNNWVokw!2m2!1d33.49670251421148!2d-111.9313880580029!3f320!4f0!5f0.7820865974627469"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='Saints and Scissors 360 Tour Google'></iframe>
  </div>
</dialog>
*/