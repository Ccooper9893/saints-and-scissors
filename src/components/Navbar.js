

import logoSmall from '../assets/img/logos/nav-logo.png';
import logoLarge from '../assets/img/logos/nav-title-and-logo.png';
import calenderIcon from '../assets/img/icons/calender-icon.png';

export default function Navbar({ children }) {
    return (
        <div className="drawer z-10">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">

                {/* Navbar */}
                <div className="fixed w-full navbar justify-between md:justify-evenly py-0 bg-base-300">
                    <div className="flex justify-start lg:hidden w-24">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>

                    </div>
                    <div className="px-2 mx-2 md:hidden"><img src={logoSmall}></img></div>
                    <div className="px-2 mx-2 hidden md:block"><img src={logoLarge}></img></div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal">
                            {/* Navbar menu content here */}
                            <li><a>HOME</a></li>
                            <li><a>ABOUT</a></li>
                            <li><a>SERVICES</a></li>
                            <li><a>STYLISTS</a></li>
                            <li><a>GALLERY</a></li>
                            <li><a>CONTACT</a></li>
                        </ul>
                    </div>
                    <div className='flex justify-end w-24'>
                        <button className="btn btn-ghost px-3 normal-case font-thin" aria-label="Open Vagaro booking drawer">
                            <img className="calender" src={calenderIcon} alt="calender icon, book now with vigaro"></img>
                        </button>
                    </div>
                </div>
                {/* Page content here */}
                {children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200">
                    {/* Sidebar content here */}
                    <li><a>HOME</a></li>
                    <li><a>ABOUT</a></li>
                    <li><a>SERVICES</a></li>
                    <li><a>STYLISTS</a></li>
                    <li><a>GALLERY</a></li>
                    <li><a>CONTACT</a></li>
                </ul>
            </div>
        </div>
    )
}