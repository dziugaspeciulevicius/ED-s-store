import mongoose from "mongoose";

// user schema (we want to pass in an object.)
const userSchema = mongoose.Schema(
  {
    // This object is where we want to define all the fields we want for a user
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      // isAdmin is false by default, another admin will have to make a user an admin
      default: false,
    },
  },
  // with mongoose we can pass in second argument of options (it will show timestamps (created at, added at, and so on...))
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
