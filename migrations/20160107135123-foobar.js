'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('movies', {
      // attributes
      id: {
        type: Sequelize.INTEGER
      , primaryKey: true
      , autoIncrement: true
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
    , createdAt: {
        type: Sequelize.DATE
      }
    , updatedAt: {
        type: Sequelize.DATE
      }
    }, {
      // options
      comment: 'Award nominated movies'
    , indexes: [
        {
          fields: ['title']
        , unique: true
        }
      , {
          fields: ['year']
        , unique: false
        }
      ]
    }).then(function fulfilled () {
      console.log('CREATE TABLE: movies')

      return queryInterface.createTable('awards', {
        // attributes
        id: {
          type: Sequelize.INTEGER
        , primaryKey: true
        , autoIncrement: true
        }
      , name: {
          type: Sequelize.STRING
        , allowNull: false
        }
      , createdAt: {
          type: Sequelize.DATE
        }
        , updatedAt: {
          type: Sequelize.DATE
        }
      }, {
        // options
        comment: 'Awarding bodies'
      , indexes: [
          {
            field: ['name']
          , unique: true
          }
        ]
      }).then(function fulfilled () {
        console.log('CREATE TABLE: awards')
      })
    })
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('movies').then(function fulfilled () {
      console.log('DROP TABLE: movies')
      return queryInterface.dropTable('awards').then(function fulfilled () {
        console.log('DROP TABLE: awards')
      })
    });
  }
};