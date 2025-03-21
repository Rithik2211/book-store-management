const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require('./src/books/book.route');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5001;
const cors = require('cors');

//middleware
app.use(express.json());
app.use(cors({
    origin : ['http://localhost:5173/'],
    credentials : true
}))

app.use('/api/books', bookRoutes);

// Logic to check that the database is connected properly

async function main() {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        await mongoose.set('strictQuery', false);
        console.log("You successfully connected to MongoDB!");
         mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
         mongoose.connection.once('open', () => {
        console.log('Database connected');
        // console.log("You successfully connected to MongoDB!");
});
    } 
    catch(err){
        console.error(err);
    }
    // finally {
    //     await mongoose.connection.close();
    // }
}

main()
// .then(() => console.log("Connected to MongoDB!"))
.catch(err => console.log(err));

app.listen(port, ()=>{
    console.log(`Server running on the port : ${port}`);
})


// const getUserPosts = async (userId) => {
//     try {
//       const response = await fetch(`${API_BASE_URL}/users/${userId}/posts`, {
//         headers: {
//           'Authorization': `Bearer ${process.env.TOKEN}`,
//           'Content-Type': 'application/json'
//         }
//       });
//       if (!response.ok) throw new Error(`Failed to fetch posts for user ${userId}`);
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error(`Error fetching posts for user ${userId}:`, error);
//       throw error;
//     }
//   };
