const express = require('express');
const app = express();
const routes = express.Router();
require('dotenv').config()
const port = process.env.PORT

app.use(routes)

app.listen(port, () => {
  console.log(`Servidor escutando a porta: ${port}`)
})

module.exports = app;