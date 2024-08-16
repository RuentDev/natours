import React from 'react'
import Card from './Card'
import stories from '@/data/stories.json'
import Link from 'next/link'
const StoriesSection = () => {
  return (
    <section className='stories-section py-[15rem] relative flex flex-col'>
      <div className="bg-video absolute top-0 left-0 w-full h-full -z-[1] opacity-15 overflow-hidden">
        <video className='w-full h-full object-cover' style={{overflowClipMargin: "content-box"}} autoPlay muted loop playsInline>
          <source src="/img/video.mp4" type="video/mp4"/>
          <source src="/img/video.webm" type="video/webm"/>
          Your browser is not supported!
        </video>
      </div>
      <div className="mb-[1rem] text-center ">
        <h2 className="text-transparent bg-heroSmallNoImage bg-clip-text hover:text-shadow-custom text-[2rem] lg:text-[3.5rem] font-[700] inline-block tracking-[.2rem] transition-all duration-200 uppercase hover:skew-y-[2deg] hover:skew-x-[15deg] hover:scale-[1.1] mb-[8rem]">
          WE MAKE PEOPLE GENUINELY HAPPY
        </h2>
      </div>
      <div className="story-card max-w-[114rem] m-auto h-auto flex flex-col gap-[8rem] items-center justify-center">
        {stories.map((story) => (
          <Card 
            key={story.id}
            {...story}
          />
        ))}
      </div>
      <div className="link-container w-full h-auto flex items-center justify-center py-[10rem]">
        <Link href="/about" className='text-defaultFontSize transition-all ease-in-out duration-300 hover:-translate-y-1 hover:bg-colorPrimary text-colorPrimary hover:text-colorWhite inline-block border-b-[1px] border-colorPrimary'>
          Read all stories&rarr;
        </Link>
      </div>
    </section>
  )
}

export default StoriesSection