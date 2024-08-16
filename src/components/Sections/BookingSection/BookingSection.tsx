"use client"
import Inputs from '@/components/Inputs'
import React, { ChangeEvent, useState } from 'react'
import {FORM_GROUP_OPTIONS} from '@/libs/constant'
import Buttons from '../../Buttons'
const BookingSection = () => {

  const [formGroupOptions, setFormGroupOptions] = useState(FORM_GROUP_OPTIONS)

  const handleRadioCheck = ( input: any ) => {

    const updatedFormGroupOptions = formGroupOptions.map((item) =>
      item.id === input.id
        ? { ...item, isCheck: true }
        : { ...item, isCheck: false }
    );

    setFormGroupOptions(updatedFormGroupOptions);

  }


  return (
    <section className='w-full h-auto bg-bgLinearGradientPrimary flex items-center justify-center p-20 md:p-32'>
      <div className="w-full md:max-w-[114rem] h-auto p-10 md:p-0 bg-bookingBgImage md:bg-bookingBgImage1 bg-no-repeat bg-cover rounded-sm">
        <form action="" className="w-full md:w-[50%] flex flex-col gap-9 md:gap-16 md:p-[6rem]">
          <h2 className="text-transparent text-[1.2rem] lg:text-[3.5rem] bg-heroSmallNoImage bg-clip-text hover:text-shadow-custom font-[700] inline-block tracking-[.2rem] transition-all duration-200 uppercase hover:skew-y-[2deg] hover:skew-x-[15deg] hover:scale-[1.1]">
            Start Booking Now
          </h2>
          <Inputs.TextInput 
            placeholder='Fullname' 
            className=''
          />
          <Inputs.TextInput 
            placeholder='Email Address' 
            className=''
          />

          <div className="radio-input-container flex flex-col md:flex-row items-start lg:flex-row gap-5">
            {formGroupOptions.map((input) => (
              <Inputs.RadioInput 
                key={input.id} 
                label={input.label}
                value={input.isCheck}
                onChange={() => handleRadioCheck(input)}
                isActive={input.isCheck}
                containerClassname='flex-row-reverse gap-5' 
              />
            ))}
          </div>

          <Buttons.TextButton 
            text='Next Step &rarr;' 
            type="submit" 
            className='w-[60%] text-colorWhite bg-colorPrimary upppercase'
            hoverBefore='hover:before:bg-colorPrimary' 
            hoverAfter='hover:after:bg-colorPrimary' 
            onClick={() => {}}
          />
        </form>
      </div>
    </section>
  )
}

export default BookingSection