const Professional = require("../models/professional");

const FindProfessional = async (req, res) => {
  try {
    const { professional_id } = req.params;
    const professional = await Professional.findAll({
      where: {
        professional_id,
      },
    });
    res.json({ professional });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const InsertProfessional = async (req, res) => {
  try {
    const { name, type_service, work_schedule } = req.body;
    const professional = await Professional.create({
      name,
      type_service,
      work_schedule,
    });
    res.json({ professional });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  FindProfessional,
  InsertProfessional,
};
