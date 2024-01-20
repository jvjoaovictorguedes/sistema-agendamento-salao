const Sequelize  = require('sequelize');
const sequelize = require('../../db');

const Classification = sequelize.define('classification', {
  id_classification: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  classification_name: {
    type: Sequelize.STRING,
    allowNull: false,
  }
})

module.exports = Classification;