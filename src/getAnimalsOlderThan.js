const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return data.species.filter(({ name }) => name === animal)
    .map(({ residents }) => residents)
    .every((idade) => idade[0].age > age);
}

/* Aqui eu primeiro filtrei ou separei o animal que é colocado como parâmetro dos outros animais da 'species', depois fiz um .map somente com os animais residentes dentro do paramêtro, por fim, fiz um every para verificar se cada um ou todos os animais possuem a idade mínima lançada no parâmetro.
obs.: ( { name } => name ) ou ((elemento) => elemento.name) */

console.log(getAnimalsOlderThan('penguins', 10));

module.exports = getAnimalsOlderThan;
