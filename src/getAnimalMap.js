const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

function getNames(options, residents) {
  return residents.reduce((array, animal) => {
    if ((options.sex === animal.sex) || (!options.sex)) {
      array.push(animal.name);
    }
    return array;
  }, []);
  /* Primeiro criei essa função getNames para poder identificar os animais de acordo com o parametro para a função getAnimalMap, o reduce nessa função tem o retorno de um array do animal */
}

function getAnimalMap(options = { includeNames: false, sorted: false, sex: false }) {
  const result = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
  species.map(({ name, location, residents }) => {
    if (options.includeNames) {
      const animalList = getNames(options, residents);
      if (options.sorted) {
        animalList.sort();
      }
      return result[location].push({ [name]: animalList }); /* se tiver o parametro específico,  retorna a localização do animal e o nome de cada animal dessa localização dentro da const result declarada no inicio da função */
    }
    return result[location].push(name);
  });
  return result;
}

// console.log(getAnimalMap({ includeNames: true, sex: 'female', sorted: true }));

module.exports = getAnimalMap;
