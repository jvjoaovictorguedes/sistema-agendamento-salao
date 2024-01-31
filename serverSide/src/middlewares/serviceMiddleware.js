const Service = require("../models/service");

const validatedService = async (req, res, next) => {
  try {
    const { service_id } = req.params;
    const service = await Service.findByPk(service_id);
    if (!service) {
      return res.status(400).json({
        message: "Service not found",
      });
    }
    next();
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const validatedInsertService = async (req, res, next) => {
  try {
    const { name_service, estimated_duration, price } = req.body;
    if (!name_service || !estimated_duration || !price) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }
    const service = await Service.findAll({
      where: {
        name_service,
        estimated_duration,
        price,
      },
    });
    console.log(service);
    if (service.length > 0) {
      return res.status(400).json({
        message: "Service already exists",
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
  validatedService,
  validatedInsertService,
};
