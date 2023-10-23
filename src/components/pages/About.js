import aboutBg from "../../assets/decals/decal-2.png";
import Rating from "../misc/Rating";
export default function About() {
    return (
        <div className='h-full w-full bg-black pt-28 md:pt-14 z-20'>
            <div className='flex flex-col justify-center lg:w-3/5 mx-3 lg:mx-auto text-center'>
                <h2 className='font2 text-5xl text-white mb-4'>Unlock Your Hair's Potential.</h2>
                <p className='text-lg'>At Saints and Scissors, we are more than just hairstylists - we are <strong>artists</strong>, <strong>creators</strong>, and <strong>visionaries</strong> dedicated to transforming your hair into a work of art. With a passion for perfection and an unwavering commitment to making you look and feel your best, we have become a go-to destination for exceptional hair design and care.</p>
                <hr className='w-4/5 lg:w-3/4 mx-auto my-2'></hr>
                <div className='flex flex-col justify-center my-4 text-center '>
                    <p className='backdrop-brightness-50 font2 text-lg'>"Best salon experience I have ever had."</p>
                    <div className='mx-auto'><Rating /></div>
                    <small><em>- Ashely A.</em></small>
                </div>
            </div>
            <div className='relative w-full md:w-1/4 mt-5 lg:mt-6 mx-auto'>
                <img className='opacity-80' src={aboutBg} alt='Grunge style women'></img>
                {/* <p className='absolute w-3/4 p-4 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-black bg-opacity-75'><em>“Life is more beautiful when you meet the right hairdresser.”<br></br><small className='mt-3 text-sm'> – Peter Coppola</small></em></p> */}
            </div>
        </div>
    )
}