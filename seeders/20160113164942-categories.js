var defaults = require('lodash/defaults.js')

var commonData = {
  createdAt: new Date()
, updatedAt: new Date()
}

module.exports = {
  up: function (queryInterface) {
    return queryInterface.bulkInsert('categories', [
      defaults({title: 'Actor'}, commonData)
    , defaults({title: 'Actor - Drama'}, commonData)
    , defaults({title: 'Actor - Musical or Comedy'}, commonData)
    , defaults({title: 'Actor - Supporting'}, commonData)
    , defaults({title: 'Actress'}, commonData)
    , defaults({title: 'Actress - Drama'}, commonData)
    , defaults({title: 'Actress - Musical or Comedy'}, commonData)
    , defaults({title: 'Actress - Supporting'}, commonData)
    , defaults({title: 'Animated Feature'}, commonData)
    , defaults({title: 'Cinematography'}, commonData)
    , defaults({title: 'Costume Design'}, commonData)
    , defaults({title: 'Director'}, commonData)
    , defaults({title: 'Documentary Feature'}, commonData)
    , defaults({title: 'Film Editing'}, commonData)
    , defaults({title: 'Foreign Language Film'}, commonData)
    , defaults({title: 'Makeup and Hairstyling'}, commonData)
    , defaults({title: 'Original Score'}, commonData)
    , defaults({title: 'Original Song'}, commonData)
    , defaults({title: 'Picture'}, commonData)
    , defaults({title: 'Picture - Drama'}, commonData)
    , defaults({title: 'Picture - Musical or Comedy'}, commonData)
    , defaults({title: 'Production Design'}, commonData)
    , defaults({title: 'Screenplay'}, commonData)
    , defaults({title: 'Screenplay - Adapted'}, commonData)
    , defaults({title: 'Screenplay - Original'}, commonData)
    , defaults({title: 'Sound Editing'}, commonData)
    , defaults({title: 'Sound Mixing'}, commonData)
    , defaults({title: 'Visual Effects'}, commonData)
    ])
  },

  down: function (queryInterface) {
    return queryInterface.bulkDelete('categories', null, {})
  }
}
