import { model, Schema, models } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "username is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    coverpicture: {
      type: String,
    },
    description: {
      type: String,
    },
    followers: [
      {
        userId: {
          type: String,
        },
      },
    ],
    followings: [
      {
        userId: {
          type: String,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = models.User || model("User", userSchema);

export default User;
