import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import titleAndLogo from './assets/title-and-logo.png';

function App() {
  return (
    <div>
      <Navbar />
        <div className='bgimg-1'>
          <div className='z-0 w-full'>
            <img className='mx-auto pt-80 md:pt-36' src={titleAndLogo} alt='Saints and Scissors Logo'></img>
          </div>
        </div>
        <div className='bg-black text-center py-12' id='about'>
          <h1 className='title text-5xl md:text-7xl mx-auto py-6'>ABOUT S&S</h1>
          <div className='hr'></div>
          <p className='mx-10 lg:mx-60 text text-xl py-12'>At Saints and Scissors, we are more than just hairstylists - we are artists, creators, and visionaries dedicated to transforming your hair into a work of art. With a passion for perfection and an unwavering commitment to making you look and feel your best, we have become a go-to destination for exceptional hair design and care.</p>
        </div>
        <div className='bgimg-2'>
          <div className='relative text-center top-48 lg:top-64 text-slate-300'>
            <div>
              <div className='mx-4 lg:mx-72 py-8 text-white quoteBg'>
                <p className='text-3xl lg:text-5xl'>&ldquo;Fashions fade, style is eternal.&rdquo;</p>
                <p className='text-xl lg:text-2xl'><em>– Yves Saint-Laurent</em></p>
                </div>
            </div>
          </div>
        </div>
        <div className='bg-black h-96 text-center'>
        </div>
        <div className='bgimg-3'></div>
        <div className='bgimg-4'></div>
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