


// 444444444444444 works ==============================
// // models/Book.js
import mongoose from 'mongoose';
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: true },
});
const Book = mongoose.model('Fullcollection', bookSchema);
export default Book;
// 4444444 works ========================================


// it works, only image ======================
// import mongoose from 'mongoose';
// const bookSchema = new mongoose.Schema({
//   imageUrl: { type: String, required: true },
// });
// const Book = mongoose.model('Cloudinarybookscollection', bookSchema);
// export default Book;
// it works =======================
