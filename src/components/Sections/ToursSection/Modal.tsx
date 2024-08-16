  "use client"
  import Image from 'next/image'
  import React from 'react'
  import type {Tour} from './ToursSection'


  interface ModalProps {
    tour: Tour,
    onClose: () => void
  }

  const Modal: React.FC<ModalProps> = ({tour, onClose}) => {
    return (
      <div className='modal w-full h-screen fixed top-0 left-0 flex items-center z-50 justify-center backdrop-blur-md bg-black/40'>
        <div className="inner-container md:w-[70%] md:max-w-[70%] h-auto flex flex-col lg:flex-row bg-colorWhite relative">
          <button className="closing-button w-[40px] h-[40px] absolute top-5 right-5 flex flex-col gap-1 items-center justify-center p-2" onClick={onClose}>
            <span className='w-full h-[2px] border border-colorGreyDark2 translate-y-[5px] rotate-45'></span>
            <span className='w-full h-[2px] border border-colorGreyDark2 -rotate-45'></span>
          </button>

          <div className="left w-full flex lg:flex-col lg:w-[35%] h-full">
            <Image 
              alt='image1'
              src={"/img/nat-8.jpg"}
              width={700}
              height={700}
              priority
              className='w-[50%] lg:w-auto md:h-auto'
            />
            <Image 
              alt='image1'
              src={"/img/nat-9.jpg"}
              width={700}
              height={700}
              priority
              className='w-[50%] lg:w-auto md:h-auto'
            />
          </div>

          <div className="right w-full lg:w-[65%] h-full p-5 lg:py-[3rem] lg:px-[5rem]">
            {/* HEADING */}
            <h2 className="text-transparent bg-heroSmallNoImage bg-clip-text hover:text-shadow-custom text-[4.2rem] font-[700] inline-block tracking-[.2rem] transition-all duration-200 uppercase hover:skew-y-[2deg] hover:skew-x-[15deg] hover:scale-[1.1]">
              Start Booking Now
            </h2>

            {/* NOTE */}
            <div className="h2 text-defaultFontSize font-semibold my-10">IMPORTANT – PLEASE READ THESE TERMS BEFORE BOOKING</div>

            <div className="details-container w-full h-full flex flex-col lg:flex-row gap-5 lg:gap-0 ">
              <div className="w-full text-defaultFontSize border-r border-colorGreyLight1">
                <p>{tour.details.description1}</p>
              </div>
              <div className="w-full text-defaultFontSize lg:border-l border-colorGreyLight1 lg:pl-5">
                <p>{tour.details.description2}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  export default Modal