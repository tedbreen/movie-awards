var models = require('./models')

module.exports = function movieService (sequelize) {
  var Movie = models(sequelize).Movie

  var createMovie = function createMovie (req, res) {
    var newMovie = {
      title: req.body.title
    }
    var createFulfill = function createFulfill () {
      res.sendStatus(200)
    }
    var createReject = function createReject (reason) {
      console.error(reason)
      res.status(500).send('There was an error creating a movie')
    }

    return Movie.create(newMovie).then(createFulfill, createReject)
  }

  var getAllMovies = function getAllMovies (req, res) {
    var findFulfill = function findFulfill (movies) {
      res.send(movies)
    }
    var findReject = function findReject (reason) {
      console.error(reason)
      res.status(500).send('There was an error getting the movies')
    }

    return Movie.findAll().then(findFulfill, findReject)
  }

  return {
    createMovie: createMovie
  , getAllMovies: getAllMovies
  }
}