const Sequelize  = require('sequelize');
const sequelize = require('../../db');

const Service = sequelize.define('service', {
  id_service: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  service_name: {
    type: Sequelize.STRING,
    allowNull: false,
  }
})

module.exports = Service;