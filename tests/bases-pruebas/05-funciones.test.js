import { getUser,getUsuarioActivo } from "../../src/base-pruebas/05-funciones"

describe('Pruebas en 05-funciones', () => { 
    test('getUser debe de retornar un objeto', () => { 

        const testUser= {
            uid: 'ABC123',
            username: 'El_Papi1502'
            }
            const user = getUser()
            
            expect(testUser).toEqual(user)
     })

     test('getUsuarioActivo debe retornar un objeto', () => { 

        const testName = 'Alan'
        const testUser = {
            uid: 'ABC567',
            username: testName
        }

        const userActivo = getUsuarioActivo(testName)

        expect(testUser).toEqual(userActivo)

      })
 })