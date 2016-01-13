module.exports = {
  up: function (queryInterface, Sequelize) {
    var personsAttrs = {
      id: {
        type: Sequelize.INTEGER
      , allowNull: false
      , primaryKey: true
      , autoIncrement: true
      }
    , createdAt: {
        type: Sequelize.DATE
      , allowNull: false
      }
    , updatedAt: {
        type: Sequelize.DATE
      , allowNull: false
      }
    , name: {
        type: Sequelize.STRING
      , allowNull: false
      }
    }

    var personsOpts = {
      comment: 'Persons nominated for movie awards'
    }

    var nameIndexOpts = {
      indicesType: 'UNIQUE'
    }

    return queryInterface.createTable('persons', personsAttrs, personsOpts).then(
      function createTableFulfilled () {
        return queryInterface.addIndex('persons', ['name'], nameIndexOpts)
      }
    )
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('persons')
  }
}
