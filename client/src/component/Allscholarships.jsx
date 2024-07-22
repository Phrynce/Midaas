import React, { useEffect } from 'react'
import './scholarship.css'
import Cardmain from './Cardmain'
import Card2 from './Card2'
import Newsletter from './Newsletter'
import Footer from './Footer'
import Hero2 from './Hero2'
import Card from './Card'
import Course from './Course'
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
import { FaStar } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { LiaBusinessTimeSolid } from "react-icons/lia";
import { FaBookOpenReader } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { GoLaw } from "react-icons/go";
import 'aos/dist/aos.css'
import Aos from 'aos';
import { TbBusinessplan } from "react-icons/tb";

const Allscholarships = () => {
    const nav=useNavigate()
    useEffect(()=>{
        Aos.init({duration:2000})
      },[])
      
  return (
    <div>
       <div>
        <Hero2 />
    </div> 
    <div>
    <div className=' lg:mt-[600px] mt-[380px]'>
                <Course />
            </div>
    </div>
    <div className=''>
    <div>
            <div className=' grid lg:grid-cols-3 lg:mx-24 mx-4 gap-10 mt-20'>
            <div className='  h-[330px] bg-white' data-aos='zoom-in-up'>
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
    <div className=' flex justify-center items-center mt-20 cursor-pointer' onClick={()=>{nav('under')}}>
    <div className=' flex justify-center items-center lg:w-[400px] w-[300px] h-[57px] border-[2px] rounded-sm bg-white hover:bg-[#1eb2a6] hover:animate-pulse hover:ease-in-out text-[#1eb2a6] hover:text-white  ' style={{borderColor:'#1eb2a6'}}>
        <div className=' text-[13px] font-extrabold' >READ MORE !</div>
    </div>
    </div>
</div>
<div className='  h-[330px] bg-white' data-aos='zoom-in-up'>
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
    <div className=' flex justify-center items-center mt-9 cursor-pointer' onClick={()=>{nav('masters')}}>
    <div className=' flex justify-center items-center lg:w-[400px] w-[300px] h-[57px] border-[2px] rounded-sm bg-white hover:bg-[#1eb2a6] hover:animate-pulse hover:ease-in-out text-[#1eb2a6] hover:text-white  ' style={{borderColor:'#1eb2a6'}}>
        <div className=' text-[13px] font-extrabold' >READ MORE !</div>
    </div>
    </div>
</div>
<div className='h-[330px] bg-white' data-aos='zoom-in-up'>
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
    <div  className=' flex justify-center items-center mt-9 cursor-pointer' onClick={()=>{nav('doc')}}>
    <div className=' flex justify-center items-center lg:w-[400px] w-[300px] h-[57px] border-[2px] rounded-sm bg-white hover:bg-[#1eb2a6] hover:animate-pulse hover:ease-in-out text-[#1eb2a6] hover:text-white  ' style={{borderColor:'#1eb2a6'}}>
        <div className=' text-[13px] font-extrabold' >READ MORE !</div>
    </div>
    </div>
</div>
            </div>
        </div>
    </div>
    <div>
        <div className=' mt-20'>
            <div className=' flex justify-center text-[#1eb2a6] font-sans font-medium text-[25px]' data-aos='slide-down'>Programmes</div>
            <div className=' text-3xl flex justify-center items-center mt-4 text-[30px] mb-14 font-semibold' data-aos='slide-up'>Browse Our Programmes</div>
        </div>
        <div className=' grid lg:grid-cols-5 gap-3 lg:mx-[140px] mx-4'>
            <div className=' bg-white  h-[250px] pt-10 cursor-pointer ' onClick={()=>{nav('management')}} data-aos='zoom-in-up'> 
<div className=' flex justify-center items-center text-[#1eb2a6]'><img src={business} className='w-[90px] h-[90px]' /></div>
<div className=' flex justify-center items-center text-[17px] font-semibold pt-3'>Management</div>
<div className=' flex justify-center items-center'><div className=' w-[150px] h-[27px] bg-gray-200 my-4 text-[#1eb2a6] font-medium rounded-md font-sans flex justify-center items-center'>13 Programmes</div></div>
            </div>
            <div className=' bg-white  h-[250px] pt-10 cursor-pointer  ' onClick={()=>{nav('engineering')}} data-aos='zoom-in-up'> 
<div className=' flex justify-center items-center text-[#1eb2a6]'><MdEngineering className='w-[90px] h-[90px]' /></div>
<div className=' flex justify-center items-center text-[18px] font-semibold pt-3'>Engineering</div>
<div className=' flex justify-center items-center'><div className=' w-[150px] h-[27px] bg-gray-200 my-4 text-[#1eb2a6] font-medium rounded-md font-sans flex justify-center items-center'>09 Programmes</div></div>
            </div>
            <div className=' bg-white  h-[250px] pt-10 cursor-pointer  ' onClick={()=>{nav('science')}} data-aos='zoom-in-up'> 
<div className=' flex justify-center items-center text-[#1eb2a6]'><img src={computer} className='w-[90px] h-[90px]' /></div>
<div className=' flex justify-center items-center text-[20px] font-semibold pt-3'>Science</div>
<div className=' flex justify-center items-center'><div className=' w-[150px] h-[27px] bg-gray-200 my-4 text-[#1eb2a6] font-medium rounded-md font-sans flex justify-center items-center'>08 Programmes</div></div>
            </div>
            <div className=' bg-white  h-[250px] pt-10 cursor-pointer  ' onClick={()=>{nav('art')}} data-aos='zoom-in-up'> 
<div className=' flex justify-center items-center text-[#1eb2a6]'><img src={history} className='w-[90px] h-[90px]' /></div>
<div className=' flex justify-center items-center text-[20px] font-semibold pt-3'>Art</div>
<div className=' flex justify-center items-center'><div className=' w-[150px] h-[27px] bg-gray-200 my-4 text-[#1eb2a6] font-medium rounded-md font-sans flex justify-center items-center'>06 Programmes</div></div>
            </div>
            <div className=' bg-white  h-[250px] pt-10 cursor-pointer  ' onClick={()=>{nav('agric')}} data-aos='zoom-in-up'> 
<div className=' flex justify-center items-center text-[#1eb2a6]'><img src={information} className='w-[90px] h-[90px]' /></div>
<div className=' flex justify-center items-center text-[20px] font-semibold pt-3'>Agriculture</div>
<div className=' flex justify-center items-center'><div className=' w-[150px] h-[27px] bg-gray-200 my-4 text-[#1eb2a6] font-medium rounded-md font-sans flex justify-center items-center'>13 Programmes</div></div>
            </div>
            <div className=' bg-white  h-[250px] pt-10 cursor-pointer  ' onClick={()=>{nav('economics')}} data-aos='zoom-in-up'> 
<div className=' flex justify-center items-center text-[#1eb2a6]'><img src={marketing} className='w-[90px] h-[90px]' /></div>
<div className=' flex justify-center items-center text-[20px] font-semibold pt-3'>literature</div>
<div className=' flex justify-center items-center'><div className=' w-[150px] h-[27px] bg-gray-200 my-4 text-[#1eb2a6] font-medium rounded-md font-sans flex justify-center items-center'>24 Programmes</div></div>
            </div>
            <div className=' bg-white  h-[250px] pt-10  cursor-pointer ' onClick={()=>{nav('legal')}} data-aos='zoom-in-up'> 
<div className=' flex justify-center items-center text-[#1eb2a6]'>< GoLaw src={graphics} className='w-[90px] h-[90px]' /></div>
<div className=' flex justify-center items-center text-[20px] font-semibold pt-3'>Legal Studies</div>
<div className=' flex justify-center items-center'><div className=' w-[150px] h-[27px] bg-gray-200 my-4 text-[#1eb2a6] font-medium rounded-md font-sans flex justify-center items-center'>18 Programmes</div></div>
            </div>
            <div className=' bg-white  h-[250px] pt-10 cursor-pointer  ' onClick={()=>{nav('lit')}} data-aos='zoom-in-up'> 
<div className=' flex justify-center items-center text-[#1eb2a6]'><TbBusinessplan src={web} className='w-[90px] h-[90px]' /></div>
<div className=' flex justify-center items-center text-[20px] font-semibold pt-3'>Economics</div>
<div className=' flex justify-center items-center'><div className=' w-[150px] h-[27px] bg-gray-200 my-4 text-[#1eb2a6] font-medium rounded-md font-sans flex justify-center items-center'>06 Programmes</div></div>
            </div>
            <div className=' bg-white  h-[250px] pt-10 cursor-pointer ' onClick={()=>{nav('medicine')}} data-aos='zoom-in-up' > 
<div className=' flex justify-center items-center text-[#1eb2a6]'><GiMedicines className='w-[90px] h-[90px]' /></div>
<div className=' flex justify-center items-center text-[20px] font-semibold pt-3'>Medicine</div>
<div className=' flex justify-center items-center'><div className=' w-[150px] h-[27px] bg-gray-200 my-4 text-[#1eb2a6] font-medium rounded-md font-sans flex justify-center items-center'>17 Programmes</div></div>
            </div>
        </div>
    </div>
    <div className=' -mt-8'>
        <Newsletter />
    </div>
    <div>
        <Footer />
    </div>
    </div>
  )
}

export default Allscholarships