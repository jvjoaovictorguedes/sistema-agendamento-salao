const Contact = require("../models/contact");
const People = require("../models/people");

const validatedPeople = async (req, res, next) => {
  const { id_people } = req.params;
  const existingPeople = await People.findByPk(id_people);
  if (existingPeople == null) {
    return res.status(404).json({ error: true, message: "People not found." });
  }
  const existingContact = await Contact.findAll({
    where: {
      id_people
    },
  });
  console.log(existingContact)
  if (existingContact.length == 0) {
    return res.status(400).json({ error: true, message: "Contact not found!" });
  }
  next()
};

const validatedContact = async (req, res, next) => {
  const { id_people, contact_value } = req.body;
  const existingContact = await Contact.findAll({
    where: {
      contact_value,
      id_people
    },
  });
  const existingPeople = await People.findByPk(id_people);
  if (!existingPeople) {
    return res.status(404).json({ error: true, message: "People not found." });
  }
  console.log(existingContact.length);
  if (existingContact.length > 0) {
    return res.status(400).json({ error: true, message: "Existing contact." });
  }
  next()
};

module.exports = {
  validatedPeople,
  validatedContact,
};
