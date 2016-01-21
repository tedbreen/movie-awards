module.exports = function (sequelize) {
  return function getMovieById (req, res) {
    var id = req.params.id

    var query = 'SELECT awards.name AS award, ' +
                'categories.title AS category, '+
                'movies.year AS year, ' +
                'movies.title AS movie, ' +
                'persons.name AS person, ' +
                'persons.id AS person_id, ' +
                'nominations.id AS nomination_id, ' +
                'nominations.winner AS winner ' +
                'FROM nominations ' +
                'JOIN movies ' +
                'ON movies.id = nominations.movie_id ' +
                'JOIN awards ' +
                'ON awards.id = nominations.award_id ' +
                'JOIN categories ' +
                'ON categories.id = nominations.category_id ' +
                'LEFT OUTER JOIN persons ' +
                'ON persons.id = nominations.person_id ' +
                'WHERE movies.id = ' + id + ' ' +
                'ORDER BY award'


    var queryOptions = {
      type: sequelize.QueryTypes.SELECT
    }

    var fulfill = function fulfill (nominations) {
      res.send(nominations)
    }

    var reject = function reject (err) {
      res.status(500).send(err)      
    }

    return sequelize.query(query, queryOptions).then(fulfill, reject)
  }
}
