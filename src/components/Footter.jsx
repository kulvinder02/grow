import React from 'react'
import Logo2 from '../assets/webp-imgs/logo2.webp'
import FttrBtn from '../assets/webp-imgs/fttrbtn.png'

const Footter = () => {
  return (
    <div className='fttr_bg bg-no-repeat bg-cover bg-center overflow-hidden'>
        <div className='mx-auto Container_main container px-4'>
            <div className='flex flex-col justify-center items-center'>
               <a href=""> <img src={Logo2} width={90} height={75} alt="fotter-logo" className='pt-[26px]'/></a>
                <div className='flex items-center mt-[34px]'>
                 <span className='ff_roboto font-normal text-[16px] gap-[20px] lg:gap-[0px] text-center justify-center flex  flex-wrap items-center text-white'><p className='text-[#8F9295]'>©</p> <p className='text-[16px] ml-[-15px] lg:ml-[5px]'>2023 Lior krengle </p>   
                                                         <a href="" className='text-white pl-[6px] '>. <span className='underline'>Privacy</span></a>                
                                                         <a href="" className='text-white pl-[6px] '>. <span className='underline'>Terms</span></a>                 
                                                         <a href="" className='text-white pl-[6px] '>. <span className='underline'>Collection Notice</span></a>     </span>  
                </div>
                <div className='mt-[34px] pb-[30px] gap-[10px] md:gap-[24px] flex items-center'>
                    <button className='text-[18px] font-medium text-black ff_roboto flex items-center hover:bg-transparent border-[1px] border-transparent hover:border-[white] transition-all duration-300 hover:text-white bg-[#FFF] rounded-[264px] px-[18px] sm:px-[28px] py-[8px] sm:py-[11px]'> <img src={FttrBtn} alt="" className='pr-[8px]'/> Start Writing</button>
                    <button className='text-[18px] font-medium text-black ff_roboto flex items-center hover:bg-transparent border-[1px] border-transparent hover:border-[white] transition-all duration-300 hover:text-white bg-[#FFF] rounded-[264px] px-[18px] sm:px-[30px] py-[8px] sm:py-[11px]'> Get the app</button>
                  
                    </div> 
            </div>
<p className='text-[14px] font-normal text-[#878A8C] ff_roboto text-center py-[30px] border-t-[#2B3134] border-t-[1px]'><span className='underline'>Substack</span> is the home for great writing</p>
        </div>
    </div>
  )
}

export default Footter