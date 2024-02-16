import React from 'react'
import Logo from '../../assets/webp-imgs/logo2.webp'

const Loader1 = () => {
    setTimeout(() => {
        document.getElementById("none").classList.add("hidden");
        document.body.classList.remove("overflowhidden");
    }, 3000);
  return (
    <div>
 <div>
            <div>
                <div
                    id="none"
                    className="h-screen w-full preldr-bg fixed top-0 start-0  z-40 bg-black opacity-100">
                    <div className="flex flex-col justify-center items-center h-screen">
                        {/* <div >
                            <img src={Logo} alt="#" className='mt-5 w-[100px] h-[100px] lg:w-[180px] lg:h-[150px] animate-bounce' />
                        </div> */}
                        {/* loder 2 */}
                        {/* <div class="loaderBar"></div> */}


                        {/* loader 3 */}
                        {/* <div class="div">
                            <p id="h2">Loading....<span id="lol"></span></p>
                        </div> */}

                        {/* preloader 4 */}
                        <div class="loader">
                            <span>Grow</span>
                            <span>Grow</span>
                        </div>

                        {/* preloader 5 */}
                        

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Loader1