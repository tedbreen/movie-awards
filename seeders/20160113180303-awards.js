module.exports = {
  up: function (queryInterface) {
    return queryInterface.bulkInsert('awards', [
      {name: 'Academy Award', createdAt: new Date(), updatedAt: new Date()}
    , {name: 'Golden Globe',  createdAt: new Date(), updatedAt: new Date()}
    ])
  },

  down: function (queryInterface) {
    return queryInterface.bulkDelete('awards', null, {})
  }
}
