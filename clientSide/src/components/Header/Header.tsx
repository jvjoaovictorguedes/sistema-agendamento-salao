import PhotoJoao from "../../assets/IMG_20240105_201837_037.jpg";
import Icon from "@mdi/react";
import { mdiChevronDown } from "@mdi/js";

export default function Home() {
  return (
    <header className="container-fluid d-flex justify-content-end bg-purpleSalon">
      <div className="d-flex align-items-center">
        <div className="text-right mr-3">
          <span className="d-block m-0 p-0 text-white">Studio Beauty SKL</span>
          <small className="m-0 p-0">Área do Profissional!</small>
        </div>
        <img src={PhotoJoao} alt="Olá" />
        <Icon className="Icon" path={mdiChevronDown} size={1} color="#FFFFFF" />
      </div>
    </header>
  );
}
