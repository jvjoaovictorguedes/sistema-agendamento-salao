const express = require("express");
const router = express.Router();
const schedulingController = require('../controllers/schedulingController')
const schedulingMiddleware = require('../middlewares/schedulingMiddleware')

router.post("/", schedulingMiddleware.ValidatedScheduling, schedulingController.InsertScheduling);

router.get("/client/:id_people_client",schedulingMiddleware.ValidatedClientScheduling, schedulingController.FindSchedulingClient);

router.get("/professional/:id_people_professional", schedulingMiddleware.ValidatedProfessionalScheduling,  schedulingController.FindSchedulingProfessional);

module.exports = router;