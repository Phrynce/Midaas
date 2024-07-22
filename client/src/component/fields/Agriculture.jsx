import React, { useEffect, useState } from 'react'
import '../scholarship.css'
import '../false.css'

const Agriculture = () => {
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
      <div className=' flex justify-center items-center  mx-5'>
      <div className=' text-[85px] font-normal lg:w-[500px] w-[400px] lg:-mt-14 bg-white/55 rounded-lg'>
<div className=' flex justify-center items-center text-black lg:text-[25px] text-[17px] pt-3 font-serif font-semibold'>Agriculture Programmes</div>
<div className=' flex justify-center items-center lg:w-[400px] mx-10 h-[1px] bg-black mb-4'></div>
<div className=' flex justify-start mx-10 items-center text-[17px] font-normal font-mono text-black pb-2'>Aquaculture</div>
<div className=' flex justify-start mx-10 items-center text-[17px] font-normal font-mono text-black pb-2'>Fishery Facilities and Equipment</div>
<div className=' flex justify-start mx-10 items-center text-[17px] font-normal font-mono text-black pb-2'>Bioprospecting of Aquatic Resources</div>
<div className=' flex justify-start mx-10 items-center text-[17px] font-normal font-mono text-black pb-2'>Agricultural Resource and Environment</div>
<div className=' flex justify-start mx-10 items-center text-[17px] font-normal font-mono text-black pb-2'>Wood science and engineering</div>
<div className=' flex justify-start mx-10 items-center text-[17px] font-normal font-mono text-black pb-2'>Smart Forestry</div>
<div className=' flex justify-start mx-10 items-center text-[17px] font-normal font-mono text-black pb-2'>Animal Husbandry and Veterinary</div>
<div className=' flex justify-start mx-10 items-center text-[17px] font-normal font-mono text-black pb-2'>Zoology</div>
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

export default Agriculture