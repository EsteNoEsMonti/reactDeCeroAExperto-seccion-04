import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";
import heroes from "../../data/heroes";

describe('Pruebas en fn async 09-promesas', () => {

  test('getHeroeByIdAsyn() debe rtornar un heroe async', (done) => {
    const id = 1;
    getHeroeByIdAsync(id)
      .then(heroe => {
        expect(heroe).toBe(heroes[0]);
        done();
      });
  });

  test('debe de obtener un errir si ek heroe no existe', (done) => {
    const id = 420;
    getHeroeByIdAsync(id)
      .catch(heroe => {
        expect(heroe).toBe('No se pudo encontrar el héroe');
        done();
      });
  });
  

});