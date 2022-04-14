// Exercise:
// Write a function that takes a sentence or a word and return if it is a palindrome or not.
// palindrome('anita lava la tina') => true
// palindrome('eddfdde') => true
// palindrome('xlx') => false
// Read the test to see what the expected output is.
const reverse = require('./reverse');
function palindrome(wordOrSentence) {
    // code
    if(Number(wordOrSentence)) return "this can not be a number"

    if(wordOrSentence == '') return "this can not be empty"

    let wordOrSentenceWithoutSpaces = "";
    wordOrSentence = wordOrSentence.split(" ");
    wordOrSentence.forEach((word)=>{
        wordOrSentenceWithoutSpaces += word;
    })

    return (wordOrSentenceWithoutSpaces == reverse(wordOrSentenceWithoutSpaces));
}


// Test your code while you're at it!
// write in the console: node ./exercises/palindrome.js
function print(sentence) {
    console.log(palindrome(sentence))
}

const sentence = 'anita lava la tina'
print(sentence)

module.exports = palindrome