const Sequelize = require("sequelize");
const sequelize = require("../../db");
const Scheduling = require("./scheduling");

const SchedulingHistory = sequelize.define("schedulingHistory", {
  history_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  scheduling_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    require: true,
    references: {
      model: Scheduling,
      key: "scheduling_id",
    },
  },
  date_hours_modification: {
    type: Sequelize.STRING,
    allowNull: false,
    require: true,
  },
  action: {
    type: Sequelize.STRING,
    allowNull: false,
    require: true,
  },
  reason: {
    type: Sequelize.STRING,
    allowNull: false,
    require: true,
  },
});

SchedulingHistory.belongsTo(Scheduling, { foreignKey: "scheduling_id" });
Scheduling.hasMany(SchedulingHistory, { foreignKey: "scheduling_id" });

module.exports = SchedulingHistory;
