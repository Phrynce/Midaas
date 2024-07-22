import React from 'react'
import founder from './images/photo_2024-05-09_14-00-55.jpg'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TbLetterX } from "react-icons/tb";
import { FaYoutube } from "react-icons/fa";

const TeamCard = () => {
  return (
    <div>
        <div className=' lg:grid grid-cols-2 lg:mt-[650px] mt-[380px] gap-10 lg:mx-16  mx-6'>
            <div>
                <img src={founder} className=' h-[600px] w-full relative' />
                <div className=' absolute -mt-56 lg:ml-[610px] '>
                <span className=' bg-black text-white ease-in hover:bg-[#1eb2a6] mx-1 w-10 flex justify-center items-center h-10 rounded-full mb-3'><FaFacebookF /> </span>
<div className=' bg-black text-white ease-in hover:bg-[#1eb2a6] mx-1 w-10 flex justify-center items-center h-10 rounded-full mb-3' ><FaInstagram/></div>
<div className=' bg-black text-white ease-in hover:bg-[#1eb2a6] mx-1 w-10 flex justify-center items-center h-10 rounded-full mb-3'><TbLetterX /></div>
<div className=' bg-black text-white ease-in hover:bg-[#1eb2a6] mx-1 w-10 flex justify-center items-center h-10 rounded-full mb-3'><FaYoutube /></div>
                </div>
            </div>
            <div className=' pt-12' >
                <div className=' flex justify-center items-center font-sans font-bold text-[27px] text-[#1eb2a6]'>Founder</div>
            <div className=' mt-4 font-sans text-[17px] text-justify'>A small river named Duden flows by their place and supplies it with the necessary regelialia.
           <div>Me t am orphism is the change that takes place within a body of rock as a result of it being subjected to
high pressure and/or high temperature. The pare n t roc k or pro tolit h is the rock that exists before
metamorphism starts. New metamorphic rocks can form from old ones as pressure and temperature
progressively increase. The term parent rock is typically applied to the initial unmetamorphosed rock,
rather than referring to each metamorphic rock that formed as metamorphism progresses.</div>  
<p>We don’t always know whether metamorphism occurred in an uninterrupted sequence or whether metamorphism stopped
and started again for different reasons at different times. Metamorphic rocks form under pressures and
temperatures that are higher than those experienced bysedimentary rocks during diagenesis, but at
temperatures lower than those that cause igneous rocks to melt.</p>
</div>
            </div>
        </div>
    </div>
  )
}

export default TeamCard