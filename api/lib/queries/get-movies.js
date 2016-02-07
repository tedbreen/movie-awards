module.exports = function (sequelize) {
  return function getMovies (req, res) {
    var year = req.query.year ? '= ' + req.query.year : 'IS NOT NULL'
    var award_id = req.query.award_id ? '= ' + req.query.award_id : 'IS NOT NULL'
    var category_id = req.query.category_id ? '= ' + req.query.category_id : 'IS NOT NULL'

    var query = `
      SELECT DISTINCT movies.title AS title,
        movies.id AS movie_id,
        movies.year AS year
      FROM movies
      JOIN nominations
      ON movies.id = nominations.movie_id
      JOIN categories
      ON categories.id = nominations.category_id
      JOIN awards
      ON awards.id = categories.award_id
      WHERE year ${year}
        AND awards.id ${award_id}
        AND nominations.category_id ${category_id}
      ORDER BY title`

    // filtering by award_id and category_id is redundant,
    // but filtering by year and award_id or year and category_id is cool.

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
