import React from 'react'

interface CardProps {
  id: number;
  title: string;
  description: string
  icon: any
}

const Card: React.FC<CardProps> = ({title, description, icon}) => {

  return (
    <div className='w-[350px] md:max-w-[290px] h-auto text-[1.5rem] m-auto my-5'>
      <div className=" bg-white/80 rounded-[3px] p-[2.5rem] flex flex-col items-center justify-center gap-[1.6rem] transition-all duration-500 hover:-translate-y-[1.5rem] hover:scale-[1.03]">
        {icon}
        <h3 className="text-defaultFontSize font-[700] mb-[1.5rem] uppercase text-colorGreyDark text-center">{title}</h3>
        <p className="text-[1.5rem] text-center text-colorGreyDark">
          {description}
        </p>
      </div>
    </div>
  )
}

export default Card