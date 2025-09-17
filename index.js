


import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import Book from './models/Book.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());


// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('OK MongoDB Atlas for Cloudinary has been successfully connected !!!')
    })
    .catch((err) => {
        console.log('NOT CONNECTED to MongoDB', err)
    })


app.post('/books', async (req, res) => {
    const { title, author, price, imageUrl } = req.body;
    try {
        const newBook = new Book({ title, author, price, imageUrl });
        await newBook.save();
        console.log('Image successfully added to MongoDB:', newBook);
        res.status(201).json(newBook);
    } catch (error) {
        console.error('Error saving image URL:', error);
        res.status(500).json({ message: 'Failed to save image URL' });
    }
});
