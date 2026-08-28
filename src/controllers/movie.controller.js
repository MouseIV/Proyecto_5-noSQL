const Movie = require("../models/movie.model");

// CREATE
const createMovie = async (req, res) => {
  try {
    const newMovie = await Movie.create(req.body);
    res.status(201).json(newMovie);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// UPDATE
const updateMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedMovie = await Movie.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedMovie);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE
const deleteMovie = async (req, res) => {
  try {
    const { id } = req.params;
    await Movie.findByIdAndDelete(id);
    res.status(200).json({ message: "Movie deleted" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// GET ALL
const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createMovie,
  updateMovie,
  deleteMovie,
  getMovies
};
