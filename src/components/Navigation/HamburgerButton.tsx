"use client"
import React, { useState } from 'react'
import navs from '@/data/navigation.json'
import Link from 'next/link'

const HamburgerButton = () => {

  const [isActive, setIsActive] = useState(false)


  return (
    <>
      <div onClick={() => setIsActive(!isActive)} className="navigation-button select-none group w-[4rem] h-[4rem] lg:w-[9rem] lg:h-[9rem] flex flex-col justify-center items-center gap-2 md:gap-3 bg-white fixed top-[3.5rem] right-[3.5rem] lg:top-[7.5rem] lg:right-[7rem] rounded-full z-50 text-center cursor-pointer">
        <span className={`navigation_icon rounded-sm w-[2rem] lg:w-[4rem] h-[1px] border border-colorGreyDark2 bg-colorGreyDark2 group-hover:my-[1px] transition-all duration-200 ${isActive && "my-[1px] rotate-45 translate-y-[12px] lg:translate-y-[12px]"}`}>&nbsp;</span>
        <span className={`navigation_icon rounded-sm w-[2rem] lg:w-[4rem] h-[1px] border border-colorGreyDark2 bg-colorGreyDark2 group-hover:my-[1px] transition-all duration-200 ${isActive && "my-[1px] opacity-0"}`}>&nbsp;</span>
        <span className={`navigation_icon rounded-sm w-[2rem] lg:w-[4rem] h-[1px] border border-colorGreyDark2 bg-colorGreyDark2 group-hover:my-[1px] transition-all duration-200 ${isActive && "my-[1px] -rotate-45 -translate-y-[12px] lg:-translate-y-[15px]"}`}>&nbsp;</span>
      </div>

      <div className={`nav-background navigation-button select-none w-[4rem] h-[4rem] lg:w-[7rem] lg:h-[7rem] group flex flex-col justify-center items-center gap-2 bg-hamburgerButtonBg fixed top-[3.5rem] right-[3.5rem] lg:top-[7.5rem] lg:right-[8rem] rounded-full z-30 text-center transition-all duration-500 ${isActive && " rotate-180 scale-[80]"}`}></div>

      <nav className={`navigation_nav fixed top-0 left-0 w-0 opacity-0 h-screen flex flex-col items-center justify-center -z-[1] transition-all duration-500 ${isActive && " w-[100%] opacity-100 z-[31]"}`}>
        <ul className="navigation_list absolute flex flex-col items-center gap-5 md:gap-14">
          {navs.map((item) => (
            <li key={item.id} className="navigation_item uppercase text-defaultFontSize md:text-[4rem] text-colorGreyLight2 font-light ">
              <Link href={item.link} className=' flex gap-10 py-[1rem] px-[2rem] text-colorWhite transition-all duration-500 hover:bg-navigationHoverBg bg-220% hover:bg-[100%] hover:text-colorPrimary hover:translate-x-[1rem]'>
                <span>{item.id}</span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default HamburgerButton