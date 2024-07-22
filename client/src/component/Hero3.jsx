import React from 'react'
import './scholarship.css'
import ab from './images/back.webp'
import logo from './images/photo_2024-05-13_01-59-24.jpg'

const Hero3 = () => {
  return (
    <div >
    <div className='scholarship'>
      <div className='container'>
      <img src={ab} className=" lg:hidden h-[70vh] mt-10 relative shadow-lg drop-shadow-lg" />
      <img src={logo} className=" lg:hidden h-[10vh] w-[80px] -mt-[460px] ml-7 rounded-full absolute shadow-inner" />
        <div className='lg:w-[1000px] lg:mt-10 -mt-72 lg:mx-0 mx-2 absolute  '>
        <div className=" lg:ml-[400px] lg:mx-0 mx-7 text-[50px] lg:text-[50px] font-bold font-sans uppercase mb-3"> About Us</div>
        </div>
      </div>
    </div>
    <div className='margin'></div>
  </div>
  )
}

export default Hero3