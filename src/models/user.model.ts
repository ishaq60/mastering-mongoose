import { model, Schema } from "mongoose";
import { IUser } from "../Interfaces/user.interface";

const userSchema = new Schema<IUser>({
  firstname: {
    type: String,
    required: true,
    trim: true,
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password:{
    type:String,

    default:"user"
  },
  role: {
    type: String,
    enum: ["user", "admin"], // enum for role, not password
    default: "user",
  }
});

export const User=model("User",userSchema)