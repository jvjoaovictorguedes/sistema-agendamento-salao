const Scheduling = require("../models/scheduling");

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

const FindScheduling = async (req, res, next) => {
  try {
    const findScheduling = await Scheduling.findAll();
    return res.json({ findScheduling });
    next();
  } catch (error) {
    res.json({ error: true, message: error.message });
  }
};
module.exports = {
  InsertScheduling,
  FindScheduling,
};
