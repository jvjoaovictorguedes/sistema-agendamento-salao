const Sequelize  = require('sequelize');
const sequelize = require('../db');
const Procedure = require('./procedure')

const ProcedureValue = sequelize.define('procedureValue', {
  id_procedure_value: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  id_procedure: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Procedure,
      key: 'id_procedure'
    }
  },
  value: {
    type: Sequelize.DECIMAL,
    allowNull: false,
  },
  dat_start: {
    type: Sequelize.DATE,
    allowNull: false
  },
  dat_final: {
    type: Sequelize.DATE,
    allowNull: false,
  }
})

ProcedureValue.belongsTo(Procedure, { foreignKey: 'id_procedure'});
Procedure.hasMany(ProcedureValue, { foreignKey: 'id_procedure' });


module.exports = ProcedureValue;