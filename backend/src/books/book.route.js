const express = require('express');
const { postBook, getBooks, getSingleBook, updateBook, deleteBook } = require('./book.controller');
const verifyAdminToken = require('../middleware/verifyAdmin');
const router = express.Router();

router.post('/create-book', verifyAdminToken, postBook);
router.get('/get-books', getBooks);
router.get('/get-single-book/:id', getSingleBook);
router.put('/edit/:id', verifyAdminToken, updateBook);
router.delete('/delete/:id', verifyAdminToken, deleteBook);

module.exports = router;