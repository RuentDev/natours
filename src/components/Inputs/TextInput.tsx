import React from 'react'


interface TextInputProps {
  placeholder: string
  className?: string
}

const TextInput: React.FC<TextInputProps> = ({placeholder, className}) => {
  return (
    <div>
      <input 
        type="text" 
        placeholder={`${placeholder}`}
        className='w-full text-[.8rem] md:text-defaultFontSize p-4 rounded-[3px]'
        // className={`
        //   input-text 
        //   w-full shadow-xl  rounded-[2px] outline-none transition-all ease-in-out duration-400 border-colorSecondaryDark/0 
        //   border-opacity-0 border-b-[3px] focus:border-b-colorSecondaryDark/100
        //   ${className}
        // `} 
      />
    </div>
  )
}

export default TextInput