// External Dependancies
const boom = require('boom');

// Get Data Models
const People = require('../models/People');

// Get all Movie
exports.getActors = async (req, reply) => {
  try {
    const people = await People.find();
    return people;
  } catch (err) {
    throw boom.boomify(err);
  }
};

exports.getActor = async (req, reply) => {
  try {
    const id = req.params.id;
    const people = await People.findById(id);
    return people;
  } catch (err) {
    throw boom.boomify(err);
  }
};