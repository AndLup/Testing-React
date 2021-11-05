import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Probando importacion y exportacion', ()=>{
    test('Prueba de importacion y exportacion', () => {
        const id = 1;
        const heroe = getHeroeById( id );

        const heroeData = heroes.find(h => h.id === id);

        expect( heroe ).toEqual(heroeData);
    })

    test('Debe retornar Undefine en caso de que no exista id', ()=>{
        const id=20;
        const heroe = getHeroeById(id);

        expect( heroe ).toBe( undefined);
    })

    
    test('Owners', () => {
        const owner = 'DC';
        const heroe = getHeroesByOwner(owner);
        
        const heroeData = heroes.filter(o => o.owner === owner);

        expect(heroe).toEqual(heroeData);
    })


    test('Prueba de arreglo Marvel', () => {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(2);
    })
    

    
});

    
