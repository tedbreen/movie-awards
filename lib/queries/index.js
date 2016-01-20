var createMovie = require('./create-movie.js')
var getMovieById = require('./get-movie-by-id.js')

module.exports = function queries (sequelize) {
  return {
    createMovie: createMovie(sequelize)
  , getMovieById: getMovieById(sequelize)
  }
}
