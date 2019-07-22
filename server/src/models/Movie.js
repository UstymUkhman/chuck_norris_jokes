// External Dependancies
const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  _id: String,
  title: String,
  picture_path: String,
});

module.exports = mongoose.model('Movie', movieSchema);