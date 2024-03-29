const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');
    // Teste se o retorno da função é um array.
    expect(Array.isArray(productDetails('Alcool gel', 'Máscara'))).toBeTruthy();
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails('Alcool gel', 'Máscara')).toHaveLength(2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    for (let index = 0; index < productDetails('Alcool gel', 'Máscara').length; index++) {
      expect(typeof productDetails('Alcool gel', 'Máscara')[index]).toBe('object');      
    }
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    let array = productDetails('Alcool gel', 'Máscara');
    let obj1 = array[0];
    let obj2 = array[1];
    expect(obj1 === obj2).toBeFalsy();
    // Teste se os dois productIds terminam com 123.
    expect(obj1.details.productId).toMatch(/123/);
    expect(obj2.details.productId).toMatch(/123/);
  });
});
