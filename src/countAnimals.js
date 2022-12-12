const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  if (animal === undefined) {
    return species.reduce((acc, cur) => {
      acc[cur.name] = cur.residents.length;
      return acc;
    }, {});
  }
  if (animal.sex) {
    return species.filter((element) => element.name === animal.specie)[0].residents
      .filter((element) => element.sex === 'female').length;
  }
  return species.filter((element) => element.name === animal.specie)[0].residents.length;
}

// console.log((countAnimals()));
console.log(countAnimals({ specie: 'giraffes', sex: 'male' }));

module.exports = countAnimals;

/* Primeiro verifiquei se o parametro era undefined ou não, caso fosse, ele passaria por um reduce que ira retornar um obj com os animais e as especies. Para a resolução desses exercícios ultilizei as fontes abaixo: */
// https://stackoverflow.com/questions/43170806/merge-multiple-arrays-based-on-their-index-using-javascript
// https://www.w3schools.com/jsref/jsref_reduce.asp
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
