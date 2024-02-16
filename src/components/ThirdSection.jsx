import React from 'react'
import Logo2 from '../assets/webp-imgs/logo2.webp'

const ThirdSection = () => {
  return (
    <div>
      <div className='bg-no-repeat bg-cover w-full bg-center work_bg overflow-hidden'>
        <div className='mx-auto Container_main container px-4 '>
          <div className='flex flex-col justify-center items-center py-[42px]'>
            <img data-aos="zoom-in-up" src={Logo2} alt="logo2" className='w-[97px] h-[80px] md:w-[128px] md:h-[107px]'/>
            <h3 data-aos="zoom-in-up" className='text-[28px] md:text-[36px] lg:text-[48px] text-white font-normal ff_roboto text-center my-[19px] leading-[120.5%] lg:w-[862px]'>Join work skill and start <span className='md:font-semibold'>work on your soft skills</span> now and change yourself</h3>
          <p data-aos="zoom-in-up" className='text-[16px] text-[#B8BABC] font-normal lg:w-[534px] leading-[150%] text-center ff_roboto'>Lpsum diam curabitur tincidunt sed vitae nulla a porttitor sed. Eros sem sed gravida in nulla dictum </p>
          <div>
            
          <button className='text-[18px] ff_roboto font-medium mt-[45px] py-[12px] px-[34px] bg-[#FF5CD7] rounded-[264px]  text-white hover:bg-transparent border-[1px] border-transparent hover:border-[white] transition-all duration-300 hover:text-white'>Subscribe</button>
     
          </div>
          </div>
        </div>
      </div>
        
    </div>
  )
}

export default ThirdSection