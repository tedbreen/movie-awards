var createMovie = require('./create-movie.js')
var getMovieById = require('./get-movie-by-id.js')
var getYears = require('./get-years.js')

module.exports = function queries (sequelize) {
  return {
    createMovie: createMovie(sequelize)
  , getMovieById: getMovieById(sequelize)
  , getYears: getYears(sequelize)
  }
}
