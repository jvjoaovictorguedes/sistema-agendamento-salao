const PeopleType = require("../models/peopleType");

const ValidatedPeopleType = async (req, res, next) => {
  const { id_people_type } = req.params;
  const findPeopleType = await PeopleType.findAll({
    where: {
      id_people_type,
    },
  });
  if (findPeopleType.length == 0) {
    return res
      .status(404)
      .json({ error: true, message: "People Type not Found!" });
  }
  next();
};

module.exports = {
  ValidatedPeopleType,
};
