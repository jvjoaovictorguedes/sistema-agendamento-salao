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

const FindSchedulingClient = async (req, res) => {
  try {
    const { id_people_client } = req.params;
    const scheduling = await Scheduling.findAll({
      where: {
        id_people_client,
      },
    });
    res.json({ scheduling });
  } catch (err) {
    res.status(500).json({ error: true, message: err.message });
  }
};

const FindSchedulingProfessional = async (req, res) => {
  try {
    const { id_people_professional } = req.params;
    const scheduling = await Scheduling.findAll({
      where: {
        id_people_professional,
      },
    });
    res.json({ scheduling });
  } catch (err) {
    res.status(500).json({ error: true, message: err.message });
  }
};

module.exports = {
  InsertScheduling,
  FindSchedulingClient,
  FindSchedulingProfessional,
};
