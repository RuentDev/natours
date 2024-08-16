"use client"
import Buttons from '@/components/Buttons'
import React from 'react'


interface CardProps{
  id: number;
  title: string;
  image: string;
  features: string[];
  price: {
    amount: number;
    currencyCode: string;
  }
  onButtonClick: () => void
}

const Card: React.FC<CardProps> = ({id, title, features, price, onButtonClick}) => {
  
  return (
    <div className='card w-full h-auto rounded-sm' style={{perspective: "1000px"}}>
      <div className="card-inner w-full h-auto transition-all duration-1000" style={{transformStyle: "preserve-3d"}}>
        <div className="front w-full h-auto shadow-2xl" style={{backfaceVisibility: "hidden"}}>
          <div className={`card-image relative h-[200px] bg-blend-screen clip-path-clipPath1 bg-cover object-center overlayWithImage${id}`}>
            <h4 className='card-heading text-right lg:w-[75%] lg:text-[2.8rem] font-light uppercase text-colorWhite absolute bottom-2 right-10 py-4 px-6 '> 
              <span className={`bgSpan${id} px-10 py-5`}>{title}</span>
            </h4>
          </div>
          <ul className='front-card-list h-auto flex flex-col items-center p-5'>
            {features.map((item, indx) => (
              <li key={indx} className='card-list-item text-[1rem] md:text-[2rem] w-full text-center border-b border-colorGreyLight2 last:border-none p-5'>{item}</li>
            ))}
          </ul>
          <div className="price-container w-full h-full lg:hidden">
            <div className={`price-inner-container overlayWithImage${id} w-full h-full flex flex-col items-center clip-path-clipPathTop p-20`}>
              <p className="price text-[1rem] text-colorWhite uppercase text-center font-light">
                only
                <span className="amount block font-thin text-[2rem]">
                  {price.currencyCode}{price.amount}
                </span>
              </p>
              <Buttons.TextButton 
                text='book now!'
                type='button'
                className='bg-colorWhite text-colorGreyDark hover:before:bg-colorWhite hover:after:bg-colorWhite'
                onClick={onButtonClick}
              />
            </div>
          </div>
        </div>
        <div className="card-back-side w-full h-full absolute top-0">
         <div className="price-container w-full h-full">
             <div className={`price-inner-container w-full h-full flex flex-col gap-[5rem] justify-center items-center overlayWithoutImage${id} p-20`}>
               <div className="">
                 <p className="price text-defaultFontSize text-colorWhite uppercase text-center">
                   only
                 </p>
                 <p className="amount text-white font-thin text-[5rem] block">
                   {price.currencyCode}{price.amount}
                 </p>
               </div>
               <Buttons.TextButton 
                 text='book now!'
                 type='button'
                 className='bg-colorWhite text-colorGreyDark hover:before:bg-colorWhite hover:after:bg-colorWhite'
                 onClick={onButtonClick}
               />
             </div>
           </div>
       </div>
      </div>
    </div>
  )
}

export default Card



// <div className='card max-w-[60%] h-auto lg:w-full lg:h-[55rem]' style={{perspective: "1000px"}}>
//   <div className='card-inner w-full h-auto shadow-2xl transition-all duration-1000' style={{transformStyle: "preserve-3d"}}>
//       <div className='card-front-side w-full h-auto rounded-md overflow-hidden'>
        
//         <div className='card-top w-full h-auto relative border'>
//           <div className='card-img-container w-full h-auto clip-path-clipPath1'>
//             <div className={`card-image h-[200px] overlayWithImage${id} w-full h-full absolute top-0  bg-blend-screen bg-cover object-center`} ></div>
//           </div>     
//           <h4 className='card-heading text-right w-[75%] text-[2.8rem] font-light uppercase text-colorWhite absolute bottom-2 right-10 py-4 px-6 '> 
//             <span className={`bgSpan${id} px-10 py-5`}>{title}</span>
//           </h4>
//         </div>
//         <div className='card-bottom w-full h-auto flex flex-col items-center'>
//           <ul className='front-card-list w-[70%] h-auto flex flex-col items-center p-5'>
//             {features.map((item, indx) => (
//               <li key={indx} className='card-list-item w-full text-center text-[1.5rem] border-b border-colorGreyLight2 last:border-none p-5'>{item}</li>
//             ))}
//           </ul>
//           <div className="price-container w-full h-full md:hidden">
//             <div className={`price-inner-container overlayWithoutImage1 w-full h-full flex flex-col items-center  clip-path-clipPathTop p-20`}>
//               <p className="price text-defaultFontSize text-colorWhite uppercase text-center">
//                 only
//                 <span className="amount text-[4rem] block">
//                   {price.currencyCode}{price.amount}
//                 </span>
//               </p>
//               <Buttons.TextButton 
//                 text='book now!'
//                 type='button'
//                 className='bg-colorWhite text-colorGreyDark hover:before:bg-colorWhite hover:after:bg-colorWhite'
//                 onClick={onButtonClick}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="card-back-side w-full h-full rounded-[3px] overflow-hidden">
//         <div className="price-container w-full h-full">
//             <div className={`price-inner-container w-full h-full flex flex-col gap-[5rem] justify-center items-center overlayWithoutImage${id} p-20`}>
//               <div className="">
//                 <p className="price text-defaultFontSize text-colorWhite uppercase text-center">
//                   only
//                 </p>
//                 <p className="amount text-white font-thin text-[5rem] block">
//                   {price.currencyCode}{price.amount}
//                 </p>
//               </div>
//               <Buttons.TextButton 
//                 text='book now!'
//                 type='button'
//                 className='bg-colorWhite text-colorGreyDark hover:before:bg-colorWhite hover:after:bg-colorWhite'
//                 onClick={onButtonClick}
//               />
//             </div>
//           </div>
//       </div>
//   </div>
// </div>  