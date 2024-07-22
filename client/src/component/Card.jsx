import React, { useEffect } from 'react'
import image from './images/photo_2024-05-09_14-00-55.jpg'
import image1 from './images/person.png'
import { FaStar } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { LiaBusinessTimeSolid } from "react-icons/lia";
import { FaBookOpenReader } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import 'aos/dist/aos.css'
import Aos from 'aos';


const Card = () => {
    const nav=useNavigate()
    useEffect(()=>{
        Aos.init({duration:2000})
      },[])
  return (
    <div>
        <div>
            <div className=' grid lg:grid-cols-3 lg:mx-24 mx-4 gap-10 mt-20'>
            <div className='  h-[330px] bg-white' data-aos='fade-up'>
    <div className=' flex justify-center items-center mx-4 mt-10'>
    <div className=' lg:w-[140px] lg:h-[80px] rounded-full bg-[#1eb2a6]  inline-flex justify-center items-center mx-6'><FaBookOpenReader className=' w-14 h-14 text-white' /></div>
<div className=' inline-block lg:text-[32px] font-sans font-bold'>Undergraduate Education in China</div>
    </div>
    <div className=' flex justify-center items-center mt-5' style={{color:'#1eb2a6'}}>
       <div className=' mx-1'> <FaStar /></div>
       <div className=' mx-1'> <FaStar /></div>
       <div className=' mx-1'> <FaStar /></div>
       <div className=' mx-1'> <FaStar /></div>
       <div className=' mx-1'> <FaStar /></div>
       <div className=' mx-1'>(5.0)</div>
    </div>
    <div className=' flex justify-center items-center mt-20 cursor-pointer' onClick={()=>{nav('scholarship/under')}}>
    <div className=' flex justify-center items-center lg:w-[400px] w-[300px] h-[57px] border-[2px] rounded-sm bg-white hover:bg-[#1eb2a6] hover:animate-pulse hover:ease-in-out text-[#1eb2a6] hover:text-white  ' style={{borderColor:'#1eb2a6'}}>
        <div className=' text-[13px] font-extrabold' >READ MORE !</div>
    </div>
    </div>
</div>
<div className='  h-[330px] bg-white' data-aos='fade-up'>
    <div className=' flex justify-center items-center mx-4 mt-10'>
    <div className=' lg:w-[140px] lg:h-[80px] rounded-full bg-[#1eb2a6]  inline-flex justify-center items-center mx-6'><LiaBusinessTimeSolid className=' w-14 h-14 text-white' /></div>
<div className=' inline-block lg:text-[32px] font-sans font-bold'>Masters Education in China</div>
    </div>
    <div className=' flex justify-center items-center mt-5' style={{color:'#1eb2a6'}}>
       <div className=' mx-1'> <FaStar /></div>
       <div className=' mx-1'> <FaStar /></div>
       <div className=' mx-1'> <FaStar /></div>
       <div className=' mx-1'> <FaStar /></div>
       <div className=' mx-1'> <FaStar /></div>
       <div className=' mx-1'>(5.0)</div>
    </div>
    <div className=' flex justify-center items-center mt-9 cursor-pointer' onClick={()=>{nav('scholarship/masters')}}>
    <div className=' flex justify-center items-center lg:w-[400px] w-[300px] h-[57px] border-[2px] rounded-sm bg-white hover:bg-[#1eb2a6] hover:animate-pulse hover:ease-in-out text-[#1eb2a6] hover:text-white  ' style={{borderColor:'#1eb2a6'}}>
        <div className=' text-[13px] font-extrabold' >READ MORE !</div>
    </div>
    </div>
</div>
<div className='h-[330px] bg-white' data-aos='fade-up'>
    <div className=' flex justify-center items-center mx-4 mt-10'>
    <div className=' lg:w-[140px] lg:h-[80px] rounded-full bg-[#1eb2a6]  inline-flex justify-center items-center mx-6'><FaGraduationCap className=' block w-14 h-14 text-white'/></div>
<div className=' inline-block lg:text-[32px] font-sans font-bold'>Doctoral Education in China</div>
    </div>
    <div className=' flex justify-center items-center mt-5' style={{color:'#1eb2a6'}}>
       <div className=' mx-1'> <FaStar /></div>
       <div className=' mx-1'> <FaStar /></div>
       <div className=' mx-1'> <FaStar /></div>
       <div className=' mx-1'> <FaStar /></div>
       <div className=' mx-1'> <FaStar /></div>
       <div className=' mx-1'>(5.0)</div>
    </div>
    <div  className=' flex justify-center items-center mt-9 cursor-pointer' onClick={()=>{nav('scholarship/doc')}}>
    <div className=' flex justify-center items-center lg:w-[400px] w-[300px] h-[57px] border-[2px] rounded-sm bg-white hover:bg-[#1eb2a6] hover:animate-pulse hover:ease-in-out text-[#1eb2a6] hover:text-white  ' style={{borderColor:'#1eb2a6'}}>
        <div className=' text-[13px] font-extrabold' >READ MORE !</div>
    </div>
    </div>
</div>
            </div>
        </div>
    </div>
  )
}

export default Card