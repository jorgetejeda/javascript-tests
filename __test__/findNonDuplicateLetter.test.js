const findNonDuplicateLetter = require('../exercises/findNonDuplicateLetter.js')

describe('Create a  function which takes a string and finds first non-repeating character in that string.', () => {
    test('It should return an error if got number', () => {
        const expected = 'this can not be a number'
        const result = findNonDuplicateLetter(1)
        expect(expected).toBe(result)
    })
    test('It should return -1 if not found reapeting word', () => {
        const expected = -1
        const result = findNonDuplicateLetter('asdffsda')
        expect(expected).toBe(result)
    })
    test('It should return -1 it is empty', () => {
        const expected = -1
        const result = findNonDuplicateLetter('')
        expect(expected).toBe(result)
    })
    test('It should return "C"', () => {
        const expected = 'c'
        const result = findNonDuplicateLetter('aaabbbcdddefefef')
        expect(expected).toBe(result)
    })
})
