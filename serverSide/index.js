const Init = async () => {
  const sequelize = require('./db');
  const People = require('./src/models/people');
  const Contact = require('./src/models/contact');
  const PeopleType = require('./src/models/peopleType')
  const Procedure = require('./src/models/procedure')
  const Address = require('./src/models/address')
  const ProcedureSchedule = require('./src/models/procedureSchedule')
  const ProcedureValue = require('./src/models/procedureValue')
  const Scheduling = require('./src/models/Scheduling');
  await sequelize.sync({ force: true });
}
Init();

