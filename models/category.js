var Sequelize = require('sequelize')

module.exports = function (sequelize) {
  var catAttrs = {
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
  }

  var catOpts = {
    tableName: 'categories'
  , comment: 'Award categories'
  , indexes: [
      {
        fields: ['title']
      , unique: true
      }
    ]
  }

  return sequelize.define('Category', catAttrs, catOpts)
}
