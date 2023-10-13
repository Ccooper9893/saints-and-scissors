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
            <img className='mx-auto pt-36' src={titleAndLogo} alt='Saints and Scissors Logo'></img>
          </div>
        </div>
        <div className='bg-black text-center py-12'>
          <h1 className='title text-5xl md:text-7xl mx-auto'>ABOUT S&S</h1>
          <div className='hr'></div>
          <p className=' mx-10 lg:mx-60 text text-lg pb-6'>At Saints and Scissors, we are more than just hairstylists - we are artists, creators, and visionaries dedicated to transforming your hair into a work of art. With a passion for perfection and an unwavering commitment to making you look and feel your best, we have become a go-to destination for exceptional hair design and care.</p>
        </div>
        <div className='bgimg-2'></div>
        <div className='bg-black h-96 text-center'>
        <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>open modal</button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <iframe className='tour' src="https://www.google.com/maps/embed?pb=!4v1697173625151!6m8!1m7!1sPp6lmciY0gob81SNNWVokw!2m2!1d33.49670251421148!2d-111.9313880580029!3f320!4f0!5f0.7820865974627469"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='Saints and Scissors 360 Tour Google'></iframe>
  </div>
</dialog>
        </div>
        <div className='bgimg-3'></div>
        <div className='bgimg-4'></div>
        <Footer />
    </div>
  );
}

export default App;
