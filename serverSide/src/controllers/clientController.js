const Client = require("../models/clients");

const FindClient = async (req, res) => {
  try {
    const { client_id } = req.params;
    const client = await Client.findByPk(client_id);
    res.json({ client });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const InsertClient = async (req, res) => {
  try {
    const { name, email, phone, date_of_birth } = req.body;
    const client = await Client.create({ name, email, phone, date_of_birth });
    res.json({ client });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  FindClient,
  InsertClient,
};
