// server.js

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
require('dotenv').config();
const mongodburi = process.env.MONGODB_URI;
const bodyParser = require('body-parser');
const routes = require('./routes');
const cors = require('cors'); 
const path = require('path');

app.use(bodyParser.json());
app.use('/', routes);
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


async function connectToDatabase() {
  try {
      await mongoose.connect(process.env.MONGODB_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
      });
      console.log('Connected to MongoDB');
  } catch (error) {
      console.error('Error connecting to MongoDB:', error.message);
      process.exit(1); 
  }
}
connectToDatabase();

if (require.main === module) {
  app.listen(port, () => {
      console.log(`🚀 Server running on PORT: ${port}`);
  });
}

module.exports = app;