const Sequelize = require("sequelize");
const sequelize = require("../../db");

const Professional = sequelize.define("professional", {
  professional_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  type_service: {
    type: Sequelize.STRING,
    allowNull: false,
    require: true,
  },
  work_schedule: {
    type: Sequelize.STRING,
    allowNull: false,
    require: true,
  },
  status: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    require: true,
    defaultValue: true,
  },
});

// People.belongsTo(PeopleType, { foreignKey: 'id_people_type' });
// PeopleType.hasMany(People, { foreignKey: 'id_people_type' });

module.exports = Professional;
