const palindrome = require('../exercises/palindrome');

describe('Write a function that takes a sentence or a word and return if it is a palindrome or not', () => {
  test('Sentence should return true', () => {
    const expected = true;
    const result = palindrome('anita lava la tina');
    expect(expected).toBe(result);
  });
  test('Word should return true', () => {
    const expected = true;
    const result = palindrome('edfde');
    expect(expected).toBe(result);
  });
  test('Word should return false', () => {
    const expected = false;
    const result = palindrome('exlxme');
    expect(expected).toBe(result);
  });
  test('It should return a message when its empty string', () => {
    const expected = 'this can not be empty';
    const result = palindrome('');
    expect(expected).toBe(result);
  });
  test('It should return a error message when its number', () => {
    const expected = 'this can not be a number';
    const result = palindrome(1);
    expect(expected).toBe(result);
  });
});
