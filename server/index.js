import express from 'express';
import session from 'express-session';
import dotenv from "dotenv";
import { dbConnect } from "./config/dbConnect.js";
import bodyParser from 'body-parser';
import { handleError, notFound } from './middlewares/errorHandler.js';
dotenv.config();
import  passport  from "passport";
import  cors  from "cors";
import { userRouter } from './routes/userRouter.js';
import { googleRouter } from './routes/googleRouter.js';
import { blogRouter } from './routes/blogRoute.js';


const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors())

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session({
  secret: 'hadffgyjgaf',
  resave: false,
  saveUninitialized: false
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session()); // Passport session middleware

import "./utils/passport.js"
import { categoryRouter } from './routes/categoryRoute.js';
import { commentRouter } from './routes/commentRouter.js';

// Connect to the database
dbConnect();


// Routes 
app.use("/", googleRouter);
app.use("/api/user", userRouter);
app.use("/api/blog", blogRouter);
app.use("/api/category", categoryRouter);
app.use("/api/comment", commentRouter);


// Error handling middleware
app.use(notFound);
app.use(handleError);


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
  