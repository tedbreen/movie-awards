module.exports = function (sequelize) {
  return function getYears (req, res) {
    var query = 'SELECT DISTINCT movies.year AS year ' +
                'FROM movies ' +
                'ORDER BY year DESC'

    var queryOptions = {
      type: sequelize.QueryTypes.SELECT
    }

    var fulfill = function fulfill (years) {
      years = years.map(function map (year) {
        return year.year
      })

      res.send(years)
    }

    var reject = function reject (err) {
      res.status(500).send(err)
    }

    return sequelize.query(query, queryOptions).then(fulfill, reject)
  }
}