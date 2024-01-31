const Sequelize = require("sequelize");
const sequelize = require("../../db");

const User = sequelize.define("user", {
  user_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  password_hash: {
    type: Sequelize.STRING,
    allowNull: false,
    require: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    require: true,
  },
  role: {
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
});

module.exports = User;
