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
  , year: {
      type: Sequelize.INTEGER
    , allowNull: false
    }
  , imdb_id: {
      type: Sequelize.STRING
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
    , {
        fields: ['year']
      , unique: false
      }
    ]
  })

  return Movie
}