import { Parallax } from 'react-scroll-parallax';
import Rating from '../misc/Rating';

export default function About({ toggleBooking }) {
  return (
    <div id='about' className='h-full text-stone-200 w-5/6 mx-auto bg-stone-900 z-10'>
      <div className='flex flex-col justify-center pt-4 pb-20 lg:mx-auto text-center'>
        <div>
          {/* <h2 className='font2 text-4xl lg:text-5xl center text-stone-950 pt-14 z-10'>
            EXCEPTIONAL HAIR SERVICES TAILORED TO YOUR NEEDS
          </h2> */}
          <h2 className='font2 text-6xl md:text-7xl text-center text-stone-100 px-4 pt-12 z-10'>
            Unlock Your Hair's<br /><span className='text-lime-400 font2'>Potential<span className='text-stone-950'>.</span></span>
          </h2>
          <hr className='w-5/6 mx-auto my-6 bg-stone-950'></hr>
          {/* <div className='flex flex-col z-0'>
            <div className='relative px-8 w-full'>
              <Parallax speed={-1}>
                <img className='mx-auto w-1/2 z-0 rotate-2 rounded-full' src={aboutBg} alt='Grunge style women'></img>
              </Parallax>
            </div>
            </div> */}
          <p className='pb-12 text-xl md:text-2xl md:w-5/6 md:text-center md:mx-auto p-6 tracking-wide  text-stone-300'>At Saints & Scissors, we are not just hair stylists; we are <strong>artists</strong> who craft your unique look. Our mission is not only to make you look your best, but also to provide you with a truly exceptional and unique <strong>full-service salon experience.</strong> Come and discover the artistry of hair styling at our salon – where beauty is not just a result, but a journey.</p>
          <hr className='mx-6 mt-16 bg-stone-950'></hr>
          <div className='w-5/6 py-24 md:py-4 mx-auto z-0'>
            <Rating />
          </div>
          {/* We understand that everyone is unique and deserves to look their best, and that's why we bring our own distinct sets of skills and styles to every appointment.  */}
          <div className='flex justify-center my-20'>
            <a
              href='#stylists'
              className=' px-8 py-2 border border-stone-200 text-stone-200 hover:bg-stone-800'>
              MEET OUR STYLISTS
            </a>
          </div>
        </div>
      </div>


    </div>
  )
}