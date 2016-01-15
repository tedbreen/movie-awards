var Sequelize = require('sequelize')

module.exports = function (sequelize) {
  var movieAttrs = {
    id: {
      type: Sequelize.INTEGER
    , allowNull: false
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
  }

  var movieOpts = {
    tableName: 'movies'
  , comment: 'Movies nominated for awards'
  , indexes: [
      {
        fields: ['title']
      , unique: true
      }
    , {
        fields: ['year']
      }
    ]
  }

  return sequelize.define('Movie', movieAttrs, movieOpts)
}
