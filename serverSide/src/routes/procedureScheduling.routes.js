const express = require('express');
const router = express.Router();
const Procedure = require('../models/procedure');
const ProcedureScheduling = require('../models/procedureSchedule');
const Scheduling = require('../models/Scheduling');
const People = require('../models/people');

router.post('/', async (req, res) => {
  try{
    const { id_procedure, id_scheduling } = req.body
    const existingProcedure = await Procedure.findByPk(id_procedure)
    const existingScheduling = await Scheduling.findByPk(id_scheduling)
    if (!existingProcedure || !existingScheduling) {
      return res.status(404).json({ error: true, message: 'Procedure not found.' });
    }
    console.log(id_procedure, id_scheduling)
    const procedureValue = await ProcedureScheduling.build({
      id_procedure,
      id_scheduling
    });
    procedureValue.save();
    res.json({ procedureValue });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
})

router.get('/:id_people_client', async (req, res) => {
  try {
    const { id_people_client } = req.params
    const scheduling = await Scheduling.findAll({
      where: {
        id_people_client,
      }
    })
    const { id_people_professional } = scheduling[0]
    const people_client = await People.findAll({
      where: {
        id_people: id_people_client
      }
    })
    const people_professional = await People.findAll({
      where: {
        id_people: id_people_professional
      }
    })
    const procedureSchedule = await ProcedureScheduling.findAll();
    res.json({ people_client, people_professional, procedureSchedule, scheduling });
  } catch (err) {
    res.status(500).json({ error: true, message: err.message });
  }
});

module.exports = router
