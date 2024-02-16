import React from 'react'
import Planingimg from '../assets/webp-imgs/planing-img.webp'
import { Gmail1, Insta1, Linkdin1 } from './svg'

const Form2 = () => {
  return (
   <div className='bg-[#EFEFEF] overflow-hidden'>
      <div className='mx-auto Container_main container px-4'>
            <div className='flex flex-wrap relative justify-center lg:justify-start py-[10px] lg:py-[90px] pb-[50px] md:-[100px] lg:pb-[230px]'>
                <div className='lg:w-[50%]'>
                   <div data-aos="fade-right"  className='relative flex justify-center items-center lg:justify-start lg:items-start'>
                   <img src={Planingimg} width={558} height={410} alt="planing" />
                   <div className='px-[20px] md:px-[24px] py-[10px] md:py-[20px] rounded-[5px] absolute bottom-[-80px] bg-[#FFF8F8] link_shdow'>
                    <a href="https://mail.google.com/mail/u/0/" className='flex  items-center'> <Gmail1/> <p className='text-[18px] md:text-[20px] ml-4 font-normal ff_roboto text-black'>Stepenjohns@gmail.com</p> </a>
                     <span className='gap-[9px] flex mt-[10px]'><a href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fstories%2Fhighlights%2F17859310559785705%2F"> <Insta1/></a> <a href="https://www.linkedin.com/signup/cold-join?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Ffeed%2F&trk=login_reg_redirect"> <Linkdin1/> </a>    </span>
                   </div>
                   </div>
                </div>
                <div className='lg:w-[59%] lg:absolute right-0 '>
                    <div data-aos="fade-left" className='py-[28px] px-3 md:px-[45px]  rounded-[5px] bg-[#FAF8F8] from_box mt-[100px] lg:mt-[60px]'>
                          <h3 className='text-[36px] md:text-[48px] text-black ff_roboto font-normal'>Get <span className='md:font-semibold'>Updated</span> With Us</h3>
                      <p className='text-[16px] ff_roboto font-medium text-black opacity-65'>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli.</p>
                    <form action="" className='mt-[30px] md:mt-[40px]'>
                       <div className='flex gap-[12px] md:gap-[20px]'>
                        <div className=' bg-gradient-to-b from-[#CDCDCD] from-20%  to-[#F7F7F7]  to-80% p-[1px] w-full rounded-[6px]'>
                        <input required className='p-3 md:p-[18px] w-full  rounded-[5px] bg-[#FFF]    box' type="text" name="" id="" placeholder='Your Name'/>         
                        </div>
                        <div className=' bg-gradient-to-b from-[#CDCDCD] from-20%  to-[#F7F7F7]  to-80% p-[1px] w-full rounded-[6px]'>
                        <input required className='p-3  md:p-[18px]  rounded-[5px] bg-[#FFF] w-full box' type="email" name="" id="" placeholder='Your Email Address'/> 
                      
                        </div>
                       </div>
                       <div className='mt-[12px] sm:mt-[16px]  bg-gradient-to-b from-[#CDCDCD] from-20%  to-[#F7F7F7]  to-80% p-[1px] w-full rounded-[6px]'>
                       <textarea name=""  className=' p-3  pb-[60px] rounded-[5px] bg-[#FFF] box  w-full' id="" cols="" rows="4" placeholder='Message'></textarea>
                     
                        </div> 
                       <button className='bg-[#FF7DDF] rounded-[40px] mt-[20px] py-[8px] px-[24px] text-[18px] font-normal ff_roboto text-white hover:bg-[black] transition-all duration-300 hover:text-white'>Send Message</button>
                    </form>
                    
                </div>
            </div>
        </div>
    </div>
   </div>

  )
}

export default Form2