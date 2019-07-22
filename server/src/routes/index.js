const movieController = require('../controllers/movieController');
const actorController = require('../controllers/actorController');

const routes = [
    {
        method: 'GET',
        url: '/api/movies',
        handler: movieController.getMovies
    },
    {
        method: 'GET',
        url: '/api/movies/:id',
        handler: movieController.getMovie
    },
    {
        method: 'GET',
        url: '/api/actors',
        handler: actorController.getActors
    },
    {
        method: 'GET',
        url: '/api/actors/:id',
        handler: actorController.getActor
    }
];
  
module.exports = routes;