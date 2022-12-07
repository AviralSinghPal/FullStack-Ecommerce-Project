import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        name:{
            tytpe: String,
            required: [true, "Name is required"],
            maxlenght: [50, "Name must be less than 50"]
        }
    })