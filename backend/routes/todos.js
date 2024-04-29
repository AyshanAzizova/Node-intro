import express from "express";
import {
    getAllTodos,
    getSingleTodo,
    createTodo,
    deleteTodo,
    updateTodo
} from "../controllers/todoControllers.js";

// Controllers
const todoRoutes = express.Router();

// Get All Todos
todoRoutes.get("/", getAllTodos)

// Get Todos by ID
todoRoutes.get("/:id", getSingleTodo)

// Post a new Todo
todoRoutes.post("/", createTodo)

//Delete a single Todo
todoRoutes.delete("/:id", deleteTodo)

// Update a single Todo
todoRoutes.patch("/:id", updateTodo)

export default todoRoutes