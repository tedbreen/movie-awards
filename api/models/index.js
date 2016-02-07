var Movie = require('./movie.js')
var Award = require('./award.js')
var Person = require('./person.js')
var Category = require('./category.js')
var Nomination = require('./nomination.js')

module.exports = function (sequelize) {
  return {
    Movie: Movie(sequelize)
  , Award: Award(sequelize)
  , Person: Person(sequelize)
  , Category: Category(sequelize)
  , Nomination: Nomination(sequelize)
  }
}
