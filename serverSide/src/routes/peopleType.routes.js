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

router.get('/:id_people_type', async (req, res) => {
  try {
    const { id_people_type } = req.params
    const peopleType = await PeopleType.findAll({
      where: {
        id_people_type
      }
    })
    res.json({ peopleType })
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
})


module.exports = router;
