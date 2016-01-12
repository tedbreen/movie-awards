'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.bulkInsert('movies', [
      {title: 'Spotlight', createdAt: new Date(), updatedAt: new Date()}
    , {title: 'The Hateful Eight', createdAt: new Date(), updatedAt: new Date()}
    , {title: 'Carol', createdAt: new Date(), updatedAt: new Date()}
    ], {});

    queryInterface.bulkInsert('awards', [
      {name: 'Academy Awards', createdAt: new Date(), updatedAt: new Date()}
    , {name: 'Golden Globes', createdAt: new Date(), updatedAt: new Date()}
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.bulkDelete('movies', null, {});
    queryInterface.bulkDelete('awards', null, {});
  }
};
