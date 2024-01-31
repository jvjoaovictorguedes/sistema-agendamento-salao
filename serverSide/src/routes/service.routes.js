const express = require("express");
const router = express.Router();
const serviceMiddleware = require("../middlewares/serviceMiddleware");
const serviceController = require("../controllers/serviceController");

router.post(
  "/",
  serviceMiddleware.validatedInsertService,
  serviceController.InsertService
);

router.get(
  "/:service_id",
  serviceMiddleware.validatedService,
  serviceController.FindService
);

module.exports = router;
