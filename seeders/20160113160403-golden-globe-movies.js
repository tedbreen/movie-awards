'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.bulkInsert('movies', [
      {title: '99 Homes',                 year: 2015, imdb_id: '', createdAt: new Date(), updatedAt: new Date()}
    , {title: 'Anomalisa',                year: 2015, imdb_id: '', createdAt: new Date(), updatedAt: new Date()}
    , {title: 'Beasts of No Nation',      year: 2015, imdb_id: '', createdAt: new Date(), updatedAt: new Date()}
    , {title: 'Bridge of Spies',          year: 2015, imdb_id: '', createdAt: new Date(), updatedAt: new Date()}
    , {title: 'Brooklyn',                 year: 2015, imdb_id: '', createdAt: new Date(), updatedAt: new Date()}
    , {title: 'Carol',                    year: 2015, imdb_id: '', createdAt: new Date(), updatedAt: new Date()}
    , {title: 'Concussion',               year: 2015, imdb_id: '', createdAt: new Date(), updatedAt: new Date()}
    , {title: 'Creed',                    year: 2015, imdb_id: '', createdAt: new Date(), updatedAt: new Date()}
    , {title: 'Danny Collins',            year: 2015, imdb_id: '', createdAt: new Date(), updatedAt: new Date()}
    , {title: 'Ex Machina',               year: 2015, imdb_id: '', createdAt: new Date(), updatedAt: new Date()}
    , {title: 'Fifty Shades of Grey',     year: 2015, imdb_id: '', createdAt: new Date(), updatedAt: new Date()}
    , {title: 'Furious 7',                year: 2015, imdb_id: '', createdAt: new Date(), updatedAt: new Date()}
    , {title: 'Grandma',                  year: 2015, imdb_id: '', createdAt: new Date(), updatedAt: new Date()}
    , {title: 'Infinitely Polar Bear',    year: 2015, imdb_id: '', createdAt: new Date(), updatedAt: new Date()}
    , {title: 'Inside Out',               year: 2015, imdb_id: '', createdAt: new Date(), updatedAt: new Date()}
    , {title: 'Joy',                      year: 2015, imdb_id: '', createdAt: new Date(), updatedAt: new Date()}
    , {title: 'Love & Mercy',             year: 2015, imdb_id: '', createdAt: new Date(), updatedAt: new Date()}
    , {title: 'Mad Max: Fury Road',       year: 2015, imdb_id: '', createdAt: new Date(), updatedAt: new Date()}
    , {title: 'Mustang',                  year: 2015, imdb_id: '', createdAt: new Date(), updatedAt: new Date()}
    , {title: 'Room',                     year: 2015, imdb_id: '', createdAt: new Date(), updatedAt: new Date()}
    , {title: 'Shaun the Sheep Movie',    year: 2015, imdb_id: '', createdAt: new Date(), updatedAt: new Date()}
    , {title: 'Son of Saul',              year: 2015, imdb_id: '', createdAt: new Date(), updatedAt: new Date()}
    , {title: 'Spotlight',                year: 2015, imdb_id: '', createdAt: new Date(), updatedAt: new Date()}
    , {title: 'Spy',                      year: 2015, imdb_id: '', createdAt: new Date(), updatedAt: new Date()}
    , {title: 'Steve Jobs',               year: 2015, imdb_id: '', createdAt: new Date(), updatedAt: new Date()}
    , {title: 'Spectre',                  year: 2015, imdb_id: '', createdAt: new Date(), updatedAt: new Date()}
    , {title: 'The Big Short',            year: 2015, imdb_id: '', createdAt: new Date(), updatedAt: new Date()}
    , {title: 'The Brand New Testament',  year: 2015, imdb_id: '', createdAt: new Date(), updatedAt: new Date()}
    , {title: 'The Club',                 year: 2015, imdb_id: '', createdAt: new Date(), updatedAt: new Date()}
    , {title: 'The Danish Girl',          year: 2015, imdb_id: '', createdAt: new Date(), updatedAt: new Date()}
    , {title: 'The Fencer',               year: 2015, imdb_id: '', createdAt: new Date(), updatedAt: new Date()}
    , {title: 'The Good Dinosaur',        year: 2015, imdb_id: '', createdAt: new Date(), updatedAt: new Date()}
    , {title: 'The Hateful Eight',        year: 2015, imdb_id: '', createdAt: new Date(), updatedAt: new Date()}
    , {title: 'The Lady in the Van',      year: 2015, imdb_id: '', createdAt: new Date(), updatedAt: new Date()}
    , {title: 'The Martian',              year: 2015, imdb_id: '', createdAt: new Date(), updatedAt: new Date()}
    , {title: 'The Peanuts Movie',        year: 2015, imdb_id: '', createdAt: new Date(), updatedAt: new Date()}
    , {title: 'The Revenant',             year: 2015, imdb_id: '', createdAt: new Date(), updatedAt: new Date()}
    , {title: 'Trainwreck',               year: 2015, imdb_id: '', createdAt: new Date(), updatedAt: new Date()}
    , {title: 'Trumbo',                   year: 2015, imdb_id: '', createdAt: new Date(), updatedAt: new Date()}
    , {title: 'Youth',                    year: 2015, imdb_id: '', createdAt: new Date(), updatedAt: new Date()}
    ])
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('movies', null, {});
  }
};
