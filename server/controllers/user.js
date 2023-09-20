import User from "../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// @route /api/user/register
// @method POST
// @desc Register user into system
export const register = async (req, res) => {
  const { name, email, phone, password, userIcon, admin } = req.body;

  if (!name || !email || !password) {
    return res
      .status(404)
      .json({ error: "Please provide all required field!" });
  }

  // Validate if user exist in our database by email
  const existUser = await User.findOne({ email });

  if (existUser) {
    return res.status(400).json({ error: "User already exist. Please login!" });
  }

  // encrypt plain password into hash string
  const hashedPassword = await bcrypt.hash(password, 10);

  // create a new user object with user constructor
  const createUser = await User.create({
    name,
    email: email.toLowerCase(),
    phone,
    userIcon,
    password: hashedPassword,
    admin: admin && admin,
  });

  if (createUser) {
    const token = generateJWT(createUser._id);
    return res.status(200).json({
      id: createUser._id,
      name: createUser.name,
      email: createUser.email,
      admin: createUser.admin,
      phone: createUser.phone,
      userIcon: createUser.userIcon,
      token,
    });
  } else {
    return res.status(400).json({ error: "Invalid user data" });
  }
};

// @route /api/user/login
// @method POST
// @desc Authenticate user into system
export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(404).json({ error: "Please provide valid credentials!" });
  }

  // Validate if user exist in our database by email
  const existUser = await User.findOne({ email });

  if (!existUser) {
    return res
      .status(404)
      .json({ error: "User does not exist. Please register!" });
  }

  // if existUser, verify the plain password by hash string stored in database
  if (existUser && (await bcrypt.compare(password, existUser.password))) {
    const token = generateJWT(existUser._id);
    return res.status(200).json({
      _id: existUser._id,
      email: existUser.email,
      name: existUser.name,
      phone: existUser.phone,
      admin: existUser.admin,
      userIcon: existUser.userIcon,
      token,
    });
  } else {
    return res.status(400).json({ error: "Invalid user credentials" });
  }
};

// Generate JWT
const generateJWT = (id) => {
  return jwt.sign({ id }, process.env.TOKEN, {
    expiresIn: "30d",
  });
};
