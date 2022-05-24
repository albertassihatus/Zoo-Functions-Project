const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const empregadoId = employees.find((element) => element.id === id);
  const animalId = species.find((element) => empregadoId.responsibleFor[0] === element.id);
  const older = animalId.residents.sort((a, b) => b.age - a.age);
  return [older[0].name, older[0].sex, older[0].age];
}
/* separei em 3 variaveis, a primeira o id do empregado, a segunda o id do primeiro animal, e a terceira do animal mais velho com o método sort(). */

module.exports = getOldestFromFirstSpecies;
//
