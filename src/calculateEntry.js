const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter((element) => element.age < 18).length;
  const adult = entrants.filter((element) => element.age >= 18 && element.age < 50).length;
  const senior = entrants.filter((element) => element.age >= 50).length;

  return { child, adult, senior };
  /* Separei por idade o parametro de entrada e retornei um objeto com a quantidade */
}

function calculateEntry(entrants) {
  if (!entrants || entrants.length === undefined) {
    return 0;

  /* se o parametro for 0 ou um objeto vazio, retorna 0 */
  }

  const sum = {
    child: (countEntrants(entrants).child * prices.child),
    adult: (countEntrants(entrants).adult * prices.adult),
    senior: (countEntrants(entrants).senior * prices.senior),
  };
  return sum.child + sum.adult + sum.senior;

  /* apenas peguei a função countEntrants com o parametro e de acordo com a quantidade da faixa etária, ele calcula em cima do valor já dado de prices no zoo_data.js */
}

module.exports = { calculateEntry, countEntrants };
