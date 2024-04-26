import { getUser } from "../src/base-pruebas/base-pruebas/05-funciones";
import { getUsuarioActivo } from "../src/base-pruebas/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {
  test('getUser debe retornar un objeto ', () => {
    const testUser = {
        uid: 'ABC123',
        username: 'El_Papi1502'
    };
    const user = getUser();
    expect(testUser).toEqual(user);
  });

  test('getUsuarioActivo debe retornar', () => {
    const name = 'Juan'
    const testUser = {
      uid: 'ABC567',
      username: name
    };    
    const user = getUsuarioActivo(name);
    expect(testUser).toEqual(user);    
  });
  
})
