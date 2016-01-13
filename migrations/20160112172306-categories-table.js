module.exports = {
  up: function (queryInterface, Sequelize) {
    var categoriesAttrs = {
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
    , title: {
        type: Sequelize.STRING
      , allowNull: false
      }
    }

    var categoriesOpts = {
      comment: 'Award types'
    }

    var titleIndexOpts = {
      indicesType: 'UNIQUE'
    }

    return queryInterface.createTable('categories', categoriesAttrs, categoriesOpts).then(
      function createTableFulfilled () {
        return queryInterface.addIndex('categories', ['title'], titleIndexOpts)
      }
    )
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('categories')
  }
}
