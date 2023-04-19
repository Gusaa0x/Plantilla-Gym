import React from 'react'
import {Link} from 'react-scroll'
import { AiOutlineMenu, AiOutlineClose} from "react-icons/ai"
import { useState } from "react"; // import state
const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
  return (
    <div className='z-10' id='inicio'>
      <div className='flex justify-center items-center m-10 tracking-tighter font-bold'><h1 className='text-4xl py-5 text-gray-800'>Romina <span className='text-pVerde'>Salas</span></h1></div>
      <div className='w-full flex justify-center items mb-8'>
      <span className='border-b-0 absolute top-[9em] bg-black m-auto h-[1px] w-44'></span>
      </div>
      
      <nav className='flex justify-center items-center'>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2 absolute top-0 right-0 m-5"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 bg-gray-600"></span>
            <span className="block h-0.5 w-8  bg-gray-600"></span>
            <span className="block h-0.5 w-8 bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px] font-bold gap-5">
              <li className="m-10 text-xl uppercase">
                <a href="/about">INICIO</a>
              </li>
              <li className="m-10 text-xl uppercase">
                <a href="/portfolio">CLASES</a>
              </li>
              <li className="m-10 text-xl uppercase">
                <a href="/contact">SOBRE NOSOTROS</a>
              </li>
              <li className="m-10 text-xl uppercase">
                <a href="/contact">CONTACTO</a>
              </li>
            </ul>
            <AiOutlineClose className="absolute top-0 right-0  m-10 text-2xl"
              onClick={() => setIsNavOpen(false)} />
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <li>
            <Link to="inicio" spy={true} smooth={true} offset={-100} duration={500} className='cursor-pointer'>INICIO</Link>
          </li>
          <li>
            <Link href="/">CLASES</Link>
          </li>
          <li>
            <Link href="/">SOBRE NOSOTROS</Link>
          </li>
          <li>
            <Link href="/">CONTACTO</Link>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: #8FA18D;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  
  )
}

export default Header