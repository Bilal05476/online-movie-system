import express from "express";
import { addMovie, addReview, updateMovie } from "../controllers/movie.js";
const movieRoutes = express.Router();

movieRoutes
  .post("/create", addMovie)
  .put("/update/:id", updateMovie)
  .post("/review/:id", addReview);

export default movieRoutes;
