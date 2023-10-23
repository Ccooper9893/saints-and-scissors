import React, { useEffect, useRef } from 'react';
import EmblaCarousel from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';

import logoHeader from '../../assets/logos/title-and-logo.png';

export default function Home() {
    const emblaRef = useRef(null);

    useEffect(() => {
        if (emblaRef.current) {
            const embla = EmblaCarousel(emblaRef.current, { loop: true }, [
                Autoplay({ delay: 6000, rootNode: (emblaRoot) => emblaRoot.parentElement }),
            ]);

            return () => {
                embla.destroy(); // Cleanup when the component unmounts
            };
        }
    }, []);

    return (
        <div className="embla h-screen" ref={emblaRef}>
            <div className="embla__container">
                <div className="embla__slide">
                    <div className='bg-slide-1'>
                    <img className='fade-in-1 centerOfBg md:w-1/3 pt-16' src={logoHeader} alt='Saints and Scissors Title and logo. Scissors with angel wings.'></img>
                    </div>
                </div>
                <div className="embla__slide">
                    <div className='bg-slide-2'></div>
                </div>
                <div className="embla__slide">
                    <div className='bg-slide-3'></div>
                </div>
            </div>
        </div>
    );
}


