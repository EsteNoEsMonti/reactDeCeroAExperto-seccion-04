import { getImagen } from "../../base-pruebas/11-async-await";

describe('Pruebas con async-await y Fetch', () => {

  test('debe retornar el url de la imagen', async () => {
    //1. importar el sujejo de pruebas
    //cuando una funcion tiene un async es porque retorna una promesa!! se lo puede hacer igual que la anterior pero hay otras maneras.
    const url = await getImagen();
    expect(url.includes('https://')).toBe(true);
  });
});