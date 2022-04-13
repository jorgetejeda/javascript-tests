const reverse = require('../exercises/reverse')

describe('Create a function which it takes a word or sentence and return the reverse', () => {
    test('It should return an error if got number', () => {
        const expected = 'this can not be a number'
        const result = reverse(1)
        expect(expected).toBe(result)
    })
    test('It should return an empty string', () => {
        const expected = ''
        const result = reverse('')
        expect(expected).toBe(result)
    })
    test('It should return the reverse of the word', () => {
        const expected = 'olleh'
        const result = reverse('hello')
        expect(expected).toBe(result)
    })
})