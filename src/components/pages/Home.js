import titleAndLogo from '../../assets/img/logos/title-and-logo-glow.png';
import Carousel from '../misc/Carousel';
import { Parallax } from 'react-scroll-parallax';
import { motion } from "framer-motion";

export default function Home({ toggleBooking, navRef }) {
    return (
        <div id='home'>
            <motion.img
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 20 }}
                transition={{ ease: "easeOut", duration: 3}}
                className='absolute top-1/4 md:top-32 z4 md:w-1/3 md:right-1/3'
                src={titleAndLogo}
                alt='Saints and Scissors Logo'>
            </motion.img>
            <div className='flex justify-center'>
            <motion.button
                initial={{ opacity: 0, y:0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeOut", duration: 0.5 }}
                onClick={() => { toggleBooking(true); }}
                className='fixed text-sm transform -translate-x-1/2 bottom-12 tracking-widest z-10 w-1/2 md:w-44 bg-black py-1 border shadow shadow-stone-950 border-lime-700 text-lime-300 bg-opacity-20 hover:border-lime-400'>
                BOOK ONLINE
            </motion.button>
            </div>
            <motion.a href='#about' className='fixed bottom-4 text-xs w-full text-center text-stone-400 hover:opacity-100 z-10 animate-bounce'>&#9660;</motion.a>
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