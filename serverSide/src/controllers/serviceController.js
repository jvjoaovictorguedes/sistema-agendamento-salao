const Service = require("../models/service");

const FindService = async (req, res) => {
  try {
    const { service_id } = req.body;
    const service = await Service.findAll({
      where: {
        service_id,
      },
    });
    return res.status(200).json({ service });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const InsertService = async (req, res) => {
  try {
    const { name_service, estimated_duration, price } = req.body;
    const service = await Service.create({
      name_service,
      estimated_duration,
      price,
    });
    return res.status(201).json({ service });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  FindService,
  InsertService,
};
