const Sequelize = require("sequelize");
const sequelize = require("../../db");
const Client = require("./clients");
const Service = require("./service");
const Professional = require("./professional");

const Scheduling = sequelize.define("scheduling", {
  scheduling_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  client_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Client,
      key: "client_id",
    },
  },
  professional_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Professional,
      key: "professional_id",
    },
  },
  service_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Service,
      key: "service_id",
    },
  },
  dat_hours_init: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  dat_hours_final: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: "agendado",
  },
});

// People.hasMany(Scheduling, { foreignKey: "id_people_client" });
// Scheduling.belongsTo(People, { foreignKey: "id_people_professional" });

module.exports = Scheduling;
