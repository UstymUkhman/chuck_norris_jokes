// External Dependancies
const boom = require('boom');

// Get Data Models
const Movie = require('../models/Movie');

// Get all Movie
exports.getMovies = async (req, reply) => {
  try {
    const movie = await Movie.find();
    return movie;
  } catch (err) {
    throw boom.boomify(err);
  }
};

exports.getMovie = async (req, reply) => {
  try {
    const id = req.params.id;
    const movie = await Movie.findById(id);
    return movie;
  } catch (err) {
    throw boom.boomify(err);
  }
};