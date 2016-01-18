var defaults = require('lodash/defaults.js')

var commonData = {
  createdAt: new Date()
, updatedAt: new Date()
}

module.exports = {
  up: function (queryInterface) {
    return queryInterface.bulkInsert('nominations', [
      // oscars
      // actor
      defaults({award_id: 1, category_id: 1, movie_id: 54, person_id: 13}, commonData)
    , defaults({award_id: 1, category_id: 1, movie_id: 49, person_id: 58}, commonData)
    , defaults({award_id: 1, category_id: 1, movie_id: 51, person_id: 45}, commonData)
    , defaults({award_id: 1, category_id: 1, movie_id: 33, person_id: 62}, commonData)
    , defaults({award_id: 1, category_id: 1, movie_id: 42, person_id: 24}, commonData)
    // actor - supporting
    , defaults({award_id: 1, category_id: 4, movie_id: 38, person_id: 18}, commonData)
    , defaults({award_id: 1, category_id: 4, movie_id: 51, person_id: 84}, commonData)
    , defaults({award_id: 1, category_id: 4, movie_id: 31, person_id: 51}, commonData)
    , defaults({award_id: 1, category_id: 4, movie_id: 7, person_id: 52}, commonData)
    , defaults({award_id: 1, category_id: 4, movie_id: 13, person_id: 81}, commonData)
    // actress
    , defaults({award_id: 1, category_id: 5, movie_id: 9, person_id: 15}, commonData)
    , defaults({award_id: 1, category_id: 5, movie_id: 27, person_id: 12}, commonData)
    , defaults({award_id: 1, category_id: 5, movie_id: 22, person_id: 36}, commonData)
    , defaults({award_id: 1, category_id: 5, movie_id: 1, person_id: 17}, commonData)
    , defaults({award_id: 1, category_id: 5, movie_id: 8, person_id: 78}, commonData)
    // actress - supporting
    , defaults({award_id: 1, category_id: 8, movie_id: 45, person_id: 35}, commonData)
    , defaults({award_id: 1, category_id: 8, movie_id: 9, person_id: 75}, commonData)
    , defaults({award_id: 1, category_id: 8, movie_id: 31, person_id: 71}, commonData)
    , defaults({award_id: 1, category_id: 8, movie_id: 42, person_id: 8}, commonData)
    , defaults({award_id: 1, category_id: 8, movie_id: 33, person_id: 44}, commonData)
    // animated feature
    , defaults({award_id: 1, category_id: 9, movie_id: 5}, commonData)
    , defaults({award_id: 1, category_id: 9, movie_id: 39}, commonData)
    , defaults({award_id: 1, category_id: 9, movie_id: 21}, commonData)
    , defaults({award_id: 1, category_id: 9, movie_id: 28}, commonData)
    , defaults({award_id: 1, category_id: 9, movie_id: 56}, commonData)
    // cinematography
    , defaults({award_id: 1, category_id: 10, movie_id: 9}, commonData)
    , defaults({award_id: 1, category_id: 10, movie_id: 45}, commonData)
    , defaults({award_id: 1, category_id: 10, movie_id: 24}, commonData)
    , defaults({award_id: 1, category_id: 10, movie_id: 51}, commonData)
    , defaults({award_id: 1, category_id: 10, movie_id: 29}, commonData)
    // costume design
    , defaults({award_id: 1, category_id: 11, movie_id: 9}, commonData)
    , defaults({award_id: 1, category_id: 11, movie_id: 11}, commonData)
    , defaults({award_id: 1, category_id: 11, movie_id: 42}, commonData)
    , defaults({award_id: 1, category_id: 11, movie_id: 24}, commonData)
    , defaults({award_id: 1, category_id: 11, movie_id: 51}, commonData)
    // director
    , defaults({award_id: 1, category_id: 12, movie_id: 38, person_id: 2}, commonData)
    , defaults({award_id: 1, category_id: 12, movie_id: 24, person_id: 29}, commonData)
    , defaults({award_id: 1, category_id: 12, movie_id: 51, person_id: 5}, commonData)
    , defaults({award_id: 1, category_id: 12, movie_id: 27, person_id: 46}, commonData)
    , defaults({award_id: 1, category_id: 12, movie_id: 31, person_id: 86}, commonData)
    // documentary
    , defaults({award_id: 1, category_id: 13, movie_id: 4}, commonData)
    , defaults({award_id: 1, category_id: 13, movie_id: 10}, commonData)
    , defaults({award_id: 1, category_id: 13, movie_id: 48}, commonData)
    , defaults({award_id: 1, category_id: 13, movie_id: 55}, commonData)
    , defaults({award_id: 1, category_id: 13, movie_id: 57}, commonData)
    // film editing
    , defaults({award_id: 1, category_id: 14, movie_id: 38, person_id: 30}, commonData)
    , defaults({award_id: 1, category_id: 14, movie_id: 24, person_id: 53}, commonData)
    , defaults({award_id: 1, category_id: 14, movie_id: 51, person_id: 79}, commonData)
    , defaults({award_id: 1, category_id: 14, movie_id: 31, person_id: 85}, commonData)
    , defaults({award_id: 1, category_id: 14, movie_id: 36, person_id: 56}, commonData)
    , defaults({award_id: 1, category_id: 14, movie_id: 36, person_id: 55}, commonData)
    // foreign
    , defaults({award_id: 1, category_id: 15, movie_id: 15}, commonData)
    , defaults({award_id: 1, category_id: 15, movie_id: 25}, commonData)
    , defaults({award_id: 1, category_id: 15, movie_id: 30}, commonData)
    , defaults({award_id: 1, category_id: 15, movie_id: 58}, commonData)
    , defaults({award_id: 1, category_id: 15, movie_id: 3}, commonData)
    // makeup hair
    , defaults({award_id: 1, category_id: 16, movie_id: 24}, commonData)
    , defaults({award_id: 1, category_id: 16, movie_id: 37}, commonData)
    , defaults({award_id: 1, category_id: 16, movie_id: 51}, commonData)
    // original score
    , defaults({award_id: 1, category_id: 17, movie_id: 7, person_id: 82}, commonData)
    , defaults({award_id: 1, category_id: 17, movie_id: 9, person_id: 14}, commonData)
    , defaults({award_id: 1, category_id: 17, movie_id: 45, person_id: 27}, commonData)
    , defaults({award_id: 1, category_id: 17, movie_id: 29, person_id: 39}, commonData)
    , defaults({award_id: 1, category_id: 17, movie_id: 36, person_id: 41}, commonData)
    // original song
    , defaults({award_id: 1, category_id: 18, movie_id: 17}, commonData)
    , defaults({award_id: 1, category_id: 18, movie_id: 26}, commonData)
    , defaults({award_id: 1, category_id: 18, movie_id: 46}, commonData)
    , defaults({award_id: 1, category_id: 18, movie_id: 58}, commonData)
    , defaults({award_id: 1, category_id: 18, movie_id: 35}, commonData)
    // picture
    , defaults({award_id: 1, category_id: 19, movie_id: 38}, commonData)
    , defaults({award_id: 1, category_id: 19, movie_id: 8}, commonData)
    , defaults({award_id: 1, category_id: 19, movie_id: 24}, commonData)
    , defaults({award_id: 1, category_id: 19, movie_id: 7}, commonData)
    , defaults({award_id: 1, category_id: 19, movie_id: 49}, commonData)
    , defaults({award_id: 1, category_id: 19, movie_id: 51}, commonData)
    , defaults({award_id: 1, category_id: 19, movie_id: 27}, commonData)
    , defaults({award_id: 1, category_id: 19, movie_id: 31}, commonData)
    // production design
    , defaults({award_id: 1, category_id: 22, movie_id: 7}, commonData)
    , defaults({award_id: 1, category_id: 22, movie_id: 42}, commonData)
    , defaults({award_id: 1, category_id: 22, movie_id: 49}, commonData)
    , defaults({award_id: 1, category_id: 22, movie_id: 51}, commonData)
    , defaults({award_id: 1, category_id: 22, movie_id: 24}, commonData)
    // screenplay adapted
    , defaults({award_id: 1, category_id: 24, movie_id: 38, person_id: 16}, commonData)
    , defaults({award_id: 1, category_id: 24, movie_id: 8, person_id: 64}, commonData)
    , defaults({award_id: 1, category_id: 24, movie_id: 9, person_id: 69}, commonData)
    , defaults({award_id: 1, category_id: 24, movie_id: 49, person_id: 22}, commonData)
    , defaults({award_id: 1, category_id: 24, movie_id: 27, person_id: 25}, commonData)
    // screenplay original
    , defaults({award_id: 1, category_id: 25, movie_id: 7, person_id: 57}, commonData)
    , defaults({award_id: 1, category_id: 25, movie_id: 7, person_id: 28}, commonData)
    , defaults({award_id: 1, category_id: 25, movie_id: 7, person_id: 38}, commonData)
    , defaults({award_id: 1, category_id: 25, movie_id: 16, person_id: 6}, commonData)
    , defaults({award_id: 1, category_id: 25, movie_id: 21, person_id: 68}, commonData)
    , defaults({award_id: 1, category_id: 25, movie_id: 21, person_id: 60}, commonData)
    , defaults({award_id: 1, category_id: 25, movie_id: 31, person_id: 43}, commonData)
    , defaults({award_id: 1, category_id: 25, movie_id: 31, person_id: 86}, commonData)
    , defaults({award_id: 1, category_id: 25, movie_id: 34, person_id: 42}, commonData)
    // sound editing
    , defaults({award_id: 1, category_id: 26, movie_id: 24}, commonData)
    , defaults({award_id: 1, category_id: 26, movie_id: 49}, commonData)
    , defaults({award_id: 1, category_id: 26, movie_id: 51}, commonData)
    , defaults({award_id: 1, category_id: 26, movie_id: 29}, commonData)
    , defaults({award_id: 1, category_id: 26, movie_id: 36}, commonData)
    // sound mixing
    , defaults({award_id: 1, category_id: 27, movie_id: 7}, commonData)
    , defaults({award_id: 1, category_id: 27, movie_id: 49}, commonData)
    , defaults({award_id: 1, category_id: 27, movie_id: 24}, commonData)
    , defaults({award_id: 1, category_id: 27, movie_id: 51}, commonData)
    , defaults({award_id: 1, category_id: 27, movie_id: 36}, commonData)
    // visual effects
    , defaults({award_id: 1, category_id: 28, movie_id: 16}, commonData)
    , defaults({award_id: 1, category_id: 28, movie_id: 24}, commonData)
    , defaults({award_id: 1, category_id: 28, movie_id: 49}, commonData)
    , defaults({award_id: 1, category_id: 28, movie_id: 51}, commonData)
    , defaults({award_id: 1, category_id: 28, movie_id: 36}, commonData)
    // golden globes
    // picture - drama
    , defaults({award_id: 2, category_id: 20, movie_id: 51, winner: true}, commonData)
    , defaults({award_id: 2, category_id: 20, movie_id: 24}, commonData)
    , defaults({award_id: 2, category_id: 20, movie_id: 9}, commonData)
    , defaults({award_id: 2, category_id: 20, movie_id: 31}, commonData)
    , defaults({award_id: 2, category_id: 20, movie_id: 27}, commonData)
    // picture - musica/comedy
    , defaults({award_id: 2, category_id: 21, movie_id: 49, winner: true}, commonData)
    , defaults({award_id: 2, category_id: 21, movie_id: 22}, commonData)
    , defaults({award_id: 2, category_id: 21, movie_id: 32}, commonData)
    , defaults({award_id: 2, category_id: 21, movie_id: 53}, commonData)
    , defaults({award_id: 2, category_id: 21, movie_id: 38}, commonData)
    // actress - drama
    , defaults({award_id: 2, category_id: 6, movie_id: 27, person_id: 12, winner: true}, commonData)
    , defaults({award_id: 2, category_id: 6, movie_id: 8, person_id: 78}, commonData)
    , defaults({award_id: 2, category_id: 6, movie_id: 9, person_id: 15}, commonData)
    , defaults({award_id: 2, category_id: 6, movie_id: 9, person_id: 75}, commonData)
    , defaults({award_id: 2, category_id: 6, movie_id: 42, person_id: 8}, commonData)
    // actor - drama
    , defaults({award_id: 2, category_id: 2, movie_id: 51, person_id: 45, winner: true}, commonData)
    , defaults({award_id: 2, category_id: 2, movie_id: 12, person_id: 87}, commonData)
    , defaults({award_id: 2, category_id: 2, movie_id: 33, person_id: 62}, commonData)
    , defaults({award_id: 2, category_id: 2, movie_id: 42, person_id: 24}, commonData)
    , defaults({award_id: 2, category_id: 2, movie_id: 54, person_id: 13}, commonData)
    // actress - comedy
    , defaults({award_id: 2, category_id: 7, movie_id: 22, person_id: 36, winner: true}, commonData)
    , defaults({award_id: 2, category_id: 7, movie_id: 19, person_id: 47}, commonData)
    , defaults({award_id: 2, category_id: 7, movie_id: 32, person_id: 61}, commonData)
    , defaults({award_id: 2, category_id: 7, movie_id: 47, person_id: 49}, commonData)
    , defaults({award_id: 2, category_id: 7, movie_id: 53, person_id: 10}, commonData)
    // actor - comedy/musical
    , defaults({award_id: 2, category_id: 3, movie_id: 49, person_id: 58, winner: true}, commonData)
    , defaults({award_id: 2, category_id: 3, movie_id: 14, person_id: 3}, commonData)
    , defaults({award_id: 2, category_id: 3, movie_id: 38, person_id: 18}, commonData)
    , defaults({award_id: 2, category_id: 3, movie_id: 20, person_id: 51}, commonData)
    , defaults({award_id: 2, category_id: 3, movie_id: 38, person_id: 80}, commonData)
    // actress - supporting
    , defaults({award_id: 2, category_id: 8, movie_id: 33, person_id: 44, winner: true}, commonData)
    , defaults({award_id: 2, category_id: 8, movie_id: 45, person_id: 35}, commonData)
    , defaults({award_id: 2, category_id: 8, movie_id: 54, person_id: 31}, commonData)
    , defaults({award_id: 2, category_id: 8, movie_id: 58, person_id: 34}, commonData)
    , defaults({award_id: 2, category_id: 8, movie_id: 16, person_id: 8}, commonData)
    // actor - supporting
    , defaults({award_id: 2, category_id: 4, movie_id: 13, person_id: 81, winner: true}, commonData)
    , defaults({award_id: 2, category_id: 4, movie_id: 2, person_id: 63}, commonData)
    , defaults({award_id: 2, category_id: 4, movie_id: 6, person_id: 32}, commonData)
    , defaults({award_id: 2, category_id: 4, movie_id: 7, person_id: 52}, commonData)
    , defaults({award_id: 2, category_id: 4, movie_id: 23, person_id: 67}, commonData)
    // director
    , defaults({award_id: 2, category_id: 12, movie_id: 51, person_id: 5, winner: true}, commonData)
    , defaults({award_id: 2, category_id: 12, movie_id: 9, person_id: 83}, commonData)
    , defaults({award_id: 2, category_id: 12, movie_id: 24, person_id: 29}, commonData)
    , defaults({award_id: 2, category_id: 12, movie_id: 31, person_id: 86}, commonData)
    , defaults({award_id: 2, category_id: 12, movie_id: 49, person_id: 72}, commonData)
    // screenplay
    , defaults({award_id: 2, category_id: 23, movie_id: 33, person_id: 1, winner: true}, commonData)
    , defaults({award_id: 2, category_id: 23, movie_id: 27, person_id: 25}, commonData)
    , defaults({award_id: 2, category_id: 23, movie_id: 31, person_id: 43}, commonData)
    , defaults({award_id: 2, category_id: 23, movie_id: 31, person_id: 86}, commonData)
    , defaults({award_id: 2, category_id: 23, movie_id: 45, person_id: 70}, commonData)
    , defaults({award_id: 2, category_id: 23, movie_id: 38, person_id: 2}, commonData)
    , defaults({award_id: 2, category_id: 23, movie_id: 38, person_id: 16}, commonData)
    // animated
    , defaults({award_id: 2, category_id: 9, movie_id: 21, winner: true}, commonData)
    , defaults({award_id: 2, category_id: 9, movie_id: 28}, commonData)
    , defaults({award_id: 2, category_id: 9, movie_id: 44}, commonData)
    , defaults({award_id: 2, category_id: 9, movie_id: 50}, commonData)
    , defaults({award_id: 2, category_id: 9, movie_id: 5}, commonData)
    // foreign language
    , defaults({award_id: 2, category_id: 15, movie_id: 30, winner: true}, commonData)
    , defaults({award_id: 2, category_id: 15, movie_id: 25}, commonData)
    , defaults({award_id: 2, category_id: 15, movie_id: 40}, commonData)
    , defaults({award_id: 2, category_id: 15, movie_id: 41}, commonData)
    , defaults({award_id: 2, category_id: 15, movie_id: 43}, commonData)
    // original score
    , defaults({award_id: 2, category_id: 17, movie_id: 45, person_id: 27, winner: true}, commonData)
    , defaults({award_id: 2, category_id: 17, movie_id: 9, person_id: 14}, commonData)
    , defaults({award_id: 2, category_id: 17, movie_id: 33, person_id: 19}, commonData)
    , defaults({award_id: 2, category_id: 17, movie_id: 42, person_id: 7}, commonData)
    , defaults({award_id: 2, category_id: 17, movie_id: 51, person_id: 9}, commonData)
    , defaults({award_id: 2, category_id: 17, movie_id: 51, person_id: 76}, commonData)
    // original song
    , defaults({award_id: 2, category_id: 18, movie_id: 35, winner: true}, commonData)
    , defaults({award_id: 2, category_id: 18, movie_id: 17}, commonData)
    , defaults({award_id: 2, category_id: 18, movie_id: 18}, commonData)
    , defaults({award_id: 2, category_id: 18, movie_id: 23}, commonData)
    , defaults({award_id: 2, category_id: 18, movie_id: 58}, commonData)
    ])
  },

  down: function (queryInterface) {
    return queryInterface.bulkDelete('nominations', null, {});
  }
}
