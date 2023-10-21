import logoHeader from '../../assets/logos/title-and-logo.png';
import aboutBg from "../../assets/backgrounds/paintedGirl.png";
import Rating from '../misc/Rating';

export default function Home() {
    return (
        <div>
            <section className='bg-home'>
                <header>
                    <img className='homeLogo mx-auto mt-40 lg:w-1/3' src={logoHeader} alt='Title and Logo of Saints and Scissors'></img>
                </header>
            </section>
            <section className='bg-black h-screen bg-opacity-75'>
                <div className='flex flex-col justify-center lg:w-3/5 mx-3 lg:mx-auto text-center'>
                    <div className='relative'>
                    <button className='absolute -top-16 animate-bounce downIcon'>&#9660;</button>
                    </div>
                    <h2 className='font2 text-5xl lg:text-7xl text-white mt-16 mb-4'>Unlock Your Hair's Potential.</h2>
                    <p className='text-lg'>At Saints and Scissors, we are more than just hairstylists - we are <strong>artists</strong>, <strong>creators</strong>, and <strong>visionaries</strong> dedicated to transforming your hair into a work of art. With a passion for perfection and an unwavering commitment to making you look and feel your best, we have become a go-to destination for exceptional hair design and care.</p>
                    <hr className='w-4/5 lg:w-3/4 mx-auto my-2'></hr>
                    <div className='flex flex-col justify-center my-4 text-center '>
                        <p class='backdrop-brightness-50 font2 text-lg'>"Best salon experience I have ever had."</p>
                        <div className='mx-auto'><Rating /></div>
                        <small><em>- Ashely A.</em></small>
                    </div>
                </div>
                <div className='relative h-full text-center'>
    <img className='absolute bottom-0 lg:left-1/3 opacity-80' src={aboutBg} alt='Grunge style women' />
    {/* Add any additional content here */}
  </div>
            </section>
        </div>
    )
}