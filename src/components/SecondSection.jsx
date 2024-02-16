import React from 'react'
import Girl_img from '../assets/webp-imgs/girl-laptop.webp'

const SecondSection = () => {
  return (
    <div className='bg-[#EFEFEF] overflow-hidden' id='about'>
      <div className='mx-auto Container_main container px-4'>
        <div className='flex flex-wrap py-[48px] justify-center lg:justify-start lg:py-[180px] Secnd_pb relative'>
          <div data-aos="fade-right" className='lg:w-[60%] '>
            <img src={Girl_img} width={679} height={495} alt="girlimg" />
          </div>
          <div className='lg:w-[50%] right-0 lg:absolute'>
            <div data-aos="fade-left" className='p-[16px] md:p-[24px] bg-[#FAF8F8] rounded-[5px] mt-[25px]'>
              <h3 className='ff_roboto text-[36px] md:text-[48px] font-normal'><span className='md:font-semibold'>Welcome </span>to Work Skills</h3>
            
            <li className='flex'><span  className='text-[50px] mt-[-35px] pr-[10px] text-black'>.</span><p className='text-[#4B4A4A] ff_roboto text-[16px] font-normal leading-[150%] mt-[10px]'>Work Skills is built for young professionals who want to enhance their soft skills to overcome the challenges they often face during the early first years of work.</p>
              </li>
              <li className='flex'><span  className='text-[50px] mt-[-35px] pr-[10px] text-black'>.</span><p className='text-[#4B4A4A] ff_roboto text-[16px] font-normal leading-[150%] mt-[10px]'>In a practical and growth-oriented approach, we help young professionals develop and strengthen essential skills such as boundaries-setting, communication, adaptability, and others.
</p>
              </li>
              <li className='flex'><span  className='text-[50px] mt-[-35px] pr-[10px] text-black'>.</span><p className='text-[#4B4A4A] ff_roboto text-[16px] font-normal leading-[150%] mt-[10px]'>In this way, we aim to empower young professionals to navigate their careers with confidence and success.</p>
              </li>
         

              <button className='text-[18px] ff_roboto font-medium mt-[30px] md:mt-[52px] py-[12px] px-[34px] bg-[#FF5CD7] rounded-[264px]  text-white hover:bg-[black] transition-all duration-300 hover:text-white'>Subscribe</button>
     
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecondSection