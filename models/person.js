var Sequelize = require('sequelize')

module.exports = function (sequelize) {
  var Person = sequelize.define('Person', {
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
    tableName: 'persons'
  , comment: 'Persons nominated for movie awards'
  , indexes: [
      {
        fields: ['name']
      , unique: true
      }
    ]
  })

  return Person
}