import Movie from "../models/movie.js";

// @route /api/movie
// @method GET
// @desc Find all movies stored in the system
export const findMovies = async (req, res) => {
  if (req.query.query) {
    // find searched movies stored in the system
    const { query } = req.query;
    const regex = new RegExp(query, "i"); // Case-insensitive search
    const matchingMovies = await Movie.find({ title: regex });
    if (matchingMovies) {
      return res.status(200).json(matchingMovies);
    }
  } else {
    // find all the movies stored in the system
    const movies = await Movie.find({});
    if (movies) {
      return res.status(200).json(movies);
    }
  }
};

// @route /api/movie/:id
// @method GET
// @desc Find movie by id stored in the system
export const findMovie = async (req, res) => {
  // find all the movies stored in the system
  const movie = await Movie.findById({
    _id: req.params.id,
  });

  if (movie) {
    return res.status(200).json(movie);
  }
};

// @route /api/movie/create
// @method POST
// @desc Add new a movie into system
export const addMovie = async (req, res) => {
  const { title, description, actors, releaseDate, bannerImage } = req.body;

  if (!title || !description || !releaseDate || !bannerImage) {
    return res
      .status(404)
      .json({ error: "Please provide all required data for a movie!" });
  }

  // check if movie exist in our database by title
  const existMovie = await Movie.findOne({ title });

  if (existMovie) {
    return res.status(400).json({ error: "Movie already exist" });
  }

  // create a new movie object with movie constructor
  const createMovie = await Movie.create({
    title,
    description,
    actors,
    releaseDate,
    bannerImage,
    slug: title.toLowerCase().replaceAll(" ", "-"),
  });

  if (createMovie) {
    return res.status(200).json(createMovie);
  } else {
    return res.status(400).json({ error: "Invalid movie data" });
  }
};

// @route /api/movie/update/:id
// @method PUT
// @desc Update a movie into system by movie id
export const updateMovie = async (req, res) => {
  const id = req.params.id;
  const { description, actors, releaseDate, bannerImage } = req.body;

  // check if movie exist in our database by id
  const existMovie = await Movie.findByIdAndUpdate(
    { _id: id },
    { description, actors, releaseDate, bannerImage },
    { new: true }
  );

  if (!existMovie) {
    return res.status(400).json({ error: "Movie does not exist" });
  } else {
    return res.status(200).json(existMovie);
  }
};

// @route /api/movie/review/:id
// @method POST
// @desc Add a review for movie into system by movie id
export const addReview = async (req, res) => {
  const id = req.params.id;
  const { reviews } = req.body;

  // check if movie exist in our database by id
  const existMovie = await Movie.findByIdAndUpdate(
    { _id: id },
    { reviews },
    { new: true }
  );

  if (!existMovie) {
    return res.status(400).json({ error: "Movie does not exist" });
  } else {
    return res.status(200).json(existMovie);
  }
};
