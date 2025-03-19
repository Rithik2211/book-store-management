const express = require('express')
const app = express();
const port = process.env || 5000;


app.get('/', (req, res)=>{
    res.send("hello welcome to Express!");
})


app.listen(port, ()=>{
    console.log(`Server running on the port : ${port}`);
})

