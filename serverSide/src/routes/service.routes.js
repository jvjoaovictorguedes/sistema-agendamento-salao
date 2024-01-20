const express = require('express');
const router = express.Router();
const Service = require('../models/service');

router.post('/', async (req, res) => {
  try{
    const { id_classification, service_name } = req.body
    // const existingService = await Service.findByPk(id_service)
    // if (!existingService) {
    //   return res.status(404).json({ error: true, message: 'Service not found.' });
    // }
    const service = await Service.create({id_classification, service_name});
    res.json({ service });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
})

router.get('/:id_classification', async (req, res) => {
  try {
    const { id_classification } = req.params;
    // const existingService = await Service.findByPk(id_service);
    
    // // if (!existingService) {
    // //   return res.status(404).json({ error: true, message: 'Service not found.' });
    // // }
    const service = await Service.findAll({
      where: {
        id_classification,
      },
    });
    res.json({ service });
  } catch (err) {
    res.status(500).json({ error: true, message: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const service = await Service.findAll();
    res.json({ service });
  } catch (err) {
    res.status(500).json({ error: true, message: err.message });
  }
});

module.exports = router
