const data = require('../data/zoo_data');
//
function getSpeciesByIds(...ids) {
  if (!ids) {
    return [];
    /* aqui estou verificando se tem algum parametro no meu ids de entrada, se ele for vazio retorna um array vazio [] */
  }
  return ids.map((mapId) => data.species.find(({ id }) => id === mapId));
  /* se tem algum id de parametro no meu ids de entrada, ele me retorna um .map somente com o species, depois usei um .find pra me retornar os ids de cada parametro que passar */
}

console.log(getSpeciesByIds());

module.exports = getSpeciesByIds;
