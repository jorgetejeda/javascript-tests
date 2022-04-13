const vowels = require('../exercises/vowels');

describe('Create a function which it takes a word or sentence and return how many vowels it has', () => {
    test('It should return five vowels', () => {
        const expected = 5;
        const result = vowels('murcielago');
        expect(expected).toBe(result);
    })
    test('It should return zero vowels', () => {
        const expected = 0;
        const result = vowels('sdffsd');
        expect(expected).toBe(result);
    })
    test('It should return a error message when its empty string', () => {
        const expected = 'this can not be empty';
        const result = vowels('');
        expect(expected).toBe(result);
    })
    test('It should return a error message when its number', () => {
        const expected = 'this can not be a number';
        const result = vowels(1);
        expect(expected).toBe(result);
    });
})