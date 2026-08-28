const express = require("express");
const router = express.Router();

const {
  createMovie,
  updateMovie,
  deleteMovie,
  getMovies
} = require("../controllers/movie.controller");

router.post("/", createMovie);
router.get("/", getMovies);
router.put("/:id", updateMovie);
router.delete("/:id", deleteMovie);

module.exports = router;
