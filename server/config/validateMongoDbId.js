import mongoose from "mongoose";

export const validateMongoDbId = (id) => {
    const isvalid = mongoose.Types.ObjectId.isValid(id);
    if (!isvalid) throw new Error("This ID is not valid or not found");
}


