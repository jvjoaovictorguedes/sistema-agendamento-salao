import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/sass/styles.scss";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const localizer = momentLocalizer(moment);

export default function Scheduling() {
  const dispatch = useDispatch();

  const handleDispatch = () => {
    dispatch({
      type: "SET_SCHEDULING",
      payload,
    });
  };

  return (
    <>
      <div className="w-screen col-auto p-5 h-screen overflow-auto text-white">
        <div className="w-full">
          <div className="d-block p-8">
            <button onClick={handleDispatch}>Clique em mim!</button>
            <h2 className="mb-4 mt-0">Agendamentos</h2>
            <Calendar
              localizer={localizer}
              events={[]}
              defaultView="week"
              popup={true}
              selectable={true}
              style={{
                height: 600,
                width: 1000,
                padding: "10px",
                background: "#FFFFFF",
                color: "#000000",
              }}
              startAccessor="start"
              endAccessor="end"
            />
          </div>
        </div>
      </div>
    </>
  );
}
