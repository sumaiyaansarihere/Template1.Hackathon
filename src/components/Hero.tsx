import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <main className='w-full h-[500px] md:h-[500px] flex flex-col md:flex-row justify-between items-start bg-[#f2f0f1]'>
            {/* {left} */}
            <div className=' w-[650px] md:w-[500px mt-3 md:mt-10 md:ml-10 pl-3]'>

                <h1 className='text-4xl md:text-5xl font-extrabold mt-11 ml-11 mb-4 leading-tight'>
    <span className='block'>FIND CLOTHES</span>
    <span className='block'>THAT MATCHES</span>
    <span className='block'>YOUR STYLE</span>
</h1>

                <p className='text-gray-500 ml-11 md:mt-3'>
                    Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                </p>
                <button className='bg-black py-2 px-5 text-sm mt-6 ml-11  text-white rounded-[60px]'>Shop Now</button>
            </div>
            {/* right */}
            <div> 
                <Image src={"/heropic.jpg"} className='w-[500px] mt-14' width={200} height={200} alt='profile'/>
                <Image src={"/Vector.png"} className='w-[50px] md:w-[60px] absolute top-[300px] ml-left-[-0px] ' width={200} height={200} alt="vectorpic"/>
                <Image src={"/Vector.png"} className='w-[100px] absolute top-[100px] mt-8 mr-7 right-[-0px] ' width={200} height={200} alt="vectorpic"/>
            </div>
         

           
        

         

        </main>
                 
    
    )
}

export default Hero
