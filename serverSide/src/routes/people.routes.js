const express = require("express");
const router = express.Router();
const peopleController = require("../controllers/peopleController");
const peopleMiddleware = require("../middlewares/peopleMiddleware");

router.post(
  "/",
  peopleMiddleware.validatedPeopleType,
  peopleController.InsertPeople
);

router.get(
  "/:id_people",
  peopleMiddleware.validatedPeople,
  peopleController.FindPeople
);

router.get("/", peopleController.FindAllPeople);

module.exports = router;
