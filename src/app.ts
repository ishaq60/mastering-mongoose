

import { userRoutes } from "./controller/user.controller"
import {noteRoutes} from "./controller/notes.controller"
import express,{Application,Request,Response} from "express"

const app:Application=express()
app.use(express.json())



app.use("/notes",noteRoutes
),


app.use("/users",userRoutes)




app.get("/",(req:Request,res:Response)=>{
    res.send("Welcome to Note App")
})

export default app;