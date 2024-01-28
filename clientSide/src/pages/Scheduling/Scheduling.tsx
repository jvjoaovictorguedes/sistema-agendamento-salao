import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

export default function Scheduling() {
  return (
    <>
      <div className="w-screen col-auto p-5 h-100 overflow-auto text-white">
        <div className="row overflow-auto">
          <div className="col-12 overflow-auto">
            <h2 className="mb-4 mt-0">Agendamentos</h2>
            <Calendar
              localizer={localizer}
              events={[
                {
                  title: "Event Test",
                  start: moment().toDate(),
                  end: moment().add(30, "minutes").toDate(),
                },
              ]}
              defaultView="week"
              popup
              selectable
              style={{ height: 600 }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
