import React, { useEffect } from "react"
import { testimonal } from "../../dummydata"
import "./style.css"
import { FaQuoteLeft } from "react-icons/fa6";
import 'aos/dist/aos.css'
import Aos from 'aos';

const Testimonal = () => {
  useEffect(()=>{
       Aos.init({duration:2000})
     },[])
  return (
    <>
      <section className='testimonal padding mb-5'>
        <div className='container mt-24'>
<div className=" flex justify-center items-center mb-2 text-[#1eb2a6] font-medium text-[23px] font-sans" data-aos='fade-down'>TESTIMONIAL</div>
<div className=" flex justify-center items-center mb-14 lg:text-[44px] font-bold text-black capitalize"  data-aos='fade-up'>Our successful students</div>
          <div className=' grid lg:grid-cols-3 gap-8 lg:mx-[140px] mx-3'>
            {testimonal.map((val) => (
              <div className='items  bg-white shadow-md' data-aos='zoom-in-up'>
                <div className='box flex'>
                  <div className='img mt-6'>
                    <img src={val.cover} alt='' />
                    <i className='w-[35px] h-[35px] text-[18px] rounded-full flex justify-center items-center'><FaQuoteLeft /></i>
                  </div>
                  <div className='name'>
                    <h2>{val.name}</h2>
                    <span>{val.post}</span>
                  </div>
                </div>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonal
