describe('Pruebas dentro del archivo DEMO', () => {

  test('Deben ser iguales los Strings', () => {
    // 1. inicializacion
    const mensaje = 'Hola Mundo';

    // 2. Estímulo
    const mensaje2 = `Hola Mundo`;

    //3. Observar el comportamiento
    expect(mensaje).toBe(mensaje2); // ===
  });

});
