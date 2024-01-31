const express = require("express");
const router = express.Router();
const professionalController = require("../controllers/professionalController");
const professionalMiddleware = require("../middlewares/professionalMiddleware");

router.post(
  "/",
  professionalMiddleware.validatedInsertProfessional,
  professionalController.InsertProfessional
);

router.get(
  "/:professional_id",
  professionalMiddleware.validatedProfessional,
  professionalController.FindProfessional
);

module.exports = router;
