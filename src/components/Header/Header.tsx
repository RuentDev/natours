import Image from 'next/image'
import React from 'react'
import LinkButton from '../Buttons/LinkButton'

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="header h-[95vh] bg-heroSmall bg-top bg-cover relative clip-path-polygon75">
      <div className="header_logo-box flex absolute top-[2.5rem] left-[2.5rem] w-[100px] h-[100px] lg:w-[100px] lg:h-[100px] md:top-[5rem] md:left-[5rem] md:w-[150px] md:h-[150px] lg:top-[3rem] lg:left-[5rem]  overflow-hidden">
        <Image src="/img/logo-white.png" alt="Logo" className="header_logo object-cover object-center w-auto h-auto m-auto" width={500} height={500}/>
      </div>

      <div className="header-text-box absolute top-[40%] left-[50%] -translate-y-[50%] -translate-x-[50%] text-center">
        <h1 className="heading-primary w-full h-auto uppercase text-white mb-[8rem] flex flex-col">
          <span className="block text-[3rem] tracking-[.5rem] lg:text-[7.1rem] lg:tracking-[4.7rem] lg:font-bold uppercase animate-moveInLeft">Outdoors</span>
          <span className="block text-[1.2rem] tracking-[.2rem] lg:text-[2.5rem] lg:tracking-[2.2rem] uppercase font-semibold lg:font-bold animate-moveInRight">is where life happens</span>
        </h1>

        <LinkButton 
          text='Discover our tours'
          link='/#toursection'
          className='bg-colorWhite text-colorGreyDark hover:before:bg-white hover:after:bg-white animate-moveInBottom'
        />
      </div>
  </header>
  )
}

export default Header