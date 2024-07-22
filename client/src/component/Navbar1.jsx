import React, { useState } from 'react'
import './Navbar1.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'



const Navbar1 = () => {
  const [toggle,settoggle]=useState(true)
  function toggling(e){
    e.preventDefault()
    settoggle(!toggle)
    console.log(toggle);
  }
  return (
    <div>
        <div className=' mx-10 bg-blue-50/20 hidden lg:block'>
        <div className=' flex justify-center items-center'>
        <div className='working w-full h-20 cursor-pointer'>
            <div className=' inline-block mx-4 text-lg font-bold font-serif text-white hover:text-[#1eb2a6] ease-linear'><NavLink to='/'>Home</NavLink></div>
            <div className=' inline-block mx-4 text-lg font-bold font-serif text-white hover:text-[#1eb2a6]'><NavLink to='/scholarship'>All Scholarship</NavLink></div>
            <div className=' inline-block mx-4 text-lg font-bold font-serif text-white hover:text-[#1eb2a6]'><NavLink to='/about'>About</NavLink></div>
            {/* <div className=' inline-block mx-4 text-lg font-bold font-serif text-white hover:text-[#1eb2a6]'><NavLink to='/team'>Team</NavLink></div> */}
            <div className=' inline-block mx-4 text-lg font-bold font-serif text-white hover:text-[#1eb2a6]'><NavLink to='/prize'>FAQ</NavLink></div>        
        </div>
        <a href='https://forms.gle/2kvMaNPyJ1gouDwX8' className='yes w-[340px] h-20 font-sans text-lg text-white'>GET SCHOLARSHIP</a>
        </div>
        </div>
        {toggle==true?<div className='lg:hidden mx-8 -mt-10 ' onClick={toggling}>
<div className='text-2xl flex justify-end'><FaBars className=' w-[30px] h-[30px] text-white drop-shadow-md' /></div>
        </div>:<div className='lg:hidden mx-8 -mt-10 ' onClick={toggling}>
<div className='text-2xl flex justify-end'><FaTimes className=' w-[30px] h-[30px] text-white drop-shadow-md' />
</div>
        </div>}
        <div >
          {toggle!==true?<div className=' bg-white/70 ml-[130px] mr-10  border-[1px] rounded-lg border-black h-[270px] transition ease-in duration-200 transform '>
            <div className='flex justify-center items-center'>
              <div className=' mt-10 font-serif text-[22px]'onClick={toggling}><NavLink to='/'>Home</NavLink></div>
            </div><div className='flex justify-center items-center'>
              <div className=' bg-gray-600 w-full -mt-2 h-[1px]  mx-10'></div>
            </div>
            <div className='flex justify-center items-center'>
              <div className=' mt-3 font-serif text-[22px]' onClick={toggling}><NavLink to='/scholarship'>All Scholarship</NavLink></div>
            </div><div className='flex justify-center items-center'>
              <div className=' bg-gray-600 w-full -mt-2 h-[1px]  mx-10'></div>
            </div>
            <div className='flex justify-center items-center'>
              <div className=' mt-3 font-serif text-[22px]' onClick={toggling}><NavLink to='/about'>About</NavLink></div>
            </div><div className='flex justify-center items-center'>
              <div className=' bg-gray-600 w-full -mt-2 h-[1px]  mx-10'></div>
            </div>
            {/* <div className='flex justify-center items-center'>
              <div className=' mt-3 font-serif text-[22px]' onClick={toggling}><NavLink to='/team'>Team</NavLink></div>
            </div><div className='flex justify-center items-center'>
              <div className=' bg-gray-600 w-full -mt-2 h-[1px]  mx-10'></div>
            </div> */}
            <div className='flex justify-center items-center'>
              <div className=' mt-3 font-serif text-[22px]' onClick={toggling}><NavLink to='/prize'>FAQ</NavLink></div>
            </div><div className='flex justify-center items-center'>
              <div className=' bg-gray-600 w-full -mt-2 h-[1px]  mx-10'></div>
            </div>
          </div>:<div>

            </div>}
        </div>
        
    </div>
  )
}

export default Navbar1