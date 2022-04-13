const palindrome = require('../exercises/palindrome');

describe('Write a function that takes a sentence or a word and return if it is a palindrome or not', () => {
  test('Sentence should return true', () => {
    const result = palindrome('anita lava la tina');
    expect(result).toBeTruthy();
  });
  test('Word should return true', () => {
    const result = palindrome('edfde');
    expect(result).toBeTruthy();
  });
  test('Word should return false', () => {
    const result = palindrome('exlxme');
    expect(result).toBeFalsy();
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
