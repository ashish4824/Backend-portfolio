import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
async function connectDB() {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI as string);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
    }
}
export default connectDB;
