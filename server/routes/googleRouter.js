import express from "express";
import passport from "passport";
import { generateToken } from "../config/jwtToken.js";
import User from "../models/userModel.js";

export const googleRouter = express.Router();

googleRouter.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

googleRouter.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  async (req, res) => {
    if (req.user) {
      const findUser = await User.findOne({ email: req.user.email });
      if (findUser) {
        res.status(200).json({
          status: true,
          message: "Logged In Successfully!",
          token: generateToken(findUser?._id),
          role: findUser?.roles,
          username: findUser?.firstname + " " + findUser?.lastname,
          user_image: findUser?.user_image,
          from: "google",
        });
      }
    } else {
      throw new Error("Something went wrong!");
    }
  }
);
