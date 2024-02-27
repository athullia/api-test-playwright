import {test,expect} from 'playwright/test'


test.describe('test https://swapi.dev/api/people', () =>{
    test('API GET request status code', async({request}) =>{
        const response = await request.get('https://swapi.dev/api/people')
        expect(response.status()).toBe(200)
       
    })
    test('Test the count of people', async({request}) =>{
        const response = await request.get('https://swapi.dev/api/people')
        expect(response.status()).toBe(200)
        const text = await response.json()
        expect(text.count).toEqual(82)
    })

    test('Test the person with id 5 gives the right data', async({request}) =>{
        const response = await request.get('https://swapi.dev/api/people/5')
        expect(response.status()).toBe(200)

        const text = await response.json()
        expect(text.name).toEqual("Leia Organa")
        expect(text.gender).toEqual("female")
        expect(text.birth_year).toEqual("19BBY")
        expect(text.height).toEqual("150")        
    })
})


test.describe('test https://swapi.dev/api/planets', () =>{
    test('API GET request status code', async({request}) =>{
        const response = await request.get('https://swapi.dev/api/planets')
        expect(response.status()).toBe(200)
       
    })
    test('Test the count of planets', async({request}) =>{
        const response = await request.get('https://swapi.dev/api/planets')
        expect(response.status()).toBe(200)

        const text = await response.json()
        expect(text.count).toEqual(60)
    })

    test('Test the planet with id 5 gives the right data', async({request}) =>{
        const response = await request.get('https://swapi.dev/api/planets/5')
        expect(response.status()).toBe(200)

        const text = await response.json()
        expect(text.name).toEqual("Dagobah")
        expect(text.rotation_period).toEqual("23")
        expect(text.orbital_period).toEqual("341")
        expect(text.diameter).toEqual("8900")        
    })
})