const express = require("express");
const router = express.Router();
const contactController = require('../controllers/contactController')
const contactMiddleware = require('../middlewares/contactMiddleware')

router.post("/", contactMiddleware.validatedContact, contactController.InsertContact);

router.get("/:id_people", contactMiddleware.validatedPeople, contactController.FindContact);

module.exports = router;
