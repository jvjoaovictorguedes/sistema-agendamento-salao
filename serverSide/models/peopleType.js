const { Sequelize } = require('sequelize');
const sequelize = require('../db');

const PeopleType = sequelize.define('peopleType', {
  id_people_type: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  people_type: {
    type: Sequelize.STRING,
    allowNull: false,
  }
})


module.exports = PeopleType;
