import React from 'react'
import { FaChild } from 'react-icons/fa'

const main = () => {
  return (
    <div className='main' id='main'>
      
      <div className='bg-pVerde h-[350px] flex justify-center items-center flex-col font-abc gap-10 text-2xl md:flex-row md:text-6xl transition-all'>
        <p className='hover:text-pRojo  duration-500 cursor-pointer'>Funcional</p>
        <p className='hover:text-pRojo  duration-300 cursor-pointer'>Pilates</p>
        <p className='hover:text-pRojo duration-300 cursor-pointer'>Hipopresivos</p>
        <p className='hover:text-pRojo duration-300 cursor-pointer'>Personalizado</p>
      </div>
     
    <div className='bg-white h-[2500px] w-full flex justify-center'>
    <span className='border-b-0 absolute top-[98em] bg-black m-auto h-[1px] w-96'></span>

    <div className='w-[1500px] max-w-2500 m-auto'>
      {/* CONTENEDOR MAIN */}
      <div className=' flex justify-center h-[2000px] w-full'>
        <div className='m-52 h-[500px] w-[1500px] flex justify-center items-center gap-14'>
    
          {/* TARJETA 1 */}
          <div className='bg-gray-400 w-96 h-72 flex justify-center items-center'>
            <div className='flex justify-center items-center flex-col gap-5'>
            <FaChild className='flex justify-center items-center text-5xl'/>
              <h5>TARJETA1</h5>
              <div className='border-b-0 bg-black h-[1px] w-28'></div>
              <p className='text-sm w-36 text-center'>lorem loreml oremlor emlo rem</p>
              </div>
          </div>
          
          {/* TARJETA 2 */}
          <div className='bg-gray-400 w-96 h-72 flex justify-center items-center'>
            <div className='flex justify-center items-center flex-col gap-5'>
            <FaChild className='flex justify-center items-center text-5xl'/>
              <h5>TARJETA1</h5>
              <div className='border-b-0 bg-black h-[1px] w-28'></div>
              <p className='text-sm w-36 text-center'>lorem loreml oremlor emlo rem</p>
              </div>
          </div>
          
          {/* TARJETA 3 */}
          <div className='bg-gray-400 w-96 h-72 flex justify-center items-center'>
            <div className='flex justify-center items-center flex-col gap-5'>
            <FaChild className='flex justify-center items-center text-5xl'/>
              <h5>TARJETA1</h5>
              <div className='border-b-0 bg-black h-[1px] w-28'></div>
              <p className='text-sm w-36 text-center'>lorem loreml oremlor emlo rem</p>
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