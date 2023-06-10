import User from "@models/user";
import { connectDB } from "@config/db";

export const GET = async (request, { params }) => {
  try {
    const user = await User.findById(params.id);

    if (!user) {
      throw new Error("User not found!");
    }

    //removing the password from the user object

    const { password, ...others } = user.toObject();

    return new Response(JSON.stringify({ user: others }), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: error.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};
