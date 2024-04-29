import mongoose from 'mongoose'
import express, {
    request,
    response
} from 'express'
import dotenv from 'dotenv'
import todoRoutes from './routes/todos.js';

dotenv.config();

const app = express()

const PORT = process.env.PORT || 8000
const MONGODB_URL = process.env.MONGODB_URL

app.use(express.json())
app.use("/api/todos", todoRoutes)

mongoose
    .connect(MONGODB_URL)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is listening on Port : ${PORT} and Connected to MongoDb database`);
        })
    })
    .catch((error) => {
        console.log(error);
    })