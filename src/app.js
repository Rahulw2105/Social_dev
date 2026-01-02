const express = require('express');
const mongoose = require('mongoose');

// Initialize Express app
const app = express();
const port = 3000;

// Use Atlas connection string (use your own string to connect to the database)
const mongoURI = "mongodb+srv://Rahul:Rahul%402105@cluster0.tprwj1s.mongodb.net/MyTaskDB"
mongoose.connect(mongoURI)
  .then(() => {
    console.log('✅ Connected to MongoDB Atlas');
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
  });

// Basic route
app.get('/', (req, res) => {
  res.send('Hello from MyTasks App connected to MongoDB Atlas!');
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Server is running at http://localhost:${port}`);
});


