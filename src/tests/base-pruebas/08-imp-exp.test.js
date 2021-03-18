import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en 08 heroes', () => {
  
  test('debe de retornar un heroe por ID', () => {

    const id = 1;

    const heroe = getHeroeById(id);
    const heroeData = heroes.find(h => h.id === id);

    expect(heroe).toEqual(heroeData);

  });

  test('debe de retornar undefined si heroe no existe', () => {

    const id = 420;

    const heroe = getHeroeById(id);

    expect(heroe).toEqual(undefined);

  });

  test('Debe retornar un arreglo con los heroes de DC', () => {
    //1.
    const owner = 'DC';

    //2.
    const dataOwnerDC = getHeroesByOwner(owner);
    const ownerDC = heroes.filter((h) => h.owner === owner);

    //3.
    expect(dataOwnerDC).toEqual(ownerDC);
  });

  test('debe retornar un areglo con los heroes de marvel (length === 2)', () => {
    //1.
    const owner = 'Marvel';

    //2.
    const dataOwnerDC = getHeroesByOwner(owner);

    //3.
    expect(dataOwnerDC.length).toBe(2);

  });
});