import React from 'react'
import { RxCross2 } from "react-icons/rx";

const announcement = () => {
  return (
    <div className='bg-black w-full h-[38px] flex text-gray-200 justify-center items-center text-xs sm:text-sm'>
      <h1>Sign up and get 20% off to your first order. </h1>
      <button className='text-white '><u>Sign Up Now</u></button>
      <RxCross2 className='absolute right-[40px] hidden sm:block text-white' />
    </div>
  
  )
}

export default announcement
