const express = require('express');
const router = express.Router();
const People = require('../models/people');


router.post('/', (req, res) => {
  try{
    const people = new People(req.body).save();
    res.json({ people });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
})

module.exports = router;
