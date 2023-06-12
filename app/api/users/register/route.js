import User from "@models/user";
import { connectDB } from "@config/db";
import { hash } from "bcrypt";

const handler = async (request) => {
  const { username, email, password } = await request.json();
  try {
    connectDB();

    if (!username || !email || !password) {
      throw new Error("this fields are required");
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      throw new Error("User already existing with this email");
    }

    const hashedPassword = await hash(password, 10);

    const user = new User({ username, email, password: hashedPassword });

    await user.save();

    return new Response(
      JSON.stringify({ message: "User created successfully" }),
      {
        status: 201,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
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
