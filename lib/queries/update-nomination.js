var isBoolean = require('lodash/isBoolean')
var isUndefined = require('lodash/isUndefined')
// var models = require('../../models')

module.exports = function (sequelize) {
  // var Nomination = models(sequelize).Nomination

  return function updateNomination (req, res) {
    var id = req.params.id
    var newValue = req.body.winner

    if (isUndefined(newValue)) {
      res.status(500).send('winner value is undefined')
    }
    else if (!isBoolean(newValue)) {
      res.status(500).send('winner value must be a boolean')
    }
    else {
      var query = 'UPDATE nominations ' +
                  'SET winner = ' + newValue + ' ' +
                  'WHERE id = ' + id

      var queryOptions = {
        type: sequelize.QueryTypes.UPDATE
      }

      var fulfill = function fulfill () {
        res.send({
          nomination_id: id
        , winner: newValue
        })
      }

      var reject = function reject (err) {
        res.status(500).send(err)
      }

      return sequelize.query(query, queryOptions).then(fulfill, reject)      
    }

    // The following method, using Sequelize model and instance methods, involves two queries.
    // Raw query gets it done with just one query.
  
    /* 

    var fulfill = function fulfill (nomination) {
      if (!nomination) {
        res.status(404).send('No nomination record with that id found')
      }
      else {
        nomination.set('winner', req.body.winner)
        return nomination.save().then(function saveFulfill (updatedNom) {
          res.send(updatedNom)
        }, function saveReject (err) {
          res.status(500).send(err)
        })
      }
    }

    var reject = function reject (err) {
      res.status(500).send(err)      
    }

    return Nomination.findById(id).then(fulfill, reject)

    */
  }
}
