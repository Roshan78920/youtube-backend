import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log(`Mongoose Connected Successfully || db name : ${DB_NAME} || ${connectionInstance.connection.host}`);
   
  } catch (error) {
    console.error("Error in dbConnection", error);
    throw error;
    process.exit(1);
  }
};

export default connectDB;
