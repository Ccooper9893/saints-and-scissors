import aboutBg from '../../assets/img/decals/decal-2.png';
import Rating from '../misc/Rating';
import { Parallax } from 'react-scroll-parallax';
export default function About({ navAboutRef }) {
  return (
    <div id='about' className='h-full bg-black text-stone-300'>
      <div className='pt-4'>
        <div className='flex flex-col justify-center lg:w-2/3 mt-6 lg:mx-auto text-center'>
          <h2 className='font2 text-7xl lg:text-9xl center text-stone-100 mb-4 md:mb-24 bg-black bg-opacity-40 z-10'>
            Unlock <br />
            Your Hair's< br />
            <span className='text-violet-500 font2'>Potential</span>.
          </h2>
          <div className='flex flex-col md:flex-row'>
            <div className='relative px-8 lg:mt-6 mt-10 w-full'>
              <Parallax speed={-8}>
                <img className='opacity-80 mx-auto z-0 rounded-full bg-stone-200 bg-opacity-20 shadow-lg shadow-stone-400' src={aboutBg} alt='Grunge style women'></img>
              </Parallax>
              {/* <p className='absolute w-3/4 p-4 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-black bg-opacity-75'><em>“Life is more beautiful when you meet the right hairdresser.”<br></br><small className='mt-3 text-sm'> – Peter Coppola</small></em></p> */}
            </div>
            <div className='my-10 md:my-auto'>
              <p className='py-6 text-2xl p-4 tracking-wide md:text-left' ref={navAboutRef}><span className='font4'>At Saints and Scissors,</span><br />we are more than just hairstylists - we are <strong>artists</strong>, <strong>creators</strong>, and <strong>visionaries</strong> dedicated to transforming your hair into a work of art. With a passion for perfection and an unwavering commitment to making you look and feel your best, we have become a go-to destination for exceptional hair design<br /> and care.</p>
              <div className='flex flex-row flex-wrap justify-center'>
                {/* <!-- Google --> */}
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-10 w-10 mx-4 "
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                    fill-rule="evenodd"
                    clip-rule="evenodd" />
                </svg> */}
                {/* <!-- Instagram --> */}
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-10 w-10 mx-4 "
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg> */}
                {/* <!-- Twitter --> */}
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-10 w-10 mx-4 "
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg> */}
                {/* <!-- Facebook --> */}
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-10 w-10 mx-4 "
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg> */}
              </div>
            </div>
          </div>
          <hr className='w-4/5 lg:w-5/6 mx-auto my-6 md:my-24 opacity-90'></hr>
          <Rating />
        </div>
        <hr className='w-4/5 lg:w-5/6 mx-auto my-6 md:my-24 opacity-90'></hr>
      </div>
    </div>
  )
}