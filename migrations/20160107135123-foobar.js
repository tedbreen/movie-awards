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
      , defaultValue: false
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
      comment: 'Award nominated movies'
    , indexes: [
        {
          field: ['title']
        , unique: true
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
        , defaultValue: false
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
