import React ,{useState} from 'react'
import Logo from '../assets/webp-imgs/logo.webp'
import { Add } from './svg';


function Hero() {
    const [show, setShow] = useState(false);
    if (show === true) {
      document.body.classList.add("overflow_hidden")
    }
    else {
      document.body.classList.remove("overflow_hidden")
    }
  return (
    <div className='hero_bg bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center overflow-hidden'>
        {/* navbar */}
          <div className=' mx-auto Container_main container px-4 lg:px-2 lg:pt-[18px] !sticky !top-0'>
     
          <div className='  flex items-center justify-between navbar h-[77px]  rounded-[328px] pt-[20px] lg:pt-[0] z-50'>
               <a href="" className='sm:ml-[30px]'> <img src={Logo} alt=""  className='relative z-50'/></a>
          
                 <ul className={`${show ? "left-0" : ""} duration-500 bg-[black]    w-full h-screen top-[0] -left-full fixed gap-[33px] lg:gap-[16px] flex flex-col justify-center items-center lg:bg-transparent lg:flex-row  lg:static lg:w-auto lg:h-full z-20 `}>
                          <li className='relative after:absolute after:bottom-[-1px]   after:left-[0px] after:h-[1px] after:ease-in-out after:duration-300 after:w-0 after:hover:w-[15px] after:bg-[white] '><a href="#" onClick={() => setShow(!show)} className=' transition-all ease-in-out duration-300 text-[white] text-[16px] font-normal ff_roboto relative after:absolute after:top-[-2px]   after:left-[0px] after:h-[1px] after:ease-in-out after:duration-300 after:w-0 after:hover:w-[15px] after:bg-[white] '>Home</a></li>
                          <li className='relative after:absolute after:bottom-[-1px]   after:left-[0px] after:h-[1px] after:ease-in-out after:duration-300 after:w-0 after:hover:w-[15px] after:bg-[white] '><a href="#about" onClick={() => setShow(!show)} className=' transition-all ease-in-out duration-300 text-[white]  text-[16px] font-normal ff_roboto relative after:absolute after:top-[-2px]   after:left-[0px] after:h-[1px] after:ease-in-out after:duration-300 after:w-0 after:hover:w-[15px] after:bg-[white] '>About </a></li>
                          <li className='relative after:absolute after:bottom-[-1px]   after:left-[0px] after:h-[1px] after:ease-in-out after:duration-300 after:w-0 after:hover:w-[15px] after:bg-[white] '><a href="#article" onClick={() => setShow(!show)} className=' transition-all ease-in-out duration-300 text-[white]  text-[16px] font-normal ff_roboto relative after:absolute after:top-[-2px]   after:left-[0px] after:h-[1px] after:ease-in-out after:duration-300 after:w-0 after:hover:w-[15px] after:bg-[white] '>Article</a></li>
                          <li className='relative after:absolute after:bottom-[-1px]   after:left-[0px] after:h-[1px] after:ease-in-out after:duration-300 after:w-0 after:hover:w-[15px] after:bg-[white] '><a href="#event" onClick={() => setShow(!show)} className=' transition-all ease-in-out duration-300 text-[white] text-[16px] font-normal ff_roboto  relative after:absolute after:top-[-2px]   after:left-[0px] after:h-[1px] after:ease-in-out after:duration-300 after:w-0 after:hover:w-[15px] after:bg-[white] '>Events    </a></li>
                       </ul>
                       <button className='text-[16px] sm:text-[18px]  ff_roboto py-[8px] md:py-[11px] px-[20px] md:px-[30px] bg-[white] rounded-full font-medium mr-[15px] hover:bg-[#FF5CD7] transition-all duration-300 hover:text-white '> <span className='px-1'>+</span>
                       Subscribe
                       </button>
                       <button className='lg:hidden z-30 transwqition-all duration-300 ease-in-out sm:mr-[25px]' onClick={() => { setShow(!show); }}> {show?
                       (
                        <div className="z-20 relative">
                          <span className="flex bg-white absolute rounded-3xl -left-7 duration-300 top-1 rotate-45 h-[3px] w-6"></span>
                          <span className="flex bg-white absolute rounded-3xl -left-7 duration-300 -rotate-45 h-[3px] w-6 mt-1"></span>
                        </div>
                      ) :(
                    <div className="z-20 relative">
                      <span className="flex bg-white h-[3px] rounded-3xl duration-300 w-6"></span>
                      <span className="flex bg-white h-[3px] rounded-3xl duration-300 w-6 mt-1"></span>
                      <span className="flex bg-white h-[3px] rounded-3xl duration-300 w-6 mt-1"></span>
                    </div>
                  )   }</button>
                      </div>
        </div>
 
        {/* Hero section */}
         
         <div className='mx-auto Container_main container px-4   flex justify-center items-center flex-grow'>
          <div className='lg:mt-[-100px]'>
            <h2  className='text-white text-[42px] md:text-[52px] lg:text-[64px] font-normal ff_roboto text-center lg:w-[793px] leading-[120%]'>
            Meet <span className='md:font-semibold'>Work Skill</span> Your Agency for Growth
            </h2>
            <p  className='text-center text-[16px] ff_roboto font-normal text-[#C6C2C4] lg:w-[709.094px] leading-[150%] mt-[12px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less norma.</p>
        <div className='text-center'>
          
        <button className='text-[18px] ff_roboto  z-10 font-medium mt-[38px] py-[12px] px-[34px] border-[white] border-[1px] hover:bg-[#FF5CD7] hover:border-transparent transition-all duration-300 rounded-[109px] hro_btn text-white'>Get Started</button>
          
        </div>
          
           </div>
         </div>

    </div>
  )
}

export default Hero