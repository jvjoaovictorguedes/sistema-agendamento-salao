const express = require('express');
const app = express();
const routes = express.Router();
require('dotenv').config()
const port = process.env.PORT

app.use(routes)

app.use('/people', require('./src/routes/people.routes'));
app.use('/peopleType', require('./src/routes/peopleType.routes'));
app.use('/address', require('./src/routes/address.routes'));
app.use('/procedure', require('./src/routes/procedure.routes'));
app.use('/service', require('./src/routes/service.routes'));
app.use('/procedureSchedule', require('./src/routes/procedureSchedule.routes'));
app.use('/scheduling', require('./src/routes/scheduling.routes'));
app.use('/procedureValue', require('./src/routes/procedureValue.routes'));

app.listen(port, () => {
  console.log(`Servidor escutando a porta: ${port}`)
})

module.exports = app;
