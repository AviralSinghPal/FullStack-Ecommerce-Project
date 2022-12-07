import mongoose from "mongoose";
import AuthRole from "../utils/authRoles"
import bcrypt from "bcryptjs"
import JWT from "jsonwebtoken"
import crypto from "crypto"
import  config  from "../config/index";


const userSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, "Name is required"],
            maxlenght: [50, "Name must be less than 50"]
        },
        email:{
            type: String,
            required: [true, "Email is required"],
            unique: true,

        },
        password:{
            type: String,
            required: [true, "Password is required"],
            minLength: [8, "password must be atleast 8 characters"],
            select: false   
        },
        role:{
            type: String,
            enum: Object.values(AuthRole),
            default: AuthRole.USER
        },
        forgotPasswordToken: String,
        forgotPasswordExpiry: Date
    },
    {
        timestamps : true
    }
    );

//challenge 1: encrypt the password
    userSchema.pre('save', async function(next){
        
        if(!this.isModified("password")) next();
        this.password = await bcrypt.hash(this.password,10)
        next()
    })
//add more faeture directly to schema

userSchema.methods= {
    //compare passwords
    comparePassword: async function(enteredPassword)
    {
        return await bcrypt.compare(enteredPassword,this.password)
    },

    //genrate JWT token
    getJwtToken: function () {
        return JWT.sign({
            _id: this._id,
            role: this.role
        },
        config.JWT_SECRET,
        {
            expiresIn: config.JWT_EXPIRY
        }
        )  
    }
}

    export default mongoose.model("User",userSchema);