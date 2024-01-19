const express = require('express');
const router = express.Router();
const People = require('../models/people');


router.post('/', async (req, res) => {
  try {
    const { id_people_type } = req.body;

    if (id_people_type !== 1 && id_people_type !== 2) {
      return res.status(400).json({ error: true, message: 'Valor inválido para id_people_type' });
    }

    const people = await People.create(req.body);

    res.json({ people });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

router.get('/:id_people', async (req, res) => {
  try {
    const { id_people } = req.params;
    const people = await People.findAll({  
      id_people,
      status: true,
    })
    res.json({ people })
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

module.exports = router;
