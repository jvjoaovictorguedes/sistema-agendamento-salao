const Sequelize  = require('sequelize');
const sequelize = require('../db');
const People = require('./people')

const Contact = sequelize.define('contact', {
  id_contact: {
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
  contact_type: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  contact_value: {
    type: Sequelize.STRING,
    allowNull: false,
  }
})

Contact.belongsTo(People, { foreignKey: 'id_people' });
People.hasMany(Contact, { foreignKey: 'id_people' });

module.exports = Contact;
