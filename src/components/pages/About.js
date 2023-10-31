import { Parallax } from 'react-scroll-parallax';
import aboutBg from '../../assets/img/decals/decal-2.png';
import Rating from '../misc/Rating';
import logo from '../../assets/img/logos/logo.png';

export default function About({ navAboutRef }) {
  return (
    <div id='about' className='h-full bg-stone-950 text-stone-300'>
      <div className='pt-4 py-12'>
        <div className='flex flex-col justify-center lg:w-3/4 mt-6 lg:mx-auto text-center'>
          <h2 className='font2 text-6xl lg:text-9xl center text-stone-200 pb-4 md:mb-24 z-10 bg-stone-950'>
            Unlock
            Your Hair's< br />
            <span className='text-violet-500 font2'>Potential</span>.
          </h2>
          <div className='flex flex-col'>
            <div className='relative px-8 w-full bg2'>
              <Parallax speed={-4}>
                <img className='mx-auto z-0 bg-stone-300 bg-opacity-80 rotate-2' src={aboutBg} alt='Grunge style women'></img>
              </Parallax>
              {/* <p className='absolute w-3/4 p-4 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-black bg-opacity-75'><em>“Life is more beautiful when you meet the right hairdresser.”<br></br><small className='mt-3 text-sm'> – Peter Coppola</small></em></p> */}
            </div>
            <div className='py-6 md:py-24 bg-stone-900 border border-stone-700 shadow shadow-bg-stone-900 z-10'>
              <p className='text-xl md:text-4xl md:w-5/6 md:text-center md:mx-auto p-4 tracking-wide'>At <span className='font4'>Saints and Scissors,</span><br />we are more than just hairstylists - we are <strong>artists</strong>, <strong>creators</strong>, and <strong>visionaries</strong> dedicated to transforming your hair into a work of art. With a passion for perfection and an unwavering commitment to making you look and feel your best, we have become a go-to destination for exceptional hair design and care.</p>

              <div className='flex flex-row justify-center rounded-r-lg my-12'>
                <img className='w-4 h-4 opacity-10' src={logo}></img>
                <img className='w-4 h-4 opacity-20' src={logo}></img>
                <img className='w-4 h-4 opacity-30' src={logo}></img>
                <img className='w-4 h-4 opacity-40' src={logo}></img>
                <img className='w-4 h-4 opacity-50' src={logo}></img>
              </div>
              <div className='w-5/6 py-4 mx-auto z-0'>
                <Rating />
              </div>
            </div>

          </div>
        </div>
      </div>

      <hr className='w-full lg:w-5/6 mx-auto my-6 md:my-24 opacity-40'></hr>
    </div>
  )
}