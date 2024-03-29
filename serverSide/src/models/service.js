const Sequelize = require("sequelize");
const sequelize = require("../../db");

const Service = sequelize.define("service", {
  service_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name_service: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  estimated_duration: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

// Classification.belongsTo(Service, { foreignKey: "id_classification" });
// Service.hasMany(Classification, { foreignKey: "id_classification" });

module.exports = Service;
