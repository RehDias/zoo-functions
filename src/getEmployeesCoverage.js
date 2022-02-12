const data = require('../data/zoo_data');
const { species, employees } = require('../data/zoo_data');

const employeesInfo = employees.map((result) => {
  const objInfo = {
    id: result.id,
    fullName: `${result.firstName} ${result.lastName}`,
    species: result.responsibleFor.map((id) => species.find((animal) => id === animal.id).name),
    locations: result.responsibleFor.map((id) => species.find((animal) =>
      id === animal.id).location),
  };
  return objInfo;
});

function getEmployeesCoverage(obj) {
  if (obj === undefined) return employeesInfo;
  const validacao = employeesInfo.find((element) => element.fullName.includes(Object.values(obj))
  || element.id.includes(Object.values(obj)));
  if (!validacao) {
    throw new Error('Informações inválidas');
  }
  return validacao;
}

module.exports = getEmployeesCoverage;
