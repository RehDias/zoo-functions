const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter((element) => element.age < 18).length;
  const adult = entrants.filter((element) => element.age >= 18 && element.age < 50).length;
  const senior = entrants.filter((element) => element.age >= 50).length;
  return { child, adult, senior };
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) { return 0; }
  const values = data.prices;
  const pessoas = countEntrants(entrants);
  return Object.entries(pessoas).reduce((acc, [type, count]) => { 
    const totalValues = values[type] * count;
    return totalValues + acc;
   }, 0)
} // Referência: Ajuda da Ellen Santos;

module.exports = { calculateEntry, countEntrants };
