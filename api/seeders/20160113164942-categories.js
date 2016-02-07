var defaults = require('lodash/defaults.js')

var commonData = {
  createdAt: new Date()
, updatedAt: new Date()
}

module.exports = {
  up: function (queryInterface) {
    return queryInterface.bulkInsert('categories', [
      // academy awards
      defaults({award_id: 1, title: 'Picture'}, commonData)
    , defaults({award_id: 1, title: 'Actor - Leading'}, commonData)
    , defaults({award_id: 1, title: 'Actress - Leading'}, commonData)
    , defaults({award_id: 1, title: 'Actor - Supporting'}, commonData)
    , defaults({award_id: 1, title: 'Actress - Supporting'}, commonData)
    , defaults({award_id: 1, title: 'Animated Feature'}, commonData)
    , defaults({award_id: 1, title: 'Cinematography'}, commonData)
    , defaults({award_id: 1, title: 'Costume Design'}, commonData)
    , defaults({award_id: 1, title: 'Directing'}, commonData)
    , defaults({award_id: 1, title: 'Documentary Feature'}, commonData)
    , defaults({award_id: 1, title: 'Film Editing'}, commonData)
    , defaults({award_id: 1, title: 'Foreign Language Film'}, commonData)
    , defaults({award_id: 1, title: 'Makeup and Hairstyling'}, commonData)
    , defaults({award_id: 1, title: 'Music - Original Score'}, commonData)
    , defaults({award_id: 1, title: 'Music - Original Song'}, commonData)
    , defaults({award_id: 1, title: 'Production Design'}, commonData)
    , defaults({award_id: 1, title: 'Sound Editing'}, commonData)
    , defaults({award_id: 1, title: 'Sound Mixing'}, commonData)
    , defaults({award_id: 1, title: 'Visual Effects'}, commonData)
    , defaults({award_id: 1, title: 'Writing - Adapted Screenplay'}, commonData)
    , defaults({award_id: 1, title: 'Writing - Original Screenplay'}, commonData)
      // golden globes
    , defaults({award_id: 2, title: 'Picture - Drama'}, commonData)
    , defaults({award_id: 2, title: 'Picture - Musical or Comedy'}, commonData)
    , defaults({award_id: 2, title: 'Actress - Drama'}, commonData)
    , defaults({award_id: 2, title: 'Actor - Drama'}, commonData)
    , defaults({award_id: 2, title: 'Actress - Musical or Comedy'}, commonData)
    , defaults({award_id: 2, title: 'Actor - Musical or Comedy'}, commonData)
    , defaults({award_id: 2, title: 'Actress - Supporting'}, commonData)
    , defaults({award_id: 2, title: 'Actor - Supporting'}, commonData)
    , defaults({award_id: 2, title: 'Director'}, commonData)
    , defaults({award_id: 2, title: 'Screenplay'}, commonData)
    , defaults({award_id: 2, title: 'Picture - Animated'}, commonData)
    , defaults({award_id: 2, title: 'Picture - Foreign Language'}, commonData)
    , defaults({award_id: 2, title: 'Original Score'}, commonData)
    , defaults({award_id: 2, title: 'Original Song'}, commonData)
      // BAFTA - coming soon!
    ])
  }

, down: function (queryInterface) {
    return queryInterface.bulkDelete('categories', null, {})
  }
}
