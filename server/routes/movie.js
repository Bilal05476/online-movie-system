import express from "express";
import {
  addMovie,
  addReview,
  deleteMovie,
  findMovie,
  findMovies,
  updateMovie,
} from "../controllers/movie.js";
const movieRoutes = express.Router();

movieRoutes
  .get("/", findMovies)
  .post("/", addMovie)
  .put("/:id", updateMovie)
  .delete("/:id", deleteMovie)
  .get("/:slug", findMovie)
  .post("/review/:id", addReview);

export default movieRoutes;
