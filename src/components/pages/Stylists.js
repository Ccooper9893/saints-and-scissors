import { motion } from 'framer-motion';
import kendalPhoto from '../../assets/img/stylists/kendal.jpg';
import juliPhoto from '../../assets/img/stylists/juli.jpg';
import amandaPhoto from '../../assets/img/stylists/amanda.jpg';
import ccPhoto from '../../assets/img/stylists/cc.jpg';
import paulPhoto from '../../assets/img/stylists/paul.jpg';
import sherriPhoto from '../../assets/img/stylists/sherri.jpg';
import scissors from '../../assets/img/icons/scissors.png';

export default function Stylists({ toggleBooking, navStylistsRef }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: .75 }}
            id='stylists'
            className='bg-zinc-100'>
            <div ref={navStylistsRef}>
                <div className="md:w-3/5 mx-auto py-16 md:py-6">
                    <div className='flex-row flex-wrap'>
                        <img className='mx-auto h-10 -rotate-12 my-6' src={scissors} alt='scissors icon'></img>
                        <h2 className='text-stone-900 text-center font2 text-5xl md:text-7xl px-4 md:px-12 uppercase'>MEET THE SAINTS <br />BEHIND THE SCISSORS</h2>
                    </div>
                    <hr className='mx-6 mt-16 bg-stone-500'></hr>
                    <p className='my-8 text-center text-stone-700 mx-12'><em>Click on each stylist's picture to access detailed information about their specialties, prices, and unique styles.</em></p>
                    <div class="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-8 md:gap-y-12 px-8 py-12">



                        <motion.div
                            onClick={() => document.getElementById('paulModal').showModal()}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ ease: "easeOut", duration: 1.5 }}
                            className='flex justify-items-start hover:opacity-25'>
                            <div className='relative w-full md:w-4/5 mx-auto'>
                                <img src={paulPhoto} className='object-cover mx-auto p-2 bg-stone-200 shadow-inner shadow-stone-600' alt='Expert Stylist Paul'></img>
                                <h3 className='text-2xl text-stone-700 font4 text-center py-2'>Paul</h3>
                            </div>
                        </motion.div>
                        <dialog id="paulModal" className="modal md:mt-6">
                            <div className="modal-box pt-12 text-stone-900 bg-stone-200 text-center">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn btn-sm btn-circle btn-primary absolute right-2 top-2">✕</button>
                                </form>
                                <img src={paulPhoto} className='w-36 mx-auto bg-stone-200 shadow-inner shadow-stone-600' alt='Expert Stylist Paul'></img>
                                <h3 className="font-bold text-4xl">Hello, my name is Paul!</h3>
                                <p className='text-lg'>With a decade of experience, I've become an expert in crafting gorgeous, healthy blonde hair, perfecting stunning balayage transformations, and providing top-quality extensions.</p>
                                <hr className='mx-6 my-6 bg-stone-900'></hr>
                                <div className='text-center bg-stone-300 shadow-inner shadow-stone-900 p-6'>
                                    <h4 className='text-2xl font-bold'>Specialties/Pricing</h4>
                                    <ul>
                                        <li>Men's Haircut - $40</li>
                                        <li>Woman's Haircut - $50</li>
                                        <li>Blowdry &amp Style - $20</li>
                                        <li>Conditioning - $20</li>
                                    </ul>
                                </div>

                            </div>
                        </dialog>
                        {/* <div className='text-center md:text-left text-stone-700 mt-2 mb-12'>

                            <p className='text-xl'>With a decade of experience, I've become an expert in crafting gorgeous, healthy blonde hair, perfecting stunning balayage transformations, and providing top-quality extensions.</p>
                        </div> */}


                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ ease: "easeOut", duration: 1 }}
                            className='flex justify-items-start'>
                            <div className='w-full md:w-4/5 mx-auto'>
                                <img src={amandaPhoto} className='object-cover mx-auto p-2 bg-stone-200 shadow-inner shadow-stone-600' alt='Expert Stylist Amanda'></img>
                                <h3 className='text-2xl text-stone-700 font4 text-center py-2'>Amanda</h3>
                            </div>
                        </motion.div>
                        {/* <div className='text-center md:text-left text-stone-700 mt-2 mb-12'>
                            <h3 className='text-2xl text-stone-700 font4'>Amanda</h3>
                            <p className='text-xl'>Bringing a decade of hairstyling experience, my expertise lies in crafting stunning blonde hair, delivering exquisite balayage designs, and creating fabulous extensions. My passion extends from perfecting classic men's haircuts to trendy women's haircuts.</p>
                        </div> */}


                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ ease: "easeOut", duration: 1.5 }}
                            className='flex justify-items-start'>
                            <div className='w-full md:w-4/5 mx-auto'>
                                <img src={sherriPhoto} className='object-cover mx-auto p-2 bg-stone-200 shadow-inner shadow-stone-600' alt='Expert Stylist Sherri'></img>
                                <h3 className='text-2xl text-stone-700 font4 text-center py-2'>Sherri</h3>
                            </div>
                        </motion.div>
                        {/* <div className='text-center md:text-left text-stone-700 mt-2 mb-12'>
                            <h3 className='text-2xl text-stone-700 font4'>Sherri</h3>
                            <p className='text-xl'>I have been a stylist for 12 years specializing in healthy blonde hair, balayage, and extensions. I have styled several Phoenix Fashion week runway shows and photo shoots. I am great with Bridal Updo's and special occasion styles! I also offer an onsite bridal service to accommodate any of your needs for that Special day!</p>
                        </div> */}




                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ ease: "easeOut", duration: 1 }}
                            className='flex justify-items-start'>
                            <div className='w-full md:w-4/5 mx-auto'>
                                <img src={juliPhoto} className='object-cover mx-auto p-2 bg-stone-200 shadow-inner shadow-stone-600 ' alt='Expert Stylist Juli'></img>
                                <h3 className='text-2xl text-stone-700 font4 text-center py-2'>Juli</h3>
                            </div>
                        </motion.div>
                        {/* <div className='text-center md:text-left text-stone-700 mt-2 mb-12'>
                            <h3 className='text-2xl text-stone-700 font4'>Juli</h3>
                            <p className='text-xl'>With over 15 years in the industry, I specialize in creating vibrant blonde hair, perfecting the art of balayage, and providing seamless extensions. I've honed my skills through years of crafting beautiful Bridal Updo's and special occasion styles.</p>
                        </div> */}


                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ ease: "easeOut", duration: 1.5 }}
                            className='flex justify-items-start'>
                            <div className='w-full md:w-4/5 mx-auto'>
                                <img src={kendalPhoto} className='object-cover mx-auto p-2 bg-stone-200 shadow-inner shadow-stone-600 ' alt='Expert Stylist Kendal'></img>
                                <h3 className='text-2xl text-stone-700 font4 text-center py-2'>Kendal</h3>
                            </div>
                        </motion.div>
                        {/* <div className='text-center md:text-left text-stone-700 mt-2 mb-12'>
                            <h3 className='text-2xl text-stone-700 font4'>Kendal</h3>
                            <p className='text-xl'>8+ years of hairstyling experience have allowed me to specialize in creating beautiful and healthy blonde hair, mastering the art of balayage, and delivering exceptional results with extensions.</p>
                        </div> */}



                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ ease: "easeOut", duration: 1 }}
                            className='flex justify-items-start'>
                            <div className='w-full md:w-4/5 mx-auto'>
                                {/* <h3 className='text-xl text-stone-700 font4'>CC</h3> */}
                                <img src={ccPhoto} className='object-cover mx-auto p-2 bg-stone-200 shadow-inner shadow-stone-600 ' alt='Expert Stylist CC'></img>
                                <h3 className='text-2xl text-stone-700 font4 text-center py-2'>CC</h3>
                            </div>
                        </motion.div>
                        {/* <div className='text-center md:text-left text-stone-700 mt-2 mb-12'>
                            <h3 className='text-2xl text-stone-700 font4'>CC</h3>
                            <p className='text-xl'>Over 5 years in the industry, I've honed my skills to specialize in creating vibrant and healthy blonde hair, perfecting exquisite balayage designs, and delivering top-notch extensions.</p>
                        </div> */}




                    </div>
                    <hr className='mx-6 my-6 bg-stone-800'></hr>
                </div>
            </div>
        </motion.div>
    )
}