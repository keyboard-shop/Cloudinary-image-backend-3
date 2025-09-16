


import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import Book from './models/Book.js';// .js is Manadatory

import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';



dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());



// TESTING start =======================================================
// for testing
app.get("/", async (req, res) => {
    res.send("hello Cloudinary server index.js")// in the Browser
    console.log("hello terminal from Cloudinary SERVER index.js")// in the TERMINAL
})
// for testing, will be displayed in the TERMINAL below
app.listen(process.env.PORT, () => {
    console.log(`OK Cloudinary ${process.env.PORT}  Backend server is running !!!`);
});
// TESTING end =========================================================



// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('OK MongoDB Atlas for Cloudinary has been successfully connected !!!')
    })
    .catch((err) => {
        console.log('NOT CONNECTED to MongoDB', err)
    })







// 111111111111111111111 ============================================================
// // Cloudinary configuration
// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET,
// });



// // model Schema Book
// const bookSchema = new mongoose.Schema(
// 	{
// 		// image: {
// 		// 	type: String,
// 		// 	//required: true,
// 		// },
// 		// title: {
// 		// 	type: String,
// 		// 	//required: true,
// 		// },
// 		// author: {
// 		// 	type: String,
// 		// 	//required: true,
// 		// },
// 		// price: {
// 		// 	type: Number,
// 		// 	//required: true,
// 		// },

//         title: String,
//         author: String,
//         price: Number,
//         imageUrl: String,
// 	},
// 	{
// 		timestamps: true, // createdAt, updatedAt 
// 	}
// );
// const Book = mongoose.model("Cloudinarycollection", bookSchema);
// export default Book;



// // Multer setup for file uploads
// const storage = multer.memoryStorage();
// const upload = multer({ storage });


// // Upload image to Cloudinary
// app.post('/upload', upload.single('image'), async (req, res) => {
//   try {
//     const result = await cloudinary.uploader.upload_stream(req.file.buffer);
//     res.json({ url: result.secure_url });
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });


// // Create a new book
// app.post('/books', async (req, res) => {
//   const { title, author, price, imageUrl } = req.body;
//   const newBook = new Book({ title, author, price, imageUrl });
//   await newBook.save();
//   res.status(201).json(newBook);
// });
// 1111111111111111111===============================================





// 2222222222222 WORKS =================================
// Endpoint to save book data
// app.post('/books', async (req, res) => {
//     const { title, author, price, imageUrl } = req.body;
//     const newBook = new Book({ title, author, price, imageUrl });
//     await newBook.save();
//     res.status(201).json(newBook);
//   });


//   app.post('/books', async (req, res) => {
//     const { imageUrl } = req.body;

//     try {
//       const newImage = new Book({ imageUrl });
//       await newImage.save();
//       console.log('Image successfully added to MongoDB:', newImage); // Log the new image object
//       res.status(201).json(newImage);
//     } catch (error) {
//       console.error('Error saving image URL:', error);
//       res.status(500).json({ message: 'Failed to save image URL' });
//     }
//   });

// 2222222222222222 WORKS ==================================







/// 44444444444 WORKS ======================================
app.post('/books', async (req, res) => {
    const { title, author, price, imageUrl } = req.body;

    // const newBook = new Book({ title, author, price, imageUrl });
    // await newBook.save();
    // console.log('Image successfully added to MongoDB:', newBook); // Log the new image object
    // res.status(201).json(newBook);

    try {
        const newBook = new Book({ title, author, price, imageUrl });
        await newBook.save();
        console.log('Image successfully added to MongoDB:', newBook); // Log the new image object
        res.status(201).json(newBook);
    } catch (error) {
        console.error('Error saving image URL:', error);
        res.status(500).json({ message: 'Failed to save image URL' });
    }
});
// 44444444444444444 WORKS =========================