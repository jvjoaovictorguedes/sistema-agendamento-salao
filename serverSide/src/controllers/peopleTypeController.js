const PeopleType = require("../models/peopleType");

const InsertPeopleType = async (req, res) => {
  try {
    const { people_type } = req.body;
    const peopleType = await PeopleType.create({ people_type });
    res.json({ peopleType });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
};

const FindPeopleType = async (req, res) => {
  try {
    const { id_people_type } = req.params;
    const peopleType = await PeopleType.findAll({
      where: {
        id_people_type,
      }
    });
    res.json({ peopleType });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
};

const FindAllPeopleType = async (req, res) => {
  try {
    const peopleType = await PeopleType.findAll();
    res.json({ peopleType });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
};

module.exports = {
  InsertPeopleType,
  FindAllPeopleType,
  FindPeopleType,
};
