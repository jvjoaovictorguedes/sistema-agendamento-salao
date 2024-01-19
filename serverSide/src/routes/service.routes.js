const express = require('express');
const router = express.Router();
const Service = require('../models/service');


router.post('/', async (req, res) => {
  try {
    const service = await Service.create(req.body);

    res.json({ service });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

router.get('/:id_service', async (req, res) => {
  try {
    const { id_service } = req.params;
    const service = await Service.findAll({  
      where: {
        id_service,
      }
    })
    res.json({ service })
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

module.exports = router;
