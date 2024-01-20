const Sequelize = require('sequelize');
const sequelize = require('../../db');
const PeopleType = require('./peopleType');

const People = sequelize.define('people', {
  id_people: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  id_people_type: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: PeopleType,
      key: 'id_people_type'
    }
  },
  cpf: {
    type: Sequelize.STRING,
    allowNull: false,
    require: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    require: true,
  },
  birth_data: {
    type: Sequelize.DATE,
    allowNull: false,
    require: true,
  },
  status: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    require: true,
    defaultValue: true,
  }
})

People.belongsTo(PeopleType, { foreignKey: 'id_people_type' });
PeopleType.hasMany(People, { foreignKey: 'id_people_type' });

module.exports = People;
