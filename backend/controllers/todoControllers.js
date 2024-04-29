import {
    request,
    response
} from "express";
import Todo from "../models/todoModel.js";
import mongoose from "mongoose";

export const getAllTodos = async (request, response) => {
    try {
        const todos = await Todo.find([])

        if (!todos) {
            return response.status(404).send({
                message: "NO todos found"
            })
        }
        response.send(200).send(todos)

    } catch (error) {
        response.status(404).send({
            message: error.message
        })
    }
}
export const getSingleTodo = async (request, response) => {
    try {
        const {
            id
        } = request.params
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return response.status(404).send({
                message: "No such todo"
            })
        }
        const todo = await Todo.findById(id)

        if (!todo) {
            return response.status(404).send({
                message: "No such todo"
            })
        }
        response.status(200).send(todo)
    } catch (error) {
        response.status(404).send({
            message: error.message
        })
    }
}
export const createTodo = async (request, response) => {
    try {
        console.log(request.body);
        const {
            title
        } = request.body
        if (!title) {
            response.status(404).send({
                message: "All inputs must be filled"
            })
        }

        const newTodo = await Todo.create({
            title
        });
        response.status(201).send(newTodo)

    } catch (error) {
        response.status(404).send({
            message: error.message
        })

    }
}
export const deleteTodo = async (request, response) => {
    try {
        const {id} = request.params
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return response.status(404).send({
                message: "No valid id"
            })
        }
        const todo = await Todo.findOneAndDelete({_id:id})

        if (!todo) {
            return response.status(404).send({
                message: "No such todo"
            })
        }
        response.status(200).send(todo)
    } catch (error) {
        response.status(404).send({
            message: error.message
        })
    }
}
export const updateTodo = async (request, response) => {
    try {
        const {id} = request.params
        const {title:updatedTitle} = request.body 
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return response.status(404).send({
                message: "No valid id"
            })
        }
        if (!updatedTitle) {
            return response.status(404).send({
                message: "All inputs must be filled"
            })
        }

        const todo = await Todo.findOneAndUpdate({_id:id},{title:updatedTitle})

        if (!todo) {
            return response.status(404).send({
                message: "No such todo"
            })
        }
        response.status(200).send(todo)
    } catch (error) {
        response.status(404).send({
            message: error.message
        })
    }
}