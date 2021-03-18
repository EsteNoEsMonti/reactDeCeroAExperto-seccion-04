import '@testing-library/jest-dom';
import { getSaludo } from '../../base-pruebas/02-template-string';

describe('Pruebas en 02-template-strings.js', () => {

  test('getSaludo() debe retornar Hola Lucas!', () => {
    // 1. inicializacion
    const nombre = 'Lucas';

    // 2. estimulo
    const saludo = getSaludo(nombre);

    // 3. expect
    expect(saludo).toBe('Hola ' + nombre + '!');
  });

  test('getSaludo() debe retornar Hola Martín!', () => {
    const saludo = getSaludo();
    expect(saludo).toBe('Hola Martín!')
  });
  
  
});