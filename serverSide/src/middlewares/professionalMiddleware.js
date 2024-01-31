const Professional = require("../models/professional");

const validatedProfessional = async (req, res, next) => {
  try {
    const { professional_id } = req.params;
    const professional = await Professional.findByPk(professional_id);
    if (!professional) {
      return res.status(400).json({
        message: "Professional not found",
      });
    }
    next();
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const validatedInsertProfessional = async (req, res, next) => {
  try {
    const { name, type_service, work_schedule } = req.body;
    if (!name || !type_service || !work_schedule) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }
    const professional = await Professional.findAll({
      where: {
        name,
      },
    });
    if (professional.length > 0) {
      return res.status(400).json({
        message: "Professional already exists",
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
  validatedProfessional,
  validatedInsertProfessional,
};
