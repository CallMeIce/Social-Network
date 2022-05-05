// Require schema and model from mongoose
const mongoose = require('mongoose');

// Construct a new instance of the schema class
const thoughtSchema = new mongoose.Schema({
  // Configure individual properties using Schema Types
  thoughtText: { type: String, required: true, minLength: 1, maxLength: 280},
  createdAt: { type: Date, default: Date.now, get:timeStamp => dateFormat(timeStamp)},
  // The type of data is set to 'String' and required is set to false, meaning it will accept null values
 username: { type: String, required: true},
reactions: Number,
  // Use built in date method to get current date
  lastAccessed: { type: Date, default: Date.now },
});

// // Using mongoose.model() to compile a model based on the schema 'bookSchema'
// const Book = mongoose.model('Book', bookSchema);

// const handleError = (err) => console.error(err);

// // Create a new instance of the model, a document
// Book.create(
//   {
//     title: 'Diary of Anne Frank',
//     author: 'Anne Frank',
//     publisher: 'Scholastic',
//     stockCount: 10,
//     price: 10,
//     inStock: true,
//   },
//   (err) => (err ? handleError(err) : console.log('Created new document'))
// );

// // Create a new instance with required title and optional author properties
// Book.create(
//   { title: 'Oh the Places You Will Go!', author: 'Dr. Seuss' },
//   (err) => (err ? handleError(err) : console.log('Created new document'))
// );

// // Create a new instance with only required title
// Book.create({ title: 'Harold and the Purple Crayon' }, (err) =>
//   err ? handleError(err) : console.log('Created new document')
// );

module.exports = thoughtSchema;
