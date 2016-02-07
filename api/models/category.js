var Sequelize = require('sequelize')
var Award = require('./award.js')

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
      }
    , {
        fields: ['award_id']
      }
    , {
        name: 'categories_with_award_id'
      , fields: ['title', 'award_id']
      , unique: true
      }
    ]
  }

  var Category = sequelize.define('Category', catAttrs, catOpts)

  // associations
  Category.belongsTo(Award(sequelize), {
    foreignKey: {
      name: 'award_id'
    , allowNull: false
    , onDelete: 'CASCADE'
    }
  })

  return Category
}
