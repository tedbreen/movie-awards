var Sequelize = require('sequelize')

module.exports = function (sequelize) {
  var Award = sequelize.define('Award', {
    // attributes
    id: {
      type: Sequelize.INTEGER
    , allowNull: false
    , primaryKey: true
    , autoIncrement: true
    }
  , name: {
      type: Sequelize.STRING
    , allowNull: false
    }
  }, {
    // options
    tableName: 'awards'
  , comment: 'Award types'
  , indexes: [
      {
        fields: ['name']
      , unique: true
      }
    ]
  })

  return Award
}