import express, { Request, Response } from 'express';
import { User } from '../models/user.model';
import z from 'zod';

export const userRoutes = express.Router();

const createUsezodschema=z.object(
    {
firstname:z.string(),
lastname:z.string(),

email:z.string(),
age:z.number(),
password:z.string(),
role:z.string().optional()
})
// Create User
userRoutes.post("/create-user", async (req: Request, res: Response) => {
    


    try {
        const body=await createUsezodschema.parseAsync(req.body)
        const user = await User.create(body);
        res.status(201).json({
            success: true,
            message: "User created successfully",
            user
        });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to create user", error });
    }
});

// Get All Users
userRoutes.get("/", async (req: Request, res: Response) => {
    try {
        const users = await User.find();
        res.status(200).json({
            success: true,
            message: "All users fetched successfully",
            users
        });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to fetch users", error });
    }
});

// Get Single User by ID
userRoutes.get("/:userId", async (req: Request, res: Response) => {
    const userId = req.params.userId;
    try {
        const user = await User.findById(userId);
        res.status(200).json({
            success: true,
            message: "User fetched successfully",
            user
        });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to fetch user", error });
    }
});

// Update User by ID
userRoutes.patch("/:userId", async (req: Request, res: Response) => {
    const userId = req.params.userId;
    const updatedBody = req.body;
    try {
        const user = await User.findByIdAndUpdate(userId, updatedBody, { new: true });
        res.status(200).json({
            success: true,
            message: "User updated successfully",
            user
        });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to update user", error });
    }
});

// Delete User by ID
userRoutes.delete("/:userId", async (req: Request, res: Response) => {
    const userId = req.params.userId;
    try {
        const user = await User.findByIdAndDelete(userId);
        res.status(200).json({
            success: true,
            message: "User deleted successfully",
            user
        });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to delete user", error });
    }
});
