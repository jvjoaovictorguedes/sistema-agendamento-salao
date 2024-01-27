import BottomArrow from "../assets/chevron-baixo.png";
import PhotoJoao from "../assets/IMG_20240105_201837_037.jpg";

export default function Home() {
  return (
    <div className="bg-pinkSalon w-full h-[80px] items-center justify-center p-2">
      <div className="flex flex-1 justify-end items-center gap-5">
        <p>Studio Beauty SKL</p>
        <button className="flex justify-center items-center">
          <img className="w-14 rounded-full" src={PhotoJoao} alt="Foto João" />
          <img className="w-5" src={BottomArrow} alt="botão pra baixo" />
        </button>
      </div>
    </div>
  );
}
