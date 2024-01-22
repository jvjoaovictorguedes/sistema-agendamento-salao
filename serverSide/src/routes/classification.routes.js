const express = require("express");
const router = express.Router();
const classificationController = require("../controllers/classificationController");
const classificationMiddleware = require('../middlewares/classificationMiddleware')

router.post("/", classificationController.InsertClassification);

router.get("/:id_classification", classificationMiddleware.ValidatedClassification, classificationController.FindAllClassification);

router.get("/", classificationController.FindClassification);

module.exports = router;
