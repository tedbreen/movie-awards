module.exports = function (sequelize) {
  return function getCategories (req, res) {
    var award_id = req.query.award_id ? '= ' + req.query.award_id : 'IS NOT NULL'

    var query = `
      SELECT awards.name AS award,
        awards.id AS award_id,
        categories.title AS category,
        categories.id AS category_id
      FROM categories
      JOIN awards
      ON categories.award_id = awards.id
      WHERE categories.award_id ${award_id}
      ORDER BY award,
        title`

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
