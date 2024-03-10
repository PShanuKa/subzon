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
        const token = generateToken(findUser._id);
        const redirectUrl = `http://localhost:5173/login?token=${token}&role=${
          findUser.roles
        }&firstname=${encodeURIComponent(
          findUser.firstname)}&userid=${encodeURIComponent(
            findUser._id)}&lastname=${encodeURIComponent(
            findUser.lastname)}&user_image=${encodeURIComponent(findUser.user_image)}&from=google`;
        res.redirect(redirectUrl);
      }
    } else {
      throw new Error("Something went wrong!");
    }
  }
);
