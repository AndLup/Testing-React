import { getSaludo } from "../../base/02-template-string";
import '@testing-library/jest-dom';


describe ('Prueba en Template String', ()=>{
    test('getsaludo debe retornar Hola Carlos', ()=>{

        
        const saludo = getSaludo();

        expect(saludo).toBe('Hola Carlos');
    });
});

