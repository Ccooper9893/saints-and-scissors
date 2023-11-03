import { Parallax } from 'react-scroll-parallax';
import aboutBg from '../../assets/img/backgrounds/paintedGirl.png';
import Rating from '../misc/Rating';
import logo from '../../assets/img/logos/logo.png';

export default function About({ toggleBooking, navAboutRef }) {
  return (
    <div id='about' className='h-full text-stone-950'>
      <div>
        <div className='flex flex-col justify-center lg:w-3/4 mt-6 lg:mx-auto text-center'>
          <div className='border-t border-stone-900'>
          <h2 className='font2 text-7xl lg:text-9xl center text-stone-200 py-14 md:mb-24 z-10 border-b border-stone-950 bg-stone-900'>
            Unlock
            Your Hair's< br />
            <span className='text-violet-700 font2'>Potential</span>.
          </h2>
          <div className='flex flex-col z-0'>
            <div className='relative px-8 w-full'>
              <Parallax speed={-1}>
                <img className='mx-auto z-0 rotate-2' src={aboutBg} alt='Grunge style women'></img>
              </Parallax>
              {/* <p className='absolute w-3/4 p-4 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-black bg-opacity-75'><em>“Life is more beautiful when you meet the right hairdresser.”<br></br><small className='mt-3 text-sm'> – Peter Coppola</small></em></p> */}
            </div>
            </div>
            <div className='py-6 md:py-10 z-10 bg-stone-900 border-t border-stone-950'>
              <p className='text-xl md:text-2xl md:w-5/6 md:text-center md:mx-auto p-6 tracking-wide text-stone-100'>At <span className='font4'>Saints and Scissors,</span><br />we are more than just hairstylists - we are <strong>artists</strong>, <strong>creators</strong>, and <strong>visionaries</strong> dedicated to transforming your hair into a work of art. With a passion for perfection and an unwavering commitment to making you look and feel your best, we have become a go-to destination for exceptional hair design and care.</p>

              <div className='flex flex-row justify-center rounded-r-lg my-12'>
                <img className='w-4 h-4 opacity-10' src={logo} alt='Tiny Saints and Scissors logo'></img>
                <img className='w-4 h-4 opacity-20' src={logo} alt='Tiny Saints and Scissors logo'></img>
                <img className='w-4 h-4 opacity-30' src={logo} alt='Tiny Saints and Scissors logo'></img>
                <img className='w-4 h-4 opacity-40' src={logo} alt='Tiny Saints and Scissors logo'></img>
                <img className='w-4 h-4 opacity-50' src={logo} alt='Tiny Saints and Scissors logo'></img>
              </div>
              <div className='w-5/6 py-4 mx-auto z-0'>
                <Rating />
              </div>
              {/* <button onClick={() => { toggleBooking(true); }} className='py-2 px-12 font-extrabold border border-lime-400 text-stone-300'>BOOK NOW</button> */}
            </div>

          </div>
        </div>
      </div>

      {/* <hr className='w-full lg:w-5/6 mx-auto my-6 md:my-24 bg-stone-950'></hr> */}
    </div>
  )
}