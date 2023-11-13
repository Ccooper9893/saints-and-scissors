import { motion } from 'framer-motion';
import kendalPhoto from '../../assets/img/stylists/kendal.jpg';
import juliPhoto from '../../assets/img/stylists/juli.jpg';
import amandaPhoto from '../../assets/img/stylists/amanda.jpg';
import ccPhoto from '../../assets/img/stylists/cc.jpg';
import paulPhoto from '../../assets/img/stylists/paul.jpg';
import sherriPhoto from '../../assets/img/stylists/sherri.jpg';
import scissors from '../../assets/img/icons/scissors-white.png';
import Rating from '../misc/Rating';

export default function Stylists({ toggleBooking, navStylistsRef }) {

    const stylists = [
        {
            id: 111,
            name: 'Paul',
            picture: paulPhoto,
            summary: "With a decade of experience, I've become an expert in crafting gorgeous, healthy blonde hair, perfecting stunning balayage transformations, and providing top-quality extensions.",
            services: [
                {
                    id: 1,
                    service: "Men's Haircut",
                    price: "$40",
                },
                {
                    id: 2,
                    service: "Woman's Haircut",
                    price: "$50",
                },
                {
                    id: 3,
                    service: "Blowdry &amp; Style",
                    price: "$20",
                },
                {
                    id: 4,
                    service: "Conditioning",
                    price: "$20",
                },
            ],
        },
        {
            id: 112,
            name: 'Amanda',
            picture: amandaPhoto,
            summary: "With a decade of experience, I've become an expert in crafting gorgeous, healthy blonde hair, perfecting stunning balayage transformations, and providing top-quality extensions.",
            services: [
                {
                    id: 11,
                    service: "Men's Haircut",
                    price: "$40",
                },
                {
                    id: 12,
                    service: "Woman's Haircut",
                    price: "$50",
                },
                {
                    id: 13,
                    service: "Blowdry &amp; Style",
                    price: "$20",
                },
                {
                    id: 14,
                    service: "Conditioning",
                    price: "$20",
                },
            ],
        },
        {
            id: 113,
            name: 'Sherri',
            picture: sherriPhoto,
            summary: "With a decade of experience, I've become an expert in crafting gorgeous, healthy blonde hair, perfecting stunning balayage transformations, and providing top-quality extensions.",
            services: [
                {
                    id: 21,
                    service: "Men's Haircut",
                    price: "$40",
                },
                {
                    id: 22,
                    service: "Woman's Haircut",
                    price: "$50",
                },
                {
                    id: 23,
                    service: "Blowdry &amp; Style",
                    price: "$20",
                },
                {
                    id: 24,
                    service: "Conditioning",
                    price: "$20",
                },
            ],
        },
        {
            id: 114,
            name: 'Juli',
            picture: juliPhoto,
            summary: "With a decade of experience, I've become an expert in crafting gorgeous, healthy blonde hair, perfecting stunning balayage transformations, and providing top-quality extensions.",
            services: [
                {
                    id: 31,
                    service: "Men's Haircut",
                    price: "$40",
                },
                {
                    id: 32,
                    service: "Woman's Haircut",
                    price: "$50",
                },
                {
                    id: 33,
                    service: "Blowdry &amp; Style",
                    price: "$20",
                },
                {
                    id: 34,
                    service: "Conditioning",
                    price: "$20",
                },
            ],
        },
        {
            id: 115,
            name: 'Kendal',
            picture: kendalPhoto,
            summary: "With a decade of experience, I've become an expert in crafting gorgeous, healthy blonde hair, perfecting stunning balayage transformations, and providing top-quality extensions.",
            services: [
                {
                    id: 41,
                    service: "Men's Haircut",
                    price: "$40",
                },
                {
                    id: 42,
                    service: "Woman's Haircut",
                    price: "$50",
                },
                {
                    id: 43,
                    service: "Blowdry &amp; Style",
                    price: "$20",
                },
                {
                    id: 44,
                    service: "Conditioning",
                    price: "$20",
                },
            ],
        },
        {
            id: 116,
            name: 'CC',
            picture: ccPhoto,
            summary: "With a decade of experience, I've become an expert in crafting gorgeous, healthy blonde hair, perfecting stunning balayage transformations, and providing top-quality extensions.",
            services: [
                {
                    id: 51,
                    service: "Men's Haircut",
                    price: "$40",
                },
                {
                    id: 52,
                    service: "Woman's Haircut",
                    price: "$50",
                },
                {
                    id: 53,
                    service: "Blowdry &amp; Style",
                    price: "$20",
                },
                {
                    id: 54,
                    service: "Conditioning",
                    price: "$20",
                },
            ],
        }
    ];


    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: .75 }}
            id='stylists'
            className='bg-zinc-100 py-44'>
            <div ref={navStylistsRef}>
                <div className="md:w-3/5 mx-auto py-16 md:py-6">
                    <div className='flex-row flex-wrap'>
                        <img className='mx-auto h-10 -rotate-12 my-6' src={scissors} alt='scissors icon'></img>
                        <h2 className='text-stone-900 text-center font2 text-5xl px-4 md:px-12 uppercase'>MEET THE SAINTS <br />BEHIND THE SCISSORS</h2>
                    </div>
                    <hr className='mx-6 mt-16 bg-stone-500'></hr>
                    <p className='my-8 text-center text-stone-700 mx-12'><em>Click on each stylist's picture to access detailed information about their specialties, prices, and unique styles.</em></p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-8 md:gap-y-12 px-8 py-12">



                        {stylists.map((stylist) => {
                            return (
                                <div key={stylist.id}>
                                    <motion.div

                                        onClick={() => document.getElementById(`${stylist.id}Modal`).showModal()}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ ease: "easeOut", duration: 1.5 }}
                                        className='flex justify-items-start hover:opacity-25'>
                                        <div className='relative w-full md:w-4/5 mx-auto py-1 hover:cursor-pointer hover:scale-105'>
                                            <img src={stylist.picture} className='glass object-cover mx-auto p-2' alt={stylist.name}></img>
                                            <h3 className='font-thin text-xl text-stone-800 font4 text-center py-2'>{stylist.name}</h3>
                                        </div>
                                    </motion.div>
                                    <dialog id={`${stylist.id}Modal`} className="modal md:mt-6 md:w-full bg-black bg-opacity-50">
                                        <div className="modal-box h-full pt-20 text-stone-400 bg-stone-900 text-center">
                                            <form method="dialog">
                                                {/* if there is a button in form, it will close the modal */}
                                                <button className="btn btn-md btn-square btn-primary absolute right-2 top-2 bg-lime-500 text-black">✕</button>
                                            </form>
                                            <img src={stylist.picture} className='md:w-64 mx-auto rounded-xl' alt='Expert Stylist Paul'></img>
                                            {/* <h3 className="font-bold text-4xl">Hello, my name is {stylist.name}</h3> */}
                                            <h3 className='text-4xl py-4 font4 text-stone-300'>{stylist.name}</h3>
                                            <p className='text-lg py-4'>{stylist.summary}</p>
                                            <div className='text-center pt-6 pb-12'>
                                                <hr className='bg-stone-900 mx-3'></hr>
                                                <img className='mx-auto h-10 -rotate-12 my-6' src={scissors} alt='scissors icon'></img>
                                                <h4 className='text-xl font4 text-stone-300'>Specialties/Pricing</h4>
                                                <ul className='text-xl'>
                                                    {stylist.services.map((service) => {
                                                        return <li key={service.id}>{service.service} - <span className='text-lime-400'>{service.price}</span></li>
                                                    })}
                                                </ul>
                                                <div className='flex justify-center my-12'>
                                                    <button
                                                        onClick={() => { toggleBooking(true); }}
                                                        className=' px-12 py-2 border border-lime-300 text-lime-300 hover:bg-stone-800'>
                                                        BOOK NOW
                                                    </button>
                                                </div>
                                            </div>
                                            <hr className='bg-stone-900 mx-16'></hr>
                                            <Rating name={stylist.name} />
                                        </div>
                                    </dialog>
                                </div>
                            )
                        })}





                    </div>
                    <hr className='mx-6 my-6 bg-stone-800'></hr>
                </div>
            </div>
        </motion.div>
    )
}