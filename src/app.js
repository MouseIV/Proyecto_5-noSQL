const express = require("express");
const mongoose = require("mongoose");
const movieRoutes = require("./routes/movie.routes");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/movies");

app.use("/movies", movieRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));
