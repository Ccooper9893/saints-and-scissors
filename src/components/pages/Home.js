import titleAndLogo from '../../assets/img/logos/title-and-logo.png';
import titleAndLogoV from '../../assets/img/logos/title-vertical-2.png';
import Carousel from '../misc/Carousel';
import { Parallax } from 'react-scroll-parallax';
import { motion } from "framer-motion";
import logo from '../../assets/img/logos/logo.png';

export default function Home({ toggleBooking }) {
    return (
        <>
            <div className='hidden lg:block'>
                <img className='absolute centerOfBg mx-auto z-10 mt-80 md:1/2 lg:w-1/3' src={titleAndLogo} alt='Saints and Scissors Logo'></img>
                <button onClick={() => { toggleBooking(true); }} className='absolute centerOfBg top-3/4 tracking-widest z-10 w-60 py-1 rounded-sm text-black text-center text-sm bg-lime-400 bg-opacity-90 shadow shadow-black hover:bg-lime-400'>BOOK NOW</button>
            </div>


                <motion.img initial={{ opacity: 0, y: -4 }} whileInView={{ opacity: 1, y: 40 }} transition={{ ease: "easeOut", duration: 1, delay: .5 }}
                    className='absolute left-4 z-10 mt-title h-5/6' src={titleAndLogoV} alt='Saints and Scissors Logo'></motion.img>
            <div className='lg-hidden'>
                <motion.div  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeIn", duration: 1, delay: 2.5 }}
                className='fixed bottom-40 right-8 z-10'>
                    <p className='text-center text-xs opacity-30 animate-bounce'>&#9650;</p>
                    <p className='text-center text-xs opacity-60 animate-bounce'>&#9650;</p>
                    <img src={logo}></img>

                </motion.div>

                <motion.p initial={{ opacity: 0, x: 200 }} whileInView={{ opacity: 1, x: 0 }} transition={{ ease: "easeOut", duration: 1, delay: 1.5 }}
                    className='fixed right-4 bottom-20 z-10 w-full tracking-wide text-right py-2 text-xl text-white bg-black bg-opacity-20'>A NEW BREED OF SALON. <br /><span className='text-sm'>WHERE THE HAIR IS AS IMPORTANT AS THE ATMOSTPHERE.</span></motion.p>

                <motion.button initial={{ opacity: 0, x: -200 }} whileInView={{ opacity: 1, x: 0 }} transition={{ ease: "easeOut", duration: 1, delay: 2 }}
                    onClick={() => { toggleBooking(true); }} className='fixed right-6 bottom-8 tracking-widest z-10 w-1/2 py-2 rounded-sm text-black text-center text-sm bg-lime-400 bg-opacity-70 shadow-lg shadow-black hover:shadow-none'>BOOK NOW</motion.button>
            </div>

            <Parallax speed={-10}>
            <motion.div initial={{ opacity: 0}} whileInView={{ opacity: 1 }} transition={{ ease: "easeIn", duration: 2, delay: 1 }}>
                <Carousel />
                </motion.div>
            </Parallax>
        </>
    )
};