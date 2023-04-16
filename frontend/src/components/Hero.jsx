import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    // <div className='mt-20 text-[#000300]  border-4 flex  gap-3 justify-center  h-[500px]  mx-auto ml-20  border-yellow-300  rounded-2xl shadow-xl w-[90%]  ' > 
    // <div className='max-w-[800px] mt-[-96] w-full h-screen mx-auto text-center flex flex-col justify-center  ' > 
    //     <h1 className='font-bold text-5xl my-5 border-b-4 py-5 absolute border-yellow-300 '> GENRE DETECTION</h1>
    //     <p> Great Tech Solution For Music Enthusiast! </p>


    // </div>

    
  

    <div className='max-w-[8000px] w-[90%]  hover:scale-105  duration-200 border-4 border-yellow-300 rounded-2xl shadow-xl  my-20  h-[500px] mx-auto text-center flex flex-col justify-center'>
        {/* <p className='text-[#000300] text-2xl font-bold p-2'> GROWING WITH TECHNOLOGY</p> */}
        <h1 className=' md:text-7xl sm:text-6xl text-4xl md:py-6 font-bold'>Grow with Technology</h1>
        <div>
        <p className='md:text-5xl sm:text-4xl text-xl py-4  '> Recommended for{' '}
          <TypeAnimation className=' font-medium text-yellow-500 '
            sequence={[
              'Artist ',1500,
              'Producers',1500,
              'Music enthusiast ',1500,

            ]}
            cursor={true}
            repeat={Infinity}
            speed={29}
            
          />
         </p>
        </div>
        </div>
       


  )
}

export default Hero