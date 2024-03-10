import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import { generateToken } from "../config/jwtToken.js";
import { validateMongoDbId } from "../config/validateMongoDbId.js";

// Create A User
export const registerAUser = asyncHandler(async (req, res) => {
  const email = req.body.email;

  const findUser = await User.findOne({ email: email });

  if (!findUser) {
    const createUser = await User.create(req.body);
    createUser.password = null;
    res.status(200).json({
      status: true,
      message: "User created successfully",
      createUser,
    });
  } else {
    throw new Error(`User Already Exists`);
  }
});

// Login A User
export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

 
  const findUser = await User.findOne({ email });

  if (findUser && (await findUser.isPasswordMatched(password))) {
    const { password: userPassword, ...userInfo } = findUser.toObject(); 
    res.status(200).json({
      status: true,
      message: "Logged In Successfully!",
      token: generateToken(findUser._id), 
      userInfo,
    });
  } else {
    
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

//  Update User
export const updateUser = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  validateMongoDbId(_id);
  try {
    const user = await User.findByIdAndUpdate(_id, req.body, { new: true });
    user.password = null;

    res.status(200).json({
      status: true,
      message: "Profile updated successfully",
      user,
    });
  } catch (error) {
    throw new Error(error);
  }
});

//  Get a User
export const getAUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getAProfile = await User.findById(id).select("-password");

    res.status(200).json({
      status: true,
      message: "User found successfully",
      getAProfile,
    });
  } catch (error) {
    throw new Error(error);
  }
});

// Get all users
export const getAllUser = asyncHandler(async (req, res) => {
  try {
    const allUser = await User.find().select("-password");
    res.status(200).json({
      status: true,
      message: "All Users fetched successfully",
      allUser,
    });
  } catch (error) {
    throw new Error(error);
  }
});
