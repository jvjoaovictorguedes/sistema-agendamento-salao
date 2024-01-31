const Client = require("../models/clients");

const validatedClient = async (req, __res, next) => {
  try {
    const { client_id } = req.params;
    const client = await Client.findByPk(client_id);
    if (!client) {
      return res.status(400).json({
        message: "Client not found",
      });
    }
    next();
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const validatedInsertClient = async (req, res, next) => {
  try {
    const { name, email, phone, date_of_birth } = req.body;
    const client = await Client.findAll({
      where: {
        name,
      },
    });
    console.log(client);
    if (client.length > 0) {
      return res.status(400).json({
        message: "Client already exists",
      });
    }
    if (!name || !email || !phone || !date_of_birth) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }
    next();
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  validatedClient,
  validatedInsertClient,
};
