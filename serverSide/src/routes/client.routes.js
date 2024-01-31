const express = require("express");
const router = express.Router();
const clientController = require("../controllers/clientController");
const clientMiddleware = require("../middlewares/clientMiddleware");

router.post(
  "/",
  clientMiddleware.validatedInsertClient,
  clientController.InsertClient
);

router.get(
  "/:client_id",
  clientMiddleware.validatedClient,
  clientController.FindClient
);

module.exports = router;
