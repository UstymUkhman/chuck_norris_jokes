// External Dependancies
const mongoose = require('mongoose');

const peopleSchema = new mongoose.Schema({
  _id: String,
  title: String,
  image: String
}, {
  collection: 'people'
});

module.exports = mongoose.model('people', peopleSchema); // Wow.. sto coso mette tutto al plurale.. pure "people", che non ha plurale. Deficienti.