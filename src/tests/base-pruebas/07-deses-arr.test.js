import { retornaArreglo } from "../../base-pruebas/07-deses-arr";

describe('Pruebas en 07', () => {

  test('Debe retornar un string y un numero ', () => {
    const [letras, numeros] = retornaArreglo();

    expect(letras).toEqual('ABC');
    expect(typeof letras).toEqual('string');

    expect(numeros).toEqual(123);
    expect(typeof numeros).toEqual('number');
  });

});