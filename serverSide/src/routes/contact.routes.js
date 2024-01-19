const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');
const People = require('../models/people');

router.post('/:id_people', async (req, res) => {
  try{
    const { id_people } = req.params
    const existingPeople = await People.findByPk(id_people)
    if (!existingPeople) {
      return res.status(404).json({ error: true, message: 'People not found.' });
    }
    const contact = await Contact.create({
      ...req.body,
      id_people: id_people,
    });
    res.json({ contact });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
})

router.get('/:id_people', async (req, res) => {
  try {
    const { id_people } = req.params;
    const existingPeople = await People.findByPk(id_people);
    
    if (!existingPeople) {
      return res.status(404).json({ error: true, message: 'People not found.' });
    }
    const contact = await Contact.findAll({
      where: {
        id_people: id_people,
      },
    });
    res.json({ contact });
  } catch (err) {
    res.status(500).json({ error: true, message: err.message });
  }
});

module.exports = router