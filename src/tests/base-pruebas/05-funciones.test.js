import { getUser, getUsuarioActivo } from '../../base-pruebas/05-funciones';

describe('Pruebas en 05-funciones.js', () => {

  test('getUser() debe retornar un objeto', () => {
    // 1. inicalizacion
    const userTest = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    };

    // 2. estimulo
    const user = getUser();

    // 3. evaluacion
    expect(user).toEqual(userTest)
  });

  test('getUsuarioActivo() debe retornar un objeto', () => {
    // 1.
    const nombre = 'Lucas';

    const userTest = {
      uid: 'ABC567',
      username: 'Lucas'
    };

    // 2.
    const user = getUsuarioActivo(nombre);

    // 3.
    expect(user).toEqual(userTest)


  })
  

});