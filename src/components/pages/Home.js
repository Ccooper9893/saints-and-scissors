import titleAndLogo from '../../assets/img/logos/title-and-logo.png';
import Carousel from '../misc/Carousel';
import { Parallax } from 'react-scroll-parallax';
import { motion } from "framer-motion";
import titleAndLogoV from '../../assets/img/logos/title-vertical-2.png';
export default function Home({ toggleBooking, navRef }) {
    return (
        <div id='home'>
            {/* <motion.img
                initial={{ opacity: 0, y: -4 }}
                whileInView={{ opacity: 1, y: 20 }}
                transition={{ ease: "easeOut", duration: 1, delay: .5 }}
                className='hidden md:block transform left-1/2 translate-x-1/2 w-1/3 absolute z-10'
                src={titleAndLogo}
                alt='Saints and Scissors Logo'>
            </motion.img> */}
            {/* <motion.img
                initial={{ opacity: 0, y: -4 }}
                whileInView={{ opacity: 1, y: 40 }}
                transition={{ ease: "easeOut", duration: 1, delay: .5 }}
                className='absolute h-5/6 top-0 z4 md:hidden'
                src={titleAndLogoV}
                alt='Saints and Scissors Logo'>
            </motion.img> */}
            <motion.img
                initial={{ opacity: 0, y: -4 }}
                whileInView={{ opacity: 1, y: 20 }}
                transition={{ ease: "easeOut", duration: 1, delay: .5 }}
                className='fixed top-24 z4 md:w-1/3 md:right-1/3'
                src={titleAndLogo}
                alt='Saints and Scissors Logo'>
            </motion.img>
            <motion.p
                initial={{ opacity: 0, x: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ ease: "easeOut", duration: 1, delay: 1.5 }}
                ref={navRef}
                className='font2 fixed bottom-20 md:bottom-24 z-10 w-full tracking-wide text-xl text-center md:text-right md:pr-10 py-2 text-stone-200 bg-black bg-opacity-40'>
                A NEW BREED OF SALON. <br />
                <span className='text-xs md:text-lg'
                >WHERE THE HAIR IS AS IMPORTANT AS THE ATMOSPHERE.
                </span>
            </motion.p>
            {/* <motion.button
                initial={{ opacity: 0, x: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ ease: "easeOut", duration: 1, delay: 2 }}
                onClick={() => { toggleBooking(true); }}
                className='fixed right-1/4 md:right-24 bottom-6 md:bottom-8 tracking-widest z-10 w-1/2 md:w-1/5 py-1 md:py-1 border border-lime-500 text-lime-400'>
                BOOK NOW
            </motion.button> */}
                        <motion.button
                initial={{ opacity: 0, x: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ ease: "easeOut", duration: 1, delay: 2 }}
                onClick={() => { toggleBooking(true); }}
                className='fixed right-1/4 md:right-24 bottom-6 md:bottom-8 tracking-widest z-10 w-1/2 md:w-1/5 py-1 md:py-1 glass btn-primary'>
                BOOK NOW
            </motion.button>
            <motion.p className='fixed bottom-0 w-full text-center text-stone-200 z-10 animate-pulse'>&#9660;</motion.p>
            {/* <Parallax speed={-5}> */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 2, delay: 1 }}>
                    <Carousel />
                </motion.div>
            {/* </Parallax> */}
        </div>
    )
};