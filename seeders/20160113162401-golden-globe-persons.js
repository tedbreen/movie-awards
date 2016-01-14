module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.bulkInsert('persons', [
      {name: 'Aaron Sorkin',          createdAt: new Date(), updatedAt: new Date()}
    , {name: 'Adam McKay',            createdAt: new Date(), updatedAt: new Date()}
    , {name: 'Al Pacino',             createdAt: new Date(), updatedAt: new Date()}
    , {name: 'Alejandro Iñárritu',    createdAt: new Date(), updatedAt: new Date()}
    , {name: 'Alexandre Desplat',     createdAt: new Date(), updatedAt: new Date()}
    , {name: 'Alicia Vikander',       createdAt: new Date(), updatedAt: new Date()}
    , {name: 'Alva Noto',             createdAt: new Date(), updatedAt: new Date()}
    , {name: 'Amy Schumer',           createdAt: new Date(), updatedAt: new Date()}
    , {name: 'Brie Larson',           createdAt: new Date(), updatedAt: new Date()}
    , {name: 'Bryan Cranston',        createdAt: new Date(), updatedAt: new Date()}
    , {name: 'Carter Burwell',        createdAt: new Date(), updatedAt: new Date()}
    , {name: 'Cate Blanchett',        createdAt: new Date(), updatedAt: new Date()}
    , {name: 'Charles Randolph',      createdAt: new Date(), updatedAt: new Date()}
    , {name: 'Christian Bale',        createdAt: new Date(), updatedAt: new Date()}
    , {name: 'Daniel Pemberton',      createdAt: new Date(), updatedAt: new Date()}
    , {name: 'Eddie Redmayne',        createdAt: new Date(), updatedAt: new Date()}
    , {name: 'Emma Donoghue',         createdAt: new Date(), updatedAt: new Date()}
    , {name: 'Ennio Morricone',       createdAt: new Date(), updatedAt: new Date()}
    , {name: 'George Miller',         createdAt: new Date(), updatedAt: new Date()}
    , {name: 'Helen Mirren',          createdAt: new Date(), updatedAt: new Date()}
    , {name: 'Idris Elba',            createdAt: new Date(), updatedAt: new Date()}
    , {name: 'Jane Fonda',            createdAt: new Date(), updatedAt: new Date()}
    , {name: 'Jennifer Jason Leigh',  createdAt: new Date(), updatedAt: new Date()}
    , {name: 'Jennifer Lawrence',     createdAt: new Date(), updatedAt: new Date()}
    , {name: 'Josh Singer',           createdAt: new Date(), updatedAt: new Date()}
    , {name: 'Kate Winslet',          createdAt: new Date(), updatedAt: new Date()}
    , {name: 'Leonardo DiCaprio',     createdAt: new Date(), updatedAt: new Date()}
    , {name: 'Lily Tomlin',           createdAt: new Date(), updatedAt: new Date()}
    , {name: 'Maggie Smith',          createdAt: new Date(), updatedAt: new Date()}
    , {name: 'Mark Ruffalo',          createdAt: new Date(), updatedAt: new Date()}
    , {name: 'Mark Rylance',          createdAt: new Date(), updatedAt: new Date()}
    , {name: 'Matt Damon',            createdAt: new Date(), updatedAt: new Date()}
    , {name: 'Melissa McCarthy',      createdAt: new Date(), updatedAt: new Date()}
    , {name: 'Michael Fassbender',    createdAt: new Date(), updatedAt: new Date()}
    , {name: 'Michael Shannon',       createdAt: new Date(), updatedAt: new Date()}
    , {name: 'Paul Dano',             createdAt: new Date(), updatedAt: new Date()}
    , {name: 'Quentin Tarantino',     createdAt: new Date(), updatedAt: new Date()}
    , {name: 'Ridley Scott',          createdAt: new Date(), updatedAt: new Date()}
    , {name: 'Rooney Mara',           createdAt: new Date(), updatedAt: new Date()}
    , {name: 'Ryuichi Sakamoto',      createdAt: new Date(), updatedAt: new Date()}
    , {name: 'Saoirse Ronan',         createdAt: new Date(), updatedAt: new Date()}
    , {name: 'Steve Carell',          createdAt: new Date(), updatedAt: new Date()}
    , {name: 'Sylvester Stallone',    createdAt: new Date(), updatedAt: new Date()}
    , {name: 'Todd Haynes',           createdAt: new Date(), updatedAt: new Date()}
    , {name: 'Tom McCarthy',          createdAt: new Date(), updatedAt: new Date()}
    , {name: 'Will Smith',            createdAt: new Date(), updatedAt: new Date()}
    ])
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('persons', null, {})
  }
}
