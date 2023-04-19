import React from 'react'
import {Link} from 'react-scroll'
import logo from './assets/img/logo.png';
import { AiOutlineArrowDown} from "react-icons/ai"


const Banner = () => {
  return (
    <div>{/* LOGO */}
    <div className='flex justify-center py-48 -mt-10 md:-mt-6'>
    <img src={logo} height={250} width={250} alt='logo' className='shadow shadow-black rounded-full animate-[wiggle_2s_ease-in-out_infinite]'/>
    </div>



    {/* FLECHA ABAJO */}
    <div className='flex justify-center items-center -mt-14 mb-32'><Link to="inicio" spy={true} smooth={true} offset={600} duration={500} className='cursor-pointer'><AiOutlineArrowDown className='text-5xl cursor-pointer'/></Link></div>
    </div>
  )
}

export default Banner;