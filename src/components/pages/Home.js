import titleAndLogoV from '../../assets/img/logos/title-vertical-2.png';
import titleAndLogo from '../../assets/img/logos/title-and-logo.png';
import Carousel from '../misc/Carousel';
import { Parallax } from 'react-scroll-parallax';
import { motion } from "framer-motion";
import logo from '../../assets/img/logos/logo.png';

export default function Home({ toggleBooking, navRef }) {
    return (
        <div id='home'>

            {/* <motion.img
                initial={{ opacity: 0, y: -4 }}
                whileInView={{ opacity: 1, y: 40 }}
                transition={{ ease: "easeOut", duration: 1, delay: .5 }}
                className='absolute left-4 md:left-12 lg:left-44 z-10 mt-title h-5/6'
                src={titleAndLogoV}
                alt='Saints and Scissors Logo'>
            </motion.img> */}
            <motion.img
                initial={{ opacity: 0, y: -4 }}
                whileInView={{ opacity: 1, y: 40 }}
                transition={{ ease: "easeOut", duration: 1, delay: .5 }}
                className='absolute z-10 top-32 transform -translate-y-1/2'
                src={titleAndLogo}
                alt='Saints and Scissors Logo'>
            </motion.img>
            {/* <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ ease: "easeIn", duration: 1, delay: 2.5 }}
                className='fixed bottom-40 md:bottom-52 right-20 md:right-44 z-10'>
                <p className='text-center text-xs opacity-30 animate-bounce'>&#9650;</p>
                <p className='text-center text-xs opacity-60 animate-bounce'>&#9650;</p>
                <a href='#about'><img src={logo} alt='Saints and scissors icon, white circle with scissors that have angel wings.'></img></a>
            </motion.div> */}

            <motion.p
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ ease: "easeOut", duration: 1, delay: 1.5 }}
                ref={navRef}
                className=' fixed right-0 bottom-24 z-10 w-full tracking-wide md:text-4xl text-right py-2 pr-6 text-xl text-white bg-black bg-opacity-50'>
                A NEW BREED OF SALON. <br />
                <span className='text-sm  md:text-xl '
                >WHERE THE HAIR IS AS IMPORTANT AS THE ATMOSTPHERE.
                </span>
            </motion.p>

            <motion.button
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ ease: "easeOut", duration: 1, delay: 2 }}
                onClick={() => { toggleBooking(true); }}
                className='fixed right-1/4 bottom-12 tracking-widest z-10 w-1/2 md:w-1/4 py-4 font-extrabold rounded-full text-stone-950 border border-stone-950'>
                BOOK NOW
            </motion.button>
            <motion.p className='absolute bottom-0 w-full text-center text-stone-300 z-10'>&#9660;</motion.p>

            <Parallax speed={-10}>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 2, delay: 1 }}>
                    <Carousel />
                </motion.div>
            </Parallax>

        </div>
    )
};