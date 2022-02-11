const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const responsible = data.employees.find((obj) => obj.id === id).responsibleFor[0];
  const animal = data.species.find((element) => element.id === responsible).residents;
  return Object.values(animal.sort((a, b) => a.age - b.age)[animal.length - 1]);
}

module.exports = getOldestFromFirstSpecies;
