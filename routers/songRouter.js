const express = require("express");
const router = express.Router();

const songController = require("../controllers/songController");

router
  .route("/")
  .get(songController.getSongs)
  .post(songController.createSong);

router
  .route("/:id")
  .get(songController.getSong)
  .patch(songController.updateSong)
  .delete(songController.deleteSong);

module.exports = router;
