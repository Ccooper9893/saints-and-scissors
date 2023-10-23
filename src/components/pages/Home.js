import React from "react";
import Carousel from "../misc/Carousel";
import logoHeader from '../../assets/img/logos/title-and-logo.png';
import '../../assets/styles/home.css';
export default function Home() {

    return (
        <div className="relative" id="home">
            <Carousel />
            <img className='centerOfBg md:w-1/3 pt-16' src={logoHeader} alt='Saints and Scissors Title and logo. Scissors with angel wings.'></img>
        </div>
    )
}