"use client"
import Image from 'next/image'
import React from 'react'

interface CardProps{
  id: number;
  title: string;
  message: string;
  image: string
  name: string
}

const Card: React.FC<CardProps> = ({id, title, message, image, name}) => {

  const [hovered, setHovered] = React.useState(false)

  return (
    <div onMouseEnter={() => setHovered(!hovered)}  onMouseLeave={() => setHovered(!hovered)} className='story-card bg-colorWhite/60 group w-[75%] h-auto flex flex-col items-center justify-center lg:flex-row rounded-[3px] p-10 lg:p-[6rem] lg:pl-[1.6rem] text-defaultFontSize shadow-2xl lg:-skew-x-[12deg]'>
      <figure className=' relative w-[100px] h-[100px] lg:w-[15rem] lg:h-[15rem] lg:m-auto lg:translate-x-[3rem] lg:skew-x-[12deg] group mb-5' style={{clipPath: "circle(50% at 50% 50%)", shapeOutside: "circle(50% at 50% 50%)"}}>
        <Image 
          src={image} 
          alt={title}
          width={500}
          height={500}
          style={{backfaceVisibility: "hidden", filter: `${hovered ? "blur(5px) brightness(80%)" : ""}`}}
          className='w-full h-full object-cover transition-all ease-in-out duration-500 scale-150 lg:scale-125 group-hover:scale-125 lg:group-hover:scale-100 group-hover:brightness-75'
        />
        <figcaption className='absolute transition-all ease-in-out duration-500 top-[50%] left-[50%] -translate-x-[50%] translate-y-[20%] text-center text-[1rem] lg:text-[1.7rem] opacity-0 group-hover:-translate-y-[50%] group-hover:opacity-100 group-hover:text-colorWhite '>{name}</figcaption>
      </figure>
       <div className="right w-full lg:w-[65%] h-auto flex flex-col items-center justify-center lg:items-start lg:skew-x-[12deg]">
        <h1 className="heading-title text-[.9rem] lg:text-defaultFontSize font-bold text-colorGreyDark uppercase mb-[1.5rem]">{title}</h1>
        <p className='text-[.9rem] lg:text-defaultFontSize'>{message}</p>
      </div> 
    </div>
  )
}

export default Card