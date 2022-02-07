const data = require('../data/zoo_data');

function isManager(id) {
  const getManagers = data.employees.filter((obj) => {
    const itIsManager = obj.managers.includes(id);
    return itIsManager;
  });
  return getManagers.length > 0;
}

function getRelatedEmployees(managerId) {
  const responsible = data.employees.filter((obj) => {
    if (obj.managers.includes(managerId)) { return obj; }
    return null;
  });
  const isResponsible = responsible.map((element) => `${element.firstName} ${element.lastName}`);
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return isResponsible;
}

module.exports = { isManager, getRelatedEmployees };
