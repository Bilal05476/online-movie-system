import express from "express";
import {
  addMovie,
  addReview,
  findMovie,
  findMovies,
  updateMovie,
} from "../controllers/movie.js";
const movieRoutes = express.Router();

movieRoutes
  .get("/", findMovies)
  .get("/:id", findMovie)
  .post("/create", addMovie)
  .put("/update/:id", updateMovie)
  .post("/review/:id", addReview);

export default movieRoutes;
