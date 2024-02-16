import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
function Icon({ id, open }) {
  return (
    <div className="relative ">
      <svg
        className={`${
          id === open ? "rotate-0" : "rotate-180"
        } h-5 w-5   transition-transform`}
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="16"
        viewBox="0 0 20 16"
        fill="none"
      >
        <g opacity="0.8">
          <path
            d="M1.09286 12.1953C1.42401 12.8304 2.16772 13.0693 2.74315 12.7218C2.90058 12.6296 4.17086 11.3538 6.18486 9.24756C7.94372 7.42356 9.39858 5.92527 9.41486 5.92527C9.43115 5.92527 10.886 7.42356 12.6449 9.25299C14.6589 11.3538 15.9291 12.6296 16.0866 12.7218C16.5263 12.9878 17.1614 12.901 17.5034 12.5318C17.8454 12.1736 17.9377 11.5656 17.7043 11.153C17.6391 11.0281 15.902 9.18241 13.85 7.04899C10.9729 4.05784 10.0609 3.14584 9.89801 3.0807C9.62658 2.97213 9.20315 2.97213 8.93172 3.0807C8.76886 3.14584 7.86772 4.04699 4.97972 7.04899C2.92772 9.18241 1.19058 11.0281 1.12001 11.153C0.973434 11.419 0.95715 11.9456 1.09286 12.1953Z"
            fill="#0D0D0D"
          />
        </g>
      </svg>
    </div>
  );
}


function AccdrnSection2() {
    const [open, setOpen] = React.useState(1);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);
  
  return (
    <div className='bg-[#EFEFEF] overflow-hidden' id='event'>
    <div
      id="accordion"
      className=" mx-auto relative md:w-10/12 px-3 max-w-[957px] sm:pt-[70px] pt-[0px] md:pt-[0px] pb-[40px] sm:pb-[70px] md:pb-[80px] lg:pb-[140px]"
      data-aos="zoom-in">
    <h3 data-aos="zoom-in-up" className='text-[36px] md:text-[52px] text-black text-center ff_outfit font-semibold sm:pt-[40px] lg:pt-[100px] mb-[20px] md:md-[30px]  lg:mb-[40px]'>Frequently Asked Questions</h3>

      <Accordion
        className=" border-[#C5C5C5] border mb-4 rounded-[10px] p-4"
        open={open === 1}
        icon={<Icon id={1} open={open} />}
      >
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className="ff_outfit text-[15px] sm:text-[16px] md:text-[20px] text-start font-medium text-[#0D0D0D] w-full justify-between"
        >
          What products can I scan?
        </AccordionHeader>
        <AccordionBody className="ff_outfit text-[14px] md:text-[16px] font-normal text-[#3A3A3A] max-w-[758px] pt-3 ">
          You can scan any product with a barcode before you recycle, no
          matter what it’s made of. Cloopp rewards you for your positive
          actions!{" "}
        </AccordionBody>
      </Accordion>
      <Accordion
        className=" border-[#C5C5C5] border mb-4 rounded-[10px] p-4  overflow-hidden"
        open={open === 2}
        icon={<Icon id={2} open={open} />}
      >
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className="ff_outfit text-[15px] sm:text-[16px] md:text-[20px] text-start font-medium text-[#0D0D0D]"
        >
          {" "}
          Where can I use my rewards?
        </AccordionHeader>
        <AccordionBody className="ff_outfit text-[14px] md:text-[16px] font-normal text-[#3A3A3A] max-w-[758px] pt-3 ">
          You can scan any product with a barcode before you recycle, no
          matter what it’s made of. Cloopp rewards you for your positive
          actions!{" "}
        </AccordionBody>
      </Accordion>
      <Accordion
        className=" border-[#C5C5C5] border mb-4 rounded-[10px] p-4 "
        open={open === 3}
        icon={<Icon id={3} open={open} />}
      >
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className="ff_outfit text-[15px] sm:text-[16px] md:text-[20px] text-start font-medium text-[#0D0D0D]"
        >
          What kind of impact can I make?
        </AccordionHeader>
        <AccordionBody className="ff_outfit text-[14px] md:text-[16px] font-normal text-[#3A3A3A] max-w-[758px] pt-3 ">
          You can scan any product with a barcode before you recycle, no
          matter what it’s made of. Cloopp rewards you for your positive
          actions!{" "}
        </AccordionBody>
      </Accordion>
      <Accordion
        className=" border-[#C5C5C5] border mb-4 rounded-[10px] p-4 "
        open={open === 4}
        icon={<Icon id={4} open={open} />}
      >
        <AccordionHeader
          onClick={() => handleOpen(4)}
          className="ff_outfit text-[15px] sm:text-[16px] md:text-[20px] text-start font-medium text-[#0D0D0D]"
        >
          Which brands do you partner with?
        </AccordionHeader>
        <AccordionBody className="ff_outfit text-[14px] md:text-[16px] font-normal text-[#3A3A3A] max-w-[758px] pt-3 ">
          You can scan any product with a barcode before you recycle, no
          matter what it’s made of. Cloopp rewards you for your positive
          actions!{" "}
        </AccordionBody>
      </Accordion>
    </div>
  </div>
);

}

export default AccdrnSection2