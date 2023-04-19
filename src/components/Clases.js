import React from 'react'
import { FaChild } from 'react-icons/fa'

const main = () => {
  return (
    <div className='main' id='main'>
      
      <div className='bg-pVerde h-[350px] flex justify-center items-center flex-col font-abc gap-10 text-2xl md:flex-row md:text-6xl transition-all'>
        <p className='hover:text-pRojo duration-500 cursor-pointer md:hover:text-pRojo md:duration-500 md:cursor-pointer'>Funcional</p>
        <p className='hover:text-pRojo duration-300 cursor-pointer'>Pilates</p>
        <p className='hover:text-pRojo duration-300 cursor-pointer'>Hipopresivos</p>
        <p className='hover:text-pRojo duration-300 cursor-pointer'>Personalizado</p>
      </div>
     
    <div className='h-[2000px] md:h-[850px] w-full flex justify-center'>
    

    <div className='flex justify-center items-center my-28'>
      
      {/* CONTENEDOR MAIN */}
      <div className='flex justify-center items-center'>
        <div className='h-[1550px] w-[280px] flex justify-center items-center flex-col gap-10 md:flex-row md:w-full'>
    

          {/* TARJETA 1 */}
          <div id='TarjetaCarousel' className='bg-gray-200 w-[280px] h-[500px] flex justify-center items-center my-10 md:w-[550px] md:h-[362px]'>
            <div className='flex justify-center items-center flex-col gap-5'>
            <FaChild className='flex justify-center items-center text-6xl'/>
              <h5 className='text-2xl'>TARJETA1</h5>
              <div className='border-b-0 bg-black h-[1px] w-28'></div>
              <p className='text-sm w-36 text-center'>lorem loreml oremlor emlo rem lor em lo rem lore m</p>
              </div>
          </div>

          {/* TARJETA 2*/}
          <div className='bg-gray-200 w-[280px] h-[500px] flex justify-center items-center my-10 md:w-[550px] md:h-[362px]'>
            <div className='flex justify-center items-center flex-col gap-5'>
            <FaChild className='flex justify-center items-center text-6xl'/>
              <h5 className='text-2xl'>TARJETA1</h5>
              <div className='border-b-0 bg-black h-[1px] w-28'></div>
              <p className='text-sm w-36 text-center'>lorem loreml oremlor emlo rem lor em lo rem lore m</p>
              </div>
          </div>

          {/* TARJETA 3 */}
          <div className='bg-gray-200 w-[280px] h-[500px] flex justify-center items-center my-10 md:w-[550px] md:h-[362px]'>
            <div className='flex justify-center items-center flex-col gap-5'>
            <FaChild className='flex justify-center items-center text-6xl'/>
              <h5 className='text-2xl'>TARJETA1</h5>
              <div className='border-b-0 bg-black h-[1px] w-28'></div>
              <p className='text-sm w-36 text-center'>lorem loreml oremlor emlo rem lor em lo rem lore m</p>
              </div>
          </div>
   
          
          
        </div>
      </div>
    </div>
    </div>
    </div>



  )
}

export default main