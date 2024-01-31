const Scheduling = require("../models/scheduling");

const validatedScheduling = async (req, res, next) => {
  try {
    const { scheduling_id } = req.params;
    const scheduling = await Scheduling.findAll({
      where: {
        scheduling_id,
      },
    });
    if (!scheduling) {
      return res.status(400).json({
        message: "Scheduling not found",
      });
    }
    next();
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const validatedInsertScheduling = async (req, res, next) => {
  try {
    const {
      client_id,
      professional_id,
      service_id,
      dat_hours_init,
      dat_hours_final,
      status,
    } = req.body;
    if (
      !client_id ||
      professional_id ||
      !service_id ||
      !dat_hours_init ||
      !dat_hours_final
    ) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }
    const scheduling = await Scheduling.findAll({
      where: {
        client_id,
        professional_id,
        service_id,
        dat_hours_init,
        dat_hours_final,
        status,
      },
    });
    const schedulingTime = await Scheduling.findAll({
      where: {
        service_id,
        dat_hours_init,
        dat_hours_final,
      },
    });
    console.log(scheduling);
    if (scheduling.length > 0 || schedulingTime.length > 0) {
      return res.status(400).json({
        message: "Scheduling already exists",
      });
    }
    next();
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const validatedAllScheduling = async (req, res, next) => {
  try {
    const scheduling = await Scheduling.findAll();
    if (!scheduling) {
      return res.status(400).json({
        message: "Scheduling not found",
      });
    }
    next();
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  validatedScheduling,
  validatedInsertScheduling,
  validatedAllScheduling,
};
