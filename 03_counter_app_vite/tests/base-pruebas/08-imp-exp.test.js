import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/base-pruebas/08-imp-exp';

describe('Pruebas en 08-imp-exp', () => {
  test('getHeroeById debe retornar un héroe por ID', () => {
    const id = 1;
    const hero = getHeroeById(id);

    expect (hero).toEqual({id:1, name:'Batman', owner:'DC'});
    
  });
  test('getHeroeById debe retornar undefined si no existe el id', () => {
    const id = 100;
    const hero = getHeroeById(id);

    expect (hero).toBeFalsy();
    
  });  
  test('getHeroeByOwner debe regresar heroes de DC', () => {
    const owner = 'DC';
    const heroes = getHeroesByOwner(owner);
    expect (heroes.length).toBe(3);
    
  });    
});
