const Init = async () => {
  const sequelize = require("./db");
  const Client = require("./src/models/clients");
  const Service = require("./src/models/service");
  const Scheduling = require("./src/models/scheduling");
  const User = require("./src/models/user");
  const Professional = require("./src/models/professional");
  const SchedulingHistory = require("./src/models/schedulingHistory");
  await sequelize.sync({ force: true });
};
Init();
