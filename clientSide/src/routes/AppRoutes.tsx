import { Route, Routes } from "react-router-dom";
import Header from "../components/Header/Header";
import SideBar from "../components/SideBar/SideBar";
import Scheduling from "../pages/Scheduling/Scheduling";
import "../styles.css";
import Clients from "../pages/Clients/Clients";
import Collaborations from "../pages/Collaborations/Collaborations";
import Services from "../pages/Services/Services";
import Times from "../pages/Times/Times";

export default function AppRoutes() {
  return (
    <>
      <Header />
      <div className="flex flex-1">
        <SideBar />
        <Routes>
          <Route path="/" element={<Scheduling />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/collaborations" element={<Collaborations />} />
          <Route path="/services" element={<Services />} />
          <Route path="/times" element={<Times />} />
        </Routes>
      </div>
    </>
  );
}
