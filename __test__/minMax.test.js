const getMinMax = require('../exercises/minMax')

describe('Create a function which it takes an array of numbers and return the min and max number', () => {
    test('It should return an error if got number', () => {
        const expected = 'this can not be a number'
        const result = getMinMax(1)
        expect(expected).toBe(result)
    })
    test('it should return an error if i add a string', () => {
        const expected = 'ERROR: you can only add array'
        const result = getMinMax('')
        expect(expected).toBe(result)
    })
    test('It should return a zero', () => {
        const expected = 0
        const result = getMinMax([])
        expect(expected).toBe(result)
    })
    test('It should return the min and max number of the array', () => {
        const expected = { min: 1, max: 20 }
        const result = getMinMax([1, 5, 3, 6, 2, 20])
        expect(expected).toMatchObject(result)
    })
})