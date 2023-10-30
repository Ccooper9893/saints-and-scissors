import { Parallax } from 'react-scroll-parallax';
import aboutBg from '../../assets/img/decals/decal-2.png';
import Rating from '../misc/Rating';
import logo from '../../assets/img/logos/logo.png';

export default function About({ navAboutRef }) {
  return (
    <div id='about' className='h-full bg-black text-stone-300'>
      <div className='pt-4 border-t-4 border-stone-900 py-12'>
        <div className='flex flex-col justify-center lg:w-2/3 mt-6 lg:mx-auto text-center'>
          <h2 className='font2 text-6xl lg:text-8xl center text-stone-100 pb-4 md:mb-24z-10'>
            Unlock <br />
            Your Hair's< br />
            <span className='text-violet-500 font2'>Potential</span>.
          </h2>
          <div className='flex flex-col md:flex-row'>
            <div className='relative px-8 lg:mt-6 mt-10 w-full'>
              <Parallax speed={-4}>
                <img className='opacity-80 mx-auto z-0 bg-stone-200 shadow-lg shadow-stone-400 rotate-2' src={aboutBg} alt='Grunge style women'></img>
              </Parallax>
              {/* <p className='absolute w-3/4 p-4 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-black bg-opacity-75'><em>“Life is more beautiful when you meet the right hairdresser.”<br></br><small className='mt-3 text-sm'> – Peter Coppola</small></em></p> */}
            </div>
            <div className='py-10 md:my-auto bg-black md:bg-stone-950 z-10 border-t border-stone-800'>
              <p className='py-6 text-xl p-4 tracking-wide md:text-left'>At <span className='font4'>Saints and Scissors,</span><br />we are more than just hairstylists - we are <strong>artists</strong>, <strong>creators</strong>, and <strong>visionaries</strong> dedicated to transforming your hair into a work of art. With a passion for perfection and an unwavering commitment to making you look and feel your best, we have become a go-to destination for exceptional hair design and care.</p>
              <div className='flex flex-row justify-center rounded-r-lg'>

              <img className='w-5 h-5 opacity-10' src={logo}></img>
              <img className='w-5 h-5 opacity-20' src={logo}></img>
              <img className='w-5 h-5 opacity-30' src={logo}></img>
              <img className='w-5 h-5 opacity-40' src={logo}></img>
              <img className='w-5 h-5 opacity-50' src={logo}></img>

              </div>
            </div>
  
          </div>
          {/* <hr className='w-4/5 lg:w-5/6 mx-auto my-6 md:my-24 opacity-90'></hr> */}
        </div>
      </div>

      <div className='w-full h-full py-44 bg3 z-0'>
      <Rating />
      </div>


    </div>
  )
}