const Init = async () => {
  const sequelize = require('./db');
  const People = require('./models/people');
  const Contact = require('./models/contact');
  const PeopleType = require('./models/peopleType')
  const Procedure = require('./models/procedure')
  const Address = require('./models/address')
  const ProcedureSchedule = require('./models/procedureSchedule')
  const ProcedureValue = require('./models/procedureValue')
  const Scheduling = require('./models/Scheduling')
  await sequelize.sync({ force: true });
}
Init();

