import mongoose from "mongoose";

// Define the movie schema
const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  actors: [
    {
      type: String,
    },
  ],
  reviews: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId, // Reference to the user model
        ref: "User", // Name of the user model
        required: true,
      },
      rating: {
        type: Number,
        min: 1,
        max: 5,
      },
      text: {
        type: String,
      },
    },
  ],
  releaseDate: {
    type: Date,
    required: true,
  },
  bannerImage: {
    type: String,
    required: true,
  },
});

// Create the Movie model
const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
