import decal2 from '../../assets/img/decals/decal-1.png';

export default function Services({ toggleBooking }) {
    return (
        <div className="py-6bg1">
            {/* <h2 className="text-3xl text-center text-stone-100 ">SERVICES</h2> */}
            <img src={decal2}></img>
            <div className="py-5 my-4 mx-6 lg:mx-96 bg-stone-900">
                <h2 className='title text-center text-3xl text-stone-50 font2 py-4'>CUTS AND STYLING</h2>
                <hr className='w-4/5 lg:w-3/4 mx-auto mb-4 opacity-30'></hr>
                <table className="table text-white">
                    <tbody className="lg:text-xl">
                        <tr>
                            <td>Womans Cut and Blowdry</td>
                            <td></td>
                            <td>$60+</td>
                        </tr>
                        <tr>
                            <td>Blowdry Style</td>
                            <td></td>
                            <td>$50+</td>
                        </tr>
                        <tr>
                            <td>Mens Cut</td>
                            <td></td>
                            <td>$40+</td>
                        </tr>
                        <tr>
                            <td>Mens Cut and Color</td>
                            <td></td>
                            <td>$75+</td>
                        </tr>
                        <tr>
                            <td>Conditioning Treatment &amp; Blowdry</td>
                            <td></td>
                            <td>$70+</td>
                        </tr>
                        <tr>
                            <td>Single Process Color</td>
                            <td></td>
                            <td>$85+</td>
                        </tr>
                        <tr>
                            <td>Touch up</td>
                            <td></td>
                            <td>$70+</td>
                        </tr>
                        <tr>
                            <td>Bleach Retouch</td>
                            <td></td>
                            <td>$85+</td>
                        </tr>
                        <tr>
                            <td>Partial Highlight</td>
                            <td></td>
                            <td>$120+</td>
                        </tr>
                        <tr>
                            <td>Full Highlight</td>
                            <td></td>
                            <td>$160+</td>
                        </tr>
                        <tr>
                            <td>Color Correction</td>
                            <td></td>
                            <td>By Consultation</td>
                        </tr>
                        <tr>
                            <td>Extensions</td>
                            <td></td>
                            <td>By Consultation</td>
                        </tr>
                    </tbody>
                </table>
                <div className="flex justify-center w-full mt-10">
                            <button
                                onClick={() => { toggleBooking(true); }}
                                className='tracking-widest z-10 w-1/2 py-2 rounded-sm text-stone-200 text-center text-sm glass bg-opacity-70 shadow-lg shadow-black hover:shadow-none'>
                                MORE
                            </button>
                        </div>
            </div>
        </div>
    )
}