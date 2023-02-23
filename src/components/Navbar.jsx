import React from 'react'
import { LogoIcon } from '../icons/icons'

const Navbar = () => {
  return (

    <div className='bg-gray-800 text-white h-14 flex items-center'>
    
    <div className='wrapper-container w-full'>
    <div className="flex items-center gap-1 cursor-pointer">
    <LogoIcon/>
<p className='font-semibold'>
<span className='text-yellow-500'>C</span>rypto<span className='text-yellow-500'>U</span>pdate
</p>
    </div>
{/* Navbar */}
    </div>
    </div>
  )
}

export default Navbar