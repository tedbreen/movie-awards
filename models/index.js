var Movie = require('./movie.js')
  , Award = require('./award.js')
  , Person = require('./person.js')
  , Category = require('./category.js')

module.exports = function (sequelize) {
  return {
    Movie: Movie(sequelize)
  , Award: Award(sequelize)
  , Person: Person(sequelize)
  , Category: Category(sequelize)
  }
}
