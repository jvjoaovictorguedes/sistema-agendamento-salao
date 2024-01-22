const express = require("express");
const router = express.Router();
const peopleTypeController = require("../controllers/peopleTypeController");
const peopleTypeMiddleware = require("../middlewares/peopleTypeMiddleware");

router.post("/", peopleTypeController.InsertPeopleType);

router.get(
  "/:id_people_type",
  peopleTypeMiddleware.ValidatedPeopleType,
  peopleTypeController.FindPeopleType
);

router.get("/", peopleTypeController.FindAllPeopleType);

module.exports = router;
