var Sequelize = require('sequelize')

module.exports = function (sequelize) {
  var Category = sequelize.define('Category', {
    // attributes
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
  }, {
    // options
    tableName: 'categories'
  , comment: 'Award categories'
  , indexes: [
      {
        fields: ['title']
      , unique: true
      }
    ]
  })

  return Category
}
