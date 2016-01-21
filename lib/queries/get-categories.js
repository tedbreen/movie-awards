module.exports = function (sequelize) {
  return function getCategories (req, res) {
    var award_id = req.query.award_id ? '= ' + req.query.award_id : 'IS NOT NULL'

    var query = 'SELECT DISTINCT ' +
                'categories.id AS id, categories.title AS title ' +
                'FROM categories ' +
                'JOIN nominations ' +
                'ON categories.id = nominations.category_id ' +
                'WHERE nominations.award_id ' + award_id +
                ' ORDER BY title'


    var queryOptions = {
      type: sequelize.QueryTypes.SELECT
    }

    var fulfill = function fulfill (categories) {
      res.send(categories)
    }

    var reject = function reject (err) {
      res.status(500).send(err)
    }

    return sequelize.query(query, queryOptions).then(fulfill, reject)
  }
}
