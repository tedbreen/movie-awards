module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.bulkInsert('categories', [
      {title: 'Actor',                        createdAt: new Date(), updatedAt: new Date()}
    , {title: 'Actor - Drama',                createdAt: new Date(), updatedAt: new Date()}
    , {title: 'Actor - Musical or Comedy',    createdAt: new Date(), updatedAt: new Date()}
    , {title: 'Actress',                      createdAt: new Date(), updatedAt: new Date()}
    , {title: 'Actress - Drama',              createdAt: new Date(), updatedAt: new Date()}
    , {title: 'Actress - Musical or Comedy',  createdAt: new Date(), updatedAt: new Date()}
    , {title: 'Animated Feature',             createdAt: new Date(), updatedAt: new Date()}
    , {title: 'Cinematography',               createdAt: new Date(), updatedAt: new Date()}
    , {title: 'Costume Design',               createdAt: new Date(), updatedAt: new Date()}
    , {title: 'Director',                     createdAt: new Date(), updatedAt: new Date()}
    , {title: 'Documentary Feature',          createdAt: new Date(), updatedAt: new Date()}
    , {title: 'Film Editing',                 createdAt: new Date(), updatedAt: new Date()}
    , {title: 'Foreign Language Film',        createdAt: new Date(), updatedAt: new Date()}
    , {title: 'Makeup and Hairstyling',       createdAt: new Date(), updatedAt: new Date()}
    , {title: 'Original Score',               createdAt: new Date(), updatedAt: new Date()}
    , {title: 'Original Song',                createdAt: new Date(), updatedAt: new Date()}
    , {title: 'Picture',                      createdAt: new Date(), updatedAt: new Date()}
    , {title: 'Picture - Drama',              createdAt: new Date(), updatedAt: new Date()}
    , {title: 'Picture - Musical or Comedy',  createdAt: new Date(), updatedAt: new Date()}
    , {title: 'Production Design',            createdAt: new Date(), updatedAt: new Date()}
    , {title: 'Screenplay',                   createdAt: new Date(), updatedAt: new Date()}
    , {title: 'Screenplay - Adapted',         createdAt: new Date(), updatedAt: new Date()}
    , {title: 'Screenplay - Original',        createdAt: new Date(), updatedAt: new Date()}
    , {title: 'Sound Editing',                createdAt: new Date(), updatedAt: new Date()}
    , {title: 'Supporting Actor',             createdAt: new Date(), updatedAt: new Date()}
    , {title: 'Supporting Actress',           createdAt: new Date(), updatedAt: new Date()}
    , {title: 'Visual Effects',               createdAt: new Date(), updatedAt: new Date()}
    ])
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('categories', null, {})
  }
}
