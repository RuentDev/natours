"use client"
import React, { ChangeEvent } from 'react'

interface RadioInputProps {
  containerClassname?: string
  label: string;
  onChange: () => void
  value: boolean
  isActive?: boolean
}

const RadioInput:React.FC<RadioInputProps> = ({containerClassname, label, value, isActive, onChange}) => {

  return (
    <div className={`flex items-center ${containerClassname} focus:enabled:border-colorPrimary`}>
      <label className=' w-full text-[1rem] md:text-defaultFontSize' htmlFor="">{label}</label>
      <div className="container w-auto flex relative items-center justify-center">
        <input 
          type='radio' 
          onChange={onChange}
          value={label}
          checked={value}
          className='w-[1.5rem] h-[1.5rem] lg:w-[3.5rem] lg:h-[3.5rem] appearance-none border-[4px] lg:border-[7px] border-colorPrimary  placeholder:text-defaultFontSize rounded-full'  
        />
        {isActive && <div className="w-[1.5rem] h-[1.5rem] absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] z-[999] bg-colorPrimary rounded-full"></div>}
      </div>
    </div>
  )
}

export default RadioInput