const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const speciesName = data.species.filter( (element) => { element.name == animal });
  const olderThan = speciesName.every( (spec) => { spec.residents.age >= age });
  return olderThan;
}
console.log(getAnimalsOlderThan('penguins', 10));
module.exports = getAnimalsOlderThan;
