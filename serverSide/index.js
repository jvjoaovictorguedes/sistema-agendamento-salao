const Init = async () => {
  const sequelize = require("./db");
  const People = require("./src/models/people");
  const Contact = require("./src/models/contact");
  const PeopleType = require("./src/models/peopleType");
  const Classification = require("./src/models/Classification");
  const Address = require("./src/models/address");
  const ServiceValue = require("./src/models/serviceValue");
  const Scheduling = require("./src/models/scheduling");
  const ServiceSchedule = require("./src/models/serviceSchedule");
  await sequelize.sync({ force: true });
};
Init();
