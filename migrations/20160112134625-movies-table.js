module.exports = {
  up: function (queryInterface, Sequelize) {
    var moviesAttrs = {
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
    , year: {
        type: Sequelize.INTEGER
      , allowNull: false
      }
    , imdb_id: {
        type: Sequelize.STRING
      }
    }

    var moviesOpts = {
      comment: 'Award nominated movies'
    }

    var titleIndexOpts = {
      indicesType: 'UNIQUE'
    }

    return queryInterface.createTable('movies', moviesAttrs, moviesOpts).then(
      function createTableFulfilled () {
        return Promise.all([
        , queryInterface.addIndex('movies', ['title'], titleIndexOpts)
        , queryInterface.addIndex('movies', ['year'])
        ])
      }
    )
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('movies')
  }
}
