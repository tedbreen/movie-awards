var Sequelize = require('sequelize')
var Category = require('./category.js')
var Movie = require('./movie.js')
var Person = require('./person.js')

module.exports = function (sequelize) {
  var nomAttrs = {
    id: {
      type: Sequelize.INTEGER
    , allowNull: false
    , primaryKey: true
    , autoIncrement: true
    }
  , winner: {
      type: Sequelize.BOOLEAN
    , allowNull: true
    , defaultValue: false
    }
  }
  var nomOpts = {
    tableName: 'nominations'
  , comment: 'Award nominations'
  , indexes: [
      {
        fields: ['category_id']
      }
    , {
        fields: ['movie_id']
      }
    , {
        fields: ['person_id']
      }
    , {
        /*
        equivalent SQL query:

        CREATE UNIQUE INDEX nominations_with_person_id
        ON nominations (category_id, movie_id, person_id);
        */
        name: 'nominations_with_person_id'
      , fields: ['category_id', 'movie_id', 'person_id']
      , unique: true
      }
    , {
        /*
        equivalent SQL query:

        CREATE UNIQUE INDEX nominations_without_person_id
        ON nominations (category_id, movie_id)
        WHERE person_id IS NULL;
        */
        name: 'nominations_without_person_id'
      , fields: ['category_id', 'movie_id']
      , unique: true
      , where: {
          person_id: null
        }
      }
    ]
  }

  var Nomination = sequelize.define('Nomination', nomAttrs, nomOpts)

  // associations
  Nomination.belongsTo(Category(sequelize), {
    foreignKey: {
      name: 'category_id'
    , allowNull: false
    }
  , onDelete: 'CASCADE'
  })
  Nomination.belongsTo(Movie(sequelize), {
    foreignKey: {
      name: 'movie_id'
    , allowNull: false
    }
  , onDelete: 'CASCADE'
  })
  Nomination.belongsTo(Person(sequelize), {
    foreignKey: {
      name: 'person_id'
    }
  , onDelete: 'CASCADE'
  })

  return Nomination
}
