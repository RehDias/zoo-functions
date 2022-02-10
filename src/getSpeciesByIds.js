const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids == null) { return []; }
  const animals = ids.map((element) => {
    const speciesId = data.species.find((obj) => obj.id === element);
    return speciesId;
  });
  return animals;
} // referência projeto Djheffeson e mentoria zoo functions;

module.exports = getSpeciesByIds;
