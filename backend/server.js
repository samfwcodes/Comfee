import express from 'express';
import coffeeRoutes from './routes/coffee.js'
import mongoose from 'mongoose'
import 'dotenv/config'
import connectDB from './db/connectDB.js';
import cors from 'cors'


const app = express()
const PORT = process.env.PORT

app.use(cors());
app.use(express.json());
app.use('/api/coffee', coffeeRoutes);
app.use(express.urlencoded({ extended: true }));


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })
    } catch (err) {
        console.error(`Can not connect to server ${err}`)
    }
}

start();

