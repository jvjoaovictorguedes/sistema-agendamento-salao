const People = require("../models/people");

const InsertPeople = async (req, res) => {
  try {
    const { id_people_type, cpf, name, birth_data, status } = req.body;

    const people = await People.create({
      id_people_type,
      cpf,
      name,
      birth_data,
      status,
    });

    res.json({ people });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
};

const FindPeople = async (req, res) => {
  try {
    const { id_people } = req.params;
    const people = await People.findAll({
      where: {
        id_people,
      },
    });
    res.json({ people });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
};

const FindAllPeople = async (req, res) => {
  try {
    const people = await People.findAll();
    res.json({ people });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
};

module.exports = {
  InsertPeople,
  FindPeople,
  FindAllPeople,
};
