import React, { useEffect, useRef } from 'react';
import EmblaCarousel from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';


export default function Home() {
    const emblaRef = useRef(null);

    useEffect(() => {
        if (emblaRef.current) {
            const embla = EmblaCarousel(emblaRef.current, { loop: true }, [
                Autoplay({ delay: 4500, rootNode: (emblaRoot) => emblaRoot.parentElement }),
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
                    <div className='bg-slide-2'>
                    <h1>A NEW BREED OF SALON</h1>
            <h2>WHERE THE HAIR IS AS IMPORTANT AS THE ATMOSPHERE</h2>
                    </div>
                </div>
                <div className="embla__slide">
                    <div className='bg-slide-1'>
                    </div>
                </div>
                <div className="embla__slide">
                    <div className='bg-slide-3'></div>
                </div>
            </div>
        </div>
    );
}


