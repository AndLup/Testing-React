import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe ('Probar funcion getUsuarioActivo', ()=>{
    test('Probar que getUsuarioActivo funcione correctamente', ()=>{
        const nombre = 'Andres';
        
        const userActive = {
            uid: 'ABC567',
            username: nombre
        }

        const usuarioActivo = getUsuarioActivo(nombre);

        expect (userActive).toEqual(usuarioActivo);
    });
})


describe ('Probar funciones getUser', ()=>{
    test('getUser Debe de retornar un objeto', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect(user).toEqual(userTest);
    })
    
});