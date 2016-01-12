var Sequelize = require('sequelize')

module.exports = function (sequelize) {
  var Movie = sequelize.define('Movie', {
    // attributes
    id: {
      type: Sequelize.INTEGER
    , primaryKey: true
    , autoIncrement: true
    }
  , title: {
      type: Sequelize.STRING
    , allowNull: false
    }
  }, {
    // options
    tableName: 'movies'
  , comment: 'Award nominated movies'
  , indexes: [
      {
        fields: ['title']
      , unique: true
      }
    ]
  })

  return Movie
}