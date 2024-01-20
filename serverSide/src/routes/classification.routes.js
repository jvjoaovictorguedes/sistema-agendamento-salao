const express = require('express');
const router = express.Router();
const Classification = require('../models/Classification');


router.post('/', async (req, res) => {
  try {
    const classification = await Classification.create(req.body);

    res.json({ classification });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const classification = await Classification.findAll()
    res.json({ classification })
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

module.exports = router;
