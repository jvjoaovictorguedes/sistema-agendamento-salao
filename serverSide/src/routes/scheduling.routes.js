const express = require('express');
const router = express.Router();
const Scheduling = require('../models/scheduling');

router.post('/', async (req, res) => {
  try {
    const { id_people_client, id_people_professional, date, time, dat_insert } = req.body
    const scheduling = await Scheduling.create({
      id_people_client, 
      dat_insert,
      id_people_professional, 
      date,
      time,
    });
    res.json({ scheduling });
  } catch (err) {
    res.status(500).json({ error: true, message: err.message });
  }
});

router.get('/client/:id_people_client', async (req, res) => {
  try {
    const { id_people_client } = req.params;
    const scheduling = await Scheduling.findAll({
      where: {
        id_people_client,
      }
    });
    res.json({ scheduling });
    
  } catch (err) {
    res.status(500).json({ error: true, message: err.message });
  }
})


router.get('/professional/:id_people_professional', async (req, res) => {
  try {
    const { id_people_professional } = req.params;
    const scheduling = await Scheduling.findAll({
      where: {
        id_people_professional,
      }
    });
    res.json({ scheduling });
    
  } catch (err) {
    res.status(500).json({ error: true, message: err.message });
  }
})


module.exports = router;
