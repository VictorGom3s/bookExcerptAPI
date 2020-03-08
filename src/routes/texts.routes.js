const express = require("express");
const router = express.Router();
const TextsController = require("../controller/texts.controller");

/* Main route */
router.get("/", (req, res) => {
  res.send("The API is running...");
});

/* get a random text from the texts json file */
router.get("/random", TextsController.getRandomText);

module.exports = router;
