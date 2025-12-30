const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/persondb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Person Schema
const PersonSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  mobile: String
});

const Person = mongoose.model('Person', PersonSchema);

// Home route
app.get('/', (req, res) => {
  res.send('<h2>Person REST API is running</h2>');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
