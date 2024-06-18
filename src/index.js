// require('dotenv').config({ path: './env' })
import dotenv from "dotenv";
import connectDB from "./db/dbConnect.js";

dotenv.config({
  path: "./env",
});

connectDB();

/*
const app = express();
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);

    app.on("error", (error) => {
      console.error("Error in  index.js file", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Eroor in  index.js file", error);
    throw error;
  }
})();
*/
