const Sequelize  = require('sequelize');
const sequelize = require('../db');
const Service = require('./service')

const Procedure = sequelize.define('procedure', {
  id_procedure: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  id_service: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Service,
      key: 'id_service',
    }
  },
  procedure_name: {
    type: Sequelize.STRING,
    allowNull: false,
  }
})


Procedure.belongsTo(Service, { foreignKey: 'id_people' })
Service.hasMany(Procedure, { foreignKey: 'id_people' })

module.exports = Procedure;