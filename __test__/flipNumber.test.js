const flipNumber = require('../exercises/flipNumber')

describe('Flip number, become 1 into 0 and 0 into 1', () => {
    test('it should return an error if i add a string', () => {
        const expected = 'ERROR: you can only add number between 0 and 1'
        const result = flipNumber('myName')
        expect(expected).toBe(result)
    })
    test('it should return an error if i add negative number', () => {
        const expected = 'ERROR: you can only add number between 0 and 1'
        const result = flipNumber(-1)
        expect(expected).toBe(result)
    })
    test('it should return an error if i add different number of 0 or 1', () => {
        const expected = 'ERROR: you can only add number between 0 and 1'
        const result = flipNumber(4)
        expect(expected).toBe(result)
    })
    test('if i add 0 it should return 1', () => {
        const expected = 1
        const result = flipNumber(0)
        expect(expected).toBe(result)
    })
    test('If i add 1 it should return 0', () => {
        const expected = 0
        const result = flipNumber(1)
        expect(expected).toBe(result)
    })
})