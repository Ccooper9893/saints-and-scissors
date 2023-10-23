import React from "react";
import Carousel from "../misc/Carousel";
import logoHeader from '../../assets/logos/title-and-logo.png';

export default function Home() {

    return (
        <>
            <Carousel />
            <img className='centerOfBg md:w-1/3 pt-16' src={logoHeader} alt='Saints and Scissors Title and logo. Scissors with angel wings.'></img>
            <p className="bg-red-500">Arrow Down</p>

        </>

    )
}

// export default function Home() {
//     return (
//         <div className="hero min-h-screen bg-home">
//   <div className="hero-overlay bg-opacity-0"></div>
//   <div className="hero-content text-center text-neutral-content">
//     <div className="max-w-md">
//         <img className='homeLogo mx-auto' src={logoHeader} alt='Title and Logo of Saints and Scissors'></img>
//       <p className="mb-5 font1">Unlock Your Hair's Potential.</p>
//     </div>
//   </div>
// </div>
// <div className='bg-black'>
//     <div className='bg-home'>
//     <header className='fixed top-1/4 lg:top-36 w-full'>
//         <img className='homeLogo mx-auto mt-12 lg:w-2/5' src={logoHeader} alt='Title and Logo of Saints and Scissors'></img>
//     </header>
//     </div>
// </div>
//     )
// }