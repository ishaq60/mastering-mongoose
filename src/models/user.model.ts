import { model, Schema } from "mongoose";
import { IUser } from "../Interfaces/user.interface";

const userSchema = new Schema<IUser>({
  firstname: {
    type: String,
    required: true,
    trim: true,
  minlength:5,
    maxlength:10
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
    minlength:[5, 'Must be at least 5, got {VALUE}'],
    maxlength:10
  },
  email: {
    type: String,
    unique:true,
    required: true,
    lowercase:true,
    trim: true,
  },
age:{
type:Number,
required:true,
min:[18, 'Must be at least 18, got {VALUE}'],
max:60
  },
  password:{
    type:String,

    default:"user"
  },
  role: {
    type: String,
    uppercase:true,
    enum: {
      values:["USER", "ADMIN","SUPERADMIN"],
      message:"Role is not vaild .got {VALUE} role"
    }, // enum for role, not password
    default: "user",
  }
});

export const User=model("User",userSchema)