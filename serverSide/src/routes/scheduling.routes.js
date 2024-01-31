const express = require("express");
const router = express.Router();
const schedulingController = require("../controllers/schedulingController");
const schedulingMiddleware = require("../middlewares/schedulingMiddleware");

router.post(
  "/",
  schedulingMiddleware.validatedInsertScheduling,
  schedulingController.InsertScheduling
);

router.get(
  "/:scheduling_id",
  schedulingMiddleware.validatedScheduling,
  schedulingController.FindScheduling
);

router.get(
  "/",
  schedulingMiddleware.validatedAllScheduling,
  schedulingController.FindAllScheduling
);

module.exports = router;
