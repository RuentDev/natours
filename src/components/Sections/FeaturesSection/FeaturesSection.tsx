import React from 'react'
import Card from './Card'
import { CiGlobe } from "react-icons/ci";
import { BsCompass } from "react-icons/bs";
import { ImMap2 } from "react-icons/im";
import { IoIosHeartEmpty } from "react-icons/io";

const features = [
  {
    "id": 0,
    "title": "explore the world",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.",
    "icon": <CiGlobe className='text-colorPrimary h-[50px] md:h-[80px] text-[7rem] font-thin' />
  },
  {
    "id": 1,
    "title": "meet the nature",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.",
    "icon": <BsCompass className='text-colorPrimary h-[50px] md:h-[80px] text-[7rem] font-thin' />
  },
  {
    "id": 2,
    "title": "find your way",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.",
    "icon": <ImMap2 className='text-colorPrimary h-[50px] md:h-[80px] text-[7rem] font-thin' />
  },
  {
    "id": 3,
    "title": "live a healthier life",
    "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.",
    "icon": <IoIosHeartEmpty className='text-colorPrimary h-[50px] md:h-[80px] text-[7rem] font-thin' />
  }
]

const FeaturesSection = () => {
  return (
    <section className='py-[20rem] bg-featuresBg bg-cover -skew-y-[7deg] -mt-[10rem] flex items-center justify-center'>
      <div className="featured-cards w-[114rem] max-w-[114rem] h-auto skew-y-[7deg] flex flex-col md:flex-row md:justify-between">
        {features.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </section>
  )
}

export default FeaturesSection