import { motion } from 'framer-motion';
import kendalPhoto from '../../assets/img/stylists/kendal.jpg';
import juliPhoto from '../../assets/img/stylists/juli.jpg';
import amandaPhoto from '../../assets/img/stylists/amanda.jpg';
import ccPhoto from '../../assets/img/stylists/cc.jpg';
import paulPhoto from '../../assets/img/stylists/paul.jpg';
import sherriPhoto from '../../assets/img/stylists/sherri.jpg';
import scissorsBlk from '../../assets/img/icons/scissors.png';

import Rating from '../misc/Rating';

export default function Stylists({ toggleBooking, navStylistsRef }) {

    const stylists = [
        {
            id: 111,
            name: 'Paul',
            picture: paulPhoto,
            summary: [`Owner and operator of Saints and Scissors with decades of experience. "I will always do my very best to give you what you want; without effecting the integrity of your hair. I am the “Healthy Hair Hippie”. Healthy hair is beautiful hair."`],
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
            summary: ["Amanda is our resident pixie queen! Specializing in hair cutting during her apprenticeship and honing her skills through years of experience and advanced education, she has become our short hair specialist. In 2004, Amanda attended the Douglas J Aveda Institute in East Lansing, Michigan, and has been rocking hair ever since!", "She moved to Arizona in 2007 to further her career and education. Amanda enjoys the entire artistic approach to hair cutting and custom color to make you feel your very best."],
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
            summary: ["Sherri has been a stylist since 2009 after attending the Toni and Guy Academy. Specializing in healthy blondes and extensions, Sherri loves to create a look specifically tailored for each client. She enjoys crafting unique tones of blonde that suit each individual. Don’t worry brunettes! She's got you covered too!", "You will leave with shine and a brand-new confidence in your hair and yourself. She will always be honest and provide you with a finished product that she believes will elevate you completely. She can’t wait to meet you and make hair magic happen!"],
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
            summary: ["I have been a hairdresser since 2008, and I absolutely love it! I enjoy vivids, highlights, and coloring the most. I also love a great transformation! While I don't offer tight fades or pixie cuts, I am here for all your other hair cutting needs.", "If you love to laugh, then you'll enjoy being in my chair! I cannot wait to meet you and give you the best hairstyle of your life!"],
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
            summary: ["Kendal has over 5 years of experience, specializing in men's hair, mid to long women's hair, blended highlights, as well as color. Taking the time to create a flawless, personalized look is the priority, along with creating a relaxing and fun experience. He cannot wait to get to know you and have fun while enhancing your natural beauty."],
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
            summary: [`Hola! My name is Celina but I go by C.C. for the past 12 years of being a cosmetologist. I’m just a girl from the Arizona desert born and raised, who has always loved sharks and travel but beauty is my true passion.`,

            `When you love your job the way I do it isn’t just a job, it’s my dedication and motivation to make my clients feel beautiful inside and out. I love to meet new people from all over the world building great friendships and bonds. I always try my best to not only educate about their hair (products, styling, and aftercare) but to make sure their needs and expectations are heard.`,
        
            `I have learned so much in the beauty industry over the years and I always challenge myself to become better and keep up with the latest trends past or present. I specialize and provide services for men, women, and children. Haircut, color, waxing, and makeup. I am very versatile and love to do it all!`,
        
            `My biggest goal is to not only provide my clients a great service but a space to feel safe and comfortable while in my chair. I want you to have an amazing experience that leaves you happy, confident and beautiful with your new look walking out the door into that Arizona dry heat. Always remember “Love is in the hair” and “makeup is art, beauty in the spirit. I look forward to seeing you!" – Love C.C.`],
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
            className='bg-zinc-100 py-26'>
            <div ref={navStylistsRef}>
                <div className="md:w-3/5 mx-auto py-16 md:py-6">
                    <div className='flex-row flex-wrap'>
                        <img className='mx-auto h-10 -rotate-12 my-6' src={scissorsBlk} alt='scissors icon'></img>
                        <h2 className='text-stone-900 text-center font2 text-5xl px-4 md:px-12 uppercase'>MEET THE <span className='text-lime-400 font4 text-4xl'>SAINTS</span> <br />BEHIND THE SCISSORS</h2>
                    </div>
                    <hr className='mx-6 mt-16 bg-stone-500'></hr>
                    <p className='my-8 text-center text-stone-700 mx-12'><em>*Click on each stylist's picture to access detailed information about their specialties and unique styles.</em></p>
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
                                        <div className='relative w-full md:w-4/5 mx-auto py-1 hover:cursor-pointer opacity-90 hover:opacity-100 hover:scale-105'>
                                            <img src={stylist.picture} className=' object-cover mx-auto' alt={stylist.name}></img>
                                            <h3 className='font-thin text-xl text-stone-800 font4 text-center py-2'>{stylist.name}</h3>
                                        </div>
                                    </motion.div>
                                    <dialog id={`${stylist.id}Modal`} className="modal">
                                        <div className="modal-box pt-20 text-stone-400 bg-stone-100 text-center">
                                            <form method="dialog">
                                                {/* if there is a button in form, it will close the modal */}
                                                <button className="btn btn-md btn-square btn-primary px-12 fixed right-2 top-2 bg-lime-400 text-black hover:text-stone-200">✕</button>
                                            </form>
                                            <img src={stylist.picture} className='md:w-64 mx-auto' alt='Expert Stylist Paul'></img>
                                            <h3 className='text-4xl py-4 font4 text-stone-950'>{stylist.name}</h3>
                                               <hr className='bg-black mx-3 opacity-30'></hr>
                                                {stylist.summary.map((paragraph) => {
                                                    return (
                                                        <p className='text-lg py-2 text-stone-800' key={paragraph.length}>{paragraph}</p>
                                                    )
                                                })}
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