import User from "@models/user";
import { connectDB } from "@config/db";

export const POST = async (request) => {
  console.log(request.json());
};
