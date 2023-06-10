import User from "@models/user";
import { connectDB } from "@config/db";
import { compare } from "bcrypt";

const handler = async (request) => {
  const { email, password } = request.json();
  try {
    connectDB();

    const user = await User.findOne({ email });

    if (!user) {
      throw new Error("User not Found!");
    }

    const isMatch = await compare(password, user.password);

    if (!isMatch) {
      throw new Error("User password's don't match!");
    }

    return new Response(JSON.stringify({ user }), {
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

export { handler as GET, handler as POST };
