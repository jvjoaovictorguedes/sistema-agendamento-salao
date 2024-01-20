const Sequelize = require("sequelize");
const sequelize = require("../../db");
const Service = require("./service");

const ServiceValue = sequelize.define("serviceValue", {
  id_service_value: {
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
      key: "id_service",
    },
  },
  value: {
    type: Sequelize.DECIMAL,
    allowNull: false,
  },
  dat_start: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  dat_final: {
    type: Sequelize.DATE,
    allowNull: true,
  },
});

ServiceValue.belongsTo(Service, { foreignKey: "id_service" });
Service.hasMany(ServiceValue, { foreignKey: "id_service" });

module.exports = ServiceValue;
