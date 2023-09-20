import express from "express";
import { login, register } from "../controllers/user.js";
const userRoutes = express.Router();

userRoutes.post("/register", register).post("/login", login);

export default userRoutes;
