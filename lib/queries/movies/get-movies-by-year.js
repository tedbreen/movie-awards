module.exports = function (sequelize) {
  return function getMoviesByYear (req, res) {
    var year = req.params.year

    var query = 'SELECT movies.title AS movie, ' + 
                'movies.id AS movie_id ' +
                'FROM movies ' +
                'WHERE movies.year = ' + year + ' ' +
                'ORDER BY movie'

    var queryOptions = {
      type: sequelize.QueryTypes.SELECT
    }

    var fulfill = function fulfill (movies) {
      res.send(movies)
    }

    var reject = function queryReject (err) {
      res.status(500).send(err)      
    }

    return sequelize.query(query, queryOptions).then(fulfill, reject)
  }
}
