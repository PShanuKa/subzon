import  passport  from "passport";
import  GoogleStrategy  from "passport-google-oauth2";
import express from 'express';
import User from "../models/userModel.js";

const app = express();



passport.use(new GoogleStrategy({
  clientID: "1021029457498-i0oatasng7k2p6jre2aekt9k1so3460v.apps.googleusercontent.com",
  clientSecret: "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",
  callbackURL: "http://localhost:3000/auth/google/callback",
  passReqToCallback: true
}, async function(request, accessToken, refreshToken, profile, done) {
  try {
    let data = profile._json;
    // Find or create user based on the email
    let user = await User.findOne({ email: data.email });

    if (user) {
      // User already exists, return the user
      return done(null, user);
    } else {
      // Create a new user if not found
      user = await User.create({
        firstname: data.given_name,
        lastname: data.family_name,
        user_image: data.picture,
        email: data.email,
        roles: "user"
      });
      return done(null, user);
    }
  } catch (error) {
    // Handle any errors
    return done(error);
  }
}));


passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});


