const Sequelize = require("sequelize");
const sequelize = require("../../db");
const Classification = require("./Classification");

const Service = sequelize.define("service", {
  id_service: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  id_classification: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Classification,
      key: "id_classification",
    },
  },
  service_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  service_duration: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Classification.belongsTo(Service, { foreignKey: "id_classification" });
Service.hasMany(Classification, { foreignKey: "id_classification" });

module.exports = Service;
