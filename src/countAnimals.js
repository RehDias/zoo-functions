const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    const objSpecies = {};
    data.species.forEach((obj) => { objSpecies[obj.name] = Number(`${obj.residents.length}`); });
    return objSpecies;
  }
  const speciesName = data.species.filter((obj) => animal.specie === obj.name);
  if (animal.sex) {
    const specieResidents = speciesName.map((element) => element.residents)
      .find((obj) => obj).filter((obj) => animal.sex === obj.sex);
    return specieResidents.length;
  }
  if (animal.specie.length > 0) {
    const countAnimalSex = speciesName.find((obj) => obj);
    return countAnimalSex.residents.length;
  }
}
module.exports = countAnimals;
