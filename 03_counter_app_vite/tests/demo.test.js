describe('Pruebas en <DemoComponent/>', ()=> {
    test('Esta prueba no debe fallar', () => {
        //Inicialización
        const message1 = 'Hola Mundo';

        //Estímulo
        const message2 = message1.trim();

        //Observar el comportamiento esperado

        expect(message1).toBe(message2);
        
    });
});