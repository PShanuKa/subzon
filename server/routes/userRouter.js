import express from "express"
import { getAUser, getAllUser, loginUser, registerAUser, updateUser } from "../controllers/userController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

export const userRouter = express.Router();


// all post routes
userRouter.post("/register", registerAUser);
userRouter.post("/login", loginUser);

// all get routes
userRouter.get("/all-users", authMiddleware,  getAllUser);
userRouter.get("/:id", getAUser);

// all put routes
userRouter.put("/update-profile", authMiddleware, updateUser);


// all delete routes