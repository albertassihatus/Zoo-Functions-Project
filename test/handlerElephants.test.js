const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Não passando argumentos a função deve retornar undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });

  it('Passando por argumento um objeto vazio ({}) deve retornar a string Parâmetro inválido, é necessário uma string', () => {
    expect(handlerElephants({})).toBe('Parâmetro inválido, é necessário uma string')();
  });

  it('Verifica a quantidade de elefantes = 4', () => {
    expect(handlerElephants('count')).toBe(4);
  });

  it('Verifica os nomes dos elefantes [Ilana, Orval, Bea, Jefferson]', () => {
    const actual = handlerElephants('names');
    const expected = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    expect(actual).toEqual(expected);
  });

  it('Verifica a média de idade dos elefantes = 10.5', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });

  it('Verifica a localização dos elefantes dentro do Zoológico = NW', () => {
    expect(handlerElephants('location')).toBe('NW');
  });

  it('Verifica a popularidade dos elefantes >= 5', () => {
    expect(handlerElephants('popularity')).toBeGreaterThanOrEqual(5);
    /* https://jestjs.io/pt-BR/docs/using-matchers#n%C3%BAmeros */
  });

  it('Verifica a relação de dias em que é possível visitar os elefantes', () => {
    const actual = handlerElephants('availability');
    const expected = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];
    expect(actual).toEqual(expected);
  });

  it('Passada uma string que não contempla uma funcionalidade deve retornar null', () => {
    expect(handlerElephants('')).toBeNull();
  });
});
