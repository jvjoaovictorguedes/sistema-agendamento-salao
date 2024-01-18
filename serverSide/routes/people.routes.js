const express = require('express');
const router = express.Router();
const People = require('../models/people');


router.post('/', (req, res) => {
  const people = new People(req.body).save();
  
})
