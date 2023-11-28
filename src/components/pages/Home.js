import titleAndLogo from '../../assets/img/logos/title-and-logo-glow.png';
import Carousel from '../misc/Carousel';
import { Parallax } from 'react-scroll-parallax';
import { motion } from "framer-motion";

export default function Home({ toggleBooking, navRef }) {
    return (
        <div id='home'>
            <motion.img
                initial={{ opacity: 0, y: -4 }}
                whileInView={{ opacity: 1, y: 20 }}
                transition={{ ease: "easeOut", duration: 3}}
                className='absolute top-1/4 md:top-32 z4 md:w-1/3 md:right-1/3'
                src={titleAndLogo}
                alt='Saints and Scissors Logo'>
            </motion.img>
            <motion.button
                initial={{ opacity: 0, y:-10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeOut", duration: 1, delay: 1.5 }}
                onClick={() => { toggleBooking(true); }}
                className='fixed right-1/4 bottom-12 md:bottom-8 tracking-widest z-10 w-1/2 py-1 border border-lime-300 text-lime-300 bg-opacity-60'>
                BOOK ONLINE
            </motion.button>
            <motion.a href='#about' className='fixed bottom-4 text-sm w-full text-center text-stone-200 z-10 animate-bounce'>&#9660;</motion.a>
            <Parallax speed={-5}>
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