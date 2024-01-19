const Sequelize  = require('sequelize');
const sequelize = require('../../db');
const Procedure = require('./procedure');
const Scheduling = require('./Scheduling')

const ProcedureSchedule = sequelize.define('procedureSchedule', {
  id_procedure_schedule: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  id_scheduling: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Scheduling,
      key: 'id_scheduling'
    }
  },
  id_procedure: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Procedure,
      key: 'id_procedure'
    }
  }
})

Scheduling.hasMany(ProcedureSchedule, { foreignKey: 'id_scheduling' });
ProcedureSchedule.belongsTo(Scheduling, { foreignKey: 'id_scheduling' });
Procedure.hasMany(ProcedureSchedule, { foreignKey: 'id_procedure' });
ProcedureSchedule.belongsTo(Procedure, {foreignKey: 'id_procedure'} )



module.exports = ProcedureSchedule;