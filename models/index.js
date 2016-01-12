var Movie = require('./movie.js')
  , Award = require('./award.js')

module.exports = function (sequelize) {
  return {
    Movie: Movie(sequelize)
  , Award: Award(sequelize)
  }
}