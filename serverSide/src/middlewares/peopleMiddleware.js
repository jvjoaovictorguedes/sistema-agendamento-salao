const People = require("../models/people");

const validatedPeopleType = async (req, res, next) => {
  const { id_people_type, cpf } = req.body;
  if (id_people_type !== 1 && id_people_type !== 2) {
    return res
      .status(404)
      .json({ error: true, message: "Not found client or professional" });
  }
  const findCpf = await People.findAll({
    where: {
      cpf,
    },
  });
  console.log(findCpf);
  if (findCpf.length > 0) {
    return res.status(400).json({ error: true, message: "Existing CPF" });
  }
  next();
};

const validatedPeople = async (req, res, next) => {
  const { id_people } = req.params;
  const findPeople = await People.findAll({
    where: {
      id_people,
    },
  });
  if (findPeople.length == 0) {
    return res.status(404).json({ error: true, message: "People not found!" });
  }
  console.log(findPeople);
  next();
};

module.exports = {
  validatedPeopleType,
  validatedPeople,
};
