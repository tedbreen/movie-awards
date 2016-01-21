var express = require('express')
var Sequelize = require('sequelize')
var bodyParser = require('body-parser')

// create app
var app = express()
app.use(bodyParser.json())

// sequelize initialization
var sequelize = new Sequelize('postgres://tedbreen@localhost/movie_awards')

var queries = require('./lib/queries')(sequelize)

var syncFulfill = function syncFulfill () {
  app.post('/movies', queries.createMovie)
  app.get('/movies', queries.getMovies)
  app.get('/movies/:id', queries.getMovieById)

  app.get('/years', queries.getYears)

  app.get('/awards', queries.getAwards)

  app.get('/categories', queries.getCategories)

  app.listen(5000)
}

var syncReject = function syncReject (err) {
  console.error('There was an error:', err)
}

sequelize.sync().then(syncFulfill, syncReject)