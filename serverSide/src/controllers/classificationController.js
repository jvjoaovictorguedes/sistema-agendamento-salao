const Classification = require("../models/Classification");

const InsertClassification = async (req, res) => {
  try {
    const classification = await Classification.create(req.body);

    res.json({ classification });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
};

const FindClassification = async (req, res) => {
  try {
    const classification = await Classification.findAll();
    res.json({ classification });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
};

const FindAllClassification = async (req, res) => {
  try {
    const { id_classification } = req.params;
    const findClassification = await Classification.findAll({
      where: {
        id_classification,
      },
    });
    res.json({ findClassification });
  } catch (error) {
    res.json({ error: true, message: err.message });
  }
};

module.exports = {
  InsertClassification,
  FindClassification,
  FindAllClassification,
};
