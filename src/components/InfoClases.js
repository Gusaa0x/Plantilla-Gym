import Card from "./Card";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

function Carousel() {

const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= 250;
}
const scrollRight = () => {
    document.getElementById("content").scrollLeft += 250;
}


  return (
    
    <div className="relative ml-5 rounded-lg mb-10 w-[280px] h-[550px] md:w-[850px] md:h-[550px] md:left-[500px] bg-fondoTransparenteNegro">
      <div className="text-center py-4  text-xl font-bold">CLASES</div>
      <div className="flex justify-between relative top-52">
        <button onClick={scrollLeft} className="text-base p-2 m-2 rounded-full bg-fondoTransparenteBlanco">
          <AiOutlineArrowLeft  className="text-black"/>
        </button>
        <button onClick={scrollRight} className="text-base p-2 m-2 rounded-full bg-fondoTransparenteBlanco">
          <AiOutlineArrowRight className="text-black" />
        </button>
      </div>
      <div id="content" className="carousel p-4 flex items-center justify-start overflow-x-auto scroll-smooth  scrollbar-hide">
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Carousel;