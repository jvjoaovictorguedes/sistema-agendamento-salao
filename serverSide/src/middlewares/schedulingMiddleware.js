const People = require("../models/people");
const Scheduling = require("../models/scheduling");

const ValidatedScheduling = async (req, res, next) => {
  const { id_people_client, id_people_professional, date, time } = req.body;
  const findPeopleClient = await People.findAll({
    where: {
      id_people: id_people_client,
      id_people_type: 2,
    },
  });
  if (!date || !id_people_client || !id_people_professional || !time) {
    return res
      .status(400)
      .json({ error: true, message: "Information is Missing." });
  }
  const scheduledDate = new Date(date);
  if (scheduledDate.getDay() === 0 || scheduledDate.getDay() === 1) {
    return res
      .status(400)
      .json({ error: true, message: "We do not work on Sundays or Mondays." });
  }
  const findPeopleProfessional = await People.findAll({
    where: {
      id_people: id_people_professional,
      id_people_type: 1,
    },
  });
  const findTime = await Scheduling.findAll({
    where: {
      id_people_professional,
      time,
      date,
    },
  });
  if (findTime.length != 0) {
    return res
      .status(400)
      .json({ error: true, message: "Time Already Scheduled" });
  }
  if (findPeopleClient == 0 || findPeopleProfessional == 0) {
    return res
      .status(404)
      .json({ error: true, message: "Client or Professional not Found!" });
  }
  next();
};

module.exports = {
  ValidatedScheduling,
};
