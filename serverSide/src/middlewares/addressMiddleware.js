const Address = require("../models/address");
const People = require("../models/people");

const validatedPeople = async (req, res, next) => {
  const { id_people } = req.params;
  const existingPeople = await People.findByPk(id_people);
  if (!existingPeople) {
    return res.status(404).json({ error: true, message: "People not found." });
  }
  next();
};

const validatedAddress = async (req, res, next) => {
  const { id_people, public_place } = req.body;
  const existingAddress = await Address.findAll({
    where: {
      public_place,
      id_people,
    },
  });
  const existingPeople = await People.findByPk(id_people);
  if (!existingPeople) {
    return res.status(404).json({ error: true, message: "People not found." });
  }
  console.log(existingAddress.length);
  if (existingAddress.length > 0) {
    return res.status(400).json({ error: true, message: "Existing address." });
  }
  next();
};

module.exports = {
  validatedPeople,
  validatedAddress,
};
