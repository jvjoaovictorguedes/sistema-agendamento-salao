const express = require('express');
const router = express.Router();
const PeopleType = require('../models/peopleType');

router.post('/', async (req, res) => {
  try{
    const peopleType = await PeopleType.create(req.body);
    res.json({ peopleType });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
})

router.get('/', async (req, res) => {
  try {
    const peopleType = await PeopleType.findAll()
    res.json({ peopleType })
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
})


module.exports = router;
