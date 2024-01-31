const Sequelize = require("sequelize");
const sequelize = require("../../db");

const Client = sequelize.define("client", {
  client_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    require: true,
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
    require: true,
  },
  status: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    require: true,
    defaultValue: true,
  },
  date_of_birth: {
    type: Sequelize.DATE,
    allowNull: false,
    require: true,
  },
});

module.exports = Client;
