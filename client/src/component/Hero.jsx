import React from "react"
import "./Hero.css"
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import bg from './images/bg.webp'
import logo from './images/photo_2024-05-13_01-59-24.jpg'

const Hero = () => {
  const nav=useNavigate()
  function view(e){
    e.preventDefault()
    nav('scholarship')
  }
  return (
    <div >
      <div className='hero'>
        <div className='container'>
          <img src={bg} className=" lg:hidden h-[70vh] mt-10 relative shadow-inner drop-shadow-lg " />
          <img src={logo} className=" lg:hidden h-[10vh] w-[80px] -mt-[460px] ml-7 rounded-full absolute shadow-inner" />
          <div className='lg:w-[1000px] lg:mt-10 -mt-72 lg:mx-0 mx-2 absolute  '>
          <div className=" lg:mx-32 lg:text-xl text-[45px] font-bold font-sans uppercase mb-4"> Welcome to MIDAS TOUCH CONSULT</div>
          <div className=" lg:mx-32 lg:text-[45px] text-[20px] font-bold font-sans uppercase mb-3"> BEST SCHOLARSHIP EXPERTISE</div>
            <div className=" lg:w-[850px] mb-4"><p  className=" lg:mx-32 lg:font-thin text-lg lg:text-white text-black font-semi-bold hidden lg:block ">Education is the most powerful weapon which you can use to change the world.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='margin'></div>
    </div>
  )
}

export default Hero
