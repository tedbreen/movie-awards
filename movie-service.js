var createMovie = require('./lib/queries/movies/create-movie.js')
var getMovieById = require('./lib/queries/movies/get-movie-by-id.js')
var getMoviesByYear = require('./lib/queries/movies/get-movies-by-year.js')

module.exports = function movieService (sequelize) {
  return {
    createMovie: createMovie(sequelize)
  , getMoviesByYear: getMoviesByYear(sequelize)
  , getMovieById: getMovieById(sequelize)
  }
}
