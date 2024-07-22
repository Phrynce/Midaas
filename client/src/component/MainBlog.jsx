import React from 'react'
import b1 from './images/blog/b4.webp'
import b2 from './images/blog/b2.webp'
import b3 from './images/blog/b3.webp'
import { AiOutlineComment } from "react-icons/ai";
import { FaComment, FaUser } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FaComments } from 'react-icons/fa6';

const MainBlog = () => {
  return (
    <div>
        <div className=' mt-[600px]' >
            <div className=' flex justify-center items-center text-[#1eb2a6] font-sans text-[20px] mt-[130px] mb-1 font-bold '>OUR BLOG</div>
            <div className=' flex justify-center items-center text-[39px] font-sans font-bold mb-14'>Recent From Blog</div>
        </div>
        <div className=' grid grid-cols-3 gap-7 mx-36 mb-8'>
            <div className=' bg-white shadow-md '>
            <div>
                <img src={b1} />
            </div>
            <div className=' mb-6 mt-8 '>
                <div className=' inline-block mx-6'>
            <div className=' text-[16px] text-[#1eb2a6] inline-block  '><FaUser /></div>
            <span className=' text-gray-600 text-[13px] font-medium font-sans mx-2  inline-block '>ADMIN</span>
            </div>
            <div className=' inline-block'>
            <div className=' text-[16px] text-[#1eb2a6] inline-block '><SlCalender /></div>
            <span className=' text-gray-600 text-[13px] font-medium font-sans mx-2  inline-block '>JAN. 18, 2021</span>
            </div>
            <div className=' inline-block mx-6'>
            <div className=' text-[18px] text-[#1eb2a6] inline-block '><FaComments /></div>
            <span className=' text-[#1eb2a6] text-[14px]  font-medium font-sans mx-2  inline-block '> 3 COMMENTS</span>
            </div>
            </div>
            <div className=' flex justify-center items-center text-[22px] mx-6 cursor-pointer hover:text-[#1eb2a6] font-sans font-bold'>
            Build your Dream Software & Engineering Career
            </div>
            <div className=' flex justify-center items-center text-[18px] font-sans font-normal text-gray-500 mt-4 mb-12 mx-6'>
            A small river named Duden flows by their place and supplies it with the necessary regelialia.
            </div>
            </div>
            <div className=' bg-white shadow-md '>
            <div>
                <img src={b2} />
            </div>
            <div className=' mb-6 mt-8 '>
                <div className=' inline-block mx-6'>
            <div className=' text-[16px] text-[#1eb2a6] inline-block  '><FaUser /></div>
            <span className=' text-gray-600 text-[13px] font-medium font-sans mx-2  inline-block '>ADMIN</span>
            </div>
            <div className=' inline-block'>
            <div className=' text-[16px] text-[#1eb2a6] inline-block '><SlCalender /></div>
            <span className=' text-gray-600 text-[13px] font-medium font-sans mx-2  inline-block '>API. 25, 2022</span>
            </div>
            <div className=' inline-block mx-6'>
            <div className=' text-[18px] text-[#1eb2a6] inline-block '><FaComments /></div>
            <span className=' text-[#1eb2a6] text-[14px]  font-medium font-sans mx-2  inline-block '> 7 COMMENTS</span>
            </div>
            </div>
            <div className=' flex justify-center items-center text-[22px] mx-6 cursor-pointer hover:text-[#1eb2a6] font-sans font-bold'>
            Build your Dream Software & Engineering Career
            </div>
            <div className=' flex justify-center items-center text-[18px] font-sans font-normal text-gray-500 mt-4 mb-12 mx-6'>
            A small river named Duden flows by their place and supplies it with the necessary regelialia.
            </div>
            </div>
            <div className=' bg-white shadow-md '>
            <div>
                <img src={b3} />
            </div>
            <div className=' mb-6 mt-8 '>
                <div className=' inline-block mx-6'>
            <div className=' text-[16px] text-[#1eb2a6] inline-block  '><FaUser /></div>
            <span className=' text-gray-600 text-[13px] font-medium font-sans mx-2  inline-block '>USER</span>
            </div>
            <div className=' inline-block'>
            <div className=' text-[16px] text-[#1eb2a6] inline-block '><SlCalender /></div>
            <span className=' text-gray-600 text-[13px] font-medium font-sans mx-2  inline-block '>MAY. 15, 2022</span>
            </div>
            <div className=' inline-block mx-6'>
            <div className=' text-[18px] text-[#1eb2a6] inline-block '><FaComments /></div>
            <span className=' text-[#1eb2a6] text-[14px]  font-medium font-sans mx-2  inline-block '> 5 COMMENTS</span>
            </div>
            </div>
            <div className=' flex justify-center items-center text-[22px] mx-6 cursor-pointer hover:text-[#1eb2a6] font-sans font-bold'>
            Build your Dream Software & Engineering Career
            </div>
            <div className=' flex justify-center items-center text-[18px] font-sans font-normal text-gray-500 mt-4 mb-12 mx-6'>
            A small river named Duden flows by their place and supplies it with the necessary regelialia.
            </div>
            </div>
            <div className=' bg-white shadow-md '>
            <div>
                <img src={b3} />
            </div>
            <div className=' mb-6 mt-8 '>
                <div className=' inline-block mx-6'>
            <div className=' text-[16px] text-[#1eb2a6] inline-block  '><FaUser /></div>
            <span className=' text-gray-600 text-[13px] font-medium font-sans mx-2  inline-block '>USER</span>
            </div>
            <div className=' inline-block'>
            <div className=' text-[16px] text-[#1eb2a6] inline-block '><SlCalender /></div>
            <span className=' text-gray-600 text-[13px] font-medium font-sans mx-2  inline-block '>MAY. 15, 2022</span>
            </div>
            <div className=' inline-block mx-6'>
            <div className=' text-[18px] text-[#1eb2a6] inline-block '><FaComments /></div>
            <span className=' text-[#1eb2a6] text-[14px]  font-medium font-sans mx-2  inline-block '> 5 COMMENTS</span>
            </div>
            </div>
            <div className=' flex justify-center items-center text-[22px] mx-6 cursor-pointer hover:text-[#1eb2a6] font-sans font-bold'>
            Build your Dream Software & Engineering Career
            </div>
            <div className=' flex justify-center items-center text-[18px] font-sans font-normal text-gray-500 mt-4 mb-12 mx-6'>
            A small river named Duden flows by their place and supplies it with the necessary regelialia.
            </div>
            </div>
            <div className=' bg-white shadow-md '>
            <div>
                <img src={b3} />
            </div>
            <div className=' mb-6 mt-8 '>
                <div className=' inline-block mx-6'>
            <div className=' text-[16px] text-[#1eb2a6] inline-block  '><FaUser /></div>
            <span className=' text-gray-600 text-[13px] font-medium font-sans mx-2  inline-block '>USER</span>
            </div>
            <div className=' inline-block'>
            <div className=' text-[16px] text-[#1eb2a6] inline-block '><SlCalender /></div>
            <span className=' text-gray-600 text-[13px] font-medium font-sans mx-2  inline-block '>MAY. 15, 2022</span>
            </div>
            <div className=' inline-block mx-6'>
            <div className=' text-[18px] text-[#1eb2a6] inline-block '><FaComments /></div>
            <span className=' text-[#1eb2a6] text-[14px]  font-medium font-sans mx-2  inline-block '> 5 COMMENTS</span>
            </div>
            </div>
            <div className=' flex justify-center items-center text-[22px] mx-6 cursor-pointer hover:text-[#1eb2a6] font-sans font-bold'>
            Build your Dream Software & Engineering Career
            </div>
            <div className=' flex justify-center items-center text-[18px] font-sans font-normal text-gray-500 mt-4 mb-12 mx-6'>
            A small river named Duden flows by their place and supplies it with the necessary regelialia.
            </div>
            </div>
            <div className=' bg-white shadow-md '>
            <div>
                <img src={b3} />
            </div>
            <div className=' mb-6 mt-8 '>
                <div className=' inline-block mx-6'>
            <div className=' text-[16px] text-[#1eb2a6] inline-block  '><FaUser /></div>
            <span className=' text-gray-600 text-[13px] font-medium font-sans mx-2  inline-block '>USER</span>
            </div>
            <div className=' inline-block'>
            <div className=' text-[16px] text-[#1eb2a6] inline-block '><SlCalender /></div>
            <span className=' text-gray-600 text-[13px] font-medium font-sans mx-2  inline-block '>MAY. 15, 2022</span>
            </div>
            <div className=' inline-block mx-6'>
            <div className=' text-[18px] text-[#1eb2a6] inline-block '><FaComments /></div>
            <span className=' text-[#1eb2a6] text-[14px]  font-medium font-sans mx-2  inline-block '> 5 COMMENTS</span>
            </div>
            </div>
            <div className=' flex justify-center items-center text-[22px] mx-6 cursor-pointer hover:text-[#1eb2a6] font-sans font-bold'>
            Build your Dream Software & Engineering Career
            </div>
            <div className=' flex justify-center items-center text-[18px] font-sans font-normal text-gray-500 mt-4 mb-12 mx-6'>
            A small river named Duden flows by their place and supplies it with the necessary regelialia.
            </div>
            </div>
        </div>
    </div>
  )
}

export default MainBlog