const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5001;

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
    app.get('/', (req, res)=>{
        res.send("hello welcome to Express!");
    })
}

main()
.then(() => console.log("Connected to MongoDB!"))
.catch(err => console.log(err));

app.listen(port, ()=>{
    console.log(`Server running on the port : ${port}`);
})

