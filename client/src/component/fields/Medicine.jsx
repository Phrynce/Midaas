import React, { useEffect, useState } from 'react'
import '../scholarship.css'

const Medicine = () => {
  const [loading, setloading]=useState(true)
  useEffect(()=>{
    setTimeout(() => {
      setloading(false)
    }, 2000);
  })
  return (
    <div>
      {
        loading==true?   <div>
        <div className=' flex justify-center items-center lg:mt-0 mt-36'>
        <div class="loader">
    <div class="loader__bar"></div>
    <div class="loader__bar"></div>
    <div class="loader__bar"></div>
    <div class="loader__bar"></div>
    <div class="loader__bar"></div>
    <div class="loader__ball"></div>
  </div>
        </div>
      </div>:<div>
      <section className='scholarship mb-10'>
  <div className='container '>
      <div className=' flex justify-center items-center lg:-mt-20 mt-16 mx-5'>
      <div className=' text-[85px] font-normal lg:w-[500px] w-[400px] bg-white/55 rounded-lg'>
<div className=' flex justify-center items-center text-black lg:text-[25px] text-[17px] pt-3 font-serif font-semibold'>Medicine Programmes</div>
<div className=' flex justify-center items-center lg:w-[400px] mx-10 h-[1px] bg-black mb-4'></div>
<div className=' flex justify-start mx-10 items-center text-[17px] font-normal font-mono text-black pb-2'>MBBS</div>
<div className=' flex justify-start mx-10 items-center text-[17px] font-normal font-mono text-black pb-2'>Nursing</div>
<div className=' flex justify-start mx-10 items-center text-[17px] font-normal font-mono text-black pb-2'>Pharmacy</div>
<div className=' flex justify-start mx-10 items-center text-[17px] font-normal font-mono text-black pb-2'>Dental surgery</div>
<div className=' flex justify-start mx-10 items-center text-[17px] font-normal font-mono text-black pb-2'>Clinical laboratory diagnostic</div>
<div className=' flex justify-start mx-10 items-center text-[17px] font-normal font-mono text-black pb-2'>Surgery</div>
<div className=' flex justify-start mx-10 items-center text-[17px] font-normal font-mono text-black pb-2'>Pediatrics</div>
<div className=' flex justify-start mx-10 items-center text-[17px] font-normal font-mono text-black pb-2'>Imaging Medicine and Nuclear Medicine</div>
<div className=' flex justify-start mx-10 items-center text-[17px] font-normal font-mono text-black pb-2 mb-4'>Others (Contact us for more)</div>
<div className=' flex justify-center items-center'>
<a href='https://forms.gle/2kvMaNPyJ1gouDwX8' className=' flex justify-center items-center lg:w-[400px] w-[300px] h-[57px] border-[2px] rounded-sm bg-white hover:bg-[#1eb2a6] hover:animate-pulse hover:ease-in-out text-[#1eb2a6] hover:text-white  ' style={{borderColor:'#1eb2a6'}}>
        <div className=' text-[13px] font-extrabold' >APPLY NOW !</div>
    </a> 
</div>
      </div>
      </div>
  </div>
</section>
<div className='margin'></div>
      </div>
      }
    
</div>
    
  )
}

export default Medicine