import User from "../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// @route /api/user/register
// @method POST
// @desc Register user into system
export const register = async (req, res) => {
  const { name, email, phone, password } = req.body;

  if (!name || !email || !password) {
    return res
      .status(404)
      .json({ message: "Please provide all required field!" });
  }

  // Validate if user exist in our database by email
  const existUser = await User.findOne({ email });

  if (existUser) {
    return res
      .status(400)
      .json({ message: "User already exist. Please login!" });
  }

  // encrypt plain password into hash string
  const hashedPassword = await bcrypt.hash(password, 10);

  // create a new user object with user constructor
  const createUser = await User.create({
    name,
    email: email.toLowerCase(),
    phone,
    password: hashedPassword,
  });

  if (createUser) {
    const token = generateJWT(createUser._id);
    createUser.token = token;
    return res.status(200).json(createUser);
  } else {
    return res.status(400).json({ message: "Invalid user data" });
  }
};

// @route /api/user/login
// @method POST
// @desc Authenticate user into system
export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(404)
      .json({ message: "Please provide valid credentials!" });
  }

  // Validate if user exist in our database by email
  const existUser = await User.findOne({ email }).populate({
    path: "watchedMovies.movie",
  });

  if (!existUser) {
    return res
      .status(404)
      .json({ message: "User does not exist. Please register!" });
  }

  // if existUser, verify the plain password by hash string stored in database
  if (existUser && (await bcrypt.compare(password, existUser.password))) {
    const token = generateJWT(existUser._id);
    existUser.token = token;
    return res.status(200).json(existUser);
  } else {
    return res.status(400).json({ message: "Invalid user credentials" });
  }
};

// @route /api/user
// @method PUT
// @desc Update user into system, add movie into watchedMovies
export const watch = async (req, res) => {
  const { movieId, userId } = req.body;

  if (!movieId || !userId) {
    return res
      .status(404)
      .json({ message: "Please provide movie and user id both" });
  }

  // find user by id stored in the system
  const existUser = await User.findById({
    _id: userId,
  });
  existUser.watchedMovies.push({ movie: movieId });
  const allMovies = existUser.watchedMovies;

  const updateUser = await User.findByIdAndUpdate(
    {
      _id: userId,
    },
    { watchedMovies: allMovies },
    { new: true }
  ).populate({
    path: "watchedMovies.movie",
  });

  if (updateUser) {
    const token = generateJWT(updateUser._id);
    updateUser.token = token;
    return res.status(200).json(updateUser);
  }
};

// Generate JWT
const generateJWT = (id) => {
  return jwt.sign({ id }, process.env.TOKEN, {
    expiresIn: "30d",
  });
};
