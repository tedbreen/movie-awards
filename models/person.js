var Sequelize = require('sequelize')

module.exports = function (sequelize) {
  var personAttrs = {
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

  var personOpts = {
    tableName: 'persons'
  , comment: 'Persons nominated for awards'
  , indexes: [
      {
        fields: ['name']
      , unique: true
      }
    ]
  }

  return sequelize.define('Person', personAttrs, personOpts)
}