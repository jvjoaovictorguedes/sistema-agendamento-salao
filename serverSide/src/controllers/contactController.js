const Contact = require("../models/contact");

const InsertContact = async (req, res) => {
  try {
    const { id_people, contact_type, contact_value } = req.body;
    const contact = await Contact.create({ id_people, contact_type, contact_value});
    res.json({ contact });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
};

const FindContact = async (req, res) => {
  try {
    const { id_people } = req.params;

    const contact = await Contact.findAll({
      where: {
        id_people: id_people,
      },
    });
    res.json({ contact });
  } catch (err) {
    res.status(500).json({ error: true, message: err.message });
  }
};

module.exports = {
  InsertContact,
  FindContact,
};
