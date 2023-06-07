import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";

import User from "@models/user";
import { connectDB } from "@config/db";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize({ email, password }) {
        if (!email || !password) {
          throw new Error("Credentials required");
        }

        connectDB();

        const user = await User.findOne({ email });

        if (!user) {
          throw new Error("User not found!");
        }

        const hashedPassword = await compare(
          credentials.password,
          user.password
        );

        if (!hashedPassword) {
          throw new Error("User password's don't match!");
        }

        return user;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
