const express = require('express');
const { postBook, getBooks, getSingleBook, updateBook, deleteBook } = require('./book.controller');
const router = express.Router();

router.post('/create-book', postBook);
router.get('/get-books', getBooks);
router.get('/get-single-book/:id', getSingleBook);
router.put('/edit/:id', updateBook);
router.delete('/delete/:id', deleteBook);

module.exports = router;