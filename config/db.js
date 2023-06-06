import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("databse connected Successfully!");
  } catch (error) {
    console.log(error.message);
  }
};

export { connectDB };
