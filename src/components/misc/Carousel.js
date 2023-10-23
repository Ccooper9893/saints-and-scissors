import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import logoHeader from '../../assets/logos/title-and-logo.png';

export default function EmblaCarousel() {
    const [emblaRef] = useEmblaCarousel()

    return (
        <div className="embla h-screen" ref={emblaRef}>
            <div className="embla__container">
                <div className="embla__slide">
                    <div className='bg-slide-1'>
                    </div>
                </div>
                <div className="embla__slide">
                    <div className='bg-slide-2'>
                    </div>
                </div>
                <div className="embla__slide">
                    <div className='bg-slide-3'>
                    </div>
                </div>
            </div>
        </div>
    )
}