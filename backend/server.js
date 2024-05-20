// server.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
require('dotenv').config();
const mongodburi = process.env.MONGODB_URI;
const bodyParser = require('body-parser');
const routes = require('./routes');

app.use(bodyParser.json());
app.use('/', routes);

// Connecting to MongoDB with error handling
mongoose.connect(mongodburi, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error.message);
});

// Define route to check MongoDB connection
app.get('/mongoDbConnection', (req, res) => {
  if (mongoose.connection.readyState === 1) {
    res.status(200).json('MongoDB is connected successfully.');
  } else {
    res.status(400).json('Error connecting to MongoDB.');
  }
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`🚀 Server running on PORT: ${port}`);
  });
}

module.exports = app;
