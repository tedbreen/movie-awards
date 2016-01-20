var express = require('express')
var Sequelize = require('sequelize')
var bodyParser = require('body-parser')

// create app
var app = express()
app.use(bodyParser.json())

// sequelize initialization
var sequelize = new Sequelize('postgres://tedbreen@localhost/movie_awards')

var movieService = require('./movie-service.js')(sequelize)

var syncFulfill = function syncFulfill () {
  app.post('/movies', movieService.createMovie)
  app.get('/movies/:id', movieService.getMovieById)
  app.get('/movies/year/:year', movieService.getMoviesByYear)

  app.listen(5000)
}

var syncReject = function syncReject (err) {
  console.error('There was an error:', err)
}

sequelize.sync().then(syncFulfill, syncReject)