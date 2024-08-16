import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AboutSection = () => {
  return (
  <section className="section-about py-[30rem] lg:py-[50rem] md:py-[25rem] -mt-[50vh] md:-mt-[25rem] bg-colorGreyLight1 flex flex-col items-center justify-center">
    <div className="md:mb-[8rem] text-center">
      <h2 className="text-transparent bg-heroSmallNoImage bg-clip-text hover:text-shadow-custom lg:text-[4.2rem] font-[700] inline-block lg:tracking-[.2rem] transition-all duration-200 uppercase hover:skew-y-[2deg] hover:skew-x-[15deg] hover:scale-[1.1]">
        Exciting tours for adventurous people
      </h2>
    </div>

    <div className="flex flex-col md:flex-row lg:max-w-[114rem]">
      <div className="w-full h-auto mr-[6rem] p-5 ">
        <h3 className="text-[.9rem] lg:text-[1.8rem] text-colorGreyDark font-bold mb-[1.5rem] uppercase">You&apos;re going to fall in love with nature</h3>
        <p className="text-[.9rem] paragraph lg:text-defaultFontSize text-colorGreyDark1 block mb-[3rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur
          ducimus quam nisi exercitationem omnis earum qui.
        </p>

        <h3 className=" text-[.9rem] lg:text-[1.8rem] text-colorGreyDark font-bold mb-[1.5rem] uppercase">Live adventures like you never have before</h3>
        <p className="text-[.9rem] paragraph lg:text-defaultFontSize text-colorGreyDark1 block mb-[3rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla deserunt voluptatum nam.
        </p>
        <Link href="/about" className=' text-[1rem] lg:text-[2rem] transition-all ease-in-out duration-300 hover:-translate-y-1 hover:bg-colorPrimary text-colorPrimary hover:text-colorWhite inline-block border-b-[1px] border-colorPrimary'>Learn more &rarr;</Link>
      </div>
      <div className="w-full h-auto">
        <div className="relative">
          <Image
            alt="Photo 1"
            className="w-[40%] lg:w-[55%] absolute left-0 top-0 lg:-top-[2rem] image-box-shadow-aboutImageCustomShadow rounded-lg transition-all ease-in-out duration-200 hover:z-20 hover:scale-105 hover:outline hover:outline-offset-[2.5rem] hover:outline-[1.5rem] hover:outline-colorPrimary shadow-2xl"
            src="/img/nat-1-large.jpg"
            sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
            width={300}
            height={300}
          />
          <Image
            alt="Photo 1"
            className="w-[40%] lg:w-[55%] absolute right-0 top-0 lg:top-[2rem] rounded-lg transition-all ease-in-out duration-200 hover:z-20 hover:scale-105 hover:outline hover:outline-offset-[2.5rem] hover:outline-[1.5rem] hover:outline-colorPrimary shadow-2xl"
            src="/img/nat-2-large.jpg"
            sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
            width={300}
            height={300}
          />
          <Image
            alt="Photo 1"
            className="w-[40%] lg:w-[55%] absolute lg:left-[20%] left-[25%] -top-1 lg:top-[11rem] rounded-lg transition-all ease-in-out duration-200 hover:z-20 hover:scale-105 hover:outline hover:outline-offset-[2.5rem] hover:outline-[1.5rem] hover:outline-colorPrimary shadow-2xl"
            src="/img/nat-3-large.jpg"
            sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
            width={300}
            height={300}
          />
        </div>
      </div>  
    </div>
    
  </section>
  )
}

export default AboutSection