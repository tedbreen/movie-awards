var createMovie = require('./create-movie.js')
var getMovies = require('./get-movies.js')
var getMovieById = require('./get-movie-by-id.js')
var getYears = require('./get-years.js')
var getAwards = require('./get-awards.js')
var getCategories = require('./get-categories.js')
var updateNomination = require('./update-nomination.js')

module.exports = function queries (sequelize) {
  return {
    createMovie: createMovie(sequelize)
  , getMovies: getMovies(sequelize)
  , getMovieById: getMovieById(sequelize)
  , getYears: getYears(sequelize)
  , getAwards: getAwards(sequelize)
  , getCategories: getCategories(sequelize)
  , updateNomination: updateNomination(sequelize)
  }
}
