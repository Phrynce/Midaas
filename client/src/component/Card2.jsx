import React, { useEffect } from 'react'
import { MdEngineering } from "react-icons/md";
import business from './images/courses/online/o11.png'
import computer from './images/courses/online/o3.png'
import history from './images/courses/online/o4.png'
import information from './images/courses/online/o6.png'
import marketing from './images/courses/online/o8.png'
import graphics from './images/courses/online/o9.png'
import web from './images/courses/online/o12.png'
import music from './images/courses/online/o10.png'
import soft from './images/courses/online/o5.png'
import { GiMedicines } from "react-icons/gi";
import { SiWorldhealthorganization } from "react-icons/si";
import { useNavigate } from 'react-router-dom';
import { GoLaw } from "react-icons/go";
import 'aos/dist/aos.css'
import Aos from 'aos';
import { TbBusinessplan } from "react-icons/tb";

const Card2 = () => {
  const nav=useNavigate()
   useEffect(()=>{
        Aos.init({duration:2000})
      },[])

  return (
    <div>
        <div className=' mt-20' >
            <div className=' flex justify-center text-[#1eb2a6] font-sans font-medium text-[25px]' data-aos='zoom-in-down'>Programmes</div>
            <div className=' text-3xl flex justify-center items-center mt-4 text-[30px] mb-14 font-semibold' data-aos='zoom-in-up'>Browse Our Programmes</div>
        </div>
        <div className=' grid lg:grid-cols-5 gap-3 lg:mx-[140px] mx-4' >
            <div className=' bg-white  h-[250px] pt-10 ' onClick={()=>{nav('scholarship/management')}} data-aos='fade-up' > 
<div className=' flex justify-center items-center text-[#1eb2a6]'><img src={business} className='w-[90px] h-[90px]' /></div>
<div className=' flex justify-center items-center text-[17px] font-semibold pt-3'>Management</div>
<div className=' flex justify-center items-center'><div className=' w-[150px] h-[27px] bg-gray-200 my-4 text-[#1eb2a6] font-medium rounded-md font-sans flex justify-center items-center'>13 Programmes</div></div>
            </div>
            <div className=' bg-white  h-[250px] pt-10 ' onClick={()=>{nav('scholarship/engineering')}} data-aos='fade-up' > 
<div className=' flex justify-center items-center text-[#1eb2a6]'><MdEngineering className='w-[90px] h-[90px]' /></div>
<div className=' flex justify-center items-center text-[18px] font-semibold pt-3'>Engineering</div>
<div className=' flex justify-center items-center'><div className=' w-[150px] h-[27px] bg-gray-200 my-4 text-[#1eb2a6] font-medium rounded-md font-sans flex justify-center items-center'>09 Programmes</div></div>
            </div>
            <div className=' bg-white  h-[250px] pt-10 ' onClick={()=>{nav('scholarship/science')}} data-aos='fade-up' > 
<div className=' flex justify-center items-center text-[#1eb2a6]'><img src={computer} className='w-[90px] h-[90px]' /></div>
<div className=' flex justify-center items-center text-[20px] font-semibold pt-3'>Science</div>
<div className=' flex justify-center items-center'><div className=' w-[150px] h-[27px] bg-gray-200 my-4 text-[#1eb2a6] font-medium rounded-md font-sans flex justify-center items-center'>08 Programmes</div></div>
            </div>
            <div className=' bg-white  h-[250px] pt-10 ' onClick={()=>{nav('scholarship/art')}} data-aos='fade-up' > 
<div className=' flex justify-center items-center text-[#1eb2a6]'><img src={history} className='w-[90px] h-[90px]' /></div>
<div className=' flex justify-center items-center text-[20px] font-semibold pt-3'>Art</div>
<div className=' flex justify-center items-center'><div className=' w-[150px] h-[27px] bg-gray-200 my-4 text-[#1eb2a6] font-medium rounded-md font-sans flex justify-center items-center'>06 Programmes</div></div>
            </div>
            <div className=' bg-white  h-[250px] pt-10 ' onClick={()=>{nav('scholarship/agric')}} data-aos='fade-up' > 
<div className=' flex justify-center items-center text-[#1eb2a6]'><img src={information} className='w-[90px] h-[90px]' /></div>
<div className=' flex justify-center items-center text-[20px] font-semibold pt-3'>Agriculture</div>
<div className=' flex justify-center items-center'><div className=' w-[150px] h-[27px] bg-gray-200 my-4 text-[#1eb2a6] font-medium rounded-md font-sans flex justify-center items-center'>13 Programmes</div></div>
            </div>
            <div className=' bg-white  h-[250px] pt-10 ' onClick={()=>{nav('scholarship/economics')}} data-aos='fade-up' > 
<div className=' flex justify-center items-center text-[#1eb2a6]'><img src={marketing} className='w-[90px] h-[90px]' /></div>
<div className=' flex justify-center items-center text-[20px] font-semibold pt-3'>Literature</div>
<div className=' flex justify-center items-center'><div className=' w-[150px] h-[27px] bg-gray-200 my-4 text-[#1eb2a6] font-medium rounded-md font-sans flex justify-center items-center'>24 Programmes</div></div>
            </div>
            <div className=' bg-white  h-[250px] pt-10 ' onClick={()=>{nav('scholarship/legal')}} data-aos='fade-up' > 
<div className=' flex justify-center items-center text-[#1eb2a6]'><GoLaw src={graphics} className='w-[90px] h-[90px]' /></div>
<div className=' flex justify-center items-center text-[20px] font-semibold pt-3'>Legal Studies</div>
<div className=' flex justify-center items-center'><div className=' w-[150px] h-[27px] bg-gray-200 my-4 text-[#1eb2a6] font-medium rounded-md font-sans flex justify-center items-center'>18 Programmes</div></div>
            </div>
            <div className=' bg-white  h-[250px] pt-10 ' onClick={()=>{nav('scholarship/lit')}} data-aos='fade-up' > 
<div className=' flex justify-center items-center text-[#1eb2a6]'><TbBusinessplan src={web} className='w-[90px] h-[90px]' /></div>
<div className=' flex justify-center items-center text-[20px] font-semibold pt-3'>Economics</div>
<div className=' flex justify-center items-center'><div className=' w-[150px] h-[27px] bg-gray-200 my-4 text-[#1eb2a6] font-medium rounded-md font-sans flex justify-center items-center'>06 Programmes</div></div>
            </div>
            <div className=' bg-white  h-[250px] pt-10 ' onClick={()=>{nav('scholarship/medicine')}} data-aos='fade-up' > 
<div className=' flex justify-center items-center text-[#1eb2a6]'><GiMedicines className='w-[90px] h-[90px]' /></div>
<div className=' flex justify-center items-center text-[20px] font-semibold pt-3'>Medicine</div>
<div className=' flex justify-center items-center'><div className=' w-[150px] h-[27px] bg-gray-200 my-4 text-[#1eb2a6] font-medium rounded-md font-sans flex justify-center items-center'>17 Programmes</div></div>
            </div>
        </div>
    </div>
  )
}

export default Card2