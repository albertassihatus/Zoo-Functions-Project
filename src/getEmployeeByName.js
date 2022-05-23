const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  return data.employees.find((element) =>
    element.firstName === employeeName || element.lastName === employeeName);
}

console.log(getEmployeeByName());

/* Neste requisito foi mais fácil, eu só fiz um .find para achar o empregado que é passado como parâmetro, após isso verifiquei qual era o first e o lastname. */

module.exports = getEmployeeByName;
