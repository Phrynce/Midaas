import React from 'react'
import { BsFillSendFill } from "react-icons/bs";

const Newsletter = () => {
  return (
    <div>
        <div className=' bg-[#1eb2a6] mt-14 h-40 mb-11'>
            <div  className=' lg:text-[29px] font-sans lg:ml-32 text-white pt-10'>
                <div className=' mb-4 font-bold'>Newsletter - Stay tune and get the latest update</div>
                <div className=' text-lg'>Far far away, behind the word mountains</div>
            </div>
            <div className=' hidden lg:block'>
            <div className='flex justify-end lg:mr-32 -mt-14 relative'>
                <input type="text" placeholder='enter email address' className=' w-[500px] h-[37px] px-9 text-black'/>
                <div className=' inline-block mt-2 absolute'><BsFillSendFill  className=' text-[#1eb2a6] mr-4 text-xl '/></div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Newsletter