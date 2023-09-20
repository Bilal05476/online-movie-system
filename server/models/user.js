import mongoose from "mongoose";

// Define the user schema
const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    admin: { type: Boolean, default: false },
    email: {
      type: String,
      required: [true, "Please provide an email"],
      unique: [true, "This email item is already exist"],
    },
    password: { type: String, required: [true, "Please provide password"] },
    userIcon: {
      type: String,
    },
    watchedMovies: [
      {
        movie: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Movie",
        },
        isDone: {
          type: Boolean,
          default: false,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

// Create the User model
var User = mongoose.model("User", userSchema);

export default User;
