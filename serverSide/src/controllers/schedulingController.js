const Scheduling = require("../models/scheduling");
const Service = require("../models/service");

const FindScheduling = async (req, res) => {
  try {
    const { scheduling_id } = req.params;
    const scheduling = await Scheduling.findAll({
      where: {
        scheduling_id,
      },
    });
    const { service_id } = scheduling[0];
    const service = await Service.findAll({
      where: {
        service_id,
      },
    });
    const { name_service } = service[0];
    if (!scheduling) {
      return res.status(400).json({
        message: "Scheduling not found",
      });
    }
    return res.json({ scheduling, name_service });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const InsertScheduling = async (req, res) => {
  try {
    const {
      client_id,
      professional_id,
      service_id,
      dat_hours_init,
      dat_hours_final,
      status,
    } = req.body;
    const scheduling = await Scheduling.create({
      client_id,
      professional_id,
      service_id,
      dat_hours_init,
      dat_hours_final,
      status,
    });
    return res.json({ scheduling });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const FindAllScheduling = async (__req, res) => {
  try {
    const scheduling = await Scheduling.findAll();
    const service = await Service.findAll({
      where: {
        service_id: scheduling[0].service_id,
      },
    });
    return res.json({ scheduling, service });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  FindScheduling,
  InsertScheduling,
  FindAllScheduling,
};
