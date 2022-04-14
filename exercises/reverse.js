// Exercise:
// Create a function which it takes a word or sentence and return the reverse
// Try to not use reverse() function
// Read the test to see what the expected output is.
function reverse(word) {
    // code
    
    if(Number(word)) return "this can not be a number"
    if(!word) return "";

    let inverseWord = "";
    [...word].forEach((char)=>{
        inverseWord = char + inverseWord;
    })

    return inverseWord;  
}

// Test your code while you're at it!
// write in the console: node ./exercises/reverse.js
function print(word) {
    console.log(reverse(word))
}

const word = 'HELLO'
print(word)

module.exports = reverse