import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TbLetterX } from "react-icons/tb";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6"

const Navbar = () => {
  return (
    <div>
        <div className=' lg:mx-[150px] mx-6  lg:mt-8 mt-11 mb-10'>
        <div className=' relative'>
<h2 className=' lg:text-[30px] font-sans font-extrabold text-white'> MIDAS TOUCH CONSULT</h2>
<h4 className=' font-normal text-lg text-white hidden lg:block'>Educational Scholarship Supports and finance</h4>
        </div>

        <div className=' -mt-[60px] mx-3 hidden lg:block'>
            <div className=' flex justify-end items-end'>
        <a href='https://www.facebook.com/100068983969227/posts/646607630982030/?mibextid=rS40aB7S9Ucbxw6v' className='text-[#1eb2a6] bg-white/40 mx-1 w-10 flex justify-center items-center h-10 rounded-full'><FaFacebookF /> </a>
<a href='https://www.tiktok.com/@midas.touch.consu?_r=1&_d=dmkg5j05ib11fj&sec_uid=MS4wLjABAAAA06YoZFubC2Kv-TgCGly5pHMmYuhlsElk6VO5-KgbXec8XKD8aihIT2tQeCxWEWU7&share_author_id=7303884164423549957&sharer_language=en&source=h5_m&u_code=eb6e9f417ic1c9&timestamp=1719696496&user_id=7303884164423549957&sec_user_id=MS4wLjABAAAA06YoZFubC2Kv-TgCGly5pHMmYuhlsElk6VO5-KgbXec8XKD8aihIT2tQeCxWEWU7&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7366626366651057925&share_link_id=0bf7296c-8f4f-4d72-8b83-213b41ac324d&share_app_id=1233&ugbiz_name=ACCOUNT&ug_btm=b8727%2Cb0229&social_share_type=5&enable_checksum=1' className='text-[#1eb2a6] bg-white/40 mx-1 w-10 flex justify-center items-center h-10 rounded-full'><FaTiktok /></a>
<div className='text-[#1eb2a6] bg-white/40 mx-1 w-10 flex justify-center items-center h-10 rounded-full'><FaYoutube /></div>
</div>
        </div>
        </div>
    </div>
    
  )
}

export default Navbar