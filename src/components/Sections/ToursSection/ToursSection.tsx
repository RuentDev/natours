"use client"
import React, { useState } from 'react'
import Card from './Card'
import Buttons from '../../Buttons'
import popularTours from '@/data/populars.json'
import Modal from './Modal'

interface Price{
  amount: number;
  currencyCode: string
}
interface Details{
  description1: string;
  description2: string
}

export type Tour = {
  id: number;
  title: string;
  image: string;
  features: string[];
  price: Price
  details: Details
}


const ToursSection = () => {

  const [selectedTour, setSelectedTour] = useState<Tour | null>(null)

  return (
    <section id="toursection" className='py-[10rem] lg:pt-[25rem] pr-0 pb-[15rem] pl-0 -mt-[10rem] bg-colorGreyLight1 relative'>
      {selectedTour && (<Modal tour={selectedTour} onClose={() => setSelectedTour(null)} />)}
      <div className="mb-[1rem] text-center ">
        <h2 className="text-transparent bg-heroSmallNoImage bg-clip-text hover:text-shadow-custom text-defaultFontSize lg:text-[3.5rem] font-[700] inline-block tracking-[.2rem] transition-all duration-200 uppercase hover:skew-y-[2deg] hover:skew-x-[15deg] hover:scale-[1.1] mb-[8rem]">
          MOST POPULAR TOURS
        </h2>
      </div>
      <div className='cards gap-[6rem] grid grid-cols-1 md:grid-cols-3 h-auto w-[90%] sm:w-[50%] md:w-[90%] lg:max-w-[114rem] m-auto'>
        {popularTours.map((item) => 
          <Card key={item.id} {...item} onButtonClick={() => {setSelectedTour(item)}}/>
        )}
      </div>
      <div className="button-container w-full h-auto flex justify-center py-20">
       <Buttons.LinkButton 
        text='descover all tours'
        className='bg-colorPrimary text-colorWhite'
        link='/'
        hoverBefore='hover:before:bg-colorPrimary' 
        hoverAfter='hover:after:bg-colorPrimary' 
      />
     </div>
    </section>
  )
}

export default ToursSection