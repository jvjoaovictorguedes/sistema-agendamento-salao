const Sequelize = require('sequelize');
const sequelize = new Sequelize('db_beauty_studio', 'postgres', 'admin', {
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
})

module.exports = sequelize;