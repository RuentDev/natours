import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import links from '@/data/footerLinks.json'
const Footer = () => {
  return (
    <footer className='w-full h-[40vh] md:h-auto flex flex-col p-20  lg:py-[10rem] bg-colorGreyDark2'>
      <div className="container w-full lg:w-[114rem] m-auto">
        <div className="logo-container mb-10 lg:mb-[10rem] flex items-center justify-center">
          <Image 
            alt='logo'
            width={200}
            height={200}
            src='/img/logo-green-2x.png'
            className='w-150 h-150 hidden md:block'
          />

          <Image 
            alt='logo'
            width={150}
            height={150}
            src='/img/logo-green-small-1x.png'
            className='w-150 h-150 md:hidden'
          />
        </div>

        <div className="bottom flex flex-col md:flex-row  md:gap-[20rem]">
          <div className="left w-full h-auto">
            <div className="footer-navigation w-full ">
              <ul className="footer-list flex justify-between py-5 border-t border-colorGreyDark gap-5">
                {links.map((link) => (
                  <li key={link.id} className="footer-item text-colorWhite uppercase text-[.5rem] md:text-[1.5rem]">
                    <Link href={link.link}>{link.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="right w-full h-auto py-5 border-t border-colorGreyDark">
            <p className="block float-right footer-copyright text-[.7rem]  md:text-defaultFontSize text-colorWhite ">
              Built by &nbsp;
              <Link href="/" className="inline-block transition-all ease-in-out duration-300 hover:bg-colorGreyDark2 hover:text-colorPrimary hover:rotate-[5deg] hover:scale-[1.3]" >
                JONAS SCHMEDTMANN
              </Link> &nbsp;
              for his online course <Link href="#" className="inline-block transition-all ease-in-out duration-300 hover:bg-colorGreyDark2 hover:text-colorPrimary hover:rotate-[5deg] hover:scale-[1.3]">&nbsp; Advanced CSS and Sass &nbsp;</Link>.
              Copyright &copy; by Jonas Schmedtmann. You are 100% allowed to use this webpage for both personal
              and commercial use, but NOT to claim it as your own design. A credit to the original author, Jonas
              Schmedtmann, is of course highly appreciated!
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer