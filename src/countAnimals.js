const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === null) {
    const allSpecies = data.species.filter((element) => { element.name && element.residents.length });
    return allSpecies;
  }
}
console.log(countAnimals());

module.exports = countAnimals;
