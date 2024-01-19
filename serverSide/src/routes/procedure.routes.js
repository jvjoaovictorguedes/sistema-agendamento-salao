const express = require('express');
const router = express.Router();
const Procedure = require('../models/procedure');
const Service = require('../models/service');

router.post('/:id_service', async (req, res) => {
  try{
    const { id_service } = req.params
    const existingService = await Service.findByPk(id_service)
    if (!existingService) {
      return res.status(404).json({ error: true, message: 'Service not found.' });
    }
    const procedure = await Procedure.create({
      ...req.body,
      id_service,
    });
    res.json({ procedure });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
})

router.get('/:id_service', async (req, res) => {
  try {
    const { id_service } = req.params;
    const existingService = await Service.findByPk(id_service);
    
    if (!existingService) {
      return res.status(404).json({ error: true, message: 'Service not found.' });
    }
    const procedure = await Procedure.findAll({
      where: {
        id_service,
      },
    });
    res.json({ procedure });
  } catch (err) {
    res.status(500).json({ error: true, message: err.message });
  }
});

module.exports = router