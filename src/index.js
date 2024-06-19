
// require('dotenv').config
import dotenv from "dotenv";
import {app} from "./app.js"
import connectDB from "./db/db.js";


dotenv.config({
  path: "./env", // Make sure the path to your .env file is correct
});


connectDB()
  .then(() => {
    const port = process.env.PORT || 9000;
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("mongodb connection failed: " + err.message);
  });
