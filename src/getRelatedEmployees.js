const data = require('../data/zoo_data');

function isManager(id) {
  const getManagers = data.employees.filter((obj) => {
    const itIsManager = obj.managers.includes(id);
    return itIsManager;
  });
  return getManagers.length > 0;
}

function getRelatedEmployees(managerId) {
  // seu código aqui
}

module.exports = { isManager, getRelatedEmployees };
