import { motion } from "framer-motion";

export default function About({ toggleBooking }) {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ ease: "easeOut", duration: 1 }}
    id='about' 
    className='h-full w-full mx-auto bg-stone-200 z-10 border-t border-stone-600 rounded-t-xl'>
      <div className='flex flex-col justify-center pt-4 pb-20 lg:mx-auto text-center'>
        <div>
          {/* <h2 className='font2 text-4xl lg:text-5xl center text-stone-950 pt-14 z-10'>
            EXCEPTIONAL HAIR SERVICES TAILORED TO YOUR NEEDS
          </h2> */}
          <h2 className='font2 text-6xl text-center text-stone-900 px-4 pt-12 z-10'>
            Unlock Your Hair's<br /><em className='text-lime-400 font4 text-5xl'>Potential</em><span className='text-stone-950'>.</span>
          </h2>
          {/* <hr className='w-5/6 mx-auto my-6 bg-stone-950'></hr> */}
          <p className='pb-4 md:w-1/2 md:text-center md:mx-auto p-6 tracking-wide  text-stone-600'>At Saints & Scissors, our mission extends beyond enhancing your appearance; we are committed to delivering an extraordinary and inclusive <strong>full-service salon experience</strong> that embraces individuals of all ages and backgrounds. Join us in exploring the artistry of hair styling at our salon — where beauty is not just an outcome, but an inclusive journey that celebrates diversity and caters to every unique individual.</p>
          <p></p>
          {/* <div className='w-5/6 py-24 md:py-4 mx-auto z-0'>
            <Rating />
          </div> */}
          {/* We understand that everyone is unique and deserves to look their best, and that's why we bring our own distinct sets of skills and styles to every appointment.  */}
          <div className='flex justify-center my-36'>
            <a
              href='#stylists'
              className='px-8 py-2 hover:bg-lime-400 border border-stone-800 text-stone-800 hover:bg-stone-100'>
              MEET OUR STYLISTS
            </a>
          </div>
          <hr className='mx-6 mt-16 bg-stone-950'></hr>
        </div>
      </div>
    </motion.div>
  )
}