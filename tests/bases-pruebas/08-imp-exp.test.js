import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Pruebas en 08-imp-exp', () => { 
    
    test('getHeroById debe retornar un heroe por ID', () => { 
        const id = 100;
        const hero = getHeroeById(id);

        expect( hero ).toBeFalsy()
    })

    test('getHeroByOwners debe retornar un arreglo por creador', () => { 
        const owner = 'DC';
        const hero = getHeroesByOwner(owner);

        expect( hero ).toEqual(heroes.filter( (heroe) => heroe.owner === owner))

        expect( hero ).toEqual(
            [
                {
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                },
                {
                    id: 3,
                    name: 'Superman',
                    owner: 'DC'
                },
                {
                    id: 4,
                    name: 'Flash',
                    owner: 'DC'
                },
            ]
        )
        expect( hero.length ).toEqual(3)
     })
})