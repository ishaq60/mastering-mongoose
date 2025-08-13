
import express, { Request, Response } from 'express';
import { Note } from '../models/notes.model';



export const noteRoutes=express.Router()
 noteRoutes.post("/create-note",async(req:Request,res:Response)=>{
    const body=req.body
    //  noteRoutesroch =1 of creating a data
//  const myNote=new Note({
//     title:"Express",
//     tags:{
//         label:"database"
//     }
  const note=await Note.create(body)
 
 
 res.status(201).json({
    success:true,
    message:"Note create Succeessfully",
    note:note
 })
})
noteRoutes.get("",async(req:Request,res:Response)=>{
  
  const notes=await Note.find()
 
 
 res.status(201).json({
    success:true,
    message:"All Notes gets Succeessfully",
    notes
 })
})
noteRoutes.get("/:noteId",async(req:Request,res:Response)=>{
    const noteId=req.params.noteId
  
  const note=await Note.findById(noteId)
//   const note=await Note.findOne({title:"Learning Express"})
 
 
 res.status(201).json({
    success:true,
    message:"single note find Succeessfully",
    note
 })
})
noteRoutes.patch("/:noteId",async(req:Request,res:Response)=>{
     const noteId=req.params.noteId
       const Updatedbody=req.body
   
  
//   const note=await Note.findByIdAndUpdate(noteId,Updatedbody,{new:true})
  const note=await Note.findOneAndUpdate({_id:noteId},Updatedbody,{new:true})//title way find 
//   const note=await Note.findOne({title:"Learning Express"})
 
 
 res.status(201).json({
    success:true,
    message:"Updated Note successfully",
    note
 })
})
noteRoutes.delete("/:noteId",async(req:Request,res:Response)=>{
     const noteId=req.params.noteId
  
   
  
  const note=await Note.findByIdAndDelete(noteId)
//   const note1=await Note.deleteOne({title:"Learning Express"})
  
 
 
 res.status(201).json({
    success:true,
    message:" Note Delete successfully",
    note
 })
})