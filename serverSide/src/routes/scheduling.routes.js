const express = require('express');
const router = express.Router();
const Scheduling = require('../models/Scheduling');

router.post('/', async (req, res) => {
  try {
    const { id_people_client, id_people_professional, date, time } = req.body
    const scheduling = await Scheduling.create(id_people_client, id_people_professional, date, time);

    res.json({ scheduling });
  } catch (err) {
    res.status(500).json({ error: true, message: err.message });
  }
});



module.exports = router;
