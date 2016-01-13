module.exports = {
  up: function (queryInterface, Sequelize) {
    var awardsAttrs = {
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

    var awardsOpts = {
      comment: 'Award types'
    }

    var nameIndexOpts = {
      indicesType: 'UNIQUE'
    }

    return queryInterface.createTable('awards', awardsAttrs, awardsOpts).then(
      function createTableFulfilled () {
        return queryInterface.addIndex('awards', ['name'], nameIndexOpts)
      }
    )
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('awards')
  }
}
