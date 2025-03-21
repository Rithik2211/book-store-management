const Book = require('./book.model');

const postBook = async(req, res) => {
    try{
        const newBook = await Book({...req.body});
        await newBook.save();
        res.status(200).send({message : "Book posted Successfully", book : newBook});
    }
    catch(error){
        console.error("Error in creating a Book", error);
        res.status(500).send({message : "Failed to create Book!"});
    }
}

const getBooks = async(req, res) => {
    try{
        const allBooks = await Book.find().sort({createdAt : -1})
        res.status(200).send(allBooks);
    }
    catch(error){
        console.error("Error in Getting a Book", error);
        res.status(500).send({message : "Failed to Get Book!"});
    }
}

const getSingleBook = async(req, res) => {
    try{
        const {id} = req.params
        const yourBook = await Book.findById(id);
        if(!yourBook){
            res.status(404).send({message : "Book Not Found"});
        }
        res.status(200).send(yourBook)
    }
    catch(err){
        console.log("Error in getting your Book!", err);
        res.status(500).send({message : "Failed to Get Book"})
    }
}

const updateBook  = async(req, res) => {
    try{
        const {id} = req.params
        const updatedBook = await Book.findByIdAndUpdate(id, req.body, {new : true});
        if(!updatedBook){
            res.status(404).send({message : "Book Not Found"});
        }
        res.status(200).send({message : "Updated Book Successfully!", book : updatedBook});
    }
    catch(error){
        console.log("Error in Updating your Book!", err);
        res.status(500).send({message : "Failed to Update Book"})
    }
}


const deleteBook = async(req, res) => {
    try{
        const {id} = req.params
        const deletedBook = await Book.findByIdAndDelete(id);
        if(!deletedBook){
            res.status(404).send({message : "Book Not Found"});
        }
        res.status(200).send({message : "Book Deleted Successfully!", book : deletedBook});
    }
    catch(error){
        console.log("Error in Deleting your Book!", err);
        res.status(500).send({message : "Failed to Delete Book"})
    }
}

module.exports = {
    postBook, getBooks, getSingleBook, updateBook, deleteBook
}