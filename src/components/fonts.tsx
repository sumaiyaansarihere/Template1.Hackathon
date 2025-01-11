// importing fonts
import { Playfair_Display,Cinzel,Bodoni_Moda,Prata,Montserrat } from "next/font/google";
const Playfair = Playfair_Display({subsets:["latin"]});
const Cinze = Cinzel({subsets:["latin"]});
const Bodoni = Bodoni_Moda({subsets:["latin"]});
const Prat = Prata({subsets:["latin"],weight:"400"});
const Montserra = Montserrat({subsets:["latin"]});

import React from 'react'

const fonts = () => {
  return (
    <div className="bg-black w-full h-[122px] flex justify-between items-center px-3">
      <h1 className={`${Playfair.className} text-white text-5xl md:text-4x1`}>VERSAGE</h1>
      <h1 className={`${Cinze.className} text-white text-5xl md:text-4x1`}>ZARA</h1>
      <h1 className={`${Bodoni.className} text-white text-5xl md:text-4x1`}>GUCCI</h1>
      <h1 className={`${Prat.className} text-white text-5xl md:text-4x1`} >PRADA</h1>
      <h1 className={`${Montserra.className} text-white text-5xl md:text-4x1`}>CALVIN KLEIN</h1>
    </div>
  )
}

export default fonts
