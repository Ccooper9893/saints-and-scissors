import titleAndLogo from '../../assets/img/logos/title-and-logo.png';
import titleAndLogoV from '../../assets/img/logos/title-vertical-2.png';
import Carousel from '../misc/Carousel';
import { Parallax } from 'react-scroll-parallax';
import { motion } from "framer-motion";

export default function Home({ toggleBooking }) {
    return (
        <>
            <div className='hidden lg:block'>
                <img className='absolute centerOfBg mx-auto z-10 mt-80 md:1/2 lg:w-1/3' src={titleAndLogo} alt='Saints and Scissors Logo'></img>
                <button onClick={() => { toggleBooking(true); }} className='absolute centerOfBg top-3/4 tracking-widest z-10 w-60 py-1 rounded-sm text-black text-center text-sm bg-lime-400 bg-opacity-90 shadow shadow-black hover:bg-lime-400'>BOOK NOW</button>
            </div>

            <div>

                <motion.img initial={{ opacity: 0}} whileInView={{opacity: 1}} transition={{ ease: "easeIn", duration: 1 }}
                className='fixed lg:hidden centerOfBg z-10 mt-title max-h-5/6' src={titleAndLogoV} alt='Saints and Scissors Logo'></motion.img>

                <motion.p  initial={{ opacity: 0, x:200}} whileInView={{opacity: 1, x: 0}} transition={{ ease: "easeIn", duration: 1 }}
                className='absolute lg:hidden right-0 bottom-16 z-10 w-72 text-right py-2 text-md text-white'>A NEW BREED OF SALON<br /><span className='text-xs'>WHERE THE HAIR IS AS IMPORTANT AS THE ATMOSTPHERE.</span></motion.p>

                <motion.button initial={{ opacity: 0, x:200}} whileInView={{opacity: 1, x: 0}} transition={{ ease: "easeIn", duration: .5 }}
                onClick={() => { toggleBooking(true); }} className='absolute lg:hidden right-0 bottom-4 tracking-widest z-10 w-52 py-2 rounded-sm text-black text-center text-sm bg-lime-400 bg-opacity-70 shadow-lg shadow-black hover:shadow-none'>BOOK NOW</motion.button>

            </div>
            <Parallax speed={-10}>
                <Carousel />
            </Parallax>
        </>
    )
};