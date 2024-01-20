const People = require("../models/people");


const validatedPeople = async (req, res) => {
  const { id_people } = req.body
  const existingPeople = await People.findByPk(id_people);
  if (!existingPeople) {
    return res.status(404).json({ error: true, message: "People not found." });
  }
};




module.exports = {
  validatedPeople,
};
