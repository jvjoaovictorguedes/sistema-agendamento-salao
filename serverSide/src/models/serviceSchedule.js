const Sequelize = require("sequelize");
const sequelize = require("../../db");
const Service = require("./service");
const Scheduling = require("./scheduling");

const ServiceSchedule = sequelize.define("serviceSchedule", {
  id_service_schedule: {
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
      key: "id_scheduling",
    },
  },
  id_service: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Service,
      key: "id_service",
    },
  },
});

Scheduling.hasMany(ServiceSchedule, { foreignKey: "id_scheduling" });
ServiceSchedule.belongsTo(Scheduling, { foreignKey: "id_scheduling" });
Service.hasMany(ServiceSchedule, { foreignKey: "id_service" });
ServiceSchedule.belongsTo(Service, { foreignKey: "id_service" });

module.exports = ServiceSchedule;
