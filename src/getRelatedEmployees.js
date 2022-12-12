// const { employees } = require('../data/zoo_data');
// const data = require('../data/zoo_data');

// function isManager(id) {
//   return employees.some((element) => element.managers.includes(id));
//   /* https://www.w3schools.com/jsref/jsref_some.asp */
//   /* https://www.w3schools.com/jsref/jsref_includes_array.asp */
//   /* Primeiro para saber se é manager ou não, utilizei o some em conjunto com o includes, verifiquei dentro do array se tem alguém com o mesmo id de gerente. O MD postou esses dias no slack sobre o includes algumas dicas */
// }

// function getRelatedEmployees(managerId) {
//   if (isManager(managerId)) {
//     return employees.filter((element) => element.managers.includes(managerId))
//       .map((element) => `${element.firstName} ${element.lastName}`);
//   }
//   throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');

//   /* Fiz uma condição que se o id for de um gerente, ele vai filtrar dentro do array os gerentes e fazer um .map com as pessoas que ele lidera. */
//   /* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Error */
// }
// // console.log(isManager('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));
// // console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

// module.exports = { isManager, getRelatedEmployees };

const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

const gerenteIdNumber = [
  '9e7d4524-363c-416a-8759-8aa7e50c0992',
  'fdb2543b-5662-46a7-badc-93d960fdc0a8',
  '0e7b460e-acf4-4e17-bcb3-ee472265db83',
];

// const valor = true;

function isManager(id) {
  // seu código aqui
  // Utilize a função isManager para verificar se a pessoa é gerente ou não e fazer as seguintes verificações
  const comparacao = gerenteIdNumber.find((chefia) => chefia === id);
  return data.employees.some(
    (recebeValor) => recebeValor.id === id && id === comparacao,
  );
}
console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));
const novaArray = [];

function getRelatedEmployees(managerId) {
  const presso = isManager(managerId);
  if (presso !== false) {
    employees.forEach((pessoinha) => {
      if (pessoinha.managers.includes(managerId)) {
        novaArray.push(`${pessoinha.firstName} ${pessoinha.lastName}`);
      }
    });
    return novaArray;
  }

  if (presso !== true) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
}
// codigo dando erro, proucurei meu amigo Vinicio ele me ajudou,
// basicamente o codigo não estava indo pois a forma que fiz o if
// não estava retornando o valor necessario.
// criei uma nova constante e joguei o valor para dedntro dela.

// console.log(getRelatedEmployees('0e7b460e-acf4-4e17-bcb3-ee472265db83'));
// https://www.w3schools.com/jsref/jsref_includes_array.asp
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.includes("Mango");

module.exports = { isManager, getRelatedEmployees };
