var express = require('express')
var Sequelize = require('sequelize')
var bodyParser = require('body-parser')

// create app
var app = express()

app.use(bodyParser.json())

var port = 5000

// sequelize initialization
var sequelize = new Sequelize('postgres://tedbreen@localhost/movie_awards')

var queries = require('./api/lib/queries')(sequelize)

var syncFulfill = function syncFulfill () {
  app.post('/api/movies', queries.createMovie)
  app.get('/api/movies', queries.getMovies)
  app.get('/api/movies/:id', queries.getMovieById)

  app.get('/api/years', queries.getYears)

  app.get('/api/awards', queries.getAwards)

  app.get('/api/categories', queries.getCategories)

  app.put('/api/nominations/:id', queries.updateNomination)

  app.listen(5000, function listenCB () {
    console.log(`movie-awards server is listening on port ${port}`)
  })
}

var syncReject = function syncReject (err) {
  console.error('There was an error:', err)
}

sequelize.sync().then(syncFulfill, syncReject)