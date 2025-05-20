import mongoose from "mongoose";

const userModel = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        rewuired: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profilePhoto: {
        type: String,
        default: ""
    },
    grnder: {
        type: String,
        enum: ["male", "female"],
        required: true
    }

}, { timestamps: true })

export const user = mongoose.modal("User", userModel)