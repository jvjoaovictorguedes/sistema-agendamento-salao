const Sequelize  = require('sequelize');
const sequelize = require('../../db');
const People = require('./people')

const Address = sequelize.define('address', {
  id_address: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  id_people: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: People,
      key: 'id_people'
    }
  },
  address_type: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  public_place: {
    type: Sequelize.STRING,
    allowNull: false
  },
  number_address: {
    type: Sequelize.DECIMAL,
    allowNull: true
  },
  complement: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  neighborhood: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  zip_code: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false,
  }
})

Address.belongsTo(People, { foreignKey: 'id_people' });
People.hasMany(Address, { foreignKey: 'id_people' });

module.exports = Address;