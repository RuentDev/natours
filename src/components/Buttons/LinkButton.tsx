import Link from 'next/link'
import React from 'react'

interface LinkButtonProps{
  text: string
  className?: string
  hoverBefore?: string
  hoverAfter?: string
  link: string
}


const LinkButton: React.FC<LinkButtonProps> = ({text, link, className, hoverBefore, hoverAfter}) => {
  return (
    <Link 
      href={link}
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
        transition-all ease-in-out duration-200
        
        
        
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
    </Link>
  )
}

export default LinkButton