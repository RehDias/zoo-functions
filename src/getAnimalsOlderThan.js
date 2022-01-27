const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const speciesName = data.species.find((element) => element.name === animal);
  const olderThan = speciesName.residents.every((obj) => obj.age >= age);
  return olderThan;
}

module.exports = getAnimalsOlderThan;
