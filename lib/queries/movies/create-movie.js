var models = require('../../../models')

module.exports = function (sequelize) {
  var Movie = models(sequelize).Movie

  return function createMovie (req, res) {
    var newMovie = {
      title: req.body.title
    , year: req.body.year
    }

    var fulfill = function fulfill () {
      res.sendStatus(200)
    }

    var reject = function reject (err) {
      res.status(500).send(err)
    }

    return Movie.create(newMovie).then(fulfill, reject)
  }
}