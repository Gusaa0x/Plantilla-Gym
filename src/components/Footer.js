import React from 'react'
import { AiOutlineFieldTime, AiOutlineInstagram, AiFillFacebook, AiOutlineWhatsApp } from "react-icons/ai"
const Footer = () => {
  return (
    <div className='h-[550px] bg-gray-300'>
      {/* CONTENEDOR CONTENIDO 1 */}
          <div className='bg-pVerde w-[290px] h-[550px] md:w-[1850px] flex flex-col md:flex-row md:justify-around'>
            <div className='text-[.8rem] h-72 md:m-10'>
              <h5 className='my-5 py-5 m-5 text-lg font-semibold'>DIAS ABIERTOS:
              <div className='border-b-[1px] border-gray-600 relative right-2 m-2 w-[150px]'></div>
              </h5>
              
              {/*  */}
              <div className='border-b-[1px] border-gray-600 flex justify-between m-2 md:w-[550px]'>
                <span className='flex h-8'><span><AiOutlineFieldTime className='my-1 mr-2 text-sm'/></span>Martes - Jueves</span>
              <span>08:00am - 21:00pm</span>
              </div>
              {/*  */}
              <div className='border-b-[1px] border-gray-600 flex justify-between m-2 md:w-[550px]'>
                <span className='flex h-8'><span><AiOutlineFieldTime className='my-1 mr-2 text-sm'/></span>Martes - Jueves</span>
              <span>08:00am - 21:00pm</span>
              </div>
              {/*  */}
             <div className='border-b-[1px] border-gray-600 flex justify-between m-2 md:w-[550px]'>
                <span className='flex h-8'><span><AiOutlineFieldTime className='my-1 mr-2 text-sm'/></span>Martes - Jueves</span>
              <span>08:00am - 21:00pm</span>
              </div>
              {/*  */}
              <div className='border-b-[1px] border-gray-600 flex justify-between m-2 md:w-[550px]'>
                <span className='flex h-8'><span><AiOutlineFieldTime className='my-1 mr-2 text-sm'/></span>Martes - Jueves</span>
              <span>08:00am - 21:00pm</span>
              </div>
            </div>
            {/* CONTENEDOR CONTENIDO 2 */}
            <div className='m-auto ml-2'> 
            <div className='text-xs md:text-lg'>Enterate de las nuevas novedades!</div>
            <div className='border-b-[1px] border-gray-600 w-[120px] my-3'></div>
            <input className='bg-green-100 h-[30px] md:w-[300px] md:h-[30px] rounded-sm' placeholder='Email'></input><button className='h-[35px] ml-3 w-[70px] md:w-[80px] md:text-sm bg-green-100 rounded-md text-xs font-semibold'>ENVIAR</button>
            
            {/*  */}
            <div className='text-lg flex justify-evenly my-6'>
            <span className='bg-white rounded-full w-7 h-7 flex justify-center items-center'><AiOutlineInstagram className=''/></span>
            <span className='bg-white rounded-full w-7 h-7 flex justify-center items-center'><AiFillFacebook/></span>
            <span className='bg-white rounded-full w-7 h-7 flex justify-center items-center'><AiOutlineWhatsApp/></span>
            </div>
            <div className='border-b-[1px] border-gray-600 flex justify-between m-4'></div>
            <span className='text-xs opacity-8'>© Copyright 2023. All Rights Reserved by Romina Salas.</span>
            </div>
        </div>
      

    </div>
  )
}

export default Footer