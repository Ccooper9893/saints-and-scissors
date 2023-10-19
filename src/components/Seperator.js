export default function Seperator() {
    return (
        <div className='relative -z-5'>
        <div className="absolute bottom-0 w-full z-30">
            <div className="seperator w-full border-solid border-transparent border-t-20 border-l-1/2 border-r-1/2 bg-black">
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <button className='absolute bottom-2 animate-bounce downIcon'>&#9660;</button>
          </div>

        </div>
    )
};