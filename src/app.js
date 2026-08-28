const express = require("express");
const mongoose = require("mongoose");

const movieRoutes = require("./routes/movie.routes");

const app = express();
app.use(express.json());

mongoose.connect("mongodb+srv://diegosachinguillenpascual_db_user:voz2sp3C9hDyGHwM@cluster0.icez8d5.mongodb.net/")
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch(err => console.error("Could not connect to MongoDB", err));

app.use("/movies", movieRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));