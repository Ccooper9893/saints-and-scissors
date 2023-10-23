import logoHeader from '../../assets/logos/title-and-logo.png';
import aboutBg from "../../assets/backgrounds/paintedGirl.png";
import Rating from '../misc/Rating';

export default function Home() {
    return (
        <div className='bg-black'>
            <div className='bg-home'>
            <header className='absolute top-1/4 lg:top-36 w-full'>
                <img className='homeLogo mx-auto mt-12 lg:w-2/5' src={logoHeader} alt='Title and Logo of Saints and Scissors'></img>
            </header>
            </div>
        </div>
    )
}