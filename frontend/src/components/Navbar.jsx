import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='text-white bg-yellow-400 flex w-full items-center justify-between h-20 mx-auto  px-4'>
        <h1 className='w-10 text-3xl font-bold text-white hover:cursor-pointer'>GENRIFY.</h1>
       {/* rygt box */}
        <div className='flex font-medium text-xl  pr-4 items-center gap-5'>
          
          {/* <Link to='#'>
            Home
          </Link> */}

          <div className='p-5  '> Home</div>
          <div className='p-5 '> About</div>
          <div className='p-5 '> Contact us</div>
          <div className='p-5 '> Idea</div>
          

        </div>
    </div>
  )
}

export default Navbar