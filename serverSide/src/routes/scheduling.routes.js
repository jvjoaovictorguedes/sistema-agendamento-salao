const express = require('express');
const router = express.Router();
const Scheduling = require('../models/Scheduling');
const People = require('../models/people');
const PeopleType = require('../models/peopleType');

router.post('/', async (req, res) => {
  try {
    const { id_people, id_people_type } = req.body;

    const people = await People.findByPk(id_people);
    const name = await PeopleType.findByPk(id_people_type);

    const type = (id_people_type === 1) ? 'professional' : 'client';

    if (!people || !name) {
      return res.status(404).json({ error: true, message: 'Profissional ou cliente não encontrado.' });
    }
    const scheduling = await Scheduling.create({
      ...req.body,
      type: type,
    });

    res.json({ scheduling });
  } catch (err) {
    res.status(500).json({ error: true, message: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const schedules = await Scheduling.findAll({
      include: [
        {
          model: People,
          as: 'professional',
          attributes: ['id_people', 'name'],
          include: [{ model: PeopleType, as: 'type', attributes: ['people_type'] }],
          where: { '$type.people_type$': 'professional' },
        },
        {
          model: People,
          as: 'client',
          attributes: ['id_people', 'name'],
          include: [{ model: PeopleType, as: 'type', attributes: ['people_type'] }],
          where: { '$type.people_type$': 'client' },
        },
      ],
    });

    res.json({ schedules });
  } catch (err) {
    res.status(500).json({ error: true, message: err.message });
  }
});


module.exports = router;
