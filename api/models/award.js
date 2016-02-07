var Sequelize = require('sequelize')

module.exports = function (sequelize) {
  var awardAttrs = {
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
  }

  var awardOpts = {
    tableName: 'awards'
  , comment: 'Award types'
  , indexes: [
      {
        fields: ['name']
      , unique: true
      }
    ]
  }

  return sequelize.define('Award', awardAttrs, awardOpts)
}
