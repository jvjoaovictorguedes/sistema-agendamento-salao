  const express = require('express');
  const app = express();
  const routes = express.Router();
  require('dotenv').config()
  const port = process.env.PORT
  const morgan =  require('morgan');
  const sequelize = require('./db');
  const cors = require('cors')

  app.use(morgan('dev'))
  app.use(express.json())
  app.use(routes)
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());

  try {
    sequelize.authenticate();
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  } catch (error) {
    console.error('Não foi possível conectar ao banco de dados:', error);
  }
  
  app.use('/people', require('./src/routes/people.routes'));
  app.use('/peopleType', require('./src/routes/peopleType.routes'));
  app.use('/address', require('./src/routes/address.routes'));
  app.use('/contact', require('./src/routes/contact.routes'));
  app.use('/classification', require('./src/routes/classification.routes'));
  app.use('/service', require('./src/routes/service.routes'));
  app.use('/serviceValue', require('./src/routes/serviceValue.routes'));
  app.use('/scheduling', require('./src/routes/scheduling.routes'));
  app.use('/serviceSchedule', require('./src/routes/serviceSchedule.routes'));

  app.listen(port, () => {
    console.log(`Servidor escutando a porta: ${port}`)
  })

  module.exports = app;
