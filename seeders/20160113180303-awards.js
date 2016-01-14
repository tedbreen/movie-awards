module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.bulkInsert('awards', [
      {name: 'Academy Award', createdAt: new Date(), updatedAt: new Date()}
    , {name: 'Golden Globe',  createdAt: new Date(), updatedAt: new Date()}
    ])
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('awards', null, {})
  }
}
