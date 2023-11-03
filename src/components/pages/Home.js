import titleAndLogo from '../../assets/img/logos/title-and-logo.png';
import Carousel from '../misc/Carousel';
import { Parallax } from 'react-scroll-parallax';
import { motion } from "framer-motion";
import titleAndLogoV from '../../assets/img/logos/title-vertical-2.png';
export default function Home({ toggleBooking, navRef }) {
    return (
        <div id='home'>
            <motion.img
                initial={{ opacity: 0, y: -4 }}
                whileInView={{ opacity: 1, y: 40 }}
                transition={{ ease: "easeOut", duration: 1, delay: .5 }}
                className='hidden md:block right-0 w-1/3 absolute z-10'
                src={titleAndLogo}
                alt='Saints and Scissors Logo'>
            </motion.img>
            <motion.img
                initial={{ opacity: 0, y: -4 }}
                whileInView={{ opacity: 1, y: 40 }}
                transition={{ ease: "easeOut", duration: 1, delay: .5 }}
                className='fixed h-5/6 top-0 z4 md:hidden'
                src={titleAndLogoV}
                alt='Saints and Scissors Logo'>
            </motion.img>
            <motion.p
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ ease: "easeOut", duration: 1, delay: 1.5 }}
                ref={navRef}
                className=' fixed right-0 bottom-20 md:bottom-24 z-10 w-full tracking-wide text-xl text-right py-2 pr-6 text-white bg-black bg-opacity-50'>
                A NEW BREED OF SALON. <br />
                <span className='text-xs md:text-lg '
                >WHERE THE HAIR IS AS IMPORTANT AS THE ATMOSTPHERE.
                </span>
            </motion.p>
            <motion.button
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ ease: "easeOut", duration: 1, delay: 2 }}
                onClick={() => { toggleBooking(true); }}
                className='fixed right-1/4 md:right-6 bottom-6 md:bottom-4 tracking-widest z-10 w-1/2 md:w-1/4 py-1 md:py-3 font-extrabold bg-lime-500 text-stone-950 shadow-lg hover:shadow-stone-700 shadow-stone-950'>
                BOOK NOW
            </motion.button>
            <motion.p className='absolute bottom-0 w-full text-center text-stone-950 z-10 animate-bounce'>&#9660;</motion.p>
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