import Logo from "../../assets/IMG-20240127-WA0020.jpg";
import Icon from "@mdi/react";
import { mdiCalendarCheck, mdiAccountMultiple } from "@mdi/js";
import { Link, useLocation } from "react-router-dom";
import "../../styles.css";

export default function SideBar() {
  const location = useLocation();

  const findActiveScheduling = location.pathname === "/" ? "active" : "";
  const findActiveClient = location.pathname === "/clients" ? "active" : "";
  const findActiveCollaborations =
    location.pathname === "/collaborations" ? "active" : "";
  const findActiveServices = location.pathname === "/services" ? "active" : "";
  const findActiveTimes = location.pathname === "/times" ? "active" : "";

  const changeColorScheduling = findActiveScheduling
    ? "rgb(211, 158, 255)"
    : "rgb(255, 255, 255)";
  const changeColorClient = findActiveClient
    ? "rgb(211, 158, 255)"
    : "rgb(255, 255, 255)";
  const changeColorCollaborations = findActiveCollaborations
    ? "rgb(211, 158, 255)"
    : "rgb(255, 255, 255)";
  const changeColorServices = findActiveServices
    ? "rgb(211, 158, 255)"
    : "rgb(255, 255, 255)";
  const changeColorTimes = findActiveTimes
    ? "rgb(211, 158, 255)"
    : "rgb(255, 255, 255)";

  return (
    <>
      <nav className="d-grid col-2 h-screen">
        <img className="img-fluid px-3 py-4 w-60" src={Logo} alt="Logo" />
        <ul className="absolute top-[260px] p-0 m-0">
          <li>
            <Link className={location.pathname === "/" ? "active" : ""} to="/">
              <Icon
                path={mdiCalendarCheck}
                size={1}
                color={changeColorScheduling}
                className={location.pathname === "/" ? "active" : ""}
              />
              <p>Agendamentos</p>
            </Link>
          </li>
          <li>
            <Link
              className={location.pathname === "/clients" ? "active" : ""}
              to="/clients"
            >
              <Icon
                path={mdiAccountMultiple}
                size={1}
                color={changeColorClient}
                className={location.pathname === "/" ? "active" : ""}
              />
              <p>Clientes</p>
            </Link>
          </li>
          <li>
            <Link
              className={
                location.pathname === "/collaborations" ? "active" : ""
              }
              to="/collaborations"
            >
              <Icon
                path={mdiAccountMultiple}
                size={1}
                color={changeColorCollaborations}
                className={location.pathname === "/" ? "active" : ""}
              />
              <p>Colaboradores</p>
            </Link>
          </li>
          <li>
            <Link
              className={location.pathname === "/services" ? "active" : ""}
              to="/services"
            >
              <Icon
                path={mdiAccountMultiple}
                size={1}
                color={changeColorServices}
                className={location.pathname === "/" ? "active" : ""}
              />
              <p>Serviços</p>
            </Link>
          </li>
          <li>
            <Link
              className={location.pathname === "/times" ? "active" : ""}
              to="/times"
            >
              <Icon
                path={mdiAccountMultiple}
                size={1}
                color={changeColorTimes}
                className={location.pathname === "/" ? "active" : ""}
              />
              <p>Horários</p>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
