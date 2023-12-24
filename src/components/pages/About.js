import decal from '../../assets/img/decals/decal-2.png';
export default function About({ toggleBooking }) {
  return (
    <div
      id='about'
      className='h-full w-full mx-auto bg-stone-100 z-10 border-t border-stone-600 rounded-t-xl'>
      <div className='flex flex-col justify-center pt-4 pb-20 lg:mx-auto text-center'>
        <div>
          <h2 className='font2 text-6xl text-center text-stone-900 px-4 pt-12 z-10'>
            Unlock Your Hair's<br /><em className='text-lime-400 font4 text-5xl'>Potential</em><span className='text-stone-950'>.</span>
          </h2>
          <img className="mx-auto md:w-1/4 rounded-full border-stone-600" src={decal} alt="Grundge style art of woman with flowing hair"></img>
          <p className='pb-4 md:w-1/2 md:text-center md:mx-auto p-6 tracking-wide  text-stone-600'>At <strong>Saints & Scissors</strong>, our mission extends beyond enhancing your appearance; we are committed to delivering an extraordinary and inclusive full-service salon experience that embraces individuals of all ages and backgrounds. Join us in exploring the artistry of hair styling at our salon — where beauty is not just an outcome, but an inclusive journey that <strong>celebrates diversity and caters to every unique individual.</strong></p>
        </div>
      </div>
    </div>
  )
}