const Classification = require("../models/Classification");

const ValidatedClassification = async (req, res, next) => {
  const { id_classification } = req.params;
  const findClassification = await Classification.findAll({
    where: {
      id_classification,
    },
  });
  if (findClassification.length == 0) {
    return res
      .status(404)
      .json({ error: true, message: "Classification not Found!" });
  }
  next();
};

module.exports = {
  ValidatedClassification,
};
