import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe('Test de promesas', ()=>{
    test('Debe retornar un heroe async', (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
        .then(heroe => {
            expect (heroe).toBe(heroes[0]);
            done();
            
        })
    })
    
})