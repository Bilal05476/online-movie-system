// import express from "express";
// import bodyParser from "body-parser";
// import cors from "cors";
// import dotenv from "dotenv";
// import mongoose from "mongoose";
// import userRoutes from "./routes/user.js";
// import movieRoutes from "./routes/movie.js";
// import { AuthorizeRequest } from "./middlewares/index.js";

// const app = express();
// app.use(cors());

// const port = process.env.PORT || 8080;
// dotenv.config();

// app.use(
//   bodyParser.json({
//     limit: "250mb",
//   })
// );

// app.use(
//   bodyParser.urlencoded({
//     limit: "250mb",
//     parameterLimit: 100000,
//     extended: true,
//   })
// );

// const connectionString = process.env.DATABASE_URL;

// mongoose.connect(connectionString, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const db = mongoose.connection;

// db.on("error", console.error.bind(console, "MongoDB connection error:"));
// db.once("open", () => {
//   console.log("Connected to MongoDB");
// });

// // user routes
// app.use("/api/user", AuthorizeRequest, userRoutes);
// // movie routes
// app.use("/api/movie", AuthorizeRequest, movieRoutes);

// app.use("/", (req, res) => {
//   res.status(200).json({
//     message: `Server Running!`,
//   });
// });

// app.listen(port, () => {
//   console.log(`Server Running at port: ${port}`);
// });

import express from "express";
import bodyParser from "body-parser";
// import cookieParser from "cookie-parser";
//import { connectDB } from './config/db.js';
import dotenv from "dotenv";
import cors from "cors";

// Routes
// import userRoutes from "./routes/userRoutes.js";

dotenv.config();
//connectDB();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World" });
  // res.end('Hello World');
});

app.get("/hello", (req, res) => {
  res.end("Hello from the hello route");
});

// app.use("/api/users", userRoutes);

export default app;
