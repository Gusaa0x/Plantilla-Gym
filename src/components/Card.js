import { FaChild } from 'react-icons/fa';
import {Animated} from "react-animated-css";

function Card() {
    return (
      <>
        <div id='tarjetaCarousel' className="card bg-pVerdeTransparente w-[180px] h-[350px] m-2 rounded-lg shadow-lg">
          <div className="top flex justify-center items-center">
            <FaChild className='text-8xl my-4'/>
          </div>
          <div className="w-full flex justify-center items-center flex-col my-10">
            <div className="title font-semibold text-xs my-1">
              PILATES + HIPOPRESIVOS
            </div>
            <div className="category text-xs font-light my-3">
              DESCRIPCION
            </div>
  
            <div className="pricing flex items-center">
              {" "}
              <div className="price ">
                
              <Animated animationIn="shake" animationOut="shake" isVisible={true}>
    <div>
        $1sadsad
    </div>
</Animated>

              </div>
              <div className="ml-2 text-xs ">
                $<del>1320</del>
              </div>
            </div>
            <div className="flex items-center my-2">
              <button className="border bg-gray-400 px-3 py-1 text-xs rounded-lg mr-1 ">
                Reservar Clase
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
  export default Card;