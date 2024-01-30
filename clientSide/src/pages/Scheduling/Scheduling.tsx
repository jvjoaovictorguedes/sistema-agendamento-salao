import { Calendar, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/sass/styles.scss";
import ApiCall from "../../store/SchedulingStore";

export default function Scheduling() {
  const scheduling: any[] | undefined = [];
  const durationService: any[] | undefined = [];
  const localizer = dayjsLocalizer(dayjs);
  const handleApi = async () => {
    const response = await ApiCall();
    scheduling.push(response.scheduling.findScheduling[0].date);
    durationService.push(response.service["service"][0].service_duration);
    console.log(scheduling);
    console.log(durationService);
  };
  return (
    <>
      <div className="w-screen col-auto p-5 h-screen overflow-auto text-white">
        <div className="w-full">
          <div className="d-block p-8">
            <button onClick={handleApi}>Clique em mim!</button>
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
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
