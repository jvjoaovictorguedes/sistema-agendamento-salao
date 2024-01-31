import { Calendar, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/sass/styles.scss";
import { ApiCall, useSchedulingStore } from "../../store/SchedulingStore";
import { useEffect } from "react";

export default function Scheduling() {
  const localizer = dayjsLocalizer(dayjs);
  const { scheduling, addScheduling } = useSchedulingStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newArray = await ApiCall();
        newArray.forEach((item) => {
          addScheduling(item);
        });
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="w-screen col-auto p-5 h-screen overflow-auto text-white">
        <div className="w-full">
          <div className="d-block p-8">
            <h2 className="mb-4 mt-0">Agendamentos</h2>
            <Calendar
              localizer={localizer}
              events={scheduling}
              defaultView="month"
              popup={true}
              selectable={true}
              style={{
                height: 600,
                width: 1000,
                padding: "10px",
                background: "#FFFFFF",
                color: "#000000",
                margin: "10px",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
