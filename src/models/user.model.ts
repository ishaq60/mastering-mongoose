import { Model, model, Schema } from "mongoose";
import { IUser, UserIntanceMethods } from "../Interfaces/user.interface";
import bcrypt from "bcryptjs"
import { Note } from "./notes.model";
const userSchema = new Schema<IUser,Model<IUser>,UserIntanceMethods>({
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



userSchema.method("hashPassword", async function (plainPassword: string) {
    const hashedPassword = await bcrypt.hash(plainPassword, 10);
    console.log(hashedPassword)
    this.password = hashedPassword; // Assign to the current user document
    return hashedPassword;
  
});

userSchema.post("findOneAndDelete", async function(doc){
  console.log(doc)
 if(doc){
   await Note.deleteMany({user:doc._id})

 }
})


userSchema.pre("save",async function(){
  console.log("inside free hook")
this.password=await bcrypt.hash(this.password, 10);

})

userSchema.post("save",function(doc){
console.log(`${doc.email} has been saved`)
})


export const User=model("User",userSchema)