import mongoose from "mongoose";

export const dbConnect = () =>{
    try {
        mongoose.connect(process.env.MONGODB_URI);
        console.log("Database Connection Successfully")
    } catch (error) {
        console.log(error);
    }
};
