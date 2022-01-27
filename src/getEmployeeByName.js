const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName == null) { return {}; }
  const nameEmployee = data.employees.find((element) => {
    if (element.firstName === employeeName || element.lastName === employeeName) {
      return element;
    }
    return null;
  });
  return nameEmployee;
}
module.exports = getEmployeeByName;
