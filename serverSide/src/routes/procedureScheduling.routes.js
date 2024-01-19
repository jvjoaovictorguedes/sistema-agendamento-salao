const express = require('express');
const router = express.Router();
const ProcedureScheduling = require('../models/procedureSchedule');
const Procedure = require('../models/procedure');

router.post('/procedure=:id_procedure/', async (req, res) => {
  try{
    const { id_procedure } = req.params
    const existingProcedure = await Procedure.findByPk(id_procedure)
    if (!existingProcedure) {
      return res.status(404).json({ error: true, message: 'Procedure not found.' });
    }
    const procedureValue = await ProcedureValue.create({
      ...req.body,
      id_procedure,
    });
    res.json({ procedureValue });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
})

router.get('/:id_procedure', async (req, res) => {
  try {
    const { id_procedure } = req.params;
    const existingProcedure = await Procedure.findByPk(id_procedure);
    
    if (!existingProcedure) {
      return res.status(404).json({ error: true, message: 'Procedure not found.' });
    }
    const procedureValue = await ProcedureValue.findAll({
      where: {
        id_procedure,
      },
    });
    res.json({ procedureValue });
  } catch (err) {
    res.status(500).json({ error: true, message: err.message });
  }
});

module.exports = router