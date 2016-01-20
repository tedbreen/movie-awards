module.exports = function (sequelize) {
  return function getAwards (req, res) {
    var query = 'SELECT awards.id as id, awards.name as name ' +
                'FROM awards'

    var queryOptions = {
      type: sequelize.QueryTypes.SELECT
    }

    var fulfill = function fulfill (awards) {
      res.send(awards)
    }

    var reject = function reject (err) {
      res.status(500).send(err)
    }

    return sequelize.query(query, queryOptions).then(fulfill, reject)
  }
}
