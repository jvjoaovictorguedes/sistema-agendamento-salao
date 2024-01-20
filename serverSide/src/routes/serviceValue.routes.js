const express = require("express");
const router = express.Router();
const ServiceValue = require("../models/serviceValue");

router.post("/", async (req, res) => {
  try {
    const { id_service, value, dat_start } = req.body;
    // const existingProcedure = await Procedure.findByPk(id_procedure)
    // if (!existingProcedure) {
    //   return res.status(404).json({ error: true, message: 'Procedure not found.' });
    // }
    const serviceValue = await ServiceValue.create({
      id_service,
      value,
      dat_start,
    });
    res.json({ serviceValue });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

router.get("/:id_service", async (req, res) => {
  try {
    const { id_service } = req.params;
    // const existingProcedure = await Procedure.findByPk(id_procedure);

    // if (!existingProcedure) {
    //   return res.status(404).json({ error: true, message: 'Procedure not found.' });
    // }
    const serviceValue = await ServiceValue.findAll({
      where: {
        id_service,
      },
    });
    res.json({ serviceValue });
  } catch (err) {
    res.status(500).json({ error: true, message: err.message });
  }
});


router.get("/", async (req, res) => {
  try {
    const serviceValue = await ServiceValue.findAll();
    res.json({ serviceValue });
  } catch (err) {
    res.status(500).json({ error: true, message: err.message });
  }
});

module.exports = router;
