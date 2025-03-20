const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5001;

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function main() {
    try{
        await mongoose.connect(process.env.MONGO_URI, clientOptions);
        await mongoose.connection.db.admin().command({ping: 1});
        console.log("You successfully connected to MongoDB!");
    } finally {
        await mongoose.disconnect();
    }
}

main()
// .then(() => console.log("Connected to MongoDB!"))
.catch(err => console.log(err));

app.listen(port, ()=>{
    console.log(`Server running on the port : ${port}`);
})


const getUserPosts = async (userId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/users/${userId}/posts`, {
        headers: {
          'Authorization': `Bearer ${process.env.TOKEN}`,
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) throw new Error(`Failed to fetch posts for user ${userId}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error fetching posts for user ${userId}:`, error);
      throw error;
    }
  };
