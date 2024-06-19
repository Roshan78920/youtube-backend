import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
// import {index} from "./index";

const app = express();
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true,
}))

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"))
app.use(cookieParser());
app.use(morgan('dev'));


//import routes
import userRouter from './routes/user.routes.js';


///router declaration
app.use('/api/v1/users', userRouter)


// http://localhost:8000/api/v1/users/register


 
export { app };