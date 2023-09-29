import express from "express";
import { login, register, watch } from "../controllers/user.js";
const userRoutes = express.Router();

userRoutes.post("/register", register).post("/login", login).put("/", watch);

export default userRoutes;
