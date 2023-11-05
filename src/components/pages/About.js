import { Parallax } from 'react-scroll-parallax';
import Rating from '../misc/Rating';

export default function About({ toggleBooking, navAboutRef }) {
  return (
    <div id='about' className='h-full text-stone-950 md:w-3/4 mx-auto bg-stone-100 z-10 shadow shadow-stone-500'>
        <div className='flex flex-col justify-center pt-4 lg:mx-auto text-center'>
          <div>
          {/* <h2 className='font2 text-4xl lg:text-5xl center text-stone-950 pt-14 z-10'>
            EXCEPTIONAL HAIR SERVICES TAILORED TO YOUR NEEDS
          </h2> */}
              <h2 className='font2 text-6xl md:text-7xl text-center text-stone-950 px-4 pt-12 z-10'>
                Unlock Your Hair's<br /><span className='text-lime-500 font2'>Potential<span className='text-stone-950'>.</span></span>
              </h2>
              <hr className='w-5/6 mx-auto my-6 bg-stone-950'></hr>
          {/* <div className='flex flex-col z-0'>
            <div className='relative px-8 w-full'>
              <Parallax speed={-1}>
                <img className='mx-auto w-1/2 z-0 rotate-2 rounded-full' src={aboutBg} alt='Grunge style women'></img>
              </Parallax>
            </div>
            </div> */}
              <p className='pb-12 text-xl md:text-2xl md:w-5/6 md:text-center md:mx-auto p-6 tracking-wide  text-stone-700'>At Saints & Scissors, we are not just hair stylists; we are <strong>artists</strong> who craft your unique look. Our mission is not only to make you look your best, but also to provide you with a truly exceptional and unique full-service salon experience. Come and discover the artistry of hair styling at our salon – where beauty is not just a result, but a journey.</p>
              {/* We understand that everyone is unique and deserves to look their best, and that's why we bring our own distinct sets of skills and styles to every appointment.  */}
              <div className='flex justify-center my-20'>
                        <button
                            onClick={() => { toggleBooking(true); }}
                            className=' px-8 py-2 border border-stone-950 text-black hover:bg-stone-300'>
                            BOOK AN APPOINTMENT
                        </button>
                        </div>
              {/* <hr />
              <div className='w-5/6 py-4 mx-auto z-0'>
                <Rating />
              </div> */}
              {/* <div className='flex flex-row justify-center rounded-r-lg my-12'>
                <img className='w-3 h-3 opacity-10' src={logo} alt='Tiny Saints and Scissors logo'></img>
                <img className='w-3 h-3 opacity-20' src={logo} alt='Tiny Saints and Scissors logo'></img>
                <img className='w-3 h-3 opacity-30' src={logo} alt='Tiny Saints and Scissors logo'></img>
                <img className='w-3 h-3 opacity-40' src={logo} alt='Tiny Saints and Scissors logo'></img>
                <img className='w-3 h-3 opacity-50' src={logo} alt='Tiny Saints and Scissors logo'></img>
              </div> */}
            {/* <div className='flex flex-col z-0'>
            <div className='relative w-full'>
              <Parallax speed={-1}>
                <img className='mx-auto w-full z-0' src={logo} alt='Grunge style women'></img>
              </Parallax>

            </div>
              </div> */}
              {/* <button onClick={() => { toggleBooking(true); }} className='py-2 px-12 font-extrabold border border-lime-400 text-stone-300'>BOOK NOW</button> */}

          </div>
        </div>


    </div>
  )
}