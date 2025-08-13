import { Server } from "http";
import app from "./app";
import mongoose from "mongoose";
let server: Server;
const PORT = 5000;
async function main() {
  try {
      await mongoose.connect('mongodb+srv://noteapp:bPTEDdhlqEJq8Kxe@cluster0.uqruf4z.mongodb.net/advance-noteapp?retryWrites=true&w=majority&appName=Cluster0');
      console.log("connected to mongodb using mooongooes")
    server = app.listen(PORT, () => {
      console.log(`App is listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main()