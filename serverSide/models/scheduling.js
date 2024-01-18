const Sequelize  = require('sequelize');
const sequelize = require('../db');
const People = require('./people')

const Scheduling = sequelize.define('scheduling', {
  id_scheduling: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  id_people_client: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: People,
      key: 'id_people'
    }
  },
  id_people_professional: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: People,
      key: 'id_people'
    }
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  time: {
    type: Sequelize.TIME,
    allowNull: false,
  },
  dat_insert: {
    type: Sequelize.DATE,
    allowNull: false,
  }
})

People.hasMany(Scheduling, { foreignKey: 'id_people'});
Scheduling.belongsTo(People, { foreignKey: 'id_people'});



module.exports = Scheduling;
