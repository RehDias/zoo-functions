const data = require('../data/zoo_data');

function getSpeciesByIds(ids, ...arg) {
  if (ids == null) { return []; }
  const speciesIds = data.species.filter((obj) => obj.id === ids || obj.id === arg);
  return speciesIds;
}

module.exports = getSpeciesByIds;
