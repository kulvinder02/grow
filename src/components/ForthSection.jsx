import React from 'react'
import ViewImg1 from '../assets/webp-imgs/view-img1.webp'
import ViewImg2 from '../assets/webp-imgs/view-img2.webp'
import ViewImg3 from '../assets/webp-imgs/view-img3.webp'
import ViewImg4 from '../assets/webp-imgs/view-img4.webp'
import LikeImg from '../assets/webp-imgs/like-img.png'
import Comnt1 from '../assets/webp-imgs/comnt.png'
import Uplod1 from '../assets/webp-imgs/upload.png'

export const ForthSection = () => {
  return (
    <div className='bg-[#EFEFEF] overflow-hidden' id='article'>
      <div className='mx-auto Container_main container px-4'>
      <h3 
data-aos="zoom-in-up" className='text-[36px] md:text-[48px] text-[#000] font-normal ff_roboto text-center pt-[38px] lg:pt-[100px]  mb-[30px] md:mb-[70px]'>Let’s Take a  <span className='md:font-semibold'>View</span> </h3>

        <div className='md:flex flex-wrap py-[22px] border-t-[0.292px] border-[#D7D7D7] '>
          <div data-aos="fade-right" className='px-4 md:w-[40%] flex flex-col justify-center items-center lg:items-start'>
            <img src={ViewImg1} width={364} height={225} alt="" className='hover:scale-[1.02] transition-all duration-300'/>
          </div>
          <div data-aos="fade-left" className='px-4 md:w-[60%] lg:pl-[40px]'>
          <div className='viewCard_hover transition-all duration-300 ease-in-out'>
            <h4 className='text-[#FF5CD7] text-[18px] ff_roboto font-medium mt-3 lg:mt-0 '>July 2023</h4>
            <p className='my-[6px] md:my-[6px] text-[20px] md:text-[24px] text-[black]  ff_roboto font-medium '>Join  us on our next challenge</p>
            <p className='text-[16px] text-[#484848]  ff_roboto font-normal '>Working with feedback</p>
            <p className='my-[14px] text-[16px] text-[#484848]  ff_roboto font-normal '>April 9 - LIOR KRENGEL</p>
            <button className='text-[black] text-[18px] ff_roboto font-medium view_btn  transition-all duration-300 ease-in-out leading-[180%] underline '>Read more</button>
         <div className='hidden hvr_view'>
         <div className='flex items-center justify-between mt-[14px]  transition-all duration-300 ease-in-out'>
            <span className='flex items-center'> <img src={LikeImg} alt="" className='cursor-pointer'/>  <p className='text-[black] text-[18px] ml-1 ff_roboto font-medium'>2</p></span>
            <img src={Comnt1} alt="" className='cursor-pointer'/>
            <img src={Uplod1} alt="" className='cursor-pointer'/>
          </div>
         </div>
          </div>  
          </div>
        </div>
        <div className='md:flex flex-wrap py-[22px] border-t-[0.292px] border-[#D7D7D7] '>
          <div data-aos="fade-right" className='px-4 md:w-[40%] flex flex-col justify-center items-center lg:items-start'>
            <img src={ViewImg2} width={364} height={225} alt="" className='hover:scale-[1.02] transition-all duration-300' />
          </div>
          <div data-aos="fade-left" className='px-4 md:w-[60%] lg:pl-[40px]'>
          <div className='viewCard_hover transition-all duration-300 ease-in-out'>
            <h4 className='text-[#FF5CD7] text-[18px] ff_roboto font-medium mt-3 lg:mt-0'>July 2023</h4>
            <p className='my-[8px] text-[20px] md:text-[24px] text-[black]  ff_roboto font-medium lg:w-[565px] leading-[120%]'>Our journey comes to a close flipping the coin and the tools we have gathered</p>
            <p className=' text-[16px] text-[#484848]  ff_roboto font-normal lg:w-[565px]'>Together we have spent the lst five weeks exploring and practing our healthy Boundaries. We took a step back and connected  with our.....</p>
            <p className='my-[14px] md:my-[12px] text-[16px] text-[#484848]  ff_roboto font-normal '>March 15 - LIOR KRENGEL</p>
            <button className='text-[black] text-[18px] ff_roboto font-medium view_btn  transition-all duration-300 ease-in-out underline '>Read more</button>
         <div className='hidden hvr_view transition-all duration-300 ease-in-out'>
         <div className='flex items-center justify-between mt-[14px]  transition-all duration-300 ease-in-out'>
            <span className='flex items-center'> <img src={LikeImg} alt="" className='cursor-pointer'/>  <p className='text-[black] text-[18px] ml-1 ff_roboto font-medium'>2</p></span>
            <img src={Comnt1} alt="" className='cursor-pointer'/>
            <img src={Uplod1} alt="" className='cursor-pointer'/>
          </div>
         </div>
          </div>  
          </div>
        </div>
        <div className='md:flex flex-wrap py-[22px] border-t-[0.292px] border-[#D7D7D7] '>
          <div data-aos="fade-right" className='px-4 md:w-[40%] flex flex-col justify-center items-center lg:items-start'>
            <img src={ViewImg3} width={364} height={225} alt=""  className='hover:scale-[1.02] transition-all duration-300'/>
          </div>
          <div data-aos="fade-left" className='px-4 md:w-[60%] lg:pl-[40px]'>
          <div className='viewCard_hover transition-all duration-300 ease-in-out'>
            <p className='mb-[12px] mt-3 lg:mt-0   text-[20px] md:text-[24px] text-[black]  ff_roboto font-medium lg:w-[565px] leading-[120%]'>Week five: stepping into our yes with secure expectations</p>
            <p className='text-[16px] text-[#484848]  ff_roboto font-normal '>Our yes is only human too</p>
            <p className='my-[14px] text-[16px] text-[#484848]  ff_roboto font-normal '>June 3 - LIOR KRENGEL</p>
            <button className='text-[black] text-[18px] ff_roboto font-medium view_btn  transition-all duration-300 ease-in-out underline '>Read more</button>
         <div className='hidden hvr_view transition-all duration-300 ease-in-out'>
         <div className='flex items-center justify-between mt-[14px] transition-all duration-300 ease-in-out'>
            <span className='flex items-center'> <img src={LikeImg} alt="" className='cursor-pointer'/>  <p className='text-[black] text-[18px] ml-1 ff_roboto font-medium'>2</p></span>
            <img src={Comnt1} alt="" className='cursor-pointer'/>
            <img src={Uplod1} alt="" className='cursor-pointer'/>
          </div>
         </div>
          </div>  
          </div>
        </div>
        <div className='md:flex flex-wrap py-[22px] border-t-[0.292px] border-b-[0.292px] border-[#D7D7D7] '>
          <div data-aos="fade-right" className='px-4 md:w-[40%] flex flex-col justify-center items-center lg:items-start'>
            <img src={ViewImg4} width={364} height={225} alt=""  className='hover:scale-[1.02] transition-all duration-300'/>
          </div>
          <div data-aos="fade-left" className='px-4 md:w-[60%] lg:pl-[40px]'>
          <div className='viewCard_hover transition-all duration-300 ease-in-out'>
            <p className='mb-[16px] mt-3 lg:mt-0   text-[20px] md:text-[24px] text-[black]  ff_roboto font-medium lg:w-[565px] '>Step three: exploring between our yes and no</p>
            <p className='my-[14px] text-[16px] text-[#484848]  ff_roboto font-normal '>A week of international curiosity</p>
            <p className='my-[14px] text-[16px] text-[#484848]  ff_roboto font-normal '>July 21 - LIOR KRENGEL</p>
            <button className='text-[black] text-[18px] ff_roboto font-medium view_btn  transition-all duration-300 ease-in-out underline '>Read more</button>
         <div className='hidden hvr_view transition-all duration-300 ease-in-out'>
         <div className='flex items-center justify-between mt-[14px] transition-all duration-300 ease-in-out'>
            <span className='flex items-center'> <img src={LikeImg} alt="" className='cursor-pointer'/>  <p className='text-[black] text-[18px] ml-1 ff_roboto font-medium'>2</p></span>
            <img src={Comnt1} alt="" className='cursor-pointer'/>
            <img src={Uplod1} alt="" className='cursor-pointer'/>
          </div>
         </div>
          </div>  
          </div>
        </div>
<div className='flex justify-center pb-[40px]  md:pb-[62px]'>
<button className='text-[18px] ff_roboto font-medium mt-[37px] py-[10px] px-[54px] gap-[10px] hover:bg-black  transition-all duration-300 bg-[#FF5CD7] rounded-[264px]  text-white'>View All</button>
</div>
      </div>
    </div>
  )
}
