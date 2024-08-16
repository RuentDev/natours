"use client"
import React from 'react'

interface TextButtonProps{
  text: string
  className?: string
  hoverBefore?: string
  hoverAfter?: string
  type: "submit" | "button"
  onClick: () => void
}


const TextButton: React.FC<TextButtonProps> = ({text, type, className, hoverBefore, hoverAfter, onClick}) => {
  return (
    <button 
      type={type}
      onClick={onClick}
      className={`
        text-button
        text-[1rem]
        px-5
        py-2
        lg:py-[1.7rem] 
        lg:px-[5rem] 
        lg:text-[2rem] 
        inline-block 
        rounded-[10rem] 
        border-none 
        uppercase 
        relative 
        transition-all 
        ease-in-out 
        duration-300
        
        hover:shadow-lg
        hover:-translate-y-[3px]

        hover:before:scale-x-[1.4]
        hover:before:scale-y-[1.6]
        ${hoverBefore ? hoverBefore : "hover:before:bg-colorWhite"}
        hover:before:opacity-100

        hover:after:scale-x-[1.4]
        hover:after:scale-y-[1.6]
        ${hoverAfter ? hoverAfter : "hover:after:bg-colorWhite"}
        hover:after:opacity-0
        hover:after:inline-block
        hover:after:w-full
        hover:after:h-full
        hover:after:absolute
        hover:after:top-0
        hover:after:left-0
        hover:after:-z-[1]
        ${className}
      `}
    >
      {text}
    </button>
  )
}

export default TextButton