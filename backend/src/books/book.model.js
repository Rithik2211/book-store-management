const { timeStamp } = require('console');
const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    title : {
        type: String,
        required : true
    },
    description : {
        type: String,
        required : true
    },
    category : {
        type: String,
        required : true
    },
    trending : {
        type: Boolean,
        required : true
    },
    coverImage : {
        type: String,
        required : true
    },
    oldPrice : Number,
    newPrice : Number,
    createdAt  : {
        type: Date,
        default : Date.now
    },
},{
    timeStamp : true
})

const Book = mongoose.model('BookModel', bookSchema);

module.exports = Book;
