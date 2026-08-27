const express = require("express");
const router = express.Router();

const {
  createMovie,
  updateMovie,
  deleteMovie
} = require("../controllers/movie.controller");

// POST → Crear película
router.post("/", createMovie);

// PUT → Modificar película
router.put("/:id", updateMovie);

// DELETE → Eliminar película
router.delete("/:id", deleteMovie);

module.exports = router;
