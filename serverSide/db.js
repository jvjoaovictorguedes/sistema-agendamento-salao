const Sequelize = require("sequelize");
const sequelize = new Sequelize("db_studio_beauty", "postgres", "admin", {
  dialect: "postgres",
  host: "localhost",
  port: 5432,
});

module.exports = sequelize;
