const capitalWords = require('../exercises/capitalWords.js')

describe('Create a function which it takes a senteces and return each word in capital case', () => {
    test('it should return a error message when its empty', () => {
        const expected = 'this should not be empty'
        const result = capitalWords('')
        expect(expected).toBe(result)
    })
    test('it should return a error message when its number', () => {
        const expected = 'this can not be a number'
        const result = capitalWords(1)
        expect(expected).toBe(result)
    })
    test('it should return every words in capital case', () => {
        const expected = 'The Quick Brown Fox Jumps Over The Little Lazy Dog'
        const result = capitalWords(
            'The quick brown Fox jumps over the little lazy Dog'
        )
        expect(expected).toBe(result)
    })
})
