const express = require('express');
const router = express.Router();
const People = require('../models/people');

router.post('/', async (req, res) => {
  
})

router.get('/peopleType/:id_people', async (req, res) => {
  try {
    const { id_people } = req.params;
    const People = await People.find({
      id_people
    }).select('id_titulo');
    res.json({
      People: People.map(s => ({ label: s.titulo, value: s._id }))
    })
    
  } catch (err) {
    res.json({ error: true, message: err.message })
  }
})


module.exports = router;
