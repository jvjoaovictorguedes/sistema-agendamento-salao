const Scheduling = require("../models/scheduling");
const Service = require("../models/service");
const moment = require("moment");

const InsertScheduling = async (req, res) => {
  try {
    const { id_people_client, id_people_professional, date, time, dat_insert } =
      req.body;
    const scheduling = await Scheduling.create({
      id_people_client,
      dat_insert,
      id_people_professional,
      date,
      time,
    });
    res.json({ scheduling });
  } catch (err) {
    res.status(500).json({ error: true, message: err.message });
  }
};

const FindScheduling = async (__req, res) => {
  try {
    const findScheduling = await Scheduling.findAll();
    return res.json({ findScheduling });
  } catch (error) {
    res.json({ error: true, message: error.message });
  }
};

const SumDate = async (__req, res) => {
  try {
    const findDateInitial = await Scheduling.findAll();

    const datesAndTimes = findDateInitial.map((item) => ({
      date: item.date,
      time: item.time,
    }));

    const findDurations = await Service.findAll();

    const durationsInMinutes = findDurations.map(({ service_duration }) => {
      const convertToMinutes = (duration) => {
        const [hours, minutes] = duration.split(":");
        return parseInt(hours, 10) * 60 + parseInt(minutes, 10);
      };
      
      return convertToMinutes(service_duration);
    });
    const nameService = findDurations.map((item => item.service_name));

    const results = datesAndTimes.map(({ date, time }, index) => {
      const datInit = moment(date, "YYYY-MM-DD").add(moment.duration(time));
      const durationMinutes = durationsInMinutes[index];

      const datFinal = datInit
        .clone()
        .add(durationMinutes, "minutes")
        .toISOString();
        

      return {
        datInit: datInit.toISOString(),
        datFinal: datFinal,
        
      };
    });
    res.json({ results, nameService });
  } catch (error) {
    res.json({ error: true, message: error.message });
  }
};

module.exports = {
  InsertScheduling,
  FindScheduling,
  SumDate,
};
