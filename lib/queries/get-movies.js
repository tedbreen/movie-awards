module.exports = function (sequelize) {
  return function getMovies (req, res) {
    var year = req.query.year ? '= ' + req.query.year : 'IS NOT NULL'
    var award_id = req.query.award_id ? '= ' + req.query.award_id : 'IS NOT NULL'
    var category_id = req.query.category_id ? '= ' + req.query.category_id : 'IS NOT NULL'

    var query = 'SELECT DISTINCT ' +
                'movies.id as id, movies.year as year, movies.title as title ' +
                'FROM movies ' +
                'JOIN nominations ' +
                'ON movies.id = nominations.movie_id ' +
                'WHERE year ' + year +
                ' AND ' +
                'nominations.award_id ' + award_id +
                ' AND ' +
                'nominations.category_id ' + category_id +
                ' ORDER BY title'


    var queryOptions = {
      type: sequelize.QueryTypes.SELECT
    }

    var fulfill = function fulfill (movies) {
      res.send(movies)
    }

    var reject = function reject (err) {
      res.status(500).send(err)
    }

    return sequelize.query(query, queryOptions).then(fulfill, reject)
  }
}
