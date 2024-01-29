const express = require("express");
const router = express.Router();
const schedulingController = require("../controllers/schedulingController");
const schedulingMiddleware = require("../middlewares/schedulingMiddleware");

router.post(
  "/",
  schedulingMiddleware.ValidatedScheduling,
  schedulingController.InsertScheduling
);

router.get("/:id_scheduling", schedulingController.FindScheduling);

module.exports = router;
